import mongoose from "mongoose";
import { IOrderDetail } from "../interface/IOrderDetail.interface";
// import { order } from '../../controller/types'
// Schema
export const orderDetailEntity = () => {
  let orderDetailSchema = new mongoose.Schema<IOrderDetail>({
    quantity: { type: Number, required: true },
    status: { type: String, required: true },
    date_buy: { type: Date, required: true },
    payment: { type: Object, required: true },
    order_item: { type: [Object], required: true },
    created_at: { type: Date, required: true },
    updated_at: { type: Date, required: false },
    deleted_at: { type: Date, required: false },
  });

  return mongoose.models.orderDetails || mongoose.model<IOrderDetail>('ordersDetail', orderDetailSchema)
};
