import nodemailer from "nodemailer";

const E164_REGEX = /^\+[1-9]\d{7,14}$/;

function isEmail(str: string) {
  return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(str);
}

function clean(value: unknown, max = 5000) {
  return String(value ?? "")
    .replace(/\r/g, "")
    .trim()
    .slice(0, max);
}

export async function POST(req: Request) {
  try {
    const body = await req.json();

    // Honeypot anti-bot
    if (body.company) {
      return Response.json({ ok: true }, { status: 200 });
    }

    const firstName = clean(body.firstName, 100);
    const lastName = clean(body.lastName, 100);
    const organization = clean(body.organization, 150);
    const email = clean(body.email, 200).toLowerCase();
    const title = clean(body.title, 150);
    const phone = clean(body.phone, 30);
    const note = clean(body.note, 8000);

    // Validation
    const errors: Record<string, string> = {};

    if (!firstName) errors.firstName = "First name required.";
    if (!lastName) errors.lastName = "Last name required.";
    if (!email || !isEmail(email)) errors.email = "Invalid email.";
    if (phone && !E164_REGEX.test(phone)) errors.phone = "Invalid phone format.";
    if (!note) errors.note = "Message required.";

    if (Object.keys(errors).length) {
      return Response.json({ ok: false, errors }, { status: 400 });
    }

    // Transport Brevo
    const transporter = nodemailer.createTransport({
      host: process.env.EMAIL_HOST, // smtp-relay.brevo.com
      port: Number(process.env.EMAIL_PORT || 587),
      secure: false, // 587 => false
      auth: {
        user: process.env.EMAIL_USER, // a32415001@smtp-brevo.com
        pass: process.env.EMAIL_PASS, // clé SMTP Brevo
      },
      requireTLS: true,
    });

    // EMAIL VERS TOI (info@ktsmobility.com)
    const info = await transporter.sendMail({
      from: `"KTS Mobility" <info@ktsmobility.com>`,
      to: "info@ktsmobility.com",
      replyTo: email,
      subject: `New Contact — ${firstName} ${lastName}`,
      text: `
New contact submission

Name: ${firstName} ${lastName}
Organization: ${organization || "N/A"}
Title: ${title || "N/A"}
Email: ${email}
Phone: ${phone || "N/A"}

Message:
${note}
      `,
      html: `
        <h2>New Contact Submission</h2>
        <p><strong>Name:</strong> ${firstName} ${lastName}</p>
        <p><strong>Organization:</strong> ${organization || "N/A"}</p>
        <p><strong>Title:</strong> ${title || "N/A"}</p>
        <p><strong>Email:</strong> ${email}</p>
        <p><strong>Phone:</strong> ${phone || "N/A"}</p>
        <h3>Message</h3>
        <p style="white-space:pre-wrap">${note}</p>
      `,
    });

    console.log("✅ Email sent:", info.messageId);

    return Response.json({ ok: true });

  } catch (error: any) {
    console.error("❌ Contact API error:", error);
    return Response.json(
      { ok: false, error: error?.message || "Server error" },
      { status: 500 }
    );
  }
}