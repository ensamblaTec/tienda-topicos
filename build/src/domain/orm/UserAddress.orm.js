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
exports.getAllUserAddress = void 0;
const UserAddress_entity_1 = require("../entities/UserAddress.entity");
const logger_1 = require("../../utils/logger");
// CRUD REQUEST
/**
 * Method to obtain all Users from Collection "Users" in Mongo Server
 */
const getAllUserAddress = () => __awaiter(void 0, void 0, void 0, function* () {
    try {
        let userAddressModel = (0, UserAddress_entity_1.userAddressEntity)();
        // Search all users
        const users = yield userAddressModel.find({});
        (0, logger_1.LogSuccess)("[ORM SUCCESS]: Getting all users address");
        return users;
    }
    catch (error) {
        (0, logger_1.LogError)(`[ORM ERROR]: Getting all users address`);
        return undefined;
    }
});
exports.getAllUserAddress = getAllUserAddress;
// TODO
// GET user by email
// Delete user by id
// Delete user by email
// Create new User
// Update user by id
//# sourceMappingURL=UserAddress.orm.js.map