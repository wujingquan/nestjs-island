import {
  Controller,
  Post,
  Body,
  UseGuards,
  UsePipes,
  ValidationPipe,
  Request,
} from '@nestjs/common';
import { TokenDto } from './token.dto';
import { loginEnum } from './token.enum';
import { TokenService } from './token.service';
import { AuthGuard } from '@nestjs/passport';

import { JwtService } from '@nestjs/jwt';

@Controller('token')
export class TokenController {
  constructor(
    readonly tokenService: TokenService,
    private readonly jwtService: JwtService,
  ) {}

  @Post()
  async getToken(@Body() dto: TokenDto) {
    console.log('debug 1');
    let token;
    switch (dto.type) {
      case loginEnum.USER_MINI_PROGRAM:
        token = await this.tokenService.codeToToken(dto.account);
        break;
      default:
        break;
    }
    return { token };
  }

  @UseGuards(AuthGuard('jwt'))
  @Post('verify')
  async verify(@Request() req) {
    // console.log(req)
  }

  @Post('login')
  login(@Body() user: any) {
    const payload = { username: user.username, sub: user.userId };
    console.log('token controller payload', payload);
    return {
      access_token: this.jwtService.sign(payload),
    };
  }
}
