"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.userEntity = void 0;
const mongoose_1 = __importDefault(require("mongoose"));
// Schema
const userEntity = () => {
    let userSchema = new mongoose_1.default.Schema({
        first_name: { type: String, required: true },
        last_name: { type: String, required: true },
        email: { type: String, required: true },
        password: { type: String, required: true },
        telephone: { type: String, required: true },
        last_login: { type: Date, required: false },
        birth: { type: Date, required: true },
        gender: { type: String, required: true },
        status: { type: String, required: false },
        payment: { type: [], required: false },
        address: { type: Object, required: false },
        created_at: { type: Date, required: true },
        updated_at: { type: Date, required: false },
    });
    return mongoose_1.default.models.users || mongoose_1.default.model("users", userSchema);
};
exports.userEntity = userEntity;
//# sourceMappingURL=User.entity.js.map