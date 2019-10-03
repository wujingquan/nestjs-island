import { Controller, Post, UseGuards, Body, Req } from '@nestjs/common';
import { LikeService } from './like.service';
import { AuthGuard } from '@nestjs/passport';
import { oneDto } from './one.dto';

@Controller('like')
export class LikeController {
  constructor(private readonly likeService: LikeService) {}

  // 点赞
  @UseGuards(AuthGuard('jwt'))
  @Post()
  async like(@Body() body: oneDto, @Req() req) {
    const uid = req.user.uid;
    return await this.likeService.like({
      uid,
      ...body,
    });
  }

  // 取消点赞
  @UseGuards(AuthGuard('jwt'))
  @Post('/cancel')
  async cancel(@Body() body: oneDto, @Req() req) {
    const uid = req.user.uid;
    return await this.likeService.cancel({
      uid,
      ...body,
    });
  }
}
