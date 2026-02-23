import { NextRequest, NextResponse } from "next/server";
import nodemailer from "nodemailer";
import sanitizeHtml from "sanitize-html";
import { contactSchema } from "@/lib/validations/contact.schema";

const clean = (value?: string) =>
  value
    ? sanitizeHtml(value, { allowedTags: [], allowedAttributes: {} }).trim()
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
      email: body.email?.trim() || undefined,
      firstName: body.firstName?.trim() || undefined,
      lastName: body.lastName?.trim() || undefined,
    };

    // ✅ Validation Zod
    const parsed = contactSchema.safeParse(normalizedBody);
    if (!parsed.success) {
      return NextResponse.json(
        { message: "Invalid form data", errors: parsed.error.flatten() },
        { status: 400 }
      );
    }

    const data = {
      firstName: clean(parsed.data.firstName)!,
      lastName: clean(parsed.data.lastName)!,
      organization: clean(parsed.data.organization),
      email: clean(parsed.data.email)!,
      title: clean(parsed.data.title),
      phone: clean(parsed.data.phone),
      note: clean(parsed.data.note),
    };

    // ─────────────────────────────────────────────
    // 🔐 SMTP config
    // ─────────────────────────────────────────────
    const {
      EMAIL_HOST,
      EMAIL_PORT,
      EMAIL_SECURE,
      EMAIL_USER,
      EMAIL_PASS,
      ADMIN_EMAIL, // ✅ optionnel mais recommandé
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
      secure: EMAIL_SECURE === "true", // 465=true, 587=false
      auth: { user: EMAIL_USER, pass: EMAIL_PASS },
    });

    // 🔎 Vérifie la connexion SMTP (utile en dev)
    if (process.env.NODE_ENV !== "production") {
      await transporter.verify();
    }

    const adminTo = ADMIN_EMAIL || EMAIL_USER;

    // ─────────────────────────────────────────────
    // 📩 Email Admin
    // ─────────────────────────────────────────────
    const subjectAdmin = `Contact Form – ${data.firstName} ${data.lastName}`;

    const adminText = `
New Contact Form Submission

Name: ${data.firstName} ${data.lastName}
Organization: ${data.organization || "N/A"}
Email: ${data.email}
Title: ${data.title || "N/A"}
Phone: ${data.phone || "N/A"}

Note:
${data.note || "N/A"}
`.trim();

    const adminHtml = `
      <h2>New Contact Form Submission</h2>
      <p><strong>Name:</strong> ${data.firstName} ${data.lastName}</p>
      <p><strong>Organization:</strong> ${data.organization || "N/A"}</p>
      <p><strong>Email:</strong> ${data.email}</p>
      <p><strong>Title:</strong> ${data.title || "N/A"}</p>
      <p><strong>Phone:</strong> ${data.phone || "N/A"}</p>
      <p><strong>Note:</strong><br/>${(data.note || "N/A").replace(/\n/g, "<br/>")}</p>
    `;

    await transporter.sendMail({
      from: `"KTS Mobility Contact" <${EMAIL_USER}>`,
      to: adminTo,
      replyTo: data.email,
      subject: subjectAdmin,
      text: adminText,           // ✅ important anti-spam
      html: adminHtml,
      headers: {
        "X-Contact-Form": "ktsmobility",
      },
    });

    // ─────────────────────────────────────────────
    // 📩 Email utilisateur
    // ─────────────────────────────────────────────
    const subjectUser = "We received your message";

    const userText = `
Hi ${data.firstName},

Thank you for contacting KTS Mobility.
We have received your message and will get back to you shortly.

Your message:
${data.note || "—"}

Best regards,
KTS Mobility Team
`.trim();

    const userHtml = `
      <p>Hi ${data.firstName},</p>
      <p>Thank you for contacting <strong>KTS Mobility</strong>.</p>
      <p>We have received your message and will get back to you shortly.</p>
      <p><strong>Your message:</strong></p>
      <p>${(data.note || "—").replace(/\n/g, "<br/>")}</p>
      <br/>
      <p>Best regards,<br/>KTS Mobility Team</p>
    `;

    await transporter.sendMail({
      from: `"KTS Mobility" <${EMAIL_USER}>`,
      to: data.email,
      replyTo: adminTo,          // ✅ optionnel mais utile
      subject: subjectUser,
      text: userText,            // ✅ important anti-spam
      html: userHtml,
      headers: {
        "X-Contact-Form": "ktsmobility",
      },
    });

    return NextResponse.json({ message: "Emails sent successfully" }, { status: 200 });
  } catch (error: any) {
    const msg = String(error?.message || error);

    console.error("❌ Contact API error:", msg);

    // ✅ message plus clair si spam / 550
    if (msg.includes("550") || msg.toLowerCase().includes("spam")) {
      return NextResponse.json(
        {
          message:
            "Email rejected by mail server (spam filtering). Check domain/SPF/DKIM/DMARC or use a transactional email provider.",
          error: msg,
        },
        { status: 502 }
      );
    }

    return NextResponse.json(
      { message: "Internal server error", error: msg },
      { status: 500 }
    );
  }
}