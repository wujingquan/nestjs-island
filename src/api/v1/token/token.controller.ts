import {
  Controller,
  Post,
  Body,
  UseGuards,
  UsePipes,
  ValidationPipe,
} from '@nestjs/common';
import { TokenDto } from './token.dto';
import { loginEnum } from './token.enum';
import { TokenService } from './token.service';
import { AuthGuard } from '@nestjs/passport';

@Controller('token')
export class TokenController {
  constructor(readonly tokenService: TokenService) {}

  // @UseGuards(AuthGuard('local'))
  @Post()
  // @UsePipes(ValidationPipe)
  async getToken(@Body() dto: TokenDto) {
    console.log('debug 1');
    // switch (dto.type) {
    //   case loginEnum.USER_MINI_PROGRAM:
    //     return await this.tokenService.codeToToken(dto.account);
    //     break;
    //   default:
    //     break;
    // }
  }

  @UseGuards(AuthGuard('local'))
  @Post('verify')
  async aaa() {
    return '1';
  }
}
