import jwt from "jsonwebtoken";
import dotenv from "dotenv";
import crypto from "crypto";
import { NextFunction, Request, Response } from "express";

// Configuration bcrypt
crypto.randomBytes(64).toString("hex");

// '09f26e402586e2faa8da4c98a35f1b20d6b033c6097befa8be3486a829587fe2f90a832bd3ff9d42710a4da095a2ce285b009f0c3730cd9b8e1af3eb84df6611'
// Configuration the .env file
dotenv.config();

export const generateAccessToken = (email: any) => {
  const token = jwt.sign(email, process.env.TOKEN_SECRET, {
    expiresIn: "1800s",
  });

  return token;
};

export const authenticateToken = (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  const token = req.headers.authorization;
  if (token == null) return res.sendStatus(401);

  jwt.verify(
    token,
    process.env.TOKEN_SECRET as string,
    (err: any, user: any) => {
      if (err) {
        // res.clearCookie("token");
        return res.sendStatus(403).json({msg: 'Failed'});
      }
      console.log(user);

      return res.status(200).json({ msg: "Exito", user });

      // next();
    }
  );
};
