import { Customer } from "@prisma/client";
import prisma from "../../utils/prisma";

// Create customer to the database
const createCustomerIntoDB = async (payload: Customer) => {
  const result = await prisma.customer.create({
    data: payload,
  });
  return result;
};

// get all customers from the db
const getAllCustomersFromDB = async () => {
  const result = await prisma.customer.findMany();
  return result;
};

// get specific customer from the db
const getSpecificCustomerFromDB = async (id: string) => {
  const result = await prisma.customer.findUnique({
    where: { customerId: id },
  });
  return result;
};

// update customer in the db
const updateCustomerIntoDB = async (id: string, payload: Partial<Customer>) => {
  const result = await prisma.customer.update({
    where: { customerId: id },
    data: payload,
  });
  return result;
};

export const CustomerServices = {
  createCustomerIntoDB,
  getAllCustomersFromDB,
  getSpecificCustomerFromDB,
  updateCustomerIntoDB,
};
