import mongoose from "mongoose";

// Schema
export const categoryEntity = () => {
  let categorySchema = new mongoose.Schema({
    category: String,
    description: String,
  });
  
  return mongoose.models.Categories || mongoose.model('categories', categorySchema)
};
