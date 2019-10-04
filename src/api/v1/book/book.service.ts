import { Injectable } from '@nestjs/common';
import * as util from 'util';
import axios from 'axios';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Favor } from 'src/entities/favor.entity';

@Injectable()
export class BookService {
  constructor(
    @InjectRepository(Favor)
    private readonly favorRepository: Repository<Favor>,
  ) {}

  async getDetail({ id }) {
    const url = util.format(process.env.yushuDetailUrl, id);
    const result = await axios.get(url);
    return result.data;
  }

  async searchFromYushu({ q, count, start, summary }) {
    let url = `${process.env.yushuKeyworkUrl}?q=${encodeURI(q)}`;
    url += count !== undefined ? `&count=${count}` : '';
    url += start !== undefined ? `&start=${start}` : '';
    url += summary !== undefined ? `&summary=${summary}` : '';
    const result = await axios.get(url);
    return result.data;
  }

  async getFavorCount({ uid }) {
    const count = await this.favorRepository.count({
      where: {
        uid,
        type: 100,
      },
    });

    return {
      count,
    };
  }

  async getBookFavor({ uid, id }) {
    console.log(uid, id);
    const favorNums = await this.favorRepository.count({
      where: {
        art_id: id,
        type: 400,
      },
    });

    const myFavor = await this.favorRepository.findOne({
      where: {
        uid,
        art_id: id,
        type: 400,
      },
    });

    return {
      favor_nums: favorNums,
      like_status: myFavor ? 1 : 0,
    };
  }
}
