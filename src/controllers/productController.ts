import { Request, Response } from "express";
import { Product } from "../types/product";
import products from "../models/productModel";

let data = [...products];

export const getProducts = (_: Request, res: Response) => {
  res.json(data);
};

export const getProductById = (req: Request, res: Response) => {
  const product = data.find((p) => p.id === +req.params.id);
  product ? res.json(product) : res.status(404).json({ message: "Not found" });
};

export const createProduct = (req: Request, res: Response) => {
  const newProduct: Product = {
    id: Date.now(),
    ...req.body
  };
  data.push(newProduct);
  res.status(201).json(newProduct);
};

export const updateProduct = (req: Request, res: Response) => {
  const index = data.findIndex((p) => p.id === +req.params.id);
  if (index === -1) return res.status(404).json({ message: "Not found" });
  data[index] = { ...data[index], ...req.body };
  res.json(data[index]);
};

export const deleteProduct = (req: Request, res: Response) => {
  data = data.filter((p) => p.id !== +req.params.id);
  res.status(204).end();
};
