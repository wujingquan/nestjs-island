import { Entity, PrimaryColumn } from "typeorm";

@Entity()
export class Book {
  @PrimaryColumn()
  id: number;
}