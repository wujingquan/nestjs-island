import { Column, Entity, PrimaryColumn, PrimaryGeneratedColumn } from 'typeorm';

@Entity()
export class Flow {
  @PrimaryGeneratedColumn()
  id: number;

  @Column('int')
  index: number;

  @Column('int')
  art_id: number;

  @Column('int')
  type: number;
}
