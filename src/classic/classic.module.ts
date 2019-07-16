import { Module } from '@nestjs/common';
import { ClassicController } from './classic.controller';
import { ClassicService } from './classic.service';
import { Flow } from 'src/entities/flow.entity';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Movie } from 'src/entities/movie.entity';
import { Music } from 'src/entities/music.entity';
import { Sentence } from 'src/entities/sentence.entity';
import { Book } from 'src/entities/book.entity';
import { Favor } from 'src/entities/favor.entity';

@Module({
  imports: [TypeOrmModule.forFeature([Flow, Movie, Music, Sentence, Book, Favor])],
  controllers: [ClassicController],
  providers: [ClassicService]
})
export class ClassicModule { }
