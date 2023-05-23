import { supplierEntity } from '../entities/Supplier.entity'
import { LogError, LogSuccess } from "../../utils/logger";

// CRUD REQUEST

/**
 * Method to obtain all Users from Collection "Users" in Mongo Server
 */
export const getAllSuppliers = async (): Promise<any[] | undefined> => {
    try {
        let discountModel = supplierEntity()
        // Search all users
        const discounts = await discountModel.find({})
        LogSuccess('[ORM SUCCESS]: Getting all discounts')
        return discounts
    } catch (error) {
        LogError(`[ORM ERROR]: Getting all discounts`)
    }
    return undefined
}

// TODO
// GET user by id
// GET user by email
// Delete user by id
// Delete user by email
// Create new User
// Update user by id