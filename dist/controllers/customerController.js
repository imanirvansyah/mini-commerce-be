"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.getCustomerOrders = exports.getCustomerById = exports.getCustomers = void 0;
const customerModel_1 = __importDefault(require("../models/customerModel"));
const orderModel_1 = __importDefault(require("../models/orderModel"));
let data = [...customerModel_1.default];
let orders = [...orderModel_1.default];
const getCustomers = (_, res) => {
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
exports.getCustomers = getCustomers;
const getCustomerById = (req, res) => {
    const customer = data.find((c) => c.id === +req.params.id);
    customer ? res.json(customer) : res.status(404).json({ message: "Not found" });
};
exports.getCustomerById = getCustomerById;
const getCustomerOrders = (req, res) => {
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
};
exports.getCustomerOrders = getCustomerOrders;
