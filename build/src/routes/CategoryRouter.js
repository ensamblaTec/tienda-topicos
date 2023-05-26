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
const CategoryController_1 = require("../controller/CategoryController");
// Router from express
let categoryRouter = express_1.default.Router();
// GET -> http://localhost:8000/api/v1/categories
categoryRouter.route("/").get((_, res) => __awaiter(void 0, void 0, void 0, function* () {
    // Controller Instance to execute method
    const controller = new CategoryController_1.CategoryController();
    // Obtain Response
    const response = yield controller.getCategories();
    console.log(`The response is: ${response}`);
    // Send to the client the response
    return res.status(200).send(response);
}));
// Export Hello Router
exports.default = categoryRouter;
//# sourceMappingURL=CategoryRouter.js.map