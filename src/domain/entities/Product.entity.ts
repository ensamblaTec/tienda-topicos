import mongoose from "mongoose";
import { IProduct } from "../interface/IProduct.interface";

// Schema Product
export const productEntity = () => {
  let productSchema = new mongoose.Schema<IProduct>({
    product: {type: String, required: true },
    description: {type: String, required: true },
    price: {type: Number, required: true },
    inventory: {type: Object, required: true },
    id_supplier: {type: String, required: true },
    category: {type: [String], required: true },
    discount: {type: [Object], required: false },
    created_at: {type: Date, required: true },
    updated_at: {type: Date, required: false },
    deleted_at: {type: Date, required: false },
  });

  return mongoose.models.products || mongoose.model<IProduct>("products", productSchema);
};
