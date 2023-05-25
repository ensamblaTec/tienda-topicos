"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.discountEntity = void 0;
const mongoose_1 = __importDefault(require("mongoose"));
// Schema
const discountEntity = () => {
    let discountSchema = new mongoose_1.default.Schema({
        discount: { type: String, required: true },
        percentage: { type: Number, required: true },
        description: { type: String, required: true },
        status: { type: Boolean, required: true },
        created_at: { type: Date, required: true },
        updated_at: { type: Date, required: true },
        deleted_at: { type: Date, required: true },
    });
    return mongoose_1.default.models.discounts || mongoose_1.default.model('discounts', discountSchema);
};
exports.discountEntity = discountEntity;
//# sourceMappingURL=Discount.entity.js.map