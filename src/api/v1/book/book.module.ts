import { Module } from '@nestjs/common';
import { BookController } from './book.controller';
import { HotBookModule } from '../hot-book/hot-book.module';

@Module({
  imports: [HotBookModule],
  controllers: [BookController],
})
export class BookModule {}
