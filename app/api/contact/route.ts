import nodemailer from "nodemailer";
import  {contactSchema } from "@/lib/contact.schema";

// nodemailer nécessite le runtime Node.js (pas Edge)
export const runtime = "nodejs";

function escapeHtml(v: unknown) {
  return String(v ?? "")
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;");
}

function makeTicket() {
  return `KTS-${Date.now().toString(36).toUpperCase()}`;
}

export async function POST(req: Request) {
  try {
    const body = await req.json();

    // Honeypot anti-bot (champ caché "company") : on répond OK sans rien envoyer
    if (body?.company) {
      return Response.json({ ok: true }, { status: 200 });
    }

    // Validation unique via Zod (même schéma que le client)
    const parsed = contactSchema.safeParse(body);
    if (!parsed.success) {
      return Response.json(
        { ok: false, errors: parsed.error.flatten().fieldErrors },
        { status: 400 },
      );
    }

    const { firstName, lastName, organization, title, email, phone, note } =
      parsed.data;

    // IMPORTANT: From doit être une adresse que tu contrôles/validée chez Brevo
    const FROM_NAME = "KTS Mobility Website";
    const FROM_EMAIL = process.env.EMAIL_FROM || "no-reply@ktsmobility.com";
    const TO_EMAIL = process.env.CONTACT_TO_EMAIL;

    if (!TO_EMAIL) {
      console.error("❌ CONTACT_TO_EMAIL manquant dans les variables d'environnement");
      return Response.json(
        { ok: false, error: "Server misconfiguration" },
        { status: 500 },
      );
    }

    // Transport SMTP (compatible cPanel, Brevo, ou tout autre fournisseur SMTP standard)
    const emailPort = Number(process.env.EMAIL_PORT || 465);
    // Port 465 = SSL direct (secure: true). Port 587 = STARTTLS (secure: false + requireTLS).
    const isSecurePort = emailPort === 465;

    const transporter = nodemailer.createTransport({
      host: process.env.EMAIL_HOST,
      port: emailPort,
      secure: isSecurePort,
      auth: {
        user: process.env.EMAIL_USER!,
        pass: process.env.EMAIL_PASS!,
      },
      requireTLS: !isSecurePort,
      tls: {
        servername: process.env.EMAIL_HOST,
      },
    });

    const fullName = `${firstName} ${lastName}`.trim();
    const ticket = makeTicket();

    const org = organization || "N/A";
    const role = title || "N/A";
    const phoneVal = phone || "N/A";

    const subject = `Nouveau message site – ${fullName} (${ticket})`;

    const text = [
      "Nouveau message depuis le site KTS Mobility",
      "",
      `Nom: ${fullName}`,
      `Organisation: ${org}`,
      `Poste: ${role}`,
      `Email: ${email}`,
      `Téléphone: ${phoneVal}`,
      "",
      "Message:",
      note,
      "",
      `Ticket: ${ticket}`,
    ].join("\n");

    const html = `<!doctype html>
<html>
  <body style="margin:0;padding:0;background:#f5f6f8;">
    <div style="display:none;max-height:0;overflow:hidden;opacity:0;color:transparent;">
      Nouveau message de ${escapeHtml(fullName)} (${escapeHtml(email)})
    </div>

    <table role="presentation" width="100%" cellspacing="0" cellpadding="0" style="background:#f5f6f8;padding:24px 0;">
      <tr>
        <td align="center">
          <table role="presentation" width="640" cellspacing="0" cellpadding="0"
                 style="width:640px;max-width:94vw;background:#ffffff;border-radius:12px;overflow:hidden;border:1px solid #e5e7eb;">
            <tr>
              <td style="padding:18px 22px;background:#0b5cff;color:#ffffff;font-family:Arial,Helvetica,sans-serif;">
                <div style="font-size:14px;opacity:0.9;">KTS Mobility</div>
                <div style="font-size:20px;font-weight:700;margin-top:6px;">Nouveau message depuis le site</div>
              </td>
            </tr>

            <tr>
              <td style="padding:18px 22px;font-family:Arial,Helvetica,sans-serif;color:#111827;">
                <table role="presentation" width="100%" cellspacing="0" cellpadding="0" style="font-size:14px;">
                  <tr><td style="padding:6px 0;color:#6b7280;width:140px;">Nom</td><td style="padding:6px 0;">${escapeHtml(fullName)}</td></tr>
                  <tr><td style="padding:6px 0;color:#6b7280;">Organisation</td><td style="padding:6px 0;">${escapeHtml(org)}</td></tr>
                  <tr><td style="padding:6px 0;color:#6b7280;">Poste</td><td style="padding:6px 0;">${escapeHtml(role)}</td></tr>
                  <tr><td style="padding:6px 0;color:#6b7280;">Email</td><td style="padding:6px 0;">${escapeHtml(email)}</td></tr>
                  <tr><td style="padding:6px 0;color:#6b7280;">Téléphone</td><td style="padding:6px 0;">${escapeHtml(phoneVal)}</td></tr>
                  <tr><td style="padding:6px 0;color:#6b7280;">Ticket</td><td style="padding:6px 0;">${escapeHtml(ticket)}</td></tr>
                </table>

                <div style="margin-top:14px;font-size:14px;font-weight:700;">Message</div>
                <div style="margin-top:8px;border:1px solid #e5e7eb;border-radius:10px;background:#fafafa;padding:12px;white-space:pre-wrap;line-height:1.55;">
                  ${escapeHtml(note)}
                </div>

                <div style="margin-top:14px;font-size:12px;color:#6b7280;">
                  Réponds à cet email : le Reply-To pointe vers l'expéditeur du formulaire.
                </div>
              </td>
            </tr>
          </table>

          <div style="font-family:Arial,Helvetica,sans-serif;font-size:11px;color:#9ca3af;margin-top:10px;">
            © ${new Date().getFullYear()} KTS Mobility
          </div>
        </td>
      </tr>
    </table>
  </body>
</html>`;

    const info = await transporter.sendMail({
      from: { name: FROM_NAME, address: FROM_EMAIL },
      sender: { name: FROM_NAME, address: FROM_EMAIL },
      to: TO_EMAIL,
      replyTo: { name: fullName, address: email },
      subject,
      text,
      html,
      messageId: `<${ticket.toLowerCase()}@ktsmobility.com>`,
      headers: {
        "X-Application": "KTS-Website",
        "X-Message-Type": "ContactForm",
        "X-Ticket": ticket,
      },
    });

    console.log("✅ Email sent:", {
      messageId: info.messageId,
      accepted: info.accepted,
      rejected: info.rejected,
      response: info.response,
    });

    return Response.json({ ok: true, ticket });
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
  } catch (error: any) {
    console.error("❌ Contact API error:", error);
    return Response.json(
      { ok: false, error: error?.message || "Server error" },
      { status: 500 },
    );
  }
}
