import prisma from '../../utils/prisma';
import { BikeWithoutServices } from './bike.interface';

const createBike = async (bikeData: BikeWithoutServices) => {
  const result = await prisma.bike.create({
    data: bikeData,
  });
  return result;
};

const getAllBikes = async () => {
  const result = await prisma.bike.findMany({
  });
  return result;
};

const getBikeById = async (bikeId: string) => {
  const result = await prisma.bike.findUnique({
    where: { bikeId },
  });
  return result;
};

const updateBike = async (
  bikeId: string,
  payload: Partial<BikeWithoutServices>,
) => {
  const result = await prisma.bike.update({
    where: { bikeId },
    data: payload,
  });
  return result;
};

const deleteBike = async (bikeId: string) => {
  await prisma.bike.delete({
    where: { bikeId },
  });
};

export const BikeService = {
  createBike,
  getAllBikes,
  getBikeById,
  updateBike,
  deleteBike,
};
