import express, { Request, Response } from "express";
import { LogInfo } from "../utils/logger";
import { UserController } from "../controller/UsersController";

// Router from express
let userRouter = express.Router();

// GET -> http://localhost:8000/api/v1/users
userRouter
  .route("/")
  .get(async (_: Request, res: Response) => {
    // Controller Instance to execute method
    const controller: UserController = new UserController();
    // Obtain Response
    const response = await controller.getUsers();
    // Send to the client the response
    return res.status(200).json(response);
  })
  .post(async (req: Request, res: Response) => {
    const {
      first_name,
      last_name,
      email,
      password,
      telephone,
      birth,
      gender,
      created_at,
    }: any = req.body;
    if (
      !first_name ||
      !last_name ||
      !email ||
      !password ||
      !telephone ||
      !birth ||
      !gender ||
      !created_at
    ) {
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
    const controller: UserController = new UserController();
    // Obtain Response
    const response = await controller.create(user);
    // Send to the client the response
    return res.status(200).send(response);
  });

// GET -> http://localhost:8000/api/v1/users/:id
// PUT -> http://localhost:8000/api/v1/users/:id & json object
userRouter
  .route("/:id")
  .get(async (req: Request, res: Response) => {
    // Controller Instance to execute method
    const controller: UserController = new UserController();
    // Obtain Response
    const response = await controller.getUserByID(req?.params?.id);
    // Send to the client the response
    return res.status(200).send(response);
  })
  .put(async (req: Request, res: Response) => {
    // Controller Instance to execute method
    const controller: UserController = new UserController();
    let user = {
      ...req.body,
      updated_at: Date.now(),
    };
    if (user.payment) {
      let payments: any[] = await controller.getPayments(req.params.id);
      const payment: any = payments.find(p => p.no_account === user.payment.no_account)
      if (payment == undefined) {
        payments.splice(0, 0, user.payment)
      }
      user.payment = payments;
    }

    // Obtain Response
    const response = await controller.updateUserByID(user, req.params.id);
    // Send to the client the response
    return res.status(200).json(response);
  });

// Export Hello Router
export default userRouter;
