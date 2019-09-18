import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Movie } from 'src/entities/movie.entity';
import { Music } from 'src/entities/music.entity';
import { Sentence } from 'src/entities/sentence.entity';
import { Book } from 'src/entities/book.entity';

class getDto {
  id: number;
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
    let art;
    switch (dto.type) {
      case 100:
        art = await this.movieRepository.findOne(dto.id);
        break;
      case 200:
        art = await this.musicRepository.findOne(dto.id);
        break;
      case 300:
        art = await this.sentenceRepository.findOne(dto.id);
        break;
    }
    return art;
  }
}
