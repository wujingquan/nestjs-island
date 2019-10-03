import { Entity, PrimaryColumn, Column } from 'typeorm';

@Entity()
export class HotBook {
  @PrimaryColumn()
  id: number;

  @Column('int')
  index: number;

  @Column()
  image: string;

  @Column()
  author: string;

  @Column()
  title: string;
}
