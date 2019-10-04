import { Entity, PrimaryColumn, Column } from 'typeorm';

@Entity()
export class Comment {
  @PrimaryColumn()
  id: number;

  @Column({
    length: 12,
  })
  content: string;

  @Column({
    type: 'int',
    default: 0,
  })
  nums: number;

  @Column('int')
  book_id: number;
}
