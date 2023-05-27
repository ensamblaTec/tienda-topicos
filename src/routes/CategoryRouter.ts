import express, { Request, Response } from "express";
import { CategoryController } from "../controller/CategoryController";

// Router from express
let categoryRouter = express.Router();

// GET -> http://localhost:8000/api/v1/categories
categoryRouter.route("/").get(async (req: Request, res: Response) => {
  // Controller Instance to execute method
  const controller: CategoryController = new CategoryController();
  // Obtain Response
  const limit: any = req?.query?.limit;
  console.log(limit)
  const response = await controller.getCategories(limit);
  // Send to the client the response
  return res.status(200).json(response);
});

export default categoryRouter;
