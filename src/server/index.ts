import express, { Express, Request, Response } from "express";

// Environment Variables
import dotenv from "dotenv";

// Swagger
import SwaggerUi from "swagger-ui-express";

// Security
import cors from "cors";
import helmet from "helmet";

// Https

// Root Router
import routes from "../routes";
import mongoose from "mongoose";

// Configuration the .env file
dotenv.config();

// Create express app
const server: Express = express();

// * Swagger Config and Router
server.use(
  "/docs",
  SwaggerUi.serve,
  SwaggerUi.setup(undefined, {
    swaggerOptions: {
      url: "/swagger.json",
      explorer: true,
    },
  })
);

// Define SERVER to use /api/v1 and execute rootRouter
// From this point onover:  http://localhost:8000/api/v1/...
server.use("/api/v1", routes);

// Static sever
server.use(express.static("public"));

// TODO: Mongoose Connection ${process.env.PASSWORD_MONGO}
mongoose.connect(`mongodb+srv://wedeeb:${process.env.PASSWORD_MONGO}@projects.camurfu.mongodb.net/tapw-ecommerce?retryWrites=true&w=majority`)

// * Security Config
server.use(helmet());
server.use(cors());

// * Content Type Config
server.use(express.urlencoded({ extended: true, limit: "20mb" }));
server.use(express.json({ limit: "20mb" }));

// * Redirections Config

// http://localhost:8000/ -> http://localhost:8000/api
server.get("/", (_: Request, res: Response) => {
  res.redirect("/api/v1");
});

export default server;