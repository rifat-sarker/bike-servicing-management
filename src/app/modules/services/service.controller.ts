import { Request, Response } from "express";
import prisma from "../../utils/prisma";

import { Customer } from "@prisma/client";
import { RecordServices } from "./service.service";
import catchAsync from "../../utils/catchAsync";
import sendResponse from "../../utils/sendResponse";
import httpStatus from "http-status";

// Create service
const createService = catchAsync(async (req, res) => {
  const serviceData = req.body;
  const result = await RecordServices.createServiceIntoDB(serviceData);

  sendResponse(res, {
    statusCode: httpStatus.CREATED,
    success: true,
    message: "Service record created successfully",
    data: result,
  });
});

// get all services
const getAllServices = catchAsync(async (req, res) => {
  const result = await RecordServices.getAllServicesFromDB();

  sendResponse(res, {
    statusCode: httpStatus.OK,
    success: true,
    message: "Service record fetched successfully",
    data: result,
  });
});

// get specific service by id
const getSpecificService = catchAsync(async (req, res) => {
  const { id } = req.params;
  const result = await RecordServices.getSpecificeServiceFromDB(id);

  sendResponse(res, {
    statusCode: httpStatus.OK,
    success: true,
    message: "Service record fetched successfully",
    data: result,
  });
});

// update service
const updateService = catchAsync(async (req, res) => {
  const { id } = req.params;
  const result = await RecordServices.updateServiceIntoDB(id, req.body);

  sendResponse(res, {
    statusCode: httpStatus.OK,
    success: true,
    message: "Service marked as completed",
    data: result,
  });
});

// get service status
const getServiceStatus = catchAsync(async (req, res) => {
  const result = await RecordServices.getServiceStatusFromDB();

  sendResponse(res, {
    statusCode: httpStatus.OK,
    success: true,
    message: "Overdue or pending services fetched successfully",
    data: result,
  });
});

export const ServiceController = {
  createService,
  getAllServices,
  getSpecificService,
  updateService,
  getServiceStatus,
};
