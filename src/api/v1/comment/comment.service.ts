import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Comment } from 'src/entities/comment.entity';

@Injectable()
export class CommentService {
  constructor(
    @InjectRepository(Comment)
    private readonly commentRepository: Repository<Comment>,
  ) {}

  async addComment({ id, content }) {
    let comment = await this.commentRepository.findOne({
      where: {
        book_id: id,
        content,
      },
    });

    if (!comment) {
      return await this.commentRepository.save({
        book_id: id,
        content,
        nums: 1,
      });
    } else {
      await this.commentRepository.increment(
        {
          book_id: id,
          content,
        },
        'nums',
        1,
      );
      return await this.commentRepository.findOne({
        where: {
          book_id: id,
          content,
        },
      });
    }
  }

  async getComments({ id }) {
    return this.commentRepository.find({
      where: {
        book_id: id,
      },
    });
  }
}
