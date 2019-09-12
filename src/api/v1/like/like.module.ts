import { Module } from '@nestjs/common';
import { LikeController } from './like.controller';
import { LikeService } from './like.service';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Favor } from 'src/entities/favor.entity';

@Module({
  imports: [TypeOrmModule.forFeature([Favor])],
  controllers: [LikeController],
  providers: [LikeService],
})
export class LikeModule {}
