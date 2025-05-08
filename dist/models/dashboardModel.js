"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.dashboard = void 0;
const orderModel_1 = __importDefault(require("./orderModel"));
exports.dashboard = {
    todayRevenue: 100,
    todaysOrders: 100,
    NeedToShip: 100,
    onHoldOrders: 100,
    chart: {
        revenue: [
            { month: "January", total: 186 },
            { month: "February", total: 305 },
            { month: "March", total: 237 },
            { month: "April", total: 73 },
            { month: "May", total: 209 },
            { month: "June", total: 214 },
            { month: "July", total: 186 },
            { month: "August", total: 305 },
            { month: "September", total: 237 },
            { month: "October", total: 73 },
            { month: "November", total: 209 },
            { month: "December", total: 214 },
        ],
        products: [
            { name: "Shoes", total: 186 },
            { name: "Clothes", total: 305 },
            { name: "Electronics", total: 237 },
            { name: "Books", total: 73 },
            { name: "Toys", total: 209 },
            { name: "Furniture", total: 214 },
        ]
    },
    orderList: orderModel_1.default
};
