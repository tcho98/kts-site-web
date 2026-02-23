import { NextRequest, NextResponse } from "next/server";
import nodemailer from "nodemailer";
import sanitizeHtml from "sanitize-html";
import { contactSchema } from "@/lib/validations/contact.schema";

const clean = (value?: string) =>
  value
    ? sanitizeHtml(value, {
        allowedTags: [],
        allowedAttributes: {},
      }).trim()
    : undefined;

export async function POST(req: NextRequest) {
  try {
    const body = await req.json();

    // 🛑 Honeypot anti-bot
    if (body.company) {
      return NextResponse.json({ message: "OK" }, { status: 200 });
    }

    // 🔄 Normalisation des champs optionnels
    const normalizedBody = {
      ...body,
      organization: body.organization?.trim() || undefined,
      title: body.title?.trim() || undefined,
      note: body.note?.trim() || undefined,
      phone: body.phone?.trim() || undefined,
    };

    // ✅ Validation Zod
    const parsed = contactSchema.safeParse(normalizedBody);

    if (!parsed.success) {
      return NextResponse.json(
        {
          message: "Invalid form data",
          errors: parsed.error.flatten(),
        },
        { status: 400 }
      );
    }

    const data = {
      firstName: clean(parsed.data.firstName),
      lastName: clean(parsed.data.lastName),
      organization: clean(parsed.data.organization),
      email: clean(parsed.data.email),
      title: clean(parsed.data.title),
      phone: clean(parsed.data.phone),
      note: clean(parsed.data.note),
    };

    // ─────────────────────────────────────────────
    // 🔐 Vérification configuration SMTP
    // ─────────────────────────────────────────────
    const {
      EMAIL_HOST,
      EMAIL_PORT,
      EMAIL_SECURE,
      EMAIL_USER,
      EMAIL_PASS,
    } = process.env;

    if (!EMAIL_HOST || !EMAIL_PORT || !EMAIL_USER || !EMAIL_PASS) {
      console.error("❌ Missing email environment variables");
      return NextResponse.json(
        { message: "Email configuration error" },
        { status: 500 }
      );
    }

    const transporter = nodemailer.createTransport({
      host: EMAIL_HOST,
      port: Number(EMAIL_PORT),
      secure: EMAIL_SECURE === "true",
      auth: {
        user: EMAIL_USER,
        pass: EMAIL_PASS,
      },
    });

    // 🔎 Vérifie la connexion SMTP (utile en dev/prod)
    await transporter.verify();

    // ─────────────────────────────────────────────
    // 📩 Email Admin
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
      from: `"KTS Mobility Contact" <${EMAIL_USER}>`,
      to: EMAIL_USER,
      replyTo: data.email,
      subject: `Contact Form – ${data.firstName} ${data.lastName}`,
      html: adminHtml,
    });

    // ─────────────────────────────────────────────
    // 📩 Email utilisateur
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
      from: `"KTS Mobility" <${EMAIL_USER}>`,
      to: data.email,
      subject: "We received your message",
      html: userHtml,
    });

    return NextResponse.json(
      { message: "Emails sent successfully" },
      { status: 200 }
    );
  } catch (error: any) {
    console.error("❌ Contact API error:", error?.message || error);

    return NextResponse.json(
      {
        message: "Internal server error",
        error: error?.message || String(error),
      },
      { status: 500 }
    );
  }
}