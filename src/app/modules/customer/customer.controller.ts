import { Request, Response } from 'express';
import httpStatus from 'http-status';
import catchAsync from '../../utils/catchAsync';
import { sendResponse } from '../../utils/sendResponse';
import { CustomerService } from './customer.service';

const createCustomer = catchAsync(async (req: Request, res: Response) => {
  const result = await CustomerService.createCustomer(req.body);

  sendResponse(res, {
    status: httpStatus.CREATED,
    success: true,
    message: 'Customer created successfully',
    data: result,
  });
});

const getAllCustomers = catchAsync(async (_req: Request, res: Response) => {
  const result = await CustomerService.getAllCustomers();

  sendResponse(res, {
    status: httpStatus.OK,
    success: true,
    message: 'Customers retrieved successfully',
    data: result,
  });
});

const getCustomerById = catchAsync(async (req: Request, res: Response) => {
  const { customerId } = req.params;
  const result = await CustomerService.getCustomerById(customerId);

  sendResponse(res, {
    status: httpStatus.OK,
    success: true,
    message: 'Customer retrieved successfully',
    data: result,
  });
});

const updateCustomer = catchAsync(async (req: Request, res: Response) => {
  const { customerId } = req.params;
  const result = await CustomerService.updateCustomer(customerId, req.body);

  sendResponse(res, {
    status: httpStatus.OK,
    success: true,
    message: 'Customer updated successfully',
    data: result,
  });
});

const deleteCustomer = catchAsync(async (req: Request, res: Response) => {
  const { customerId } = req.params;
  await CustomerService.deleteCustomer(customerId);

  sendResponse(res, {
    status: httpStatus.OK,
    success: true,
    message: 'Customer deleted successfully',
  });
});

export const CustomerController = {
  createCustomer,
  getAllCustomers,
  getCustomerById,
  updateCustomer,
  deleteCustomer,
};
