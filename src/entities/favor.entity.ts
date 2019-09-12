import { Entity, Column, PrimaryGeneratedColumn } from 'typeorm';

@Entity()
export class Favor {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  uid: number;

  @Column()
  art_id: number;

  @Column()
  type: number;
}
