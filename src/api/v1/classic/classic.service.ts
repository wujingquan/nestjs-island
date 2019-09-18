import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
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

  async getNext(index: number) {
    const flow = await this.flowRepository.findOne(index + 1);
    console.log(typeof index, index + 1);
    if (!flow) {
      throw new NotFoundException();
    }
    const { id, type } = flow;
    const art = await this.artService.getData({ id, type });
  }
}
