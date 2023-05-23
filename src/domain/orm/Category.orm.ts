import { LogError, LogSuccess } from "../../utils/logger";
import { categoryEntity } from "../entities/Category.entity";

// CRUD REQUEST

/**
 * Method to obtain all Categories from Collection "categories" in Mongo Server
 */
export const getAllCategories = async (): Promise<any[] | undefined> => {
    try {
        let categoryModel = categoryEntity()
        // Search all categories
        const categories = await categoryModel.find({})
        LogSuccess('[ORM SUCCESS]: Getting all categories')
        return categories
    } catch (error) {
        LogError(`[ORM ERROR]: Getting all categories`)
        return undefined
    }
}

// TODO
// GET user by id
// GET user by email
// Delete user by id
// Delete user by email
// Create new User
// Update user by id