import { Get, Route, Tags } from "tsoa";
import { IDiscountController } from "./interfaces";
import { LogSuccess, LogError } from "../utils/logger";

// ORM
import { getAllDiscounts } from "../domain/orm/Discount.orm";
import { BasicResponse } from "./types";

@Route("/api/v1/discounts")
@Tags("DiscountController")
export class DiscountController implements IDiscountController {
  /**
   * Endpoint to retreive the users in the Collection "Users" of Database
   * @returns all users
   */
  public async getDiscounts(): Promise<any> {
    LogSuccess("[/api/v1/users] Get All Discounts Request");

    const response = await getAllDiscounts();
    
    return response
  }
}
