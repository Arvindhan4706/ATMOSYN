import { NextResponse } from "next/server";
import { inquirySchema } from "@/lib/validation";

/**
 * Collaboration inquiry endpoint.
 *
 * Delivery: when COLLABORATION_WEBHOOK_URL is set (see .env.example), the
 * validated inquiry is forwarded as JSON to that endpoint (Slack/Discord
 * webhook, Formspree, Make/Zapier, or your own API). While the variable is
 * unset the endpoint answers honestly with 503 instead of pretending the
 * submission was stored.
 *
 * Abuse protection: per-IP in-memory rate limiting plus a honeypot field.
 * NOTE: serverless instances do not share memory, so the limiter is a
 * best-effort per-instance guard. For strict limits at scale, swap in a
 * shared store such as Upstash Redis.
 */

const RATE_LIMIT_WINDOW_MS = 10 * 60 * 1000; // 10 minutes
const RATE_LIMIT_MAX = 3; // submissions per window per IP

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

  // Opportunistic pruning to keep the map from growing unbounded.
  if (hitLog.size > 5000) {
    for (const [key, times] of hitLog) {
      if (times.every((t) => now - t >= RATE_LIMIT_WINDOW_MS)) hitLog.delete(key);
    }
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
    if (isRateLimited(getClientIp(request))) {
      return NextResponse.json(
        {
          success: false,
          error: "Too many submissions in a short time. Please try again later.",
        },
        { status: 429 }
      );
    }

    const body = await request.json();
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

    // Honeypot triggered: acknowledge like a success so bots get no signal,
    // but deliver nothing anywhere.
    if (website && website.trim().length > 0) {
      return NextResponse.json({ success: true, message: "Thank you for reaching out." });
    }

    if (!process.env.COLLABORATION_WEBHOOK_URL) {
      console.warn(
        "[Atmosyn Inquiries] COLLABORATION_WEBHOOK_URL is not configured; rejecting submission."
      );
      return NextResponse.json(
        {
          success: false,
          error:
            "The inquiry system is not yet connected. Please check back soon or revisit the Contact page for updates.",
        },
        { status: 503 }
      );
    }

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
      // Log delivery metadata only — never the inquiry contents or PII.
      console.error(
        `[Atmosyn Inquiries] Webhook delivery failed with status ${response.status}.`
      );
      return NextResponse.json(
        {
          success: false,
          error:
            "Your inquiry could not be delivered right now. Please try again in a few minutes.",
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
  } catch {
    return NextResponse.json(
      {
        success: false,
        error: "An unexpected error occurred while processing your request.",
      },
      { status: 500 }
    );
  }
}
