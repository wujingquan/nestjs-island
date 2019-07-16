import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { TypeOrmModule } from '@nestjs/typeorm';
import { ClassicModule } from './classic/classic.module';

@Module({
  imports: [TypeOrmModule.forRoot(), ClassicModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
