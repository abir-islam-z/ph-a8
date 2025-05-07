import express from 'express';
import validateRequest from '../../middlewares/validateRequest';
import { ServiceRecordController } from './serviceRecord.controller';
import { ServiceRecordValidation } from './serviceRecord.validation';

const router = express.Router();

router.post(
  '/',
  validateRequest(ServiceRecordValidation.createServiceRecordValidationSchema),
  ServiceRecordController.createServiceRecord,
);

router.get('/', ServiceRecordController.getAllServiceRecords);

router.get('/status', ServiceRecordController.getPendingOrOverdueServices);

router.get('/:serviceId', ServiceRecordController.getServiceRecordById);

router.put(
  '/:serviceId/complete',
  validateRequest(ServiceRecordValidation.updateServiceRecordValidationSchema),
  ServiceRecordController.updateServiceRecord,
);

router.delete('/:serviceId', ServiceRecordController.deleteServiceRecord);

export const ServiceRecordRoutes = router;
