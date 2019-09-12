import { Controller, Get } from '@nestjs/common';

@Controller('book')
export class BookController {
  @Get('/detai/:isbn')
  findOne() {}

  @Get('/favor/:book_id')
  findOneFavor() {}

  @Get('/favor_count')
  favorCount() {
    return 10;
  }
}
