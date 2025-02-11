import express from "express";
import Verification from "../models/Verification.js";

const router = express.Router();

// Get all flagged listings (flaggedCount >= 5)
router.get("/", async (req, res) => {
  try {
    const flaggedListings = await Verification.find({ flaggedCount: { $gte: 5 }, status: "pending" });
    res.json(flaggedListings);
  } catch (error) {
    res.status(500).json({ message: "Server Error" });
  }
});

// Admin: Mark listing as verified
router.put("/verify/:propertyId", async (req, res) => {
  try {
    const { propertyId } = req.params;
    await Verification.findOneAndUpdate({ propertyId }, { status: "verified" });
    res.json({ message: "Property marked as verified" });
  } catch (error) {
    res.status(500).json({ message: "Server Error" });
  }
});

// Admin: Remove a flagged listing
router.delete("/remove/:propertyId", async (req, res) => {
  try {
    const { propertyId } = req.params;
    await Verification.findOneAndDelete({ propertyId });
    res.json({ message: "Property removed" });
  } catch (error) {
    res.status(500).json({ message: "Server Error" });
  }
});

export default router;