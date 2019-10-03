import { Controller, Get, Param, Body, UseGuards, Req } from '@nestjs/common';
import { ClassicService } from './classic.service';
import { ArtService } from '../art/art.service';
import { indexDto, favorDto, detailDto } from './classic.dto';
import { AuthGuard } from '@nestjs/passport';

@Controller('classic')
export class ClassicController {
  constructor(
    private readonly classicService: ClassicService,
    private readonly artService: ArtService,
  ) {}

  @Get('/latest')
  async latest() {
    return await this.classicService.latest(1);
  }

  @Get(':index/previous')
  async getPrev(@Param() dto: indexDto) {
    let { index } = dto;
    return await this.classicService.getClassicByIndex(--index);
  }

  @Get(':index/next')
  async getNext(@Param() dto: indexDto) {
    let { index } = dto;
    return await this.classicService.getClassicByIndex(++index);
  }

  @UseGuards(AuthGuard('jwt'))
  @Get(':type/:id/favor')
  async getFavor(@Param() dto: favorDto, @Req() req) {
    const uid = req.user.uid;
    return await this.artService.getDetail({
      uid,
      ...dto,
    });
  }

  @UseGuards(AuthGuard('jwt'))
  @Get('favor')
  async getAllFavor(@Req() req) {
    const uid = req.user.uid;
    return await this.classicService.getAllFavor({ uid });
  }

  @UseGuards(AuthGuard('jwt'))
  @Get(':type/:id')
  async getDetail(@Param() dto: detailDto, @Req() req) {
    const uid = req.user.uid;
    return await this.classicService.getDetail({
      uid,
      ...dto,
    });
  }
}
