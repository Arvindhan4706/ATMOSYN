import { NextResponse } from "next/server";
import { inquirySchema } from "@/lib/validation";

/**
 * Collaboration inquiry endpoint.
 *
 * High-Traffic Resilience & Abuse Protection:
 * - Fixed LRU cache with max 5,000 IPs (bounded memory).
 * - Per-IP rate limiting (max 5 submissions per 10 minutes).
 * - Payload size limit check (<64KB) to prevent memory exhaustion attacks.
 * - Honeypot field (website) silently discards bot submissions.
 * - Strict 8s webhook delivery timeout to prevent worker starvation.
 * - Safe error responses with zero PII leakage.
 */

const RATE_LIMIT_WINDOW_MS = 10 * 60 * 1000; // 10 minutes
const RATE_LIMIT_MAX = 5; // submissions per window per IP
const MAX_PAYLOAD_BYTES = 64 * 1024; // 64 KB max body size
const MAX_CACHE_ENTRIES = 5000;

const hitLog = new Map<string, number[]>();

function isRateLimited(ip: string): boolean {
  const now = Date.now();
  const recent = (hitLog.get(ip) ?? []).filter((t) => now - t < RATE_LIMIT_WINDOW_MS);
  if (recent.length >= RATE_LIMIT_MAX) {
    hitLog.set(ip, recent);
    return true;
  }
  recent.push(now);
  hitLog.set(ip, recent);

  // Bounded memory protection: prune oldest when map exceeds limit
  if (hitLog.size > MAX_CACHE_ENTRIES) {
    const oldestKey = hitLog.keys().next().value;
    if (oldestKey) hitLog.delete(oldestKey);
  }
  return false;
}

function getClientIp(request: Request): string {
  const forwarded = request.headers.get("x-forwarded-for");
  return forwarded?.split(",")[0]?.trim() ?? "unknown";
}

async function deliverToWebhook(payload: object): Promise<Response> {
  const controller = new AbortController();
  const timeout = setTimeout(() => controller.abort(), 8000);
  try {
    return await fetch(process.env.COLLABORATION_WEBHOOK_URL as string, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(payload),
      signal: controller.signal,
    });
  } finally {
    clearTimeout(timeout);
  }
}

export async function POST(request: Request) {
  try {
    // 1. Rate limiting check
    if (isRateLimited(getClientIp(request))) {
      return NextResponse.json(
        {
          success: false,
          error: "Too many submissions from this connection in a short period. Please try again in a few minutes.",
        },
        {
          status: 429,
          headers: {
            "Retry-After": "600",
          },
        }
      );
    }

    // 2. High-traffic payload size guard (prevent memory exhaustion)
    const contentLength = request.headers.get("content-length");
    if (contentLength && parseInt(contentLength, 10) > MAX_PAYLOAD_BYTES) {
      return NextResponse.json(
        {
          success: false,
          error: "Request payload too large. Please limit submissions to standard inquiries.",
        },
        { status: 413 }
      );
    }

    // 3. Safe JSON parsing
    let body: unknown;
    try {
      body = await request.json();
    } catch {
      return NextResponse.json(
        {
          success: false,
          error: "Invalid JSON format in request body.",
        },
        { status: 400 }
      );
    }

    // 4. Schema validation
    const result = inquirySchema.safeParse(body);
    if (!result.success) {
      return NextResponse.json(
        {
          success: false,
          error: "Validation failed.",
          issues: result.error.flatten().fieldErrors,
        },
        { status: 400 }
      );
    }

    const { fullName, email, affiliation, pillarInterest, message, website } = result.data;

    // 5. Honeypot triggered: acknowledge success to confuse bots, deliver nothing
    if (website && website.trim().length > 0) {
      return NextResponse.json({
        success: true,
        message: "Thank you for reaching out. Your inquiry has been received.",
      });
    }

    // 6. Webhook availability check
    if (!process.env.COLLABORATION_WEBHOOK_URL) {
      console.warn(
        "[Atmosyn Inquiries] COLLABORATION_WEBHOOK_URL is not configured; rejecting submission."
      );
      return NextResponse.json(
        {
          success: false,
          error:
            "The inquiry system is not yet connected to external delivery. Please check back soon or revisit the Contact page for updates.",
        },
        { status: 503 }
      );
    }

    // 7. Deliver to webhook
    const response = await deliverToWebhook({
      type: "collaboration-inquiry",
      fullName,
      email,
      affiliation,
      pillarInterest,
      message,
      receivedAt: new Date().toISOString(),
    });

    if (!response.ok) {
      console.error(
        `[Atmosyn Inquiries] Webhook delivery failed with status ${response.status}.`
      );
      return NextResponse.json(
        {
          success: false,
          error:
            "Your inquiry could not be delivered at this moment due to a temporary gateway issue. Please try again in a few minutes.",
        },
        { status: 502 }
      );
    }

    return NextResponse.json(
      {
        success: true,
        message:
          "Thank you for reaching out. Your inquiry has been received by Atmosyn's coordination team. As we are in the planning and development phase, our team reviews proposals periodically and will respond via the provided email.",
      },
      { status: 200 }
    );
  } catch (err: unknown) {
    console.error("[Atmosyn Inquiries] Unexpected error during inquiry processing:", err);
    return NextResponse.json(
      {
        success: false,
        error: "An unexpected error occurred while processing your request.",
      },
      { status: 500 }
    );
  }
}
