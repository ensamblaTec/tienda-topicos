import { Get, Post, Put, Query, Route, Tags } from "tsoa";
import { IProductController } from "./interfaces";
import { LogSuccess, LogError } from "../utils/logger";

// ORM
import {
  getAllProducts,
  getProductByID,
  updateProductByID,
  deleteProductByID,
  createProduct,
} from "../domain/orm/Product.orm";

@Route("/api/v1/products")
@Tags("ProductController")
export class ProductController implements IProductController {
  /**
   * Endpoint to retreive products in the Collection 'products' of Mongo Server
   * @returns all products
   */
  @Get("/")
  public async getProducts(): Promise<any> {
    LogSuccess("[/api/v1/products] get all products request");

    const response = await getAllProducts();

    return response;
  }

  /**
   *
   * @param {string} id ID product
   * @returns product response
   */
  @Get("/:id")
  public async getProduct(@Query() id: string): Promise<any> {
    LogSuccess(`[/api/v1/products] get product by ID: ${id}`);

    const response = await getProductByID(id);

    return response;
  }

  /**
   *
   * @param {Object} product Product with update properties
   * @param {string} id ID product
   * @returns product response
   */
  @Put("/:id")
  public async updateProduct(
    @Query() product: Object,
    @Query() id: string
  ): Promise<any> {
    LogSuccess(
      `[/api/v1/products] Update product with properties: ${product} and id ${id}`
    );
    
    const response = await updateProductByID(product, id);

    return response;
  }

  /**
   * 
   * @param {Object} product Product Object
   * @returns product response
   */
  @Post("/")
  public async createProduct(@Query() product: Object): Promise<any> {
    LogSuccess(`create product with properties ${product}`);

    const response = await createProduct(product);

    return response;
  }
}
