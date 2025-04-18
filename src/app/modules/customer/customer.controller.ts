import { Request, Response } from "express";
import prisma from "../../utils/prisma";
import { CustomerServices } from "./customer.service";
import { Customer } from "@prisma/client";

// Create customer
const createCustomer = async (req: Request, res: Response): Promise<void> => {
  try {
    const customerData = req.body;

    const result = await CustomerServices.createCustomerIntoDB(customerData);

    res.status(201).json({
      success: true,
      message: "Customer created successfully",
      data: result,
    });
  } catch (error) {
    console.error("Error creating customer:", error);
    res.status(500).json({ message: "Internal server error" });
  }
};

// get all customers
const getAllCustomers = async (req: Request, res: Response) => {
  try {
    const result = await CustomerServices.getAllCustomersFromDB();
    res.status(200).json({
      success: true,
      message: "Customers fetched successfully",
      data: result,
    });
  } catch (error) {
    console.error("Error getting customers:", error);
    res.status(500).json({ message: "Fail to fetch customers" });
  }
};

// get specific customer by id
const getSpecificCustomer = async (req: Request, res: Response) => {
  try {
    const { id } = req.params;
    const result = await CustomerServices.getSpecificCustomerFromDB(id);
    if (!result) {
      res.status(404).json({
        success: false,
        message: "Customer not found",
      });
    }
    res.status(200).json({
      success: true,
      message: "Customer fetched successfully",
      data: result,
    });
  } catch (error) {
    console.error("Error getting customer:", error);
    res.status(500).json({ message: "Fail to fetch customer" });
  }
};

// update customer
const updateCustomer = async (req: Request, res: Response) => {
  try {
    const { id } = req.params;
    const result = await CustomerServices.updateCustomerIntoDB(id, req.body);
    if (!result) {
      res.status(404).json({
        success: false,
        message: "Customer not found",
      });
    }
    res.status(200).json({
      success: true,
      message: "Customer updated successfully",
      data: result,
    });
  } catch (error) {}
};

export const customerController = {
  createCustomer,
  getAllCustomers,
  getSpecificCustomer,
  updateCustomer,
};
