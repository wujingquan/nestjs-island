import { Type } from 'class-transformer';
import { IsMobilePhone, MinLength, MaxLength, IsNotEmpty } from 'class-validator';

export class TokenDto {
	@IsNotEmpty({
		message: 'token不能为空'
	})
	readonly account: string;

	@Type(() => Number)
	@IsNotEmpty({
		message: 'type不能为空'
	})
	readonly type: number

	// @ApiModelProperty()
// 	@MinLength(8, {
// 		message: '密码不能少于8位'
// 	})
// 	@MaxLength(12, {
// 		message: '密码不能大于12位'
// 	})
// 	@IsNotEmpty({
// 		message: '密码不能为空'
// 	})
// 	readonly password: string;
}
