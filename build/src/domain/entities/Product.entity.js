"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.ProductEntity = void 0;
const mongoose_1 = __importDefault(require("mongoose"));
// Schema Product
const ProductEntity = () => {
    let productSchema = new mongoose_1.default.Schema({
        product: String,
        description: String,
        price: Number,
        id_inventory: Number,
        id_discount: Number,
        id_supplier: Number,
        created_at: Date,
        updated_at: Date,
        deleted_at: Date
    });
};
exports.ProductEntity = ProductEntity;
//# sourceMappingURL=Product.entity.js.map