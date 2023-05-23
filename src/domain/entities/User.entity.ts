import mongoose from "mongoose";
import { IUser } from '../interface/IUser.interface';
// Schema
export const userEntity = () => {
  let userSchema = new mongoose.Schema<IUser>({
    first_name: { type: String, required: true },
    last_name: { type: String, required: true },
    email: { type: String, required: true },
    password: { type: String, required: true },
    telephone: { type: String, required: true },
    last_login: { type: Date, required: true },
    birth: { type: Date, required: true },
    gender: { type: String, required: true },
    status: { type: String, required: true },
    payment: { type: String, required: true },
    address: { type: String, required: true },
  });

  return mongoose.models.users || mongoose.model<IUser>("users", userSchema);
};
