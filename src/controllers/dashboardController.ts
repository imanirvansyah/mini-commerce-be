import { Request, Response } from "express";
import { dashboard } from "../models/dashboardModel";

let data = { ...dashboard };

export const getDashboard = (_: Request, res: Response) => {
  res.json({
    data,
    message: "Dashboard data retrieved successfully",
    status: 200,
    meta: {
      totalPage: 3,
      page: 1,
      limit: 10,
    }
  });
};