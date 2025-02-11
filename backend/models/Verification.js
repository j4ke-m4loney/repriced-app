import mongoose from "mongoose";

const VerificationSchema = new mongoose.Schema({
  propertyId: { type: String, required: true },
  seenBeforeCount: { type: Number, default: 0 },
  flaggedCount: { type: Number, default: 0 },
  neutralCount: { type: Number, default: 0 }
});

export default mongoose.model("Verification", VerificationSchema);