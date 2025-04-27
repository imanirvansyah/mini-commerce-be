import express from "express";
import { getDashboard } from "../controllers/dashboardController";

const router = express.Router();

router.route("/").get(getDashboard);

export default router;