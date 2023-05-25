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
    let userModel = userEntity();

    // Search User By ID
    const user = await userModel.findById(id);

    return user;
  } catch (error) {
    LogError(`[ORM ERROR]: Getting user by id`);
  }
};

export const updateOneUser = async (
  user: Object,
  id: string
): Promise<any | undefined> => {
  try {
    // user model
    let userModel = userEntity();
    // Search user by id
    const usr = await userModel.findOneAndUpdate({ _id: id }, user, {
      new: true,
    });
    return usr;
  } catch (error) {
    LogError(`[ORM ERROR]: Updating user by id`);
  }
};

export const createOneUser = async (user: Object): Promise<any | undefined> => {
  try {
    // User model
    let userModel = userEntity();
    // create user
    const usr = await userModel.create(user);
    return usr;
  } catch (error) {
    LogError(`[ORM ERROR]: creating an user ${error}`);
  }
};

export const getAllPayments = async (
  id: string
): Promise<any[] | undefined> => {
  try {
    let userModel = userEntity();
    // Obtain a response
    const payments: any = await userModel.find(
      { _id: id },
      { payment: 1, _id: 0 }
    );
    return payments;
  } catch (error) {
    LogError(`[ORM ERROR]: getting paymenst to use with id ${id} ${error}`);
    return undefined;
  }
};
// TODO
// GET user by id
// GET user by email
// Delete user by id
// Delete user by email
// Create new User
// Update user by id
