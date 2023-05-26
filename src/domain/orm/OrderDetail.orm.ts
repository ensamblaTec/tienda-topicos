import { orderDetailEntity } from "../entities/OrderDetail.entity";
import { LogSuccess, LogError } from "../../utils/logger";

// Get all Order Details
export const getAllOrderDetails = async () => {
  try {
    // Order Detail Model
    const orderDetailModel = orderDetailEntity();
    // Get all
    orderDetailModel.find({});
    LogSuccess(``);
  } catch (error) {
    LogError(``);
  }
};
