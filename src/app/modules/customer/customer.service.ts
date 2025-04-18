import { Customer } from "@prisma/client";
import prisma from "../../utils/prisma";


// Create customer to the database
const createCustomerIntoDB = async (payload: Customer) => {
  try {
    const result = await prisma.customer.create({
      data: payload,
    });
    return result;

  } catch (error) {
    console.error("Error creating customer:", error);
    throw new Error("Internal server error");
  }
};

export const CustomerServices = {
  createCustomerIntoDB,
};
