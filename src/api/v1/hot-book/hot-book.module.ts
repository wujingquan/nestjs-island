import { Module } from '@nestjs/common';
import { HotBookService } from './hot-book.service';
import { TypeOrmModule } from '@nestjs/typeorm';
import { HotBook } from 'src/entities/hot-book.entity';
import { Favor } from 'src/entities/favor.entity';

@Module({
  imports: [TypeOrmModule.forFeature([HotBook, Favor])],
  providers: [HotBookService],
  exports: [HotBookService],
})
export class HotBookModule {}
