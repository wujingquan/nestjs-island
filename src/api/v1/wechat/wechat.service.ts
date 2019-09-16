import { Injectable, UnauthorizedException } from '@nestjs/common';
import axios from 'axios';
import * as util from 'util';

@Injectable()
export class WechatService {
  async validateByCode(code) {
    const url = util.format(
      process.env.wxLoginUrl,
      process.env.wxAppId,
      process.env.wxAppSecret,
      code,
    );
    const result = await axios.get(url);
    if (result.status !== 200) {
      throw new UnauthorizedException(`openId 获取失败`);
    }

    const { errcode, errmsg, openid } = result.data;
    if (errcode) {
      throw new UnauthorizedException(`openId 获取失败 ${errmsg}`);
    }

    return openid;
  }
}
