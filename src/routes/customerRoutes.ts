import express from "express";
import {
  getCustomers,
} from "../controllers/customerController";


const router = express.Router();

router.route("/").get(getCustomers);

export default router;