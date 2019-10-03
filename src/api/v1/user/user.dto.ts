import {
  IsEmail,
  IsNotEmpty,
  MinLength,
  MaxLength,
  Matches,
  ValidateIf,
} from 'class-validator';
import { IsEqualsThan } from 'src/common/validator.decorators';

export class registerDto {
  @IsNotEmpty()
  @IsEmail()
  readonly email: string;

  @IsNotEmpty()
  @MinLength(6)
  @MaxLength(32)
  @Matches(/^(?![0-9]+$)(?![a-zA-Z]+$)[0-9A-Za-z]/)
  readonly password1: string;

  @IsNotEmpty()
  @MinLength(6)
  @MaxLength(32)
  @Matches(/^(?![0-9]+$)(?![a-zA-Z]+$)[0-9A-Za-z]/)
  @IsEqualsThan('password1', {
    message: '两次密码输入不一致。',
  })
  readonly password2: string;

  @IsNotEmpty()
  @MinLength(4)
  @MaxLength(32)
  readonly nickname: string;
}
