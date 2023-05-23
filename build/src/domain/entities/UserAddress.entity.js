"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.userAddressEntity = void 0;
const mongoose_1 = __importDefault(require("mongoose"));
// Schema User Address
const userAddressEntity = () => {
    let userSchema = new mongoose_1.default.Schema({
        name: String,
        email: String,
        age: Number,
    });
    return mongoose_1.default.model('users', userSchema);
};
exports.userAddressEntity = userAddressEntity;
//# sourceMappingURL=UserAddress.entity.js.map