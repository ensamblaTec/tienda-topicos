import express, { Request, Response } from "express";
import { SupplierController } from "../controller/SupplierController";

// Router from express
let userRouter = express.Router();

// GET -> http://localhost:8000/api/v1/users
userRouter.route("/").get(async (_: Request, res: Response) => {
  // Controller Instance to execute method
  const controller: SupplierController = new SupplierController();
  // Obtain Response
  const response = await controller.getSuppliers();
  console.log(`The response is: ${response}`);
  // Send to the client the response
  return res.status(200).send(response);
});

// Export Hello Router
export default userRouter;
