import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Flow } from 'src/entities/flow.entity';
import { Movie } from 'src/entities/movie.entity';
import { Music } from 'src/entities/music.entity';
import { Sentence } from 'src/entities/sentence.entity';
import { Book } from 'src/entities/book.entity';


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
  ) { }

  async latest() {
    let art = null

    const flow = await this.flowRepository.findOne()
    console.log('flow', flow)

    const finder = {
      where: {
        id: flow.art_id
      }
    }

    switch (flow.type) {
      case 100:
        this.movieRepository.findOne(finder)
        break;
      case 200:
        this.musicRepository.findOne(finder)
        break;
      case 300:
        this.sentenceRepository.findOne(finder)
        break;
      case 400:
        this.bookRepository.findOne(finder)
        break;
      default:
        break;
    }

    return art
  }
}
