import mongoose from "mongoose";
import { IInventory } from "../interface/IInventory.interface";

export const InventoryEntity = () => {
  let inventorySchema = new mongoose.Schema<IInventory>({
    quantity: { type: Number, required: true },
    created_at: { type: Date, required: true },
    updated_at: { type: Date, required: false },
    deleted_at: { type: Date, required: false },
  });

  return (
    mongoose.models.inventory || mongoose.model("invetories", inventorySchema)
  );
};
