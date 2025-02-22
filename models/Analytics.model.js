import mongoose, { Schema } from "mongoose";

const AnalyticsSchema = new mongoose.Schema(
  {
    totalCustomers: { type: Number, default: 0 },
    totalPartners: { type: Number, default: 0 },
    totalRevenue: { type: Number, default: 0 },
    totalCardsActivated: { type: Number, default: 0 },
    reportDate: { type: Date, default: Date.now },
  },
  { timestamps: true }
);

export default module.exports = mongoose.model("Analytics", AnalyticsSchema);
