import express, { Request, Response } from "express";
import { LogInfo } from "../utils/logger";
import { ProductController } from "../controller/ProductController";

// Router from express
let productRouter = express.Router();

// GET, PUT -> http://localhost:8000/api/v1/products
productRouter
  .route("/")
  .get(async (_: Request, res: Response) => {
    // Controller instance to execute method
    const controller: ProductController = new ProductController();
    // Obtain response
    const response = await controller.getProducts();
    // Send to the client the response
    return res.status(200).json(response);
  })
  .post(async (req: Request, res: Response) => {
    // Controller instance to execute method
    const controller: ProductController = new ProductController();
    // create product object
    let product = {
      ...req.body,
      updated_at: Date.now(),
    };
    // Obtain response
    const response = await controller.updateProduct(product, req.params.id);
    // Send response
    return res.status(200).json(response);
  });

// GET, DELETE -> http://localhost:8000/api/v1/products/:id
productRouter
  .route("/:id")
  .get(async (req: Request, res: Response) => {
    // Controller instance to execute method
    const controller: ProductController = new ProductController();
    // Obtain a response
    const response = await controller.getProduct(req.params.id);
    // send Response
    return res.status(200).json(response);
  })
  .delete(async (req: Request, res: Response) => {
    // Controller instance to execute method
    const controller: ProductController = new ProductController();
    // Obtain a response
    const response = await controller;
  })
  .put(async (req: Request, res: Response) => {
    // Controller instance to execute method
    const controller: ProductController = new ProductController();
    // Verify 
    let p = {
      ...req.body,
      updated_at: Date.now()
    };
    // Obtain a response
    const response = await controller.updateProduct(p, req.params.id);
    // send response
    return res.status(200).json(response);
  });

export default productRouter;
