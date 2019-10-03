import { Injectable, BadRequestException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository, getConnection } from 'typeorm';
import { Favor } from 'src/entities/favor.entity';
import { ArtService } from '../art/art.service';

@Injectable()
export class LikeService {
  constructor(
    private readonly artService: ArtService,

    @InjectRepository(Favor)
    private readonly favorRepository: Repository<Favor>,
  ) {}

  async like({ art_id, type, uid }) {
    // console.log(dto);
    const favor = await this.favorRepository.findOne({
      where: {
        art_id,
        type,
        uid,
      },
    });
    if (favor) {
      throw new BadRequestException('你已经点赞过');
    }

    await getConnection().transaction(async transactionalEntityManager => {
      let favor = await this.favorRepository.create({
        art_id,
        type,
        uid,
      });
      await transactionalEntityManager.save(favor);
      let art = await this.artService.getData({ art_id, type });
      await transactionalEntityManager.increment(
        await this.artService.getType(art.type),
        {
          id: art.id,
        },
        'fav_nums',
        1,
      );
    });
    return true;
  }

  async cancel({ art_id, type, uid }) {
    const favor = await this.favorRepository.findOne({
      where: {
        art_id,
        type,
        uid,
      },
    });
    console.log(favor);
    if (!favor) {
      throw new BadRequestException('你已经取消点赞');
    }

    await getConnection().transaction(async transactionalEntityManager => {
      let favor = await this.favorRepository.delete({
        art_id,
        type,
        uid,
      });
      let art = await this.artService.getData({ art_id, type });
      await transactionalEntityManager.decrement(
        await this.artService.getType(art.type),
        {
          id: art.id,
        },
        'fav_nums',
        1,
      );
    });
  }
}
