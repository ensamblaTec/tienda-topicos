import express, { Request, Response } from "express";
import { LogInfo } from "../utils/logger";
import { CategoryController } from "@/controller/CategoryController";

// Router from express
let userRouter = express.Router();

// GET -> http://localhost:8000/api/v1/categories
userRouter.route("/").get(async (_: Request, res: Response) => {
  // Controller Instance to execute method
  const controller: CategoryController = new CategoryController();
  // Obtain Response
  const response = await controller.getCategories();
  console.log(`The response is: ${response}`);
  // Send to the client the response
  return res.status(200).send(response);
});

// Export Hello Router
export default userRouter;
