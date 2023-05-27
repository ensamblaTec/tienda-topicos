import mongoose from "mongoose";
import { IAddress } from "../interface/IAddress.interface";

// Schema User Address
export const userAddressEntity = () => {
  let addressSchema = new mongoose.Schema<IAddress>({
    country: {type: String, required: true},
    state: {type: String, required: true},
    city: {type: String, required: true},
    address_line1: {type: String, required: true},
    address_line2: {type: String, required: false},
    postal_zip: {type: String, required: true},
    created_at: {type: Date, required: true},
    updated_at: {type: Date, required: false},
  });
  
  return mongoose.model<IAddress>('addresses', addressSchema)
};
