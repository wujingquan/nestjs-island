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
import { JwtService } from '@nestjs/jwt';
import { UserService } from '../user/user.service';
import { WechatService } from '../wechat/wechat.service';

@Injectable()
export class TokenService {
  constructor(
    private readonly jwtService:JwtService,
    private readonly userService: UserService,
    private readonly wechatService: WechatService
  ) // 
  {}

  async validateUser(username: string, pass: string): Promise<any> {
    // const user = await this.userService.findOne(username);
    // if (user && user.password === pass) {
    //   const { password, ...result } = user;
    //   return result;
    // }
    // return null;
  }

  async codeToToken(code) {
    let openId = await this.wechatService.validateByCode(code);
    let user = await this.userService.findOneByOpenId(openId);
    if (user) {
      const payload = {
        uid: user.uid,
        scope: 8
      }
      return this.jwtService.sign(payload)
    }
  }
}
