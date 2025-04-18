import { Bike, Customer } from "@prisma/client";
import prisma from "../../utils/prisma";

// Create customer to the database
const createBikeIntoDB = async (payload: Bike) => {
  const result = await prisma.bike.create({
    data: payload,
  });
  return result;
};

// get all customers from the db
const getAllBikesFromDB = async () => {
  const result = await prisma.bike.findMany();
  return result;
};

// get specific customer from the db
const getSpecificBikeFromDB = async (id: string) => {
  const result = await prisma.bike.findUnique({
    where: { bikeId: id },
  });
  return result;
};

// update customer in the db
const updateBikeIntoDB = async (id: string, payload: Partial<Bike>) => {
  const result = await prisma.bike.update({
    where: { bikeId: id },
    data: payload,
  });
  return result;
};

// delete customer from the db
const deleteBikeFromDB = async (id: string) => {
  const result = await prisma.bike.delete({
    where: { bikeId: id },
  });
  return result;
};

export const BikeServices = {
  createBikeIntoDB,
  getAllBikesFromDB,
  getSpecificBikeFromDB,
  updateBikeIntoDB,
  deleteBikeFromDB,
};
