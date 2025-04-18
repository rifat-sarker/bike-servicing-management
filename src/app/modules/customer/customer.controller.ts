import { Request, Response } from "express";
import prisma from "../../utils/prisma";
import { CustomerServices } from "./customer.service";
import { Customer } from "@prisma/client";

// Create customer
const createCustomer = async (req: Request, res: Response) => {
  try {
    const customerData: Customer = req.body;

    const result = await CustomerServices.createCustomerIntoDB(customerData);

    res.status(201).json({
      success: true,
      message: "Customer created successfully",
      data: result,
    });
    return; 

  } catch (error) {
    console.error("Error creating customer:", error);
    return res.status(500).json({ message: "Internal server error" });
  }
};

export const customerController = {
  createCustomer,
};
