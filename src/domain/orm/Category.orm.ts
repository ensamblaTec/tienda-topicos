import { LogError, LogSuccess } from "../../utils/logger";
import { productEntity } from "../entities/Product.entity";

// CRUD REQUEST

/**
 * Method to obtain all Categories from Collection "categories" in Mongo Server
 */
export const getAllCatgories = async (limit?: number): Promise<any[] | undefined> => {
    try {
        let productModel = productEntity()
        // Search all categories
        const categories = await productModel.find({}, {category: 1, _id: 0}).limit(limit || 5)
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