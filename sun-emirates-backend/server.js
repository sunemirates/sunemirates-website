const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");
require("dotenv").config();

const app = express();

// Middleware
app.use(cors());
app.use(express.json());

// ✅ =============================
// 🔥 REDIRECT OLD .ASPX URLs HERE
// =============================

// Redirect old Contact page
app.get("/Contactus.aspx", (req, res) => {
  return res.redirect(301, "/contact");
});

// Redirect old product-related pages
app.get("/products", (req, res) => {
  return res.redirect(301, "/services");
});

app.get("/mildsteel", (req, res) => {
  return res.redirect(301, "/services");
});

app.get("/stainlesssteel", (req, res) => {
  return res.redirect(301, "/services");
});

app.get("/prefabrication", (req, res) => {
  return res.redirect(301, "/services");
});

// Catch ALL .aspx القديمة (VERY IMPORTANT)
app.get("/*.aspx", (req, res) => {
  return res.redirect(301, "/");
});

// ✅ =============================
// DATABASE CONNECTION
// =============================

const MONGODB_URI = process.env.MONGODB_URI;

mongoose
  .connect(MONGODB_URI)
  .then(() => console.log("✅ MongoDB Connected"))
  .catch((err) => console.log(err));

// =============================
// ROUTES
// =============================

const contactRoutes = require("./routes/Contact");
const equipmentRoutes = require("./routes/equipment");
const galleryRoutes = require("./routes/gallery");
const clientsRoutes = require("./routes/clients");
const feedbackRoutes = require("./routes/feedback");

app.use("/api/contact", contactRoutes);
app.use("/api/equipment", equipmentRoutes);
app.use("/api/gallery", galleryRoutes);
app.use("/api/clients", clientsRoutes);
app.use("/api/feedback", feedbackRoutes);

// =============================
// ROOT
// =============================

app.get("/", (req, res) => {
  res.send("Sun Emirates API Running");
});

module.exports = app;