import mongoose from "mongoose";
import { IUser } from "../interface/IUser.interface";
// Schema
export const userEntity = () => {
  let userSchema = new mongoose.Schema<IUser>({
    first_name: { type: String, required: true },
    last_name: { type: String, required: true },
    email: { type: String, required: true },
    password: { type: String, required: true },
    telephone: { type: String, required: true },
    last_login: { type: Date, required: false },
    birth: { type: Date, required: true },
    gender: { type: String, required: true },
    status: { type: String, required: false },
    payment: { type: [], required: false },
    address: { type: Object, required: false },
    created_at: { type: Date, required: true },
    updated_at: { type: Date, required: false },
  });

  return mongoose.models.users || mongoose.model<IUser>("users", userSchema);
};
