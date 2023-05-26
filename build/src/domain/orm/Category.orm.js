"use strict";
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
exports.getAllCatgories = void 0;
const logger_1 = require("../../utils/logger");
const Product_entity_1 = require("../entities/Product.entity");
// CRUD REQUEST
/**
 * Method to obtain all Categories from Collection "categories" in Mongo Server
 */
const getAllCatgories = (limit) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        let productModel = (0, Product_entity_1.productEntity)();
        // Search all categories
        const categories = yield productModel.find({}, { category: 1, _id: 0 }).limit(limit || 10);
        (0, logger_1.LogSuccess)('[ORM SUCCESS]: Getting all categories');
        return categories;
    }
    catch (error) {
        (0, logger_1.LogError)(`[ORM ERROR]: Getting all categories`);
        return undefined;
    }
});
exports.getAllCatgories = getAllCatgories;
// TODO
// GET user by id
// GET user by email
// Delete user by id
// Delete user by email
// Create new User
// Update user by id
//# sourceMappingURL=Category.orm.js.map