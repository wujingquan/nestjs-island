import { Column, Entity, PrimaryColumn } from 'typeorm';

@Entity()
export class Flow {
  @PrimaryColumn()
  id: number;

  @Column('int')
  index: number;

  @Column('int')
  art_id: number;

  @Column('int')
  type: number;
}
