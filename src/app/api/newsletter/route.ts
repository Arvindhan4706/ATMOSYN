import { NextRequest, NextResponse } from "next/server";

export async function POST(request: NextRequest) {
  try {
    const { email } = await request.json();

    if (!email || !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
      return NextResponse.json(
        { error: "Please enter a valid email address." },
        { status: 400 }
      );
    }

    // Here you would integrate with your email service (Mailchimp, ConvertKit, etc.)
    // For now, we'll simulate a successful subscription
    console.log("Newsletter signup:", email);

    // Simulate API delay
    await new Promise((resolve) => setTimeout(resolve, 500));

    return NextResponse.json(
      { message: "Thanks for subscribing! You'll receive updates on our latest research and student opportunities." },
      { status: 200 }
    );
  } catch {
    return NextResponse.json(
      { error: "Invalid request format." },
      { status: 400 }
    );
  }
}