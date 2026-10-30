import { NextResponse } from "next/server";
import { z } from "zod";

const inquirySchema = z.object({
  fullName: z.string().min(2, "Full name must be at least 2 characters."),
  email: z.string().email("Please provide a valid email address."),
  affiliation: z.string().min(2, "Please share your university, organization, or independent background."),
  pillarInterest: z.enum([
    "climate-action",
    "people-growth",
    "research-innovation",
    "general-inquiry",
  ]),
  message: z.string().min(15, "Please provide at least 15 characters detailing your inquiry or proposal."),
});

export async function POST(request: Request) {
  try {
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

    const { fullName, email, affiliation, pillarInterest, message } = result.data;

    // Log the received collaboration inquiry server-side
    console.log("[Atmosyn Inquiries] Received inquiry:", {
      fullName,
      email,
      affiliation,
      pillarInterest,
      messageLength: message.length,
      receivedAt: new Date().toISOString(),
    });

    return NextResponse.json(
      {
        success: true,
        message:
          "Thank you for reaching out. Your inquiry has been received by Atmosyn's coordination team. As we are in the planning and development phase, our team reviews proposals periodically and will respond via the provided email.",
      },
      { status: 200 }
    );
  } catch (error) {
    return NextResponse.json(
      {
        success: false,
        error: "An unexpected error occurred while processing your request.",
      },
      { status: 500 }
    );
  }
}
