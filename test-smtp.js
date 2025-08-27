import nodemailer from "nodemailer";

async function testSMTP() {
  const transporter = nodemailer.createTransport({
    host: process.env.EMAIL_HOST || "mail.ktsmobility.com",
    port: Number(process.env.EMAIL_PORT) || 465,
    secure: process.env.EMAIL_SECURE === "true" || true,
    auth: {
      user: process.env.EMAIL_USER || "info@ktsmobility.com",
      pass: process.env.EMAIL_PASS || "sM_7wNsnO!a(d=Rr",
    },
    tls: {
      rejectUnauthorized: false, // pour éviter les erreurs de certificat SSL
    },
  });

  try {
    console.log("⏳ Test de connexion SMTP...");
    await transporter.verify();
    console.log("✅ Connexion SMTP réussie !");
  } catch (error) {
    console.error("❌ Erreur SMTP :", error);
  }
}

testSMTP();
