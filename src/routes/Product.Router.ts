import express, { Request, Response } from "express";
import { LogInfo } from "../utils/logger";
import { ProductController } from "../controller/ProductController";

// Router from express
let productRouter = express.Router();

// GET, PUT -> http://localhost:8000/api/v1/products
productRouter
  .route("/")
  .get(async (req: Request, res: Response) => {
    // Controller instance to execute method
    const controller: ProductController = new ProductController();
    // Obtain response
    let response: any = [];
    const limit: any = req?.query?.limit;
    const category: any = req?.query?.category
    if (!limit || !category) {
      response = await controller.getProducts();
    } else {
      response = await controller.getProducts(limit, category);
    }
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
    // const response = await controller;
    return res.status(200).send("");
  })
  .put(async (req: Request, res: Response) => {
    let p = {
      ...req.body,
      updated_at: Date.now(),
    };
    // Controller instance to execute method
    const controller: ProductController = new ProductController();
    // category
    if (p.category) {
      const categories = await controller.getCategories(req.params.id);
      if (
        categories.find((category) => category === p.category) === undefined
      ) {
        categories.splice(0, 0, p.category);
      }
      p.category = categories;
    }
    // Obtain a response
    const response = await controller.updateProduct(p, req.params.id);
    // send response
    return res.status(200).json(response);
  });

export default productRouter;
