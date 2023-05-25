import mongoose from "mongoose";
import { IDiscount } from "../interface/IDiscount.interface";

// Schema
export const discountEntity = () => {
  let discountSchema = new mongoose.Schema<IDiscount>({
    discount: {type: String, required: true },
    percentage: {type: Number, required: true },
    description: {type: String, required: true },
    status: {type: Boolean, required: true },
    created_at: {type: Date, required: true },
    updated_at: {type: Date, required: true },
    deleted_at: {type: Date, required: true },
  });
  
  return mongoose.models.discounts || mongoose.model<IDiscount>('discounts', discountSchema)
};
