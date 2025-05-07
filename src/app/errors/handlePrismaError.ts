import { Prisma } from '@prisma/client';
import { TErrorSources, TGenericErrorResponse } from '../interface/error';

const handlePrismaError = (
  err: Prisma.PrismaClientKnownRequestError,
): TGenericErrorResponse => {
  let statusCode = 400;
  let message = 'Database operation failed';
  let errorSources: TErrorSources = [
    {
      path: '',
      message: err.message,
    },
  ];

  // Handle specific Prisma error codes
  if (err.code === 'P2002') {
    // Unique constraint violation
    const field = (err.meta?.target as string[]) || ['field'];
    message = `Duplicate ${field.join(', ')} value`;
    errorSources = [
      {
        path: field.join(', '),
        message: `${field.join(', ')} already exists`,
      },
    ];
  } else if (err.code === 'P2025') {
    // Record not found
    statusCode = 404;
    message = 'Record not found';
    errorSources = [
      {
        path: '',
        message: 'The requested record was not found',
      },
    ];
  } else if (err.code === 'P2003') {
    // Foreign key constraint violation
    message = 'Foreign key constraint violation';
    const field = (err.meta?.field_name as string) || 'field';
    errorSources = [
      {
        path: field,
        message: `Related ${field} does not exist`,
      },
    ];
  }

  return {
    statusCode,
    message,
    errorSources,
  };
};

export default handlePrismaError;
