import express from "express";
import Verification from "../models/Verification.js";

const router = express.Router();

// Get verification data for a property
router.get("/:propertyId", async (req, res) => {
  try {
    const propertyId = req.params.propertyId;
    const verification = await Verification.findOne({ propertyId });

    if (!verification) {
      return res.status(404).json({ message: "No verification data found" });
    }

    res.json(verification);
  } catch (error) {
    res.status(500).json({ message: "Server Error" });
  }
});

// Vote on a property
router.post("/vote", async (req, res) => {
  try {
    const { propertyId, voteType } = req.body;

    let verification = await Verification.findOne({ propertyId });

    if (!verification) {
      verification = new Verification({ propertyId });
    }

    if (voteType === "seenBefore") {
      verification.seenBeforeCount += 1;
    } else if (voteType === "flagged") {
      verification.flaggedCount += 1;
    } else if (voteType === "neutral") {
      verification.neutralCount += 1;
    }

    await verification.save();
    res.json({ message: "Vote registered successfully", verification });
  } catch (error) {
    res.status(500).json({ message: "Server Error" });
  }
});

export default router;