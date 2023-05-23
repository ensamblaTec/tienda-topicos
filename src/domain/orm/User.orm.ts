import { userEntity } from "../entities/User.entity";
import { LogError, LogSuccess } from "../../utils/logger";

// CRUD REQUEST

/**
 * Method to obtain all Users from Collection "Users" in Mongo Server
 */
export const getAllUsers = async (): Promise<any[] | undefined> => {
  try {
    let userModel = userEntity();
    // Search all users
    const users = await userModel.find({});
    LogSuccess("[ORM SUCCESS]: Getting all users");
    return users;
  } catch (error) {
    LogError(`[ORM ERROR]: Getting all users ${error}`);
    return undefined;
  }
};

// GET user by id
export const getUserByID = async (id: string): Promise<any | undefined> => {
  try {
    let userModel = userEntity()

    // Search User By ID
    const user = await userModel.findById(id)

    return user
  } catch (error) {
    LogError(`[ORM ERROR]: Getting user by id`)
  }
}

// TODO
// GET user by id
// GET user by email
// Delete user by id
// Delete user by email
// Create new User
// Update user by id
