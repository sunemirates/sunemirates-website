const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");
const path = require("path");
require("dotenv").config();

const app = express();

/* ---------------- MIDDLEWARE ---------------- */

app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

/* ---------------- MONGODB CONNECTION ---------------- */

const MONGODB_URI =
  process.env.MONGODB_URI || "mongodb://127.0.0.1:27017/sunemirates";

mongoose
  .connect(MONGODB_URI)
  .then(() => console.log("✅ MongoDB Connected"))
  .catch((err) => console.error("❌ MongoDB Connection Error:", err.message));

/* ---------------- ROUTES ---------------- */

app.get("/", (req, res) => {
  res.send("Sun Emirates Backend Running");
});

// Contact Routes
const contactRoutes = require("./routes/contact");
app.use("/api/contact", contactRoutes);

// Equipment Routes
const equipmentRoutes = require("./routes/equipment");
app.use("/api/equipment", equipmentRoutes);

// Gallery Routes
const galleryRoutes = require("./routes/gallery");
app.use("/api/gallery", galleryRoutes);

// Client Routes
const clientRoutes = require("./routes/clients");
app.use("/api/clients", clientRoutes);

/* ---------------- ERROR HANDLER ---------------- */

app.use((err, req, res, next) => {
  console.error("Server Error:", err.stack);
  res.status(500).json({ message: "Internal Server Error" });
});

/* ---------------- EXPORT APP (IMPORTANT FOR VERCEL) ---------------- */

module.exports = app;