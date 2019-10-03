import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { ArtService } from './art.service';
import { Movie } from 'src/entities/movie.entity';
import { Music } from 'src/entities/music.entity';
import { Sentence } from 'src/entities/sentence.entity';
import { Book } from 'src/entities/book.entity';
import { Favor } from 'src/entities/favor.entity';

@Module({
  imports: [TypeOrmModule.forFeature([Movie, Music, Sentence, Book, Favor])],
  providers: [ArtService],
  exports: [ArtService],
})
export class ArtModule {}
