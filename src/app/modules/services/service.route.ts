import express from "express";
import { ServiceController } from "./service.controller";

const router = express.Router();
router.post("/", ServiceController.createService);
router.get("/", ServiceController.getAllServices);
router.get("/:id", ServiceController.getSpecificService);
router.put("/:id", ServiceController.updateService);
router.get("/status", ServiceController.getServiceStatus);

export const ServiceRoutes = router;
