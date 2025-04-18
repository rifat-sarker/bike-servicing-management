import { customerController } from "./customer.controller";
import express from "express";

const router = express.Router();
router.post("/", customerController.createCustomer);
router.get("/", customerController.getAllCustomers);
router.get("/:id", customerController.getSpecificCustomer);
router.put("/:id", customerController.updateCustomer);

export const CustomerRoutes = router;
