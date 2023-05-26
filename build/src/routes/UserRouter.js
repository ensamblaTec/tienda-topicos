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
userRouter
    .route("/")
    .get((_, res) => __awaiter(void 0, void 0, void 0, function* () {
    // Controller Instance to execute method
    const controller = new UsersController_1.UserController();
    // Obtain Response
    const response = yield controller.getUsers();
    // Send to the client the response
    return res.status(200).json(response);
}))
    .post((req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const { first_name, last_name, email, password, telephone, birth, gender, created_at, } = req.body;
    if (!first_name ||
        !last_name ||
        !email ||
        !password ||
        !telephone ||
        !birth ||
        !gender ||
        !created_at) {
        return res.status(400).send("cannot create user");
    }
    let user = {
        first_name,
        last_name,
        email,
        password,
        telephone,
        birth,
        gender,
        created_at: Date.now().toString(),
    };
    console.log(user);
    // Controller Instance to execute method
    const controller = new UsersController_1.UserController();
    // Obtain Response
    const response = yield controller.create(user);
    // Send to the client the response
    return res.status(200).send(response);
}));
// GET -> http://localhost:8000/api/v1/users/:id
// PUT -> http://localhost:8000/api/v1/users/:id & json object
userRouter
    .route("/:id")
    .get((req, res) => __awaiter(void 0, void 0, void 0, function* () {
    var _a;
    // Controller Instance to execute method
    const controller = new UsersController_1.UserController();
    // Obtain Response
    const response = yield controller.getUserByID((_a = req === null || req === void 0 ? void 0 : req.params) === null || _a === void 0 ? void 0 : _a.id);
    // Send to the client the response
    return res.status(200).send(response);
}))
    .put((req, res) => __awaiter(void 0, void 0, void 0, function* () {
    // Controller Instance to execute method
    const controller = new UsersController_1.UserController();
    let user = Object.assign(Object.assign({}, req.body), { updated_at: Date.now() });
    if (user.payment) {
        let payments = yield controller.getPayments(req.params.id);
        const payment = payments.find(p => p.no_account === user.payment.no_account);
        if (payment === undefined) {
            payments.splice(0, 0, user.payment);
        }
        user.payment = payments;
    }
    // Obtain Response
    const response = yield controller.updateUserByID(user, req.params.id);
    // Send to the client the response
    return res.status(200).json(response);
}));
// Export Hello Router
exports.default = userRouter;
//# sourceMappingURL=UserRouter.js.map