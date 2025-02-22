import mongoose, { Schema } from "mongoose";

const CardSchema = new mongoose.Schema(
  {
    cardNumber: { type: String, required: true, unique: true },
    customerId: { type: mongoose.Schema.Types.ObjectId, ref: "Customer", required: true },
    status: { type: String, enum: ["active", "pending", "blocked"], default: "pending" },
    activationDate: { type: Date },
  },
  { timestamps: true }
);

export default  mongoose.model("Card", CardSchema);
