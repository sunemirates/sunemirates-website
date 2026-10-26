const express = require("express");
const router = express.Router();
const nodemailer = require("nodemailer");
const mongoose = require("mongoose");
require("dotenv").config();

/* Mongo Schema */
const ContactSchema = new mongoose.Schema(
{
  name: String,
  phone: String,
  email: String,
  message: String,
  company: String
},
{ timestamps: true }
);

const Contact = mongoose.model("Contact", ContactSchema);

/* Send Message */
router.post("/send", async (req, res) => {
  try {
    const { name, phone, email, message, company } = req.body;

    if (!name || !email || !message) {
      return res.status(400).json({ message: "Missing required fields" });
    }

    /* Save to MongoDB */
    const newContact = new Contact({
      name,
      phone,
      email,
      message,
      company
    });

    await newContact.save();

    // ✅ RESPOND FIRST (VERY IMPORTANT)
    res.status(200).json({ message: "Message saved successfully" });

    // ✅ SEND EMAIL IN BACKGROUND (NO BLOCKING)
    sendEmailAsync({ name, phone, email, message, company });

  } catch (error) {
    console.error(error);
    res.status(500).json({ message: "Error saving message" });
  }
});

/* ✅ BACKGROUND EMAIL FUNCTION */
async function sendEmailAsync(data) {
  try {
    const transporter = nodemailer.createTransport({
      service: "gmail",
      auth: {
        user: process.env.EMAIL_USER,
        pass: process.env.EMAIL_PASS
      }
    });

    await transporter.sendMail({
      from: data.email,
      to: process.env.EMAIL_USER,
      subject: `New Contact Message from ${data.name}`,
      html: `
        <h3>New Message From Website</h3>
        <p><b>Name:</b> ${data.name}</p>
        <p><b>Company:</b> ${data.company || 'N/A'}</p>
        <p><b>Phone:</b> ${data.phone}</p>
        <p><b>Email:</b> ${data.email}</p>
        <p><b>Message:</b> ${data.message}</p>
      `
    });

    console.log("✅ Email sent");
  } catch (err) {
    console.error("❌ Email failed:", err.message);
  }
}

module.exports = router;