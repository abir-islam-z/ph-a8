import { Response } from 'express';

type ResponseType<T> = {
  success: boolean;
  message: string;
  status: number;
  data?: T;
  stack?: string;
};

export const sendResponse = <T>(res: Response, data: ResponseType<T>) => {
  const { stack, ...responseWithoutStack } = data;

  // Include stack trace only in development environment
  const responseBody =
    process.env.NODE_ENV === 'development' && stack
      ? { ...responseWithoutStack, stack }
      : responseWithoutStack;

  return res.status(data.status).json(responseBody);
};
