import mongoose from "mongoose";

// Schema
export const supplierEntity = () => {
  let categorySchema = new mongoose.Schema({
    Supplier: String,
    firstName: String,
    lastName: String,
    telephone: String,
    created_at: Date,
    updated_at: Date,
    deleted_at: Date
  });
  
  return mongoose.models.Suppliers || mongoose.model('suppliers', categorySchema)
};
