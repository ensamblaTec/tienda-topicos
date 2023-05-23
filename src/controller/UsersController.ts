import { Get, Query, Route, Tags } from "tsoa";
import { IUserController } from "./interfaces";
import { LogSuccess, LogError } from "../utils/logger";

// ORM
import { getAllUsers, getUserByID } from "../domain/orm/User.orm";

@Route("/api/v1/users")
@Tags("UserController")
export class UserController implements IUserController {
  /**
   * Endpoint to retreive the users in the Collection "users" of Database
   * @returns all users
   */
  @Get("/")
  public async getUsers(): Promise<any> {
    LogSuccess("[/api/v1/users] Get All Users Request");

    const response = await getAllUsers();
    
    return response
  }

  /**
   * Endpoint to retreive an user by ID from Collection "users" of Database
   * @param id Param ID user
   * @returns User or undefided value
   */
  @Get("/:id")
  public async getUserByID(@Query() id?: string): Promise<any> {
    LogSuccess(`[/api/v1/users] Get user by ID: ${id}`)

    const response = await getUserByID("1")

    return {
      message: `Obtaining user with ID: ${id}`
    }
  }
}
