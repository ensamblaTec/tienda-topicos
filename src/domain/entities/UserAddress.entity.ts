import mongoose from "mongoose";

// Schema User Address
export const userAddressEntity = () => {
  let userSchema = new mongoose.Schema({
    name: String,
    email: String,
    age: Number,
  });
  
  return mongoose.model('users', userSchema)
};
