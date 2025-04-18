import { Customer, ServiceRecord } from "@prisma/client";
import prisma from "../../utils/prisma";

// Create service to the database
const createServiceIntoDB = async (payload: ServiceRecord) => {
  const result = await prisma.serviceRecord.create({
    data: payload,
  });
  return result;
};

// get all services from the db
const getAllServicesFromDB = async () => {
  const result = await prisma.serviceRecord.findMany();
  return result;
};

// get specific service from the db
const getSpecificeServiceFromDB = async (id: string) => {
  const result = await prisma.serviceRecord.findUnique({
    where: { serviceId: id },
  });
  return result;
};

// update service in the db
const updateServiceIntoDB = async (
  id: string,
  payload: Partial<ServiceRecord>
) => {
  const result = await prisma.serviceRecord.update({
    where: { serviceId: id },
    data: payload,
  });
  return result;
};

export const RecordServices = {
  createServiceIntoDB,
  getAllServicesFromDB,
  getSpecificeServiceFromDB,
  updateServiceIntoDB,
};
