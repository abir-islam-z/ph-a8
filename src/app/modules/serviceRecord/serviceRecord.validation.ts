import { z } from 'zod';

const createServiceRecordValidationSchema = z.object({
  bikeId: z.string({ required_error: 'Bike ID is required' }),
  serviceDate: z.string().transform(str => new Date(str)),
  description: z.string({ required_error: 'Description is required' }),
  status: z.enum(['pending', 'in-progress', 'done'], {
    required_error: 'Status must be one of: pending, in-progress, done',
  }),
  completionDate: z
    .string()
    .optional()
    .transform(str => (str ? new Date(str) : null)),
});

const updateServiceRecordValidationSchema = z.object({
  serviceDate: z
    .string()
    .transform(str => new Date(str))
    .optional(),
  description: z.string().optional(),
  status: z.enum(['pending', 'in-progress', 'done']).optional(),
  completionDate: z
    .string()
    .optional()
    .transform(str => (str ? new Date(str) : null)),
});

export const ServiceRecordValidation = {
  createServiceRecordValidationSchema,
  updateServiceRecordValidationSchema,
};
