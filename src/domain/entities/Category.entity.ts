import mongoose from "mongoose";
import { ICategory } from "../interface/ICategory.interface";

// Schema
export const categoryEntity = () => {
  let categorySchema = new mongoose.Schema<ICategory>({
    category: { type: String, required: true},
    description: { type: String, required: true},
    created_at: {type: Date, required: true },
    updated_at: {type: Date, required: true },
  });
  
  return mongoose.models.Categories || mongoose.model<ICategory>('categories', categorySchema)
};
