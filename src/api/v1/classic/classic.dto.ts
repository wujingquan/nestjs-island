import { Type } from 'class-transformer';
import {
  IsMobilePhone,
  MinLength,
  MaxLength,
  IsEmpty,
  IsNotEmpty,
} from 'class-validator';

export class indexDto {
  // @Type(() => Number)
  @IsNotEmpty({
    message: '空?',
  })
  // @Type(() => Number)
  // @IsNotEmpty({
  //   message: 'index不能为空',
  // })
  // @MinLength(1, {
  //   message: 'index不能为空'
  // })
  // @MaxLength(10, {
  //   message: '十个'
  // })
  readonly index: number;
}

export class favorDto {
  @Type(() => Number)
  @IsNotEmpty({
    message: '空?',
  })
  readonly type: number;

  @Type(() => Number)
  @IsNotEmpty({
    message: '空?',
  })
  readonly id: number;
}

export class detailDto {
  @Type(() => Number)
  @IsNotEmpty({
    message: '空?',
  })
  readonly type: number;

  @Type(() => Number)
  @IsNotEmpty({
    message: '空?',
  })
  readonly id: number;
}
