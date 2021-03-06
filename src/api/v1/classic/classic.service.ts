import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository, Not } from 'typeorm';
import { Flow } from 'src/entities/flow.entity';
import { Movie } from 'src/entities/movie.entity';
import { Music } from 'src/entities/music.entity';
import { Sentence } from 'src/entities/sentence.entity';
import { Book } from 'src/entities/book.entity';
import { Favor } from 'src/entities/favor.entity';

import { ArtService } from '../art/art.service';

@Injectable()
export class ClassicService {
  constructor(
    @InjectRepository(Flow)
    private readonly flowRepository: Repository<Flow>,

    @InjectRepository(Movie)
    private readonly movieRepository: Repository<Movie>,

    @InjectRepository(Music)
    private readonly musicRepository: Repository<Music>,

    @InjectRepository(Sentence)
    private readonly sentenceRepository: Repository<Sentence>,

    @InjectRepository(Book)
    private readonly bookRepository: Repository<Book>,

    @InjectRepository(Favor)
    private readonly favorRepository: Repository<Favor>,

    private readonly artService: ArtService,
  ) {}

  async latest(uid) {
    let art = null;

    const flow = await this.flowRepository.findOne();
    console.log('flow', flow);

    const finder = {
      where: {
        id: flow.art_id,
      },
    };

    switch (flow.type) {
      case 100:
        art = await this.movieRepository.findOne(finder);
        break;
      case 200:
        art = await this.musicRepository.findOne(finder);
        break;
      case 300:
        art = await this.sentenceRepository.findOne(finder);
        break;
      case 400:
        art = await this.bookRepository.findOne(finder);
        break;
      default:
        break;
    }

    const favor = await this.favorRepository.findOne({
      where: {
        art_id: flow.art_id,
        type: flow.type,
        uid,
      },
    });

    Object.assign(art, {
      index: flow.index,
      like_status: favor ? 1 : 0,
    });

    return art;
  }

  async getClassicByIndex(index: number) {
    const flow = await this.flowRepository.findOne({
      where: {
        index,
      },
    });
    if (!flow) {
      throw new NotFoundException();
    }
    const { art_id, type } = flow;
    const art = await this.artService.getData({ art_id, type });
    if (!art) {
      throw new NotFoundException();
    }
    return art;
  }

  async getAllFavor({ uid }) {
    const favor = await this.favorRepository.find({
      where: {
        uid,
        type: Not(400),
      },
    });
    console.log(favor);
    if (!favor.length) {
      throw new NotFoundException();
    }

    return favor;
  }

  async getDetail({ type, id, uid }) {
    return await this.artService.getDetail({ type, id, uid });
  }
}
