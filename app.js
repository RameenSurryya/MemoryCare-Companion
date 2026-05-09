const express = require("express");
const path = require("path");
require("dotenv").config();

const app = express();

// Basic middleware
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

// Static files
app.use(express.static(path.join(__dirname, "public")));

// View engine
app.set("view engine", "ejs");
app.set("views", path.join(__dirname, "views"));

// Test route
app.get("/", (req, res) => {
  res.send("MemoryCare Companion server is running!");
});

// Start server
const PORT = process.env.PORT || 3000;

app.listen(PORT, () => {
  console.log(`Server running on http://localhost:${PORT}`);
});