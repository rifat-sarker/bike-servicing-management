import { CustomerServices } from "./customer.service";
import catchAsync from "../../utils/catchAsync";
import sendResponse from "../../utils/sendResponse";
import httpStatus from "http-status";
import AppError from "../../errors/AppError";

// Create customer
const createCustomer = catchAsync(async (req, res) => {
  const customerData = req.body;
  const result = await CustomerServices.createCustomerIntoDB(customerData);

  sendResponse(res, {
    statusCode: httpStatus.CREATED,
    success: true,
    message: "Customer created successfully",
    data: result,
  });
});

// get all customers
const getAllCustomers = catchAsync(async (req, res) => {
  const result = await CustomerServices.getAllCustomersFromDB();

  sendResponse(res, {
    statusCode: httpStatus.OK,
    success: true,
    message: "Customers fetched successfully",
    data: result,
  });
});

// get specific customer by id
const getSpecificCustomer = catchAsync(async (req, res) => {
  const { id } = req.params;
  const result = await CustomerServices.getSpecificCustomerFromDB(id);

   if (!result) {
     throw new AppError(404, "Customer not found");
   }
  sendResponse(res, {
    statusCode: httpStatus.OK,
    success: true,
    message: "Customers fetched successfully",
    data: result,
  });
});

// update customer
const updateCustomer = catchAsync(async (req, res) => {
  const { id } = req.params;
  const result = await CustomerServices.updateCustomerIntoDB(id, req.body);

  sendResponse(res, {
    statusCode: httpStatus.OK,
    success: true,
    message: "Customer updated successfully",
    data: result,
  });
});

// delete customer
const deleteCustomer = catchAsync(async (req, res) => {
  const { id } = req.params;
  const result = await CustomerServices.deleteCustomerFromDB(id);

  sendResponse(res, {
    statusCode: httpStatus.OK,
    success: true,
    message: "Customer deleted successfully",
    data: null,
  });
});

export const customerController = {
  createCustomer,
  getAllCustomers,
  getSpecificCustomer,
  updateCustomer,
  deleteCustomer,
};
