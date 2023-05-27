import { Get, Post, Put, Query, Route, Tags } from "tsoa";
import { IProductController } from "./interfaces";
import { LogSuccess } from "../utils/logger";

// ORM
import {
  getAllProducts,
  getProductByID,
  updateProductByID,
  // deleteProductByID,
  createProduct,
  getCategoriesByProductId,
} from "../domain/orm/Product.orm";

@Route("/api/v1/products")
@Tags("ProductController")
export class ProductController implements IProductController {
  /**
   * Endpoint to retreive products in the Collection 'products' of Mongo Server
   * @returns all products
   */
  @Get("/")
  public async getProducts(@Query() limit?: number, @Query() category?: string): Promise<any> {
    LogSuccess("[/api/v1/products] get all products request");

    const response = await getAllProducts(limit, category);

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
    @Query() product: any,
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
  public async createProduct(@Query() product: any): Promise<any> {
    LogSuccess(`create product with properties ${product}`);

    const response = await createProduct(product);

    return response;
  }

  /**
   *
   * @param {string} id ID Product
   * @returns an array categories
   */
  @Get("/categories/:id")
  public async getCategories(@Query() id: string): Promise<any[]> {
    LogSuccess(`get categories from product with id ${id}`);

    const response = await getCategoriesByProductId(id).then((categories) => {
      if (!categories) {
        return [];
      }
      const { category } = categories[0];
      LogSuccess(`get categories ${category}`);
      return category;
    });
    return response;
  }
}
