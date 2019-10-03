import { Injectable, BadRequestException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { User } from 'src/entities/user.entity';
import { Repository } from 'typeorm';

@Injectable()
export class UserService {
  constructor(
    @InjectRepository(User)
    private readonly userRepository: Repository<User>,
  ) {}

  async findOne(username: string): Promise<User | undefined> {
    // return this.users.find(user => user.username === username);
    return new Promise(() => {});
  }

  async findOneByOpenId(openId) {
    let finder = {
      where: {
        openid: openId,
      },
    };
    return await this.userRepository.findOne(finder);
  }

  async create(body) {
    let user = await this.userRepository.findOne({
      where: {
        email: body.email,
      },
    });
    if (user) {
      throw new BadRequestException('该邮箱已经注册');
    }
    user = await this.userRepository.create({
      email: body.email,
      password: body.password1,
      nickname: body.nickname,
    });
    user = await this.userRepository.save(user);
    return user;
  }

  async registerByOpenId(openId) {
    let user = await this.userRepository.create({
      openid: openId,
    });
    user = await this.userRepository.save(user);
    return user;
  }
}
