"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.discountEntity = void 0;
const mongoose_1 = __importDefault(require("mongoose"));
// Schema
const discountEntity = () => {
    let categorySchema = new mongoose_1.default.Schema({
        category: String,
        description: String,
    });
    return mongoose_1.default.models.Discounts || mongoose_1.default.model('discounts', categorySchema);
};
exports.discountEntity = discountEntity;
//# sourceMappingURL=Discount.entity.js.map