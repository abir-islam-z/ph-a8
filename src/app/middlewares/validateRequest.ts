import { NextFunction, Request, Response } from 'express';
import { AnyZodObject } from 'zod';
import catchAsync from '../utils/catchAsync';

const validateRequest = (schema: AnyZodObject) => {
  return catchAsync(
    async (req: Request, _res: Response, next: NextFunction) => {
      const data = await schema.parseAsync(req.body);
      req.body = data;
      next();
    },
  );
};

export default validateRequest;
