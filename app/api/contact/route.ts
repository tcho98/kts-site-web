import nodemailer from "nodemailer";

const E164_REGEX = /^\+[1-9]\d{7,14}$/;

function isEmail(str: string) {
  // email simple + sûr
  return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(str);
}

function clean(value: unknown, max = 5000) {
  // anti injection headers (CRLF) + trimming + limite
  return String(value ?? "")
    .replace(/[\r\n]+/g, " ")
    .trim()
    .slice(0, max);
}

function cleanMessage(value: unknown, max = 8000) {
  // pour le message: on garde les sauts de lignes, mais on enlève \r
  return String(value ?? "")
    .replace(/\r/g, "")
    .trim()
    .slice(0, max);
}

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

    // Honeypot anti-bot (champ caché "company")
    if (body?.company) {
      return Response.json({ ok: true }, { status: 200 });
    }

    const firstName = clean(body?.firstName, 100);
    const lastName = clean(body?.lastName, 100);
    const organization = clean(body?.organization, 150);
    const title = clean(body?.title, 150);
    const email = clean(body?.email, 200).toLowerCase();
    const phone = clean(body?.phone, 30);
    const note = cleanMessage(body?.note, 8000);

    const errors: Record<string, string> = {};
    if (!firstName) errors.firstName = "First name required.";
    if (!lastName) errors.lastName = "Last name required.";
    if (!email || !isEmail(email)) errors.email = "Invalid email.";
    if (phone && !E164_REGEX.test(phone))
      errors.phone = "Invalid phone format.";
    if (!note) errors.note = "Message required.";

    if (Object.keys(errors).length) {
      return Response.json({ ok: false, errors }, { status: 400 });
    }

    // IMPORTANT: From doit être une adresse que tu contrôles/validée chez Brevo
    const FROM_NAME = "KTS Mobility Website";
    const FROM_EMAIL = "no-reply@ktsmobility.com";
    const TO_EMAIL = "jscinnamon7483@gmail.com";

    // Transport Brevo (SMTP)
    const transporter = nodemailer.createTransport({
      host: process.env.EMAIL_HOST || "smtp-relay.brevo.com",
      port: Number(process.env.EMAIL_PORT || 587),
      secure: false, // 587
      auth: {
        user: process.env.EMAIL_USER!,
        pass: process.env.EMAIL_PASS!,
      },
      requireTLS: true,
      tls: {
        // aide certains environnements
        servername: process.env.EMAIL_HOST || "smtp-relay.brevo.com",
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
                  Réponds à cet email : le Reply-To pointe vers l’expéditeur du formulaire.
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
      sender: { name: FROM_NAME, address: FROM_EMAIL }, // utile pour certains filtres
      to: TO_EMAIL,

      // Réponse vers le client (validé)
      replyTo: { name: fullName, address: email },

      subject,
      text,
      html,

      // messageId propre (certaines gateways aiment)
      messageId: `<${ticket.toLowerCase()}@ktsmobility.com>`,

      // Headers minimalistes (évite les faux positifs spam)
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
