"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.deleteSupplier = exports.createSupplier = exports.updateSupplierByID = exports.getSupplierByID = exports.getAllSuppliers = void 0;
const Supplier_entity_1 = require("../entities/Supplier.entity");
const logger_1 = require("../../utils/logger");
// CRUD REQUEST
/**
 * Method to obtain all suppliers from Collection "suppliers" in Mongo Server
 */
const getAllSuppliers = () => __awaiter(void 0, void 0, void 0, function* () {
    (0, logger_1.LogSuccess)("[ORM SUCCESS]: Getting all suppliers");
    try {
        // Supplier Model
        let supplierModel = (0, Supplier_entity_1.supplierEntity)();
        // Search all suppliers
        const response = yield supplierModel.find({});
        return response;
    }
    catch (error) {
        (0, logger_1.LogError)(`[ORM ERROR]: Get all suppliers`);
    }
    return undefined;
});
exports.getAllSuppliers = getAllSuppliers;
/**
 * Method to obtain a supplier from Collection 'suppliers' in Mongo Server
 */
const getSupplierByID = (id) => __awaiter(void 0, void 0, void 0, function* () {
    (0, logger_1.LogSuccess)(`[ORM SUCCESS] Get supplier`);
    try {
        // Supplier Model
        const supplierModel = (0, Supplier_entity_1.supplierEntity)();
        // Search supplier by ID
        const response = yield supplierModel.find({ _id: id });
        // return response
        return response;
    }
    catch (error) {
        (0, logger_1.LogError)(`[ORM ERROR] Get supplier`);
    }
    return undefined;
});
exports.getSupplierByID = getSupplierByID;
/**
 * Method to update a supplier from Collection 'suppliers' in Mongo Server
 */
const updateSupplierByID = (supplier, id) => __awaiter(void 0, void 0, void 0, function* () {
    (0, logger_1.LogSuccess)(`[ORM SUCCESS] Update supplier`);
    try {
        // Supplier Model
        const supplierModel = (0, Supplier_entity_1.supplierEntity)();
        // Update supplier
        const response = yield supplierModel.findByIdAndUpdate({ _id: id }, supplier, { new: true });
        // return response
        return response;
    }
    catch (error) {
        (0, logger_1.LogError)(`[ORM ERROR] Update supplier`);
    }
    return undefined;
});
exports.updateSupplierByID = updateSupplierByID;
/**
 * Method to create a supplier from Collection 'suppliers' in Mongo Server
 */
const createSupplier = (supplier) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        // Supplier Model
        const supplierModel = (0, Supplier_entity_1.supplierEntity)();
        // Create Supplier
        const response = supplierModel.create(supplier);
        // send message
        (0, logger_1.LogSuccess)(`[ORM SUCCESS] Creating a supplier`);
        // return response
        return response;
    }
    catch (error) {
        (0, logger_1.LogError)(`[ORM ERROR] Creating a supplier`);
    }
});
exports.createSupplier = createSupplier;
/**
 * Method to delete a supplier from Collection 'suppliers' in Mongo Server
 */
const deleteSupplier = (id) => __awaiter(void 0, void 0, void 0, function* () { });
exports.deleteSupplier = deleteSupplier;
// TODO
// GET user by id
// GET user by email
// Delete user by id
// Delete user by email
// Create new User
// Update user by id
//# sourceMappingURL=Supplier.orm.js.map