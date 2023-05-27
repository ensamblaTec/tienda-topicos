import express, { Request, Response } from "express";
import { UserAddressController } from "../controller/UserAddressController";

// Router from express
let userAddressRouter = express.Router();

// GET -> http://localhost:8000/api/v1/users
userAddressRouter.route("/").get(async (_: Request, res: Response) => {
  // Controller Instance to execute method
  const controller: UserAddressController = new UserAddressController();
  // Obtain Response
  const response = await controller.getUserAddress();
  console.log(`The response is: ${response}`);
  // Send to the client the response
  return res.status(200).send(response);
});

// Export Hello Router
export default userAddressRouter;
