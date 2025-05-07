import { z } from 'zod';

const createCustomerValidationSchema = z.object({
  name: z.string({ required_error: 'Name is required' }),
  email: z.string({ required_error: 'Email is required' }).email(),
  phone: z.string({ required_error: 'Phone is required' }),
});

const updateCustomerValidationSchema = z.object({
  name: z.string().optional(),
  email: z.string().email().optional(),
  phone: z.string().optional(),
});

export const CustomerValidation = {
  createCustomerValidationSchema,
  updateCustomerValidationSchema,
};
