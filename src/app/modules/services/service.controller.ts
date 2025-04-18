import { Request, Response } from "express";
import prisma from "../../utils/prisma";

import { Customer } from "@prisma/client";
import { RecordServices } from "./service.service";

// Create service
const createService = async (req: Request, res: Response): Promise<void> => {
  try {
    const serviceData = req.body;

    const result = await RecordServices.createServiceIntoDB(serviceData);

    res.status(201).json({
      success: true,
      message: "Service record created successfully",
      data: result,
    });
  } catch (error) {
    console.error("Error creating service:", error);
    res.status(500).json({ message: "Internal server error" });
  }
};

// get all services
const getAllServices = async (req: Request, res: Response) => {
  try {
    const result = await RecordServices.getAllServicesFromDB();
    res.status(200).json({
      success: true,
      message: "Service record fetched successfully",
      data: result,
    });
  } catch (error) {
    console.error("Error getting services:", error);
    res.status(500).json({ message: "Fail to fetch services" });
  }
};

// get specific service by id
const getSpecificService = async (req: Request, res: Response) => {
  try {
    const { id } = req.params;
    const result = await RecordServices.getSpecificeServiceFromDB(id);
    if (!result) {
      res.status(404).json({
        success: false,
        message: "Service not found",
      });
    }
    res.status(200).json({
      success: true,
      message: "Service record fetched successfully",
      data: result,
    });
  } catch (error) {
    console.error("Error getting service:", error);
    res.status(500).json({ message: "Fail to fetch service" });
  }
};

// update service
const updateService = async (req: Request, res: Response) => {
  try {
    const { id } = req.params;
    const result = await RecordServices.updateServiceIntoDB(id, req.body);
    if (!result) {
      res.status(404).json({
        success: false,
        message: "Service not found",
      });
    }
    res.status(200).json({
      success: true,
      message: "Service marked as completed",
      data: result,
    });
  } catch (error) {
    console.error("Error updating service:", error);
    res.status(500).json({ message: "Fail to update service" });
  }
};

export const ServiceController = {
  createService,
  getAllServices,
  getSpecificService,
  updateService,
};
