import { Controller, Post } from '@nestjs/common';
import { LikeService } from './like.service'

@Controller('like')
export class LikeController {
  constructor(
    private readonly likeService: LikeService
  ) {

  }

  // 点赞
  @Post()
  async like() {
    return await this.likeService.like(1, 100, 1)
  }

  // 取消点赞
  @Post('/cancel')
  async cancel() {
    return await this.likeService.cancel(1, 100, 1)
  }
}
