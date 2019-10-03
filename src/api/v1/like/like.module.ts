import { Module } from '@nestjs/common';
import { LikeController } from './like.controller';
import { LikeService } from './like.service';
import { ArtService } from '../art/art.service';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Favor } from 'src/entities/favor.entity';
import { ArtModule } from '../art/art.module';

@Module({
  imports: [ArtModule, TypeOrmModule.forFeature([Favor])],
  controllers: [LikeController],
  providers: [LikeService],
})
export class LikeModule {}
