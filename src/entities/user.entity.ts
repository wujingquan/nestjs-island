import { Entity, PrimaryGeneratedColumn, Column } from 'typeorm';

@Entity()
export class User {
  @PrimaryGeneratedColumn({ type: 'int' })
  id: number;

  @Column()
  nickname: string;

  @Column({ length: 128 })
  email: string;

  @Column()
  password: string;

  @Column({ length: 64, unique: true })
  openid: string;
}
