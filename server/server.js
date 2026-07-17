const express = require("express");
const cors = require("cors");
const dotenv = require("dotenv");
const leadRoutes = require("./routes/leadRoutes");

const connectDB = require("./config/db");

// Load environment variables
dotenv.config();

// Connect to MongoDB
connectDB();

const app = express();

// Middleware
app.use(cors());
app.use(express.json());
app.use("/api/leads", leadRoutes);

// Test Route
app.get("/", (req, res) => {
  res.send("Mini CRM Backend is Running 🚀");
});

// Port
const PORT = process.env.PORT || 5000;

// Start Server
app.listen(PORT, () => {
  console.log(`Server running on http://localhost:${PORT}`);
});