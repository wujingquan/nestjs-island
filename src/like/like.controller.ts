import { Controller, Post } from '@nestjs/common';
import { LikeService } from './like.service'

@Controller('like')
export class LikeController {
  constructor(
    private readonly likeService: LikeService
  ) {

  }

  @Post()
  async like() {
    return await this.likeService.like()
  }

  @Post('/cancel')
  async cancel() {
    return await this.likeService.cancel()
  }

}
