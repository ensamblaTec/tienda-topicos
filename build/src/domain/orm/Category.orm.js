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
exports.getAllCategories = void 0;
const logger_1 = require("../../utils/logger");
const Category_entity_1 = require("../entities/Category.entity");
// CRUD REQUEST
/**
 * Method to obtain all Categories from Collection "categories" in Mongo Server
 */
const getAllCategories = () => __awaiter(void 0, void 0, void 0, function* () {
    try {
        let categoryModel = (0, Category_entity_1.categoryEntity)();
        // Search all categories
        const categories = yield categoryModel.find({});
        (0, logger_1.LogSuccess)('[ORM SUCCESS]: Getting all categories');
        return categories;
    }
    catch (error) {
        (0, logger_1.LogError)(`[ORM ERROR]: Getting all categories`);
        return undefined;
    }
});
exports.getAllCategories = getAllCategories;
// TODO
// GET user by id
// GET user by email
// Delete user by id
// Delete user by email
// Create new User
// Update user by id
//# sourceMappingURL=Category.orm.js.map