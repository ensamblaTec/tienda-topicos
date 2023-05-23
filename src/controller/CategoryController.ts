import { Get, Route, Tags } from "tsoa";
import { ICategoryController } from "./interfaces";
import { LogSuccess, LogError } from "../utils/logger";

// ORM
import { getAllUsers } from "../domain/orm/User.orm";
import { BasicResponse } from "./types";

@Route("/api/v1/categories")
@Tags("CategoryController")
export class CategoryController implements ICategoryController {
  /**
   * Endpoint to retreive the users in the Collection "Users" of Database
   * @returns all users
   */
  public async getCategories(): Promise<any> {
    LogSuccess("[/api/v1/users] Get All Categories Request");

    const response = await getAllUsers();
    
    return response
  }
}
