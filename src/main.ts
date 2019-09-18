require('dotenv').config();
import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { ExceptionsFilter } from './common/ExceptionsFilter';
import { ValidationPipe } from '@nestjs/common';
import { AuthGuard } from '@nestjs/passport';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  app.setGlobalPrefix('v1');
  // app.useGlobalFilters(new ExceptionsFilter());
  app.useGlobalPipes(
    new ValidationPipe({
      validationError: {
        target: true,
        value: true,
      },
      forbidUnknownValues: true,
    }),
  );
  // app.useGlobalGuards(AuthGuard('jwt'));

  // @UseGuards(AuthGuard('local'))
  await app.listen(3000);
}
bootstrap();
