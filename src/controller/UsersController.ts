import { Get, Post, Put, Query, Route, Tags } from "tsoa";
import { IUserController } from "./interfaces";
import { LogSuccess, LogError } from "../utils/logger";

// ORM
import {
  createOneUser,
  getAllUsers,
  getUserByID,
  updateOneUser,
  getAllPayments,
} from "../domain/orm/User.orm";

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

    return response;
  }

  /**
   * Endpoint to retreive an user by ID from Collection "users" of Database
   * @param id Param ID user
   * @returns User or undefided value
   */
  @Get("/:id")
  public async getUserByID(@Query() id: string): Promise<any> {
    LogSuccess(`[/api/v1/users] Get user by ID: ${id}`);

    const response = await getUserByID(id);

    return response;
  }

  /**
   * Endpoint to update an user by ID from Collection 'users' of Mongo Server
   * @param {Object} user User Object
   * @returns User or undefided value
   */
  @Put("/:id")
  public async updateUserByID(
    @Query() user: Object,
    @Query() id: string
  ): Promise<any> {
    LogSuccess(`[/api/v1/users] Update user with properties: ${user}`);

    const response = await updateOneUser(user, id);

    return response;
  }

  /**
   * Endpoint to update an user by ID from Collection 'users' of Mongo Server
   * @param {Object} user User Object
   * @returns User or undefided value
   */
  @Post("/")
  public async create(@Query() user: Object): Promise<any> {
    LogSuccess(`[/api/v1/users] create user with properties: ${user}`);

    const response = await createOneUser(user);

    return response;
  }

  /**
   * Endpoint to get all payments by id user from Collection 'users' of Mongo Server
   * @param {string} id ID user
   * @returns Payments array
   */
  @Get("/:id/payments")
  public async getPayments(@Query() id: string): Promise<any[]> {
    LogSuccess(
      `[/api/v1/users/:id/payments] create user with properties: ${id}`
    );

    const response = await getAllPayments(id).then((p) => {
      if (!p) {
        return []
      }
      const payment = p[0].payment;
      return payment;
    });

    return response
  }
}
