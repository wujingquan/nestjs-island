import {
  Controller,
  Get,
  Request,
  UnauthorizedException,
  Post,
  UseGuards,
} from '@nestjs/common';
// import { AppService } from './app.service';
import { AuthGuard } from '@nestjs/passport';
// import { TokenService } from './api/v1/token/token.service';

@Controller('api')
export class AppController {
  constructor() // private readonly tokenService: TokenService
  {}
  @UseGuards(AuthGuard('local'))
  @Post('login')
  async login(@Request() req) {
    console.log('req', req.user);
    // return req.user
    // return this.authService.login(req.user);
  }

  @UseGuards(AuthGuard('jwt'))
  @Get('me')
  async getProfile(@Request() req) {
    console.log('jwt req', req.user);
    // return req.user
    // return this.authService.login(req.user);
    return req.user;
  }
}
