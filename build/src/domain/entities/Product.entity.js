"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.productEntity = void 0;
const mongoose_1 = __importDefault(require("mongoose"));
// Schema Product
const productEntity = () => {
    let productSchema = new mongoose_1.default.Schema({
        product: { type: String, required: true },
        description: { type: String, required: true },
        price: { type: Number, required: true },
        inventory: { type: Object, required: true },
        id_supplier: { type: String, required: true },
        category: { type: [String], required: true },
        discount: { type: [Object], required: false },
        created_at: { type: Date, required: true },
        updated_at: { type: Date, required: false },
        deleted_at: { type: Date, required: false },
    });
    return mongoose_1.default.models.products || mongoose_1.default.model("products", productSchema);
};
exports.productEntity = productEntity;
//# sourceMappingURL=Product.entity.js.map