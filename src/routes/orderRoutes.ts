import express from "express";
import {
  getOrders
} from "../controllers/orderController";


const router = express.Router();

router.route("/").get(getOrders);

export default router;