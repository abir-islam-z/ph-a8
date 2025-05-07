import { Request, Response } from 'express';
import httpStatus from 'http-status';
import catchAsync from '../../utils/catchAsync';
import { sendResponse } from '../../utils/sendResponse';
import { ServiceRecordService } from './serviceRecord.service';

const createServiceRecord = catchAsync(async (req: Request, res: Response) => {
  const result = await ServiceRecordService.createServiceRecord(req.body);

  sendResponse(res, {
    status: httpStatus.CREATED,
    success: true,
    message: 'Service record created successfully',
    data: result,
  });
});

const getAllServiceRecords = catchAsync(
  async (_req: Request, res: Response) => {
    const result = await ServiceRecordService.getAllServiceRecords();

    sendResponse(res, {
      status: httpStatus.OK,
      success: true,
      message: 'Service records retrieved successfully',
      data: result,
    });
  },
);

const getPendingOrOverdueServices = catchAsync(
  async (_req: Request, res: Response) => {
    const result = await ServiceRecordService.getPendingOrOverdueServices();

    sendResponse(res, {
      status: httpStatus.OK,
      success: true,
      message: 'Pending or overdue service records retrieved successfully',
      data: result,
    });
  },
);

const getServiceRecordById = catchAsync(async (req: Request, res: Response) => {
  const { serviceId } = req.params;
  const result = await ServiceRecordService.getServiceRecordById(serviceId);

  sendResponse(res, {
    status: httpStatus.OK,
    success: true,
    message: 'Service record retrieved successfully',
    data: result,
  });
});

const updateServiceRecord = catchAsync(async (req: Request, res: Response) => {
  const { serviceId } = req.params;
  const result = await ServiceRecordService.completeServiceRecord(
    serviceId,
    req.body,
  );

  sendResponse(res, {
    status: httpStatus.OK,
    success: true,
    message: 'Service record updated successfully',
    data: result,
  });
});

const deleteServiceRecord = catchAsync(async (req: Request, res: Response) => {
  const { serviceId } = req.params;
  const result = await ServiceRecordService.deleteServiceRecord(serviceId);

  sendResponse(res, {
    status: httpStatus.OK,
    success: true,
    message: 'Service record deleted successfully',
    data: result,
  });
});

export const ServiceRecordController = {
  createServiceRecord,
  getAllServiceRecords,
  getServiceRecordById,
  getPendingOrOverdueServices,
  updateServiceRecord,
  deleteServiceRecord,
};
