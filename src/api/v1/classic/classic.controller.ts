import { Controller, Get, Param, Body } from '@nestjs/common';
import { ClassicService } from './classic.service';
import { indexDto } from './classic.dto';

@Controller('classic')
export class ClassicController {
  constructor(private readonly classicService: ClassicService) {}

  @Get('/latest')
  async latest() {
    return await this.classicService.latest(1);
  }

  @Get(':index/next')
  async getNext(@Body() dto: indexDto) {
    console.log(typeof dto, dto);
    // this.classicService.getNext(index);
  }
}
