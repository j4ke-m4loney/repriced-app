const express = require("express");
const mongoose = require("mongoose");
const dotenv = require("dotenv");
const cors = require("cors");
import reportsRoutes from "./routes/reports.js";

dotenv.config(); // Load environment variables

const app = express();
app.use(express.json());
app.use(cors());

const PORT = process.env.PORT || 5000;

// Connect to MongoDB Atlas
mongoose
  .connect(process.env.MONGO_URI, { useNewUrlParser: true, useUnifiedTopology: true })
  .then(() => console.log("✅ MongoDB Connected Successfully"))
  .catch((err) => console.log("❌ MongoDB Connection Error:", err));

// Simple route to check API status
app.get("/", (req, res) => {
  res.send("Repriced.com.au Backend API is Running!");
});

app.listen(PORT, () => console.log(`🚀 Server running on port ${PORT}`));

app.use("/api/reports", reportsRoutes);