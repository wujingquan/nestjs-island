import { TypeToNumber } from '../../../common/helpers';
import { Type, Transform } from 'class-transformer';
import {
  Max,
  Min,
  IsOptional,
  IsNotEmpty,
  MinLength,
  MaxLength,
  IsInt,
  IsPositive,
} from 'class-validator';

export class searchDto {
  @IsOptional()
  readonly q: string;

  @Type(() => Number)
  @IsOptional()
  readonly start: number;

  @Type(() => Number)
  @IsOptional()
  readonly count: number;

  @Max(1)
  @Min(0)
  @Type(() => Number)
  @IsOptional()
  readonly summary: number;
}

export class bookFavorDto {
  // @Type(() => Number)
  @Transform(TypeToNumber)
  @IsNotEmpty()
  @IsInt()
  @IsPositive()
  readonly book_id: number;
}

export class addCommentDto {
  @Type(() => Number)
  @IsNotEmpty()
  readonly book_id: number;

  @IsNotEmpty()
  @MinLength(1)
  @MaxLength(12)
  readonly content: string;
}
