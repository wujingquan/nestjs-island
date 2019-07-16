import { Module } from '@nestjs/common';
import { ClassicController } from './classic.controller';
import { ClassicService } from './classic.service';

@Module({
  controllers: [ClassicController],
  providers: [ClassicService]
})
export class ClassicModule {}
