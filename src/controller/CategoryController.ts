import { Get, Query, Route, Tags } from "tsoa";
import { ICategoryController } from "./interfaces";
import { LogSuccess } from "../utils/logger";

// ORM
import { getAllCatgories } from "../domain/orm/Category.orm";

@Route("/api/v1/categories")
@Tags("CategoryController")
export class CategoryController implements ICategoryController {
  /**
   * Endpoint to retreive the users in the Collection "Users" of Database
   * @returns all users
   */
  @Get("/")
  public async getCategories(@Query() limit?: number): Promise<any> {
    LogSuccess("[/api/v1/categories] Get All Categories Request");
    if (!limit) {
      limit = 5
    }
    const response = await getAllCatgories(limit).then((categories) => {
      if (!categories) return categories;
      return categories.map((category) => {
        return category.category.pop();
      });
    });

    return response;
  }
}
