import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Movie } from 'src/entities/movie.entity';
import { Music } from 'src/entities/music.entity';
import { Sentence } from 'src/entities/sentence.entity';
import { Book } from 'src/entities/book.entity';
import { Favor } from 'src/entities/favor.entity';

class getDto {
  art_id: number;
  type: number;
}

@Injectable()
export class ArtService {
  constructor(
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
  ) {}

  async getData(dto: getDto) {
    let art, finder;
    finder = {
      where: {
        id: dto.art_id,
      },
    };
    console.log(finder);
    switch (dto.type) {
      case 100:
        art = await this.movieRepository.findOne(finder);
        break;
      case 200:
        art = await this.musicRepository.findOne(finder);
        break;
      case 300:
        art = await this.sentenceRepository.findOne(finder);
        break;
    }
    return art;
  }

  async getDetail(dto) {
    const art = await this.getData({
      art_id: dto.id,
      type: dto.type,
    });
    if (!art) {
      throw new NotFoundException();
    }

    const like = await this.favorRepository.findOne({
      where: {
        uid: dto.uid,
        art_id: dto.id,
        type: dto.type,
      },
    });

    const like_status = like ? true : false;

    return {
      art,
      like_status,
    };
  }

  async getType(type) {
    let obj = {
      100: 'movie',
      200: 'music',
      300: 'sentence',
    };
    return obj[type];
  }
}
