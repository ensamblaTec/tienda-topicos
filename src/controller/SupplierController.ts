import { Get, Post, Put, Query, Route, Tags } from "tsoa";
import { ISupplierController } from "./interfaces";
import { LogSuccess } from "../utils/logger";

// ORM
import {
  createSupplier,
  getAllSuppliers,
  getSupplierByID,
  updateSupplierByID,
} from "../domain/orm/Supplier.orm";

@Route("/api/v1/suppliers")
@Tags("SuppliersController")
export class SupplierController implements ISupplierController {
  /**
   * Endpoint to retreive the suppliers in the Collection "Suppliers" of Database
   * @returns get suppliers
   */
  @Get("/")
  public async getSuppliers(): Promise<any> {
    LogSuccess("[/api/v1/suppliers] Get All Suppliers Request");

    const response = await getAllSuppliers();

    return response;
  }

  /**
   *
   * @param {string} id ID supplier
   * @returns get supplier
   */
  @Get("/:id")
  public async getSupplier(id: string): Promise<any> {
    LogSuccess("[/api/v1/suppliers/:id] Get supplier request");

    const response = await getSupplierByID(id);

    return response;
  }

  /**
   *
   * @param {Object} supplier Supplier object
   * @param {string} id ID Supplier
   * @returns update response
   */
  @Put("/:id")
  public async updateSupplier(
    @Query() supplier: any,
    @Query() id: string
  ): Promise<any> {
    LogSuccess("[/api/v1/suppliers] Update supplier request");

    const response = await updateSupplierByID(supplier, id);

    return response;
  }

  /**
   * 
   * @param {Object} supplier 
   * @returns create response
   */
  @Post("/")
  public async create(@Query() supplier: any) {
    LogSuccess("[/api/v1/suppliers] Create supplier request");

    const response = await createSupplier(supplier);

    return response;
  }
}
