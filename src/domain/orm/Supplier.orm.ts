import { supplierEntity } from "../entities/Supplier.entity";
import { LogError, LogSuccess } from "../../utils/logger";

// CRUD REQUEST

/**
 * Method to obtain all suppliers from Collection "suppliers" in Mongo Server
 */
export const getAllSuppliers = async (): Promise<any[] | undefined> => {
  LogSuccess("[ORM SUCCESS]: Getting all suppliers");
  try {
    // Supplier Model
    let supplierModel = supplierEntity();
    // Search all suppliers
    const response = await supplierModel.find({});
    return response;
  } catch (error) {
    LogError(`[ORM ERROR]: Get all suppliers`);
  }
  return undefined;
};

/**
 * Method to obtain a supplier from Collection 'suppliers' in Mongo Server
 */
export const getSupplierByID = async (id: string): Promise<any | undefined> => {
  LogSuccess(`[ORM SUCCESS] Get supplier`);
  try {
    // Supplier Model
    const supplierModel = supplierEntity();
    // Search supplier by ID
    const response = await supplierModel.find({ _id: id });
    // return response
    return response;
  } catch (error) {
    LogError(`[ORM ERROR] Get supplier`);
  }
  return undefined;
};

/**
 * Method to update a supplier from Collection 'suppliers' in Mongo Server
 */
export const updateSupplierByID = async (
  supplier: Object,
  id: String
): Promise<any | undefined> => {
  LogSuccess(`[ORM SUCCESS] Update supplier`);
  try {
    // Supplier Model
    const supplierModel = supplierEntity();
    // Update supplier
    const response = await supplierModel.findByIdAndUpdate(
      { _id: id },
      supplier,
      { new: true }
    );
    // return response
    return response;
  } catch (error) {
    LogError(`[ORM ERROR] Update supplier`);
  }
  return undefined;
};

/**
 * Method to create a supplier from Collection 'suppliers' in Mongo Server
 */
export const createSupplier = async (supplier: Object): Promise<any> => {
  try {
    // Supplier Model
    const supplierModel = supplierEntity();
    // Create Supplier
    const response = supplierModel.create(supplier);
    // send message
    LogSuccess(`[ORM SUCCESS] Creating a supplier`);
    // return response
    return response;
  } catch (error) {
    LogError(`[ORM ERROR] Creating a supplier`);
  }
};

/**
 * Method to delete a supplier from Collection 'suppliers' in Mongo Server
 */
// export const deleteSupplier = async (id: string): Promise<any> => {};

// TODO
// GET user by id
// GET user by email
// Delete user by id
// Delete user by email
// Create new User
// Update user by id
