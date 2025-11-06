// ---------- Alluring Arts - Backend (Contact only) ----------
import express from "express";
import cors from "cors";
import bodyParser from "body-parser";
import dotenv from "dotenv";
import nodemailer from "nodemailer";

dotenv.config();

const app = express();
const PORT = process.env.PORT || 4000;

// --- Middleware ---
app.use(cors());
app.use(bodyParser.json());

// --- Contact Form Endpoint ---
app.post("/api/contact", async (req, res) => {
  const { name, email, message } = req.body;

  if (!name || !email || !message)
    return res.status(400).json({ success: false, error: "All fields required" });

  try {
    // Setup transporter
    const transporter = nodemailer.createTransport({
      host: process.env.SMTP_HOST,
      port: process.env.SMTP_PORT,
      secure: false,
      auth: {
        user: process.env.SMTP_USER,
        pass: process.env.SMTP_PASS,
      },
    });

    // Send email
    await transporter.sendMail({
      from: process.env.SMTP_USER,
      to: process.env.CONTACT_EMAIL,
      subject: `New message from ${name}`,
      text: `From: ${name} <${email}>\n\n${message}`,
    });

    res.json({ success: true, msg: "Message sent successfully!" });
  } catch (error) {
    console.error("Email error:", error);
    res.status(500).json({ success: false, error: "Failed to send message" });
  }
});

// --- Default route ---
app.get("/", (req, res) => {
  res.send("Alluring Arts Backend running successfully!");
});

// --- Start Server ---
app.listen(PORT, () => console.log(`✅ Server running on port ${PORT}`));
