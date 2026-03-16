const express = require("express");
const router = express.Router();
const mongoose = require("mongoose");
const nodemailer = require("nodemailer");
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

/* Send Email */

const transporter = nodemailer.createTransport({
service: "gmail",
auth: {
user: process.env.EMAIL_USER || "sunemirates14655@gmail.com",
pass: process.env.EMAIL_PASS || "your_app_password"
}
});

const mailOptions = {
from: email,
to: process.env.EMAIL_USER || "sunemirates14655@gmail.com",
subject: `New Contact Message from ${name}`,
html: `
<h3>New Contact Message - Sun Emirates Website</h3>
<p><b>Name:</b> ${name}</p>
<p><b>Company:</b> ${company || 'N/A'}</p>
<p><b>Phone:</b> ${phone}</p>
<p><b>Email:</b> ${email}</p>
<p><b>Message:</b> ${message}</p>
`
};

await transporter.sendMail(mailOptions);

res.status(200).json({ message: "Message sent successfully" });

} catch (error) {

console.error(error);
res.status(500).json({ message: "Error sending message" });

}

});

module.exports = router;