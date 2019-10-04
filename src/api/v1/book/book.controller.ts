import {
  Controller,
  Get,
  Param,
  Post,
  Body,
  Query,
  Req,
  UseGuards,
} from '@nestjs/common';
import { HotBookService } from '../hot-book/hot-book.service';
import { BookService } from './book.service';
import { CommentService } from '../comment/comment.service';
import { searchDto, bookFavorDto, addCommentDto } from './dto';
import { AuthGuard } from '@nestjs/passport';

@Controller('book')
export class BookController {
  constructor(
    private readonly bookService: BookService,
    private readonly hotBookService: HotBookService,
    private readonly commentService: CommentService,
  ) {}

  @Get('hot_list')
  async getHotList() {
    return await this.hotBookService.getAll();
  }

  @Get(':id/detail')
  async getDetail(@Param('id') id) {
    return await this.bookService.getDetail({ id });
  }

  @Get('search')
  async searchFromYushu(@Query() body: searchDto) {
    return await this.bookService.searchFromYushu(body);
  }

  @UseGuards(AuthGuard('jwt'))
  @Get('favor/count')
  async getFavorCount(@Req() req) {
    const uid = req.user.uid;
    return await this.bookService.getFavorCount({ uid });
  }

  @UseGuards(AuthGuard('jwt'))
  @Get(':book_id/favor')
  async getBookFavor(@Param() dto: bookFavorDto, @Req() req) {
    const uid = req.user.uid;
    return await this.bookService.getBookFavor({
      uid,
      id: dto.book_id,
    });
  }

  @UseGuards(AuthGuard('jwt'))
  @Post('add/short_comment')
  async addComment(@Body() dto: addCommentDto) {
    return await this.commentService.addComment({
      id: dto.book_id,
      ...dto,
    });
  }

  @UseGuards(AuthGuard('jwt'))
  @Get(':book_id/short_comment')
  async getComments(@Param() dto: bookFavorDto) {
    return await this.commentService.getComments({
      id: dto.book_id,
    });
  }
}
