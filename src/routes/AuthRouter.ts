import express, { Request, Response } from "express";
import { authenticateToken, generateAccessToken } from "../domain/middleware/authentication";

let authRouter = express.Router();

// GET -> localhost:3001/api/v1/auth/register
authRouter.route("/register").post(async (req: Request, res: Response) => {
  // const token = generateAccessToken({ username: req.body.username });
  // res.cookie("token", token);
  return res.json();
});

authRouter.route("/login").post(async (req: Request, res: Response) => {
  const token = generateAccessToken({ email: req.body.email });
  res.cookie("token", token);
  return res.json(token);
});

export default authRouter;
