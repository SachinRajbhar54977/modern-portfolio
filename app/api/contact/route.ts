import { NextRequest, NextResponse } from "next/server";
import { z } from "zod";
import { Resend } from "resend";

// ─── VALIDATION SCHEMA ────────────────────────────────────────────────────────
const ContactSchema = z.object({
  name:        z.string().min(2).max(100),
  email:       z.string().email(),
  subject:     z.string().max(200).optional(),
  message:     z.string().min(10).max(5000),
  projectType: z.string().max(100).optional(),
});

const resend = new Resend(process.env.RESEND_API_KEY);

// ─── POST ─────────────────────────────────────────────────────────────────────
export async function POST(request: NextRequest) {
  try {
    const body = await request.json();

    const parsed = ContactSchema.safeParse(body);
    if (!parsed.success) {
      return NextResponse.json(
        { success: false, error: parsed.error.errors[0]?.message ?? "Validation failed" },
        { status: 400 }
      );
    }

    const { name, email, subject, message, projectType } = parsed.data;

    // Log to console (no database needed)
    console.log("[Contact Form]", { name, email, subject, projectType, message });

    // Send email via Resend
    if (process.env.RESEND_API_KEY && process.env.RESEND_API_KEY !== "re_skip") {
      await resend.emails.send({
        from: "Portfolio <noreply@resend.dev>",
        to:   [process.env.CONTACT_EMAIL ?? email],
        subject: `New message from ${name}: ${subject ?? "Portfolio Inquiry"}`,
        html: `<p><b>Name:</b> ${name}</p><p><b>Email:</b> ${email}</p><p><b>Message:</b> ${message}</p>`,
      });
    }

    return NextResponse.json({
      success: true,
      message: "Message sent successfully",
      id: Date.now().toString(),
    });

  } catch (error) {
    console.error("[Contact API] Error:", error);
    return NextResponse.json(
      { success: false, error: "Internal server error." },
      { status: 500 }
    );
  }
}

// ─── GET ──────────────────────────────────────────────────────────────────────
export async function GET(request: NextRequest) {
  const apiKey = request.headers.get("x-api-key");
  if (apiKey !== process.env.ADMIN_API_KEY) {
    return NextResponse.json({ error: "Unauthorized" }, { status: 401 });
  }
  return NextResponse.json({ success: true, data: [] });
}