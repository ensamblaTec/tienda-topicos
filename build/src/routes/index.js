"use strict";
/**
 * Root Router
 * Redirections to Routers
 */
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const logger_1 = require("../utils/logger");
// import helloRouter from "./HelloRouter";
const UserRouter_1 = __importDefault(require("./UserRouter"));
const Product_Router_1 = __importDefault(require("./Product.Router"));
const CategoryRouter_1 = __importDefault(require("./CategoryRouter"));
const AuthRouter_1 = __importDefault(require("./AuthRouter"));
const authentication_1 = require("../domain/middleware/authentication");
// Server instance
let server = (0, express_1.default)();
// Router instance
let rootRouter = express_1.default.Router();
// Activate for requests
// GET: http://localhost:8000/api/v1/
rootRouter.get("/", (_, res) => {
    // Send message
    (0, logger_1.LogInfo)('GET: http://localhost:8000/api/v1/');
    res.send("Hello world");
});
// Redirections to Routers & Controllers
server.use('/', rootRouter); // GET: http://localhost:8000/api/v1/
// server.use('/hello', helloRouter); // GET: http://localhost:8000/api/v1/hello -> HelloRouter
server.use('/users', authentication_1.authenticateToken, UserRouter_1.default); // GET: http://localhost:8000/api/v1/users -> UserRouter
server.use('/products', Product_Router_1.default); // GET: http://localhost:8000/api/v1/products -> ProductRouter
server.use('/categories', CategoryRouter_1.default); // GET: http://localhost:8000/api/v1/categories -> CategoryRouter
server.use('/auth', AuthRouter_1.default); // GET: http://localhost:8000/api/v1/auth -> AuthRouter
// Add more routes to the app
exports.default = server;
//# sourceMappingURL=index.js.map