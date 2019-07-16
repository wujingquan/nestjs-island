import { Entity, Column } from 'typeorm';
import { Classic } from './common.entity';

@Entity()
export class Music extends Classic {
  @Column()
  url: string;
}
