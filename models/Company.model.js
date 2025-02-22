import mongoose, { Schema } from "mongoose";

const CompanySchema = new mongoose.Schema(
  {
    name: { type: String, required: true },
    contactInfo: { type: String },
    status: { type: String, enum: ["active", "inactive"], default: "active" },
  },
  { timestamps: true }
);

export default mongoose.model("Company", CompanySchema);


