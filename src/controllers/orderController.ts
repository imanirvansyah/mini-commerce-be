import { Request, Response } from "express";
import orders from "../models/orderModel";

let data = [...orders];

export const getOrders = (_: Request, res: Response) => {
  res.json(data);
};