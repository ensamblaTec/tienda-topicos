import mongoose from "mongoose";

// Schema Product
export const ProductEntity = () => {
  let productSchema = new mongoose.Schema({
    product: String,
    description: String,
    price: Number,
    id_inventory: Number,
    id_discount: Number,
    id_supplier: Number,
    created_at: Date,
    updated_at: Date,
    deleted_at: Date
  });
};
