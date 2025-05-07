import express from 'express';
import validateRequest from '../../middlewares/validateRequest';
import { CustomerController } from './customer.controller';
import { CustomerValidation } from './customer.validation';

const router = express.Router();

router.post(
  '/',
  validateRequest(CustomerValidation.createCustomerValidationSchema),
  CustomerController.createCustomer,
);

router.get('/', CustomerController.getAllCustomers);

router.get('/:customerId', CustomerController.getCustomerById);

router.put(
  '/:customerId',
  validateRequest(CustomerValidation.updateCustomerValidationSchema),
  CustomerController.updateCustomer,
);

router.delete('/:customerId', CustomerController.deleteCustomer);

export const CustomerRoutes = router;
