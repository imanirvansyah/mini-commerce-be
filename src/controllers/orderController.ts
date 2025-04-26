import { Request, Response } from "express";
import orders from "../models/orderModel";

let data = [...orders];

export const getOrders = (_: Request, res: Response) => {
  res.json({
    data,
    message: "Order data retrieved successfully",
    status: 200,
    meta: {
      total: data.length,
      totalPage: 3,
      page: 1,
      limit: 10,
    }
  });
};