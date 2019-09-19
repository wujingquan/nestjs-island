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

  @Get(':index/previous')
  async getPrev(@Param() dto: indexDto) {
    let { index } = dto;
    return await this.classicService.getClassicByIndex(--index);
  }

  @Get(':index/next')
  async getNext(@Param() dto: indexDto) {
    let { index } = dto;
    return await this.classicService.getClassicByIndex(++index);
  }
}
