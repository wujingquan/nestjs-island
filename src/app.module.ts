import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { TypeOrmModule } from '@nestjs/typeorm';
import { ClassicModule } from './classic/classic.module';
import { LikeModule } from './like/like.module';
import { AuthModule } from './auth/auth.module';

@Module({
  imports: [TypeOrmModule.forRoot(), ClassicModule, LikeModule, AuthModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
