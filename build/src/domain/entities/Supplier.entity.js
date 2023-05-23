"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.supplierEntity = void 0;
const mongoose_1 = __importDefault(require("mongoose"));
// Schema
const supplierEntity = () => {
    let categorySchema = new mongoose_1.default.Schema({
        Supplier: String,
        firstName: String,
        lastName: String,
        telephone: String,
        created_at: Date,
        updated_at: Date,
        deleted_at: Date
    });
    return mongoose_1.default.models.Suppliers || mongoose_1.default.model('suppliers', categorySchema);
};
exports.supplierEntity = supplierEntity;
//# sourceMappingURL=Supplier.entity.js.map