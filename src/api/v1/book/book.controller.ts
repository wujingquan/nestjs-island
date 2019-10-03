import { Controller, Get } from '@nestjs/common';
import { HotBookService } from '../hot-book/hot-book.service';

@Controller('book')
export class BookController {
  constructor(private readonly hotBookService: HotBookService) {}

  @Get('hot_list')
  async getHotList() {
    return await this.hotBookService.getAll();
  }

  @Get('/detai/:isbn')
  findOne() {}

  @Get('/favor/:book_id')
  findOneFavor() {}

  @Get('/favor_count')
  favorCount() {
    return 10;
  }
}
