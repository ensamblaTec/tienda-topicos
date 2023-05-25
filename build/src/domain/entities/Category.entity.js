"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.categoryEntity = void 0;
const mongoose_1 = __importDefault(require("mongoose"));
// Schema
const categoryEntity = () => {
    let categorySchema = new mongoose_1.default.Schema({
        category: { type: String, required: true },
        description: { type: String, required: true },
        created_at: { type: Date, required: true },
        updated_at: { type: Date, required: true },
    });
    return mongoose_1.default.models.Categories || mongoose_1.default.model('categories', categorySchema);
};
exports.categoryEntity = categoryEntity;
//# sourceMappingURL=Category.entity.js.map