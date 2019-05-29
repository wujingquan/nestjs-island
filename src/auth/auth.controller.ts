import { Controller, Get, HttpCode, HttpStatus, Param, UseGuards } from '@nestjs/common';
import { AuthService } from './auth.service';

@Controller('auth')
export class AuthController {
  constructor(
    private readonly authService: AuthService
  ) {}
  
  @Get('login')
  @HttpCode(HttpStatus.OK)
  async login(@Param() params): Promise<any> {
    console.log(JSON.stringify(params))
    // const 
    return this.authService.login('wujingquan', '123456')
  }
}
