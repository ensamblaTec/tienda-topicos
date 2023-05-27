import { BasicResponse } from "../types";

export interface IHelloController {
  getMessage(name?: string): Promise<BasicResponse>;
}

export interface IUserController {
  // Read all users from database
  getUsers(): Promise<any>;
  // Find User by ID (ObjectID)
  getUserByID(id: string): Promise<any>;
}

export interface IUserAddressController {
  // Read all users from database
  getUserAddress(): Promise<any>;
}

export interface ICategoryController {
  // Read all users from database
  getCategories(limit?: number): Promise<any>;
}

export interface IInventoryController {
  // Read all users from database
  getInventory(): Promise<any>;
}

export interface ISupplierController {
  // Read all users from database
  getSuppliers(): Promise<any>;
}

export interface IDiscountController {
  // Read all users from database
  getDiscounts(): Promise<any>;
}

export interface IPaymentController {
  // Read all users from database
  getPayments(): Promise<any>;
}

export interface IProductController {
  // Read all products
  getProducts(limit?: number): Promise<any>;
  // Get product
  getProduct(id: string): Promise<any>;
  // Update product
  updateProduct(product: Object, id: string): Promise<any>
  // Create product
  createProduct(product: Object): Promise<any>;
}

export interface IOrderDetailController {
  // Read all orders
  getAllOrderDetails(): Promise<any>
  // Read order
  getOrderDetailByID(): Promise<any>
  // Update order
  updateOrderDetailByID(): Promise<any>
  // Create order
  createOrderDetail(): Promise<any>
  // delete order
  deleteOrderDetailByID(): Promise<any>
}