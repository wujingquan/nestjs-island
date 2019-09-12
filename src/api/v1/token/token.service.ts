import {
  Injectable,
  BadGatewayException,
  HttpException,
  BadRequestException,
  HttpStatus,
  UnauthorizedException,
} from '@nestjs/common';
// import * as util from 'util';
// import axios from 'axios';
// import { User } from 'src/entities/user.entity';
// import { Repository } from 'typeorm';
// import { InjectRepository } from '@nestjs/typeorm';
// import { levelEnum } from './level.enum'
// import { JwtService } from '@nestjs/jwt';
import { UserService } from '../user/user.service';

@Injectable()
export class TokenService {
  constructor() // private readonly userService: UserService
  {}

  async validateUser(username: string, pass: string): Promise<any> {
    // const user = await this.userService.findOne(username);
    // if (user && user.password === pass) {
    //   const { password, ...result } = user;
    //   return result;
    // }
    // return null;
  }
}
