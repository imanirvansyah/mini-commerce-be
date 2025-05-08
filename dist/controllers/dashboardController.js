"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.getDashboard = void 0;
const dashboardModel_1 = require("../models/dashboardModel");
let data = { ...dashboardModel_1.dashboard };
const getDashboard = (_, res) => {
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
exports.getDashboard = getDashboard;
