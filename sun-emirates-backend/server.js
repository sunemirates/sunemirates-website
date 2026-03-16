const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");
require("dotenv").config();

const app = express();

app.use(cors());
app.use(express.json());

const MONGODB_URI = process.env.MONGODB_URI;

mongoose
  .connect(MONGODB_URI)
  .then(() => console.log("✅MongoDB Connected"))
  .catch((err) => console.log(err));

// Import Routes
const contactRoutes = require("./routes/Contact");
const equipmentRoutes = require("./routes/equipment");
const galleryRoutes = require("./routes/gallery");
const clientsRoutes = require("./routes/clients");
const feedbackRoutes = require("./routes/feedback");

// Use Routes
app.use("/api/contact", contactRoutes);
app.use("/api/equipment", equipmentRoutes);
app.use("/api/gallery", galleryRoutes);
app.use("/api/clients", clientsRoutes);
app.use("/api/feedback", feedbackRoutes);

app.get("/", (req, res) => {
  res.send("Sun Emirates API Running");
});

module.exports = app;