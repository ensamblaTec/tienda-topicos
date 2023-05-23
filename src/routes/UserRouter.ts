import express, { Request, Response } from "express";
import { LogInfo } from "../utils/logger";
import { UserController } from "../controller/UsersController";

// Router from express
let userRouter = express.Router();

// GET -> http://localhost:8000/api/v1/users
userRouter.route("/").get(async (_: Request, res: Response) => {
  // Controller Instance to execute method
  const controller: UserController = new UserController();
  // Obtain Response
  const response = await controller.getUsers();
  // Send to the client the response
  return res.status(200).send(response);
});

// Export Hello Router
export default userRouter;
