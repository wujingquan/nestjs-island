import { Module } from '@nestjs/common';
import { BookController } from './book.controller';
import { HotBookModule } from '../hot-book/hot-book.module';
import { BookService } from './book.service';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Favor } from 'src/entities/favor.entity';
import { CommentModule } from '../comment/comment.module';

@Module({
  imports: [HotBookModule, CommentModule, TypeOrmModule.forFeature([Favor])],
  controllers: [BookController],
  providers: [BookService],
})
export class BookModule {}
