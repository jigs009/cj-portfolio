import { NextResponse } from "next/server";

export async function POST(request: Request) {
  try {
    const data = await request.json();

    // Check honeypot
    if (data.honeypot) {
      return NextResponse.json({ ok: false, error: "Bot detected" }, { status: 400 });
    }

    // Basic validation
    if (!data.name || !data.email || !data.message) {
      return NextResponse.json({ ok: false, error: "Missing required fields" }, { status: 400 });
    }

    console.log("Contact form enquiry received:", data);

    return NextResponse.json({
      ok: true,
      message: "Enquiry received successfully. This was processed by the fallback /api/contact endpoint.",
    });
  } catch {
    return NextResponse.json({ ok: false, error: "Invalid request" }, { status: 400 });
  }
}
