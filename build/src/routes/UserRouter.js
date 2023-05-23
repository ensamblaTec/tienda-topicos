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
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const UsersController_1 = require("../controller/UsersController");
// Router from express
let userRouter = express_1.default.Router();
// GET -> http://localhost:8000/api/v1/users
userRouter.route("/").get((_, res) => __awaiter(void 0, void 0, void 0, function* () {
    // Controller Instance to execute method
    const controller = new UsersController_1.UserController();
    // Obtain Response
    const response = yield controller.getUsers();
    // Send to the client the response
    return res.status(200).send(response);
}));
// Export Hello Router
exports.default = userRouter;
//# sourceMappingURL=UserRouter.js.map