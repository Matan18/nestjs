import {
  ArgumentsHost,
  Catch,
  ExceptionFilter,
  HttpStatus,
} from '@nestjs/common';
import { Prisma } from 'prisma/prisma-client';
import { Response } from 'express';

type IResponseData = {
  statusCode: HttpStatus;
  error: string | unknown | undefined;
};

@Catch(Prisma.PrismaClientKnownRequestError)
export class PrismaParamExcpetionFilter implements ExceptionFilter {
  catch(exception: Prisma.PrismaClientKnownRequestError, host: ArgumentsHost) {
    const ctx = host.switchToHttp();
    const response = ctx.getResponse<Response>();

    const responseData: IResponseData = {
      statusCode: HttpStatus.INTERNAL_SERVER_ERROR,
      error: 'Internal server Error',
    };
    if (exception.code === 'P2025') {
      responseData.statusCode = HttpStatus.NOT_FOUND;
      responseData.error = exception.meta;
    }

    response.status(HttpStatus.UNPROCESSABLE_ENTITY).json({
      timestamp: new Date().toISOString(),
      ...responseData,
    });
  }
}
