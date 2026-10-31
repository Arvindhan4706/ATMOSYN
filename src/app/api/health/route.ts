import { NextResponse } from "next/server";

export const dynamic = "force-dynamic";

/**
 * Health check endpoint for uptime monitoring (BetterStack, UptimeRobot, Pingdom)
 * and load balancer readiness probes.
 * Returns sub-millisecond 200 OK without database or external dependencies.
 */
export async function GET() {
  return NextResponse.json(
    {
      status: "ok",
      uptime: process.uptime(),
      timestamp: new Date().toISOString(),
      service: "atmosyn-web",
    },
    {
      status: 200,
      headers: {
        "Cache-Control": "no-store, max-age=0",
      },
    }
  );
}

