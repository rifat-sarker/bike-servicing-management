import { Request, Response } from "express";
import prisma from "../../utils/prisma";
import { BikeServices } from "./bike.service";

// Create bike
const createBike = async (req: Request, res: Response): Promise<void> => {
  try {
    const bikeData = req.body;

    const result = await BikeServices.createBikeIntoDB(bikeData);

    res.status(201).json({
      success: true,
      message: "Bike added successfully",
      data: result,
    });
  } catch (error) {
    console.error("Error creating bike:", error);
    res.status(500).json({ message: "Internal server error" });
  }
};

// get all bikes
const getAllBikes = async (req: Request, res: Response) => {
  try {
    const result = await BikeServices.getAllBikesFromDB();
    res.status(200).json({
      success: true,
      message: "Bikes fetched successfully",
      data: result,
    });
  } catch (error) {
    console.error("Error getting bikes:", error);
    res.status(500).json({ message: "Fail to fetch bikes" });
  }
};

// get specific bike by id
const getSpecificBike = async (req: Request, res: Response) => {
  try {
    const { id } = req.params;
    const result = await BikeServices.getSpecificBikeFromDB(id);
    if (!result) {
      res.status(404).json({
        success: false,
        message: "Bike not found",
      });
    }
    res.status(200).json({
      success: true,
      message: "Bike fetched successfully",
      data: result,
    });
  } catch (error) {
    console.error("Error getting bike:", error);
    res.status(500).json({ message: "Fail to fetch bike" });
  }
};

export const BikeController = {
  createBike,
  getAllBikes,
  getSpecificBike,
};
