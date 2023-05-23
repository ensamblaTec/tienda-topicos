import mongoose from "mongoose";

// Schema
export const userEntity = () => {
  let userSchema = new mongoose.Schema({
    name: String,
    email: String,
    password: String,
    age: Number,
  });

  return mongoose.models.users || mongoose.model("users", userSchema);
};
