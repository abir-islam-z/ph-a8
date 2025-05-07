import prisma from '../../utils/prisma';
import { ServiceRecordType } from './serviceRecord.interface';

const createServiceRecord = async (
  data: Omit<ServiceRecordType, 'serviceId'>,
) => {
  const result = await prisma.serviceRecord.create({
    data,
  });
  return result;
};

const getAllServiceRecords = async () => {
  const result = await prisma.serviceRecord.findMany({});
  return result;
};

const getServiceRecordById = async (serviceId: string) => {
  const result = await prisma.serviceRecord.findUnique({
    where: { serviceId },
  });
  return result;
};

const getPendingOrOverdueServices = async () => {
  // Calculate the date 7 days ago from now
  const sevenDaysAgo = new Date();
  sevenDaysAgo.setDate(sevenDaysAgo.getDate() - 7);

  const result = await prisma.serviceRecord.findMany({
    where: {
      AND: [
        {
          status: {
            in: ['PENDING', 'IN_PROGRESS'],
          },
        },
        {
          serviceDate: {
            lt: sevenDaysAgo,
          },
        },
      ],
    },
  });

  return result;
};

const completeServiceRecord = async (
  serviceId: string,
  payload: Partial<Omit<ServiceRecordType, 'serviceId'>>,
) => {
  const result = await prisma.serviceRecord.update({
    where: { serviceId },
    data: {
      completionDate: payload.completionDate || new Date(),
      status: payload.status || 'DONE',
    },
  });
  return result;
};

const deleteServiceRecord = async (serviceId: string) => {
  const result = await prisma.serviceRecord.delete({
    where: { serviceId },
  });
  return result;
};

export const ServiceRecordService = {
  createServiceRecord,
  getAllServiceRecords,
  getServiceRecordById,
  getPendingOrOverdueServices,
  completeServiceRecord,
  deleteServiceRecord,
};
