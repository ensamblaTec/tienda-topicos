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
server.use('/users', UserRouter_1.default); // GET: http://localhost:8000/api/v1/users -> UserRouter
server.use('/products', Product_Router_1.default); // GET: http://localhost:8000/api/v1/products -> ProductRouter
// Add more routes to the app
exports.default = server;
//# sourceMappingURL=index.js.map