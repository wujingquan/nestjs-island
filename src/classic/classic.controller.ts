import { Controller, Get } from '@nestjs/common';
import { ClassicService } from './classic.service';

@Controller('classic')
export class ClassicController {
  constructor(
    private readonly classicService: ClassicService
  ) { }

  @Get('/latest')
  async latest() {
    return await this.classicService.latest()
  }
}
