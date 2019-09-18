import { Type } from 'class-transformer';
import {
  IsMobilePhone,
  MinLength,
  MaxLength,
  IsEmpty,
  IsNotEmpty,
} from 'class-validator';

export class indexDto {
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
  readonly index: string;
}
