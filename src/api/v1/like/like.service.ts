import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Favor } from 'src/entities/favor.entity';

@Injectable()
export class LikeService {
  constructor(
    @InjectRepository(Favor)
    private readonly favorRepository: Repository<Favor>,
  ) {}

  async like(art_id, type, uid) {
    const favor = await this.favorRepository.findOne({
      where: {
        art_id,
        type,
        uid,
      },
    });

    if (favor) {
    }

    return `like`;
  }

  async cancel(art_id, type, uid) {
    const favor = await this.favorRepository.findOne({
      where: {
        art_id,
        type,
        uid,
      },
    });

    if (!favor) {
    }

    return `cancel`;
  }
}
