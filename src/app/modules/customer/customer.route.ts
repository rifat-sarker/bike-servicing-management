import { customerController } from "./customer.controller";
import express from "express";

const router = express.Router();
router.post("/", customerController.createCustomer);
router.get("/", customerController.getAllCustomers);
router.get("/:id", customerController.getSpecificCustomer);
router.put("/:id", customerController.updateCustomer);
router.delete("/:id", customerController.deleteCustomer);

export const CustomerRoutes = router;
