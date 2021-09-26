import {
  ArgumentsHost,
  Catch,
  ExceptionFilter,
  HttpStatus,
} from '@nestjs/common';
import { Prisma } from 'prisma/prisma-client';
import { Response } from 'express';

@Catch(Prisma.PrismaClientValidationError)
export class PrismaBodyExcpetionFilter implements ExceptionFilter {
  catch(exception: Prisma.PrismaClientValidationError, host: ArgumentsHost) {
    const ctx = host.switchToHttp();
    const response = ctx.getResponse<Response>();

    try {
      const error = exception.message
        .split('\n')
        .filter(
          (line) => line.startsWith('Unknown') || line.startsWith('Argument'),
        )[0]
        .replace(/Available([\s\S])+/, '');

      response.status(HttpStatus.UNPROCESSABLE_ENTITY).json({
        statusCode: HttpStatus.UNPROCESSABLE_ENTITY,
        timestamp: new Date().toISOString(),
        error,
      });
    } catch (error) {
      response.status(HttpStatus.INTERNAL_SERVER_ERROR).json({
        statusCode: HttpStatus.INTERNAL_SERVER_ERROR,
        timestamp: new Date().toISOString(),
        error: 'Ocorreu um erro inesperado',
      });
    }
  }
}
