"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.getOrders = void 0;
const orderModel_1 = __importDefault(require("../models/orderModel"));
let data = [...orderModel_1.default];
const getOrders = (_, res) => {
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
exports.getOrders = getOrders;
