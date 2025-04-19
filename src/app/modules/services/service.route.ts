import express from "express";
import { ServiceController } from "./service.controller";

const router = express.Router();
router.get("/status", ServiceController.getServiceStatus);
router.post("/", ServiceController.createService);
router.get("/", ServiceController.getAllServices);
router.get("/:id", ServiceController.getSpecificService);
router.put("/:id", ServiceController.updateService);


export const ServiceRoutes = router;
