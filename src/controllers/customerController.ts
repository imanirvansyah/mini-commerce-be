import { Request, Response } from "express";
import customers from "../models/customerModel";

let data = [...customers];

export const getCustomers = (_: Request, res: Response) => {
  res.json({
    data,
    message: "Customer data retrieved successfully",
    status: 200,
    meta: {
      total: data.length,
      totalPage: 3,
      page: 1,
      limit: 10,
    }
  });
};