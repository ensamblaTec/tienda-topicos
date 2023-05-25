"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.supplierEntity = void 0;
const mongoose_1 = __importDefault(require("mongoose"));
// Schema
const supplierEntity = () => {
    let supplierSchema = new mongoose_1.default.Schema({
        supplier: String,
        first_name: String,
        last_name: String,
        telephone: String,
        created_at: Date,
        updated_at: Date,
        deleted_at: Date
    });
    return mongoose_1.default.models.suppliers || mongoose_1.default.model('suppliers', supplierSchema);
};
exports.supplierEntity = supplierEntity;
//# sourceMappingURL=Supplier.entity.js.map