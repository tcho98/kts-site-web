import nodemailer from "nodemailer";
import { NextRequest, NextResponse } from "next/server";

export async function POST(req: NextRequest) {
  const data = await req.json();

  const transporter = nodemailer.createTransport({
    host: "smtp.gmail.com",
    port: 465,
    secure: true,
    auth: {
      user: process.env.EMAIL_USER,
      pass: process.env.EMAIL_PASS,
    },
  });

  // --- 1️⃣ Mail que tu reçois ---
  const htmlContentAdmin = `
  <div style="font-family: Arial, sans-serif; background-color: #f6f9fc; padding: 30px;">
    <div style="max-width: 600px; margin: auto; background: #ffffff; border-radius: 8px; overflow: hidden; box-shadow: 0 4px 12px rgba(0,0,0,0.1);">
      <div style="background-color: #1E3A8A; color: white; padding: 20px 30px;">
        <h1 style="margin: 0; font-size: 22px;">📩 New Contact Form Submission</h1>
      </div>
      <div style="padding: 30px;">
        <table style="width: 100%; border-collapse: collapse;">
          <tr><td style="padding: 8px; font-weight: bold;">Department</td><td style="padding: 8px;">${
            data.department
          }</td></tr>
          <tr><td style="padding: 8px; font-weight: bold;">Interest</td><td style="padding: 8px;">${
            data.interest
          }</td></tr>
          <tr><td style="padding: 8px; font-weight: bold;">First Name</td><td style="padding: 8px;">${
            data.firstName
          }</td></tr>
          <tr><td style="padding: 8px; font-weight: bold;">Last Name</td><td style="padding: 8px;">${
            data.lastName
          }</td></tr>
          <tr><td style="padding: 8px; font-weight: bold;">Organization</td><td style="padding: 8px;">${
            data.organization || "N/A"
          }</td></tr>
          <tr><td style="padding: 8px; font-weight: bold;">Email</td><td style="padding: 8px;">${
            data.email
          }</td></tr>
          <tr><td style="padding: 8px; font-weight: bold;">Title / Role</td><td style="padding: 8px;">${
            data.title || "N/A"
          }</td></tr>
          <tr><td style="padding: 8px; font-weight: bold;">Phone</td><td style="padding: 8px;">${
            data.phone || "N/A"
          }</td></tr>
          <tr>
            <td style="padding: 8px; font-weight: bold; vertical-align: top;">Note</td>
            <td style="padding: 8px; white-space: pre-wrap;">${
              data.note || "N/A"
            }</td>
          </tr>
        </table>
      </div>
      <div style="background-color: #f1f5f9; padding: 20px; text-align: center; font-size: 14px; color: #555;">
        <p>This message was sent from the KTS Mobility contact form.</p>
      </div>
    </div>
  </div>
  `;

  // --- 2️⃣ Mail de confirmation à l’utilisateur ---
  const htmlContentUser = `
  <div style="font-family: Arial, sans-serif; background-color: #f6f9fc; padding: 30px;">
    <div style="max-width: 600px; margin: auto; background: #ffffff; border-radius: 8px; overflow: hidden; box-shadow: 0 4px 12px rgba(0,0,0,0.1);">
      <div style="background-color: #1E3A8A; color: white; padding: 20px 30px;">
        <h1 style="margin: 0; font-size: 22px;">✅ Thank you for contacting KTS Mobility</h1>
      </div>
      <div style="padding: 30px; color: #333;">
        <p>Hi ${data.firstName},</p>
        <p>Thank you for reaching out! We have received your message and will get back to you as soon as possible.</p>
        <h3>Your Submission:</h3>
        <ul>
          <li><strong>Department:</strong> ${data.department}</li>
          <li><strong>Interest:</strong> ${data.interest}</li>
          <li><strong>Name:</strong> ${data.firstName} ${data.lastName}</li>
          <li><strong>Organization:</strong> ${data.organization || "N/A"}</li>
          <li><strong>Email:</strong> ${data.email}</li>
          <li><strong>Title / Role:</strong> ${data.title || "N/A"}</li>
          <li><strong>Phone:</strong> ${data.phone || "N/A"}</li>
          <li><strong>Note:</strong> ${data.note || "N/A"}</li>
        </ul>
        <p>We appreciate your interest and will contact you soon!</p>
        <p>Best regards,<br/>The KTS Mobility Team</p>
      </div>
      <div style="background-color: #f1f5f9; padding: 20px; text-align: center; font-size: 14px; color: #555;">
        <p>KTS Mobility | <a href="#" style="color: #1E3A8A; text-decoration: none;">Visit our website</a></p>
      </div>
    </div>
  </div>
  `;

  try {
    // Envoi au destinataire admin
    await transporter.sendMail({
      from: `"KTS Mobility Contact" <${process.env.EMAIL_USER}>`,
      to: "jscinnamon7483@gmai.com",
      subject: `Contact Form: ${data.firstName} ${data.lastName}`,
      html: htmlContentAdmin,
    });

    // Envoi au submitter
    await transporter.sendMail({
      from: `"KTS Mobility" <${process.env.EMAIL_USER}>`,
      to: data.email,
      subject: "KTS Mobility: We received your message",
      html: htmlContentUser,
    });

    return NextResponse.json({ message: "Emails sent successfully" });
  } catch (error) {
    console.error(error);
    return NextResponse.json(
      { message: "Failed to send emails" },
      { status: 500 }
    );
  }
}
