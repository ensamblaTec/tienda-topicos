import { Get, Query, Route, Tags } from "tsoa";
import { ICategoryController } from "./interfaces";
import { LogSuccess, LogError } from "../utils/logger";

// ORM
import { getAllCatgories } from "../domain/orm/Category.orm";
import { BasicResponse } from "./types";

@Route("/api/v1/categories")
@Tags("CategoryController")
export class CategoryController implements ICategoryController {
  /**
   * Endpoint to retreive the users in the Collection "Users" of Database
   * @param {number} limit
   * @returns all users
   */
  public async getCategories(@Query() limit?: number): Promise<any> {
    LogSuccess("[/api/v1/categories] Get All Categories Request");

    const response = await getAllCatgories(limit).then((categories) => {
      if (!categories) return categories;
      const response = categories.map((category) => {
        category
      });
      return response;
    });

    return response;
  }
}
