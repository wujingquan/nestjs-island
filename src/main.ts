require('dotenv').config();
import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { ExceptionsFilter } from './common/ExceptionsFilter';
import {
  ValidationPipe,
  NotFoundException,
  BadRequestException,
} from '@nestjs/common';
import { AuthGuard } from '@nestjs/passport';
import { TransformInterceptor } from './transform.interceptor';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  app.setGlobalPrefix('v1');
  // app.useGlobalFilters(new ExceptionsFilter());
  // app.useGlobalInterceptors(new TransformInterceptor());
  app.useGlobalPipes(
    new ValidationPipe({
      validationError: {
        target: true,
        value: true,
      },
      forbidUnknownValues: true,
      // exceptionFactory (errors) {
      //   console.log(errors)
      //   // return errors;
      //   return new BadRequestException();
      //   // return new
      // },
    }),
  );
  // app.useGlobalGuards(AuthGuard('jwt'));
  await app.listen(3000);
}
bootstrap();
