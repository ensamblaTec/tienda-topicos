import { userAddressEntity } from "../entities/Address.entity";
import { LogError, LogSuccess } from "../../utils/logger";

// CRUD REQUEST

/**
 * Method to obtain all Users from Collection "Users" in Mongo Server
 */
export const getAllUserAddress = async (): Promise<any[] | undefined> => {
  try {
    let addrModel = userAddressEntity();
    // Search all users
    const users = await addrModel.find({});
    LogSuccess("[ORM SUCCESS]: Getting all users address");
    return users;
  } catch (error) {
    LogError(`[ORM ERROR]: Getting all users address`);
    return undefined;
  }
};

export const create = async (address: Object): Promise<any | undefined> => {
  try {
    let addrModel = userAddressEntity();
    // Search all users
    const addr = await addrModel.create(address);
    return addr
    LogSuccess("[ORM SUCCESS]: Getting all users address");
  } catch (error) {
    LogError(`[ORM ERROR]: creating user address`);
  }
}
// TODO

// GET user by email
// Delete user by id
// Delete user by email
// Create new User
// Update user by id
