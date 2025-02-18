import mongoose, { Schema } from "mongoose";
const mongoose = require("mongoose");

const CustomerSchema = new mongoose.Schema(
  {
    firstName: { type: String, required: true },
    lastName: { type: String, required: true },
    email: { type: String, required: true, unique: true },
    phone: { type: String },
    status: { type: String, enum: ["active", "suspended", "terminated"], default: "active" },
    createdBy: { type: mongoose.Schema.Types.ObjectId, ref: "Admin" }, // If created by admin
    referredBy: { type: mongoose.Schema.Types.ObjectId, ref: "Partner", default: null }, // If created via referral
    company: { type: mongoose.Schema.Types.ObjectId, ref: "Company", default: null }, // Optional
  },
  { timestamps: true }
);

module.exports = mongoose.model("Customer", CustomerSchema);

