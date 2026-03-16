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

/* Save to MongoDB */

const newContact = new Contact({
name,
phone,
email,
message,
company
});

await newContact.save();

/* Email Send */

const transporter = nodemailer.createTransport({
service: "gmail",
auth: {
user: process.env.EMAIL_USER || "sunemirates14655@gmail.com",
pass: process.env.EMAIL_PASS || "your_app_password"
}
});

await transporter.sendMail({
from: email,
to: process.env.EMAIL_USER || "sunemirates14655@gmail.com",
subject: `New Contact Message from ${name}`,
html: `
<h3>New Message From Website</h3>
<p><b>Name:</b> ${name}</p>
<p><b>Company:</b> ${company || 'N/A'}</p>
<p><b>Phone:</b> ${phone}</p>
<p><b>Email:</b> ${email}</p>
<p><b>Message:</b> ${message}</p>
`
});

res.json({ message: "Message Sent Successfully" });

} catch (error) {

console.error(error);
res.status(500).json({ message: "Error sending message" });

}

});

module.exports = router;