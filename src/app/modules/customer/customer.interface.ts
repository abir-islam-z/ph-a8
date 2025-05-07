import { Customer } from '@prisma/client';

export type CustomerWithoutBikes = Omit<Customer, 'bikes'>;
