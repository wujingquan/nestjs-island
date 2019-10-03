import { Type } from 'class-transformer';
import { IsNotEmpty } from 'class-validator';

export class oneDto {
  @Type(() => Number)
  @IsNotEmpty()
  readonly art_id: number;

  @Type(() => Number)
  @IsNotEmpty()
  readonly type: number;
}
