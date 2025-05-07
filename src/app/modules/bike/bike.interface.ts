import { Bike } from '@prisma/client';

export type BikeWithoutServices = Omit<Bike, 'services'>;
