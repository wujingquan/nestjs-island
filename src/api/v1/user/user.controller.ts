import { Controller, Post, Body, BadRequestException } from '@nestjs/common';
import { registerDto } from './user.dto';
import { UserService } from './user.service';

@Controller('user')
export class UserController {
  constructor(private readonly userService: UserService) {}

  @Post('register')
  async register(@Body() register: registerDto) {
    return this.userService.create(register);
  }
}
