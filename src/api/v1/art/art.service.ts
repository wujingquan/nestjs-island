import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Movie } from 'src/entities/movie.entity';
import { Music } from 'src/entities/music.entity';
import { Sentence } from 'src/entities/sentence.entity';
import { Book } from 'src/entities/book.entity';

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
}
