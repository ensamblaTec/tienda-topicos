import { Get, Route, Tags } from "tsoa";
import { ISupplierController } from "./interfaces";
import { LogSuccess, LogError } from "../utils/logger";

// ORM
import { getAllSuppliers } from "../domain/orm/Supplier.orm";
import { BasicResponse } from "./types";

@Route("/api/v1/suppliers")
@Tags("SuppliersController")
export class SupplierController implements ISupplierController {
  /**
   * Endpoint to retreive the suppliers in the Collection "Suppliers" of Database
   * @returns all Suppliers
   */
  public async getSuppliers(): Promise<any> {
    LogSuccess("[/api/v1/suppliers] Get All Suppliers Request");

    const response = await getAllSuppliers();
    
    return response
  }
}
