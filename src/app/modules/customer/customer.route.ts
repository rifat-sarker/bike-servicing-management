import { customerController } from "./customer.controller";
import express from "express";

const router = express.Router();
router.post("/", customerController.createCustomer);
router.get("/", customerController.getAllCustomers);

export const CustomerRoutes = router;
