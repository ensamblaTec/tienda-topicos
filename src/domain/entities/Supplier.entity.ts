import mongoose from "mongoose";
import { ISupplier } from "../interface/ISupplier.interface";

// Schema
export const supplierEntity = () => {
  let supplierSchema = new mongoose.Schema<ISupplier>({
    supplier: String,
    first_name: String,
    last_name: String,
    telephone: String,
    created_at: Date,
    updated_at: Date,
    deleted_at: Date
  });
  
  return mongoose.models.suppliers || mongoose.model<ISupplier>('suppliers', supplierSchema)
};
