import mongoose, { Schema } from "mongoose";

const PartnerSchema = new mongoose.Schema(
  {
    name: { type: String, required: true },
    email: { type: String, required: true, unique: true },
    phone: { type: String },
    commissionRate: { type: Number, default: 5 }, // Percentage commission
    totalEarnings: { type: Number, default: 0 }, // Total earnings
    balanceDue: { type: Number, default: 0 }, // Amount they owe admin
    status: { type: String, enum: ["active", "suspended"], default: "active" },
  },
  { timestamps: true }
);

export default mongoose.model("Partner", PartnerSchema);

