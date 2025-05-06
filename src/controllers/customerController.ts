import { Request, Response } from "express";
import customers from "../models/customerModel";
import orderModel from "../models/orderModel";

let data = [...customers];
let orders = [...orderModel]

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

export const getCustomerById = (req: Request, res: Response) => {
  const customer = data.find((c) => c.id === +req.params.id)
  customer ? res.json(customer) : res.status(404).json({ message: "Not found" });
}

export const getCustomerOrders = (req: Request, res: Response) => {
  res.json({
    data: orders,
    message: "Customer order data retrieved successfully",
    status: 200,
    meta: {
      total: data.length,
      totalPage: 3,
      page: 1,
      limit: 10,
    }
  });
}