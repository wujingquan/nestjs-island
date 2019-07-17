import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { TypeOrmModule } from '@nestjs/typeorm';
import { ClassicModule } from './classic/classic.module';
import { LikeModule } from './like/like.module';

@Module({
  imports: [TypeOrmModule.forRoot(), ClassicModule, LikeModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
