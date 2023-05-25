"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};
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
exports.SupplierController = void 0;
const tsoa_1 = require("tsoa");
const logger_1 = require("../utils/logger");
// ORM
const Supplier_orm_1 = require("../domain/orm/Supplier.orm");
let SupplierController = class SupplierController {
    /**
     * Endpoint to retreive the suppliers in the Collection "Suppliers" of Database
     * @returns get suppliers
     */
    getSuppliers() {
        return __awaiter(this, void 0, void 0, function* () {
            (0, logger_1.LogSuccess)("[/api/v1/suppliers] Get All Suppliers Request");
            const response = yield (0, Supplier_orm_1.getAllSuppliers)();
            return response;
        });
    }
    /**
     *
     * @param {string} id ID supplier
     * @returns get supplier
     */
    getSupplier(id) {
        return __awaiter(this, void 0, void 0, function* () {
            (0, logger_1.LogSuccess)("[/api/v1/suppliers/:id] Get supplier request");
            const response = yield (0, Supplier_orm_1.getSupplierByID)(id);
            return response;
        });
    }
    /**
     *
     * @param {Object} supplier Supplier object
     * @param {string} id ID Supplier
     * @returns update response
     */
    updateSupplier(supplier, id) {
        return __awaiter(this, void 0, void 0, function* () {
            (0, logger_1.LogSuccess)("[/api/v1/suppliers] Update supplier request");
            const response = yield (0, Supplier_orm_1.updateSupplierByID)(supplier, id);
            return response;
        });
    }
    /**
     *
     * @param {Object} supplier
     * @returns create response
     */
    create(supplier) {
        return __awaiter(this, void 0, void 0, function* () {
            (0, logger_1.LogSuccess)("[/api/v1/suppliers] Create supplier request");
            const response = yield (0, Supplier_orm_1.createSupplier)(supplier);
            return response;
        });
    }
};
__decorate([
    (0, tsoa_1.Get)("/"),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", Promise)
], SupplierController.prototype, "getSuppliers", null);
__decorate([
    (0, tsoa_1.Get)("/:id"),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", Promise)
], SupplierController.prototype, "getSupplier", null);
__decorate([
    (0, tsoa_1.Put)("/:id"),
    __param(0, (0, tsoa_1.Query)()),
    __param(1, (0, tsoa_1.Query)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object, String]),
    __metadata("design:returntype", Promise)
], SupplierController.prototype, "updateSupplier", null);
__decorate([
    (0, tsoa_1.Post)("/"),
    __param(0, (0, tsoa_1.Query)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object]),
    __metadata("design:returntype", Promise)
], SupplierController.prototype, "create", null);
SupplierController = __decorate([
    (0, tsoa_1.Route)("/api/v1/suppliers"),
    (0, tsoa_1.Tags)("SuppliersController")
], SupplierController);
exports.SupplierController = SupplierController;
//# sourceMappingURL=SupplierController.js.map