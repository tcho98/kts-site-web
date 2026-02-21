import { NextRequest, NextResponse } from "next/server";
import nodemailer from "nodemailer";
import sanitizeHtml from "sanitize-html";
import { contactSchema } from "@/lib/validations/contact.schema";


const clean = (value?: string) =>
  value
    ? sanitizeHtml(value, {
        allowedTags: [],
        allowedAttributes: {},
      })
    : "";

 
export async function POST(req: NextRequest) {
  try {
    const body = await req.json();

    // 🛑 Honeypot anti-bot
    if (body.company) {
      return NextResponse.json({ message: "OK" }, { status: 200 });
    }

    // ✅ Validation Zod
    const parsed = contactSchema.safeParse(body);

    if (!parsed.success) {
      return NextResponse.json(
        {
          message: "Invalid form data",
          errors: parsed.error.flatten(),
        },
        { status: 400 }
      );
    }

    // 🧼 Sanitisation
    const data = {
      ...parsed.data,
      firstName: clean(parsed.data.firstName),
      lastName: clean(parsed.data.lastName),
      organization: clean(parsed.data.organization),
      title: clean(parsed.data.title),
      phone: clean(parsed.data.phone),
      note: clean(parsed.data.note),
    };

    // ─────────────────────────────────────────────
    // SMTP config
    // ─────────────────────────────────────────────
    const transporter = nodemailer.createTransport({
      host: process.env.EMAIL_HOST,
      port: Number(process.env.EMAIL_PORT),
      secure: process.env.EMAIL_SECURE === "true",
      auth: {
        user: process.env.EMAIL_USER,
        pass: process.env.EMAIL_PASS,
      },
      tls: {
        rejectUnauthorized: false,
      },
    });

    // ─────────────────────────────────────────────
    // Admin email
    // ─────────────────────────────────────────────
    const adminHtml = `
      <h2>New Contact Form Submission</h2>
  
      <p><strong>Name:</strong> ${data.firstName} ${data.lastName}</p>
      <p><strong>Organization:</strong> ${data.organization || "N/A"}</p>
      <p><strong>Email:</strong> ${data.email}</p>
      <p><strong>Title:</strong> ${data.title || "N/A"}</p>
      <p><strong>Phone:</strong> ${data.phone || "N/A"}</p>
      <p><strong>Note:</strong><br/>${data.note || "N/A"}</p>
    `;

    await transporter.sendMail({
      from: `"KTS Mobility Contact" <${process.env.EMAIL_USER}>`,
      to: process.env.EMAIL_USER,
      replyTo: data.email,
      subject: `Contact Form – ${data.firstName} ${data.lastName}`,
      html: adminHtml,
    });

    // ─────────────────────────────────────────────
    // User confirmation email
    // ─────────────────────────────────────────────
    const userHtml = `
      <p>Hi ${data.firstName},</p>
      <p>Thank you for contacting <strong>KTS Mobility</strong>.</p>
      <p>We have received your message and will get back to you shortly.</p>
      <p><strong>Your message:</strong></p>
      <p>${data.note || "—"}</p>
      <br/>
      <p>Best regards,<br/>KTS Mobility Team</p>
    `;

    await transporter.sendMail({
      from: `"KTS Mobility" <${process.env.EMAIL_USER}>`,
      to: data.email,
      subject: "We received your message",
      html: userHtml,
    });

    return NextResponse.json(
      { message: "✅ Emails sent successfully" },
      { status: 200 }
    );
  } catch (error) {
    console.error("❌ Contact API error:", error);

    return NextResponse.json(
      { message: "Internal server error" },
      { status: 500 }
    );
  }
}
