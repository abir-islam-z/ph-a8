import prisma from '../../utils/prisma';
import { CustomerWithoutBikes } from './customer.interface';

const createCustomer = async (customerData: CustomerWithoutBikes) => {
  const result = await prisma.customer.create({
    data: customerData,
  });
  return result;
};

const getAllCustomers = async () => {
  const result = await prisma.customer.findMany({});
  return result;
};

const getCustomerById = async (customerId: string) => {
  const result = await prisma.customer.findUnique({
    where: { customerId },
  });
  return result;
};

const updateCustomer = async (
  customerId: string,
  payload: Partial<CustomerWithoutBikes>,
) => {
  const result = await prisma.customer.update({
    where: { customerId },
    data: payload,
  });
  return result;
};

const deleteCustomer = async (customerId: string) => {
  await prisma.customer.delete({
    where: { customerId },
  });
};

export const CustomerService = {
  createCustomer,
  getAllCustomers,
  getCustomerById,
  updateCustomer,
  deleteCustomer,
};
