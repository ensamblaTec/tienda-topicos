import mongoose from "mongoose";

// Schema
export const discountEntity = () => {
  let categorySchema = new mongoose.Schema({
    category: String,
    description: String,
  });
  
  return mongoose.models.Discounts || mongoose.model('discounts', categorySchema)
};
