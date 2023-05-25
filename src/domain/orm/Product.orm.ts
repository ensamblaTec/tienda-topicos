import { userEntity } from "../entities/User.entity";
import { LogError, LogSuccess } from "../../utils/logger";
import { productEntity } from "../entities/Product.entity";

// CRUD REQUEST

/**
 * Method to obtain all Users from Collection "products" in Mongo Server
 */
export const getAllProducts = async (): Promise<any[] | undefined> => {
  try {
    // Product Model
    const productModel = productEntity();
    // Search all products
    const response = await productModel.find({});
    // return all users
    return response;
  } catch (error) {
    LogError(`[ORM ERROR] cannot get product`);
    return undefined;
  }
};

/**
 * Method to obtain a one product from Collection 'products' in Mongo Server
 */
export const getProductByID = async (id: string): Promise<any | undefined> => {
  try {
    // Product Model
    const productModel = productEntity();
    // Search one product
    const response = await productModel.find({ _id: id });
    // return all users
    return response;
  } catch (error) {
    LogError(`[ORM ERROR] cannot get product`);
    return undefined;
  }
};

/**
 * Method to update a one product from Collection 'products' in Mongo Server
 */
export const updateProductByID = async (
  product: Object,
  id: string
): Promise<any | undefined> => {
  try {
    // Product Model
    const productModel = productEntity();
    // Update product
    const response = await productModel.findByIdAndUpdate(
      { _id: id },
      product,
      { new: true }
    );
    // return updated product
    return response;
  } catch (error) {
    LogError(`[ORM ERROR] cannot update product`);
    return undefined;
  }
};

/**
 * Method to delete a one product from Collection 'products' in Mongo Server
 */
export const deleteProductByID = async (
  id: string
): Promise<any | undefined> => {
  try {
    // Product Model
    const productModel = productEntity();
    // Delete product
    const response = await productModel.findByIdAndDelete({ _id: id });
    // return deleted product
    return response;
  } catch (error) {
    LogError(`[ORM ERROR] cannot delete user`);
    return undefined;
  }
};

/**
 * Method to create a product from Collection 'products' in Mongo Server
 */
export const createProduct = async (
  product: Object
): Promise<any | undefined> => {
  try {
    // Product Model
    const productModel = productEntity();
    // Create product
    const response = await productModel.create(product);
    // return created product
    return response;
  } catch (error) {
    LogError(`[ORM ERROR] cannot create product`);
    return undefined;
  }
};
