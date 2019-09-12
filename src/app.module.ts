import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { TypeOrmModule } from '@nestjs/typeorm';
import { ClassicModule } from './api/v1/classic/classic.module';
import { LikeModule } from './api/v1/like/like.module';
import { TokenModule } from './api/v1/token/token.module';
import { UserModule } from './api/v1/user/user.module';

@Module({
  imports: [
    TypeOrmModule.forRoot(),
    ClassicModule,
    LikeModule,
    TokenModule,
    UserModule,
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
