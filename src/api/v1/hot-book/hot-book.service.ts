import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { HotBook } from 'src/entities/hot-book.entity';
import { Repository, In } from 'typeorm';
import { Favor } from 'src/entities/favor.entity';

@Injectable()
export class HotBookService {
  constructor(
    @InjectRepository(HotBook)
    private readonly hotBookRepository: Repository<HotBook>,

    @InjectRepository(Favor)
    private readonly favorRepository: Repository<Favor>,
  ) {}

  async getAll() {
    const books = await this.hotBookRepository.find({
      order: {
        index: 'DESC',
      },
    });

    const ids = [];
    books.forEach(book => {
      ids.push(book.id);
    });

    console.log(ids);
    const favors = await this.favorRepository.find({
      where: {
        art_id: In(ids),
        type: 400,
      },
    });

    return favors;
  }
}
