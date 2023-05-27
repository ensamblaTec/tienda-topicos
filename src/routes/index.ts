/**
 * Root Router
 * Redirections to Routers
 */

import express, { Response } from "express";
import { LogInfo } from "../utils/logger";
// import helloRouter from "./HelloRouter";
import userRouter from "./UserRouter";
import productRouter from './Product.Router'
import categoryRouter from './CategoryRouter';
import authRouter from "./AuthRouter";
import { authenticateToken } from "../domain/middleware/authentication";

// Server instance
let server = express();

// Router instance
let rootRouter = express.Router();

// Activate for requests

// GET: http://localhost:8000/api/v1/
rootRouter.get("/", (_, res: Response) => {
  // Send message
  LogInfo('GET: http://localhost:8000/api/v1/')
  res.send("Hello world");
});

// Redirections to Routers & Controllers
server.use('/', rootRouter); // GET: http://localhost:8000/api/v1/
// server.use('/hello', helloRouter); // GET: http://localhost:8000/api/v1/hello -> HelloRouter
server.use('/users', authenticateToken, userRouter); // GET: http://localhost:8000/api/v1/users -> UserRouter
server.use('/products', productRouter); // GET: http://localhost:8000/api/v1/products -> ProductRouter
server.use('/categories', categoryRouter); // GET: http://localhost:8000/api/v1/categories -> CategoryRouter
server.use('/auth', authRouter); // GET: http://localhost:8000/api/v1/auth -> AuthRouter
// Add more routes to the app

export default server;