import express from 'express';
import validateRequest from '../../middlewares/validateRequest';
import { BikeController } from './bike.controller';
import { BikeValidation } from './bike.validation';

const router = express.Router();

router.post(
  '/',
  validateRequest(BikeValidation.createBikeValidationSchema),
  BikeController.createBike,
);

router.get('/', BikeController.getAllBikes);

router.get('/:bikeId', BikeController.getBikeById);

router.put(
  '/:bikeId',
  validateRequest(BikeValidation.updateBikeValidationSchema),
  BikeController.updateBike,
);

router.delete('/:bikeId', BikeController.deleteBike);

export const BikeRoutes = router;
