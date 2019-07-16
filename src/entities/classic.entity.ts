import { Column, Entity, PrimaryColumn } from 'typeorm';

@Entity()
export class Classic {
  @PrimaryColumn()
  id: number;

  @Column()
  image: string;

  @Column()
  content: string;

  @Column('timestamp')
  pubdate: string;

  @Column({ type: 'int', default: 0 })
  fav_nums: number;

  @Column()
  title: string;

  @Column('tinyint')
  type: number;
}
