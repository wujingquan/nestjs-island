import { Controller, Get, UnauthorizedException, Post } from '@nestjs/common';
import { AppService } from './app.service';
import { AuthService } from './auth/auth.service';

@Controller()
export class AppController {
  constructor(private readonly appService: AppService, private readonly authService: AuthService) {}
  // constructor(private readonly authService: AuthService) {}
  
  @Post('login')
  async login() {
    return this.authService.login();
  }
}
