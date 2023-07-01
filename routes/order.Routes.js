import express from "express";
import {
  createOrdersController,
  getOrdersController,
} from "../controllers/orderController.js";

const router = express.Router();

// Getting all the orders from mongodb database
router.get("/get/orders", getOrdersController);

// Creating a new Order in Database
router.post("/create/order", createOrdersController);

export default router;
