import express from "express";
import {
  getCustomers,
  getCustomerById,
  getCustomerOrders
} from "../controllers/customerController";


const router = express.Router();

router.route("/").get(getCustomers);

router.route("/:id")
  .get(getCustomerById)
router.route("/:id/orders")
  .get(getCustomerOrders)


export default router;