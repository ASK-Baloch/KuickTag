import mongoose, { Schema } from "mongoose";
const mongoose = require("mongoose");

const PaymentSchema = new mongoose.Schema(
  {
    customerId: { type: mongoose.Schema.Types.ObjectId, ref: "Customer", required: true },
    amount: { type: Number, required: true },
    paymentMethod: { type: String, enum: ["cash", "credit_card", "bank_transfer"], required: true },
    collectedBy: { type: mongoose.Schema.Types.ObjectId, ref: "Partner", default: null }, // If a partner collected the payment
    status: { type: String, enum: ["completed", "pending", "failed"], default: "pending" },
    paymentDate: { type: Date, default: Date.now },
  },
  { timestamps: true }
);

module.exports = mongoose.model("Payment", PaymentSchema);

