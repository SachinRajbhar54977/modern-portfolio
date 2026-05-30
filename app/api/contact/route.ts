import { NextRequest, NextResponse } from "next/server";
import { z } from "zod";
import { Resend } from "resend";


// ─── VALIDATION SCHEMA ────────────────────────────────────────────────────────

const ContactSchema = z.object({
  name:        z.string().min(2, "Name must be at least 2 characters").max(100),
  email:       z.string().email("Invalid email address"),
  subject:     z.string().max(200).optional(),
  message:     z.string().min(10, "Message must be at least 10 characters").max(5000),
  projectType: z.string().max(100).optional(),
});

// ─── RESEND CLIENT ────────────────────────────────────────────────────────────

const resend = new Resend(process.env.RESEND_API_KEY);

// ─── HANDLER ──────────────────────────────────────────────────────────────────

export async function POST(request: NextRequest) {
  try {
    const body = await request.json();

    // Validate
    const parsed = ContactSchema.safeParse(body);
    if (!parsed.success) {
      return NextResponse.json(
        { success: false, error: parsed.error.errors[0]?.message ?? "Validation failed" },
        { status: 400 }
      );
    }

    const { name, email, subject, message, projectType } = parsed.data;

    // Save to database
    const contact = { id: Date.now().toString() };
    // Send notification email to portfolio owner
    await resend.emails.send({
      from:    "Portfolio Contact <noreply@khan-aarav.dev>",
      to:      [process.env.CONTACT_EMAIL ?? "khan.aarav.ai@gmail.com"],
      subject: `[Portfolio] New message from ${name}: ${subject ?? "General Inquiry"}`,
      html: `
        <div style="font-family: 'Sora', sans-serif; max-width: 600px; margin: 0 auto; background: #0d1526; color: #e2e8f0; padding: 32px; border-radius: 12px; border: 1px solid rgba(6,182,212,0.2);">
          <h1 style="color: #06b6d4; font-size: 1.5rem; margin-bottom: 24px;">New Portfolio Inquiry</h1>
          <table style="width: 100%; border-collapse: collapse;">
            <tr><td style="padding: 8px 0; color: #94a3b8; width: 120px;">Name</td><td style="padding: 8px 0; font-weight: 600;">${name}</td></tr>
            <tr><td style="padding: 8px 0; color: #94a3b8;">Email</td><td style="padding: 8px 0;"><a href="mailto:${email}" style="color: #06b6d4;">${email}</a></td></tr>
            ${projectType ? `<tr><td style="padding: 8px 0; color: #94a3b8;">Project</td><td style="padding: 8px 0;">${projectType}</td></tr>` : ""}
            ${subject ? `<tr><td style="padding: 8px 0; color: #94a3b8;">Subject</td><td style="padding: 8px 0;">${subject}</td></tr>` : ""}
          </table>
          <div style="margin-top: 24px; padding: 20px; background: rgba(6,182,212,0.06); border-radius: 8px; border-left: 3px solid #06b6d4;">
            <p style="color: #94a3b8; margin-bottom: 8px; font-size: 0.875rem;">Message:</p>
            <p style="white-space: pre-wrap; line-height: 1.7;">${message}</p>
          </div>
          <a href="mailto:${email}?subject=Re: ${subject ?? "Your Portfolio Inquiry"}" style="display: inline-block; margin-top: 24px; padding: 12px 24px; background: #06b6d4; color: #000; border-radius: 8px; text-decoration: none; font-weight: 600;">Reply to ${name}</a>
        </div>
      `,
    });

    // Send confirmation email to sender
    await resend.emails.send({
      from:    "Khan Aarav <hello@khan-aarav.dev>",
      to:      [email],
      subject: "Thanks for reaching out — I'll reply within 4 hours",
      html: `
        <div style="font-family: 'Sora', sans-serif; max-width: 600px; margin: 0 auto; background: #0d1526; color: #e2e8f0; padding: 32px; border-radius: 12px; border: 1px solid rgba(6,182,212,0.2);">
          <h1 style="color: #06b6d4; font-size: 1.5rem; margin-bottom: 16px;">Message received ✅</h1>
          <p style="line-height: 1.8; color: #94a3b8;">Hi ${name},</p>
          <p style="line-height: 1.8; color: #94a3b8;">Thanks for reaching out! I've received your message and will get back to you within <strong style="color: #34d399;">4 hours</strong>.</p>
          <div style="margin: 24px 0; padding: 16px; background: rgba(6,182,212,0.06); border-radius: 8px; border-left: 3px solid #06b6d4;">
            <p style="color: #64748b; font-size: 0.875rem; margin: 0;">Your message:</p>
            <p style="margin-top: 8px; color: #94a3b8; font-style: italic;">"${message.slice(0, 200)}${message.length > 200 ? "..." : ""}"</p>
          </div>
          <p style="color: #64748b; font-size: 0.875rem; line-height: 1.7;">In the meantime, feel free to check out my projects at <a href="https://khan-aarav.dev" style="color: #06b6d4;">khan-aarav.dev</a>.</p>
          <p style="color: #64748b; margin-top: 24px;">— Khan Aarav<br><span style="color: #06b6d4;">AI Engineer & GenAI Developer</span></p>
        </div>
      `,
    });

    return NextResponse.json({
      success: true,
      message: "Message sent successfully",
      id: contact.id,
    });

  } catch (error) {
    console.error("[Contact API] Error:", error);
    return NextResponse.json(
      { success: false, error: "Internal server error. Please try again." },
      { status: 500 }
    );
  }
}

// ─── GET — List messages (admin only) ─────────────────────────────────────────

export async function GET(request: NextRequest) {
  // Simple API key check — in production use Clerk or JWT
  const apiKey = request.headers.get("x-api-key");
  if (apiKey !== process.env.ADMIN_API_KEY) {
    return NextResponse.json({ error: "Unauthorized" }, { status: 401 });
  }

  const messages = await prisma.contactMessage.findMany({
    orderBy: { createdAt: "desc" },
    take: 50,
  });

  return NextResponse.json({ success: true, data: messages });
}
