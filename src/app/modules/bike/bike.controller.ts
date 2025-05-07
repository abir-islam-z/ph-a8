import { Request, Response } from 'express';
import httpStatus from 'http-status';
import catchAsync from '../../utils/catchAsync';
import { sendResponse } from '../../utils/sendResponse';
import { BikeService } from './bike.service';

const createBike = catchAsync(async (req: Request, res: Response) => {
  const result = await BikeService.createBike(req.body);

  sendResponse(res, {
    status: httpStatus.CREATED,
    success: true,
    message: 'Bike created successfully',
    data: result,
  });
});

const getAllBikes = catchAsync(async (_req: Request, res: Response) => {
  const result = await BikeService.getAllBikes();

  sendResponse(res, {
    status: httpStatus.OK,
    success: true,
    message: 'Bikes retrieved successfully',
    data: result,
  });
});

const getBikeById = catchAsync(async (req: Request, res: Response) => {
  const { bikeId } = req.params;
  const result = await BikeService.getBikeById(bikeId);

  sendResponse(res, {
    status: httpStatus.OK,
    success: true,
    message: 'Bike retrieved successfully',
    data: result,
  });
});

const updateBike = catchAsync(async (req: Request, res: Response) => {
  const { bikeId } = req.params;
  const result = await BikeService.updateBike(bikeId, req.body);

  sendResponse(res, {
    status: httpStatus.OK,
    success: true,
    message: 'Bike updated successfully',
    data: result,
  });
});

const deleteBike = catchAsync(async (req: Request, res: Response) => {
  const { bikeId } = req.params;
  await BikeService.deleteBike(bikeId);

  sendResponse(res, {
    status: httpStatus.OK,
    success: true,
    message: 'Bike deleted successfully',
  });
});

export const BikeController = {
  createBike,
  getAllBikes,
  getBikeById,
  updateBike,
  deleteBike,
};
