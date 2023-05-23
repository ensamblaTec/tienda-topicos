import { userAddressEntity } from "../entities/UserAddress.entity";
import { LogError, LogSuccess } from "../../utils/logger";

// CRUD REQUEST

/**
 * Method to obtain all Users from Collection "Users" in Mongo Server
 */
export const getAllUserAddress = async (): Promise<any[] | undefined> => {
  try {
    let userAddressModel = userAddressEntity();
    // Search all users
    const users = await userAddressModel.find({});
    LogSuccess("[ORM SUCCESS]: Getting all users address");
    return users;
  } catch (error) {
    LogError(`[ORM ERROR]: Getting all users address`);
    return undefined;
  }
};

// TODO

// GET user by email
// Delete user by id
// Delete user by email
// Create new User
// Update user by id
