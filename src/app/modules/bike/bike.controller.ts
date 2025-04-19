import { Request, Response } from "express";
import prisma from "../../utils/prisma";
import { BikeServices } from "./bike.service";
import catchAsync from "../../utils/catchAsync";
import sendResponse from "../../utils/sendResponse";
import httpStatus from "http-status";

// Create bike
const createBike = catchAsync(async (req, res) => {
  const bikeData = req.body;
  const result = await BikeServices.createBikeIntoDB(bikeData);

  sendResponse(res, {
    statusCode: httpStatus.CREATED,
    success: true,
    message: "Bike added successfully",
    data: result,
  });
});

// get all bikes
const getAllBikes = catchAsync(async (req, res) => {
  const result = await BikeServices.getAllBikesFromDB();

  sendResponse(res, {
    statusCode: httpStatus.OK,
    success: true,
    message: "Bikes fetched successfully",
    data: result,
  });
});

// get specific bike by id
const getSpecificBike = catchAsync(async (req, res) => {
  const { id } = req.params;
  const result = await BikeServices.getSpecificBikeFromDB(id);

  sendResponse(res, {
    statusCode: httpStatus.OK,
    success: true,
    message: "Bikes fetched successfully",
    data: result,
  });
});

export const BikeController = {
  createBike,
  getAllBikes,
  getSpecificBike,
};
