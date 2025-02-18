import mongoose, { Schema } from "mongoose";

const PartnerTransactionSchema = new mongoose.Schema(
  {
    partnerId: { type: mongoose.Schema.Types.ObjectId, ref: "Partner", required: true },
    type: { type: String, enum: ["commission", "payment_due", "payment_received"], required: true },
    amount: { type: Number, required: true },
    status: { type: String, enum: ["pending", "completed"], default: "pending" },
    date: { type: Date, default: Date.now },
  },
  { timestamps: true }
);

module.exports = mongoose.model("PartnerTransaction", PartnerTransactionSchema);
