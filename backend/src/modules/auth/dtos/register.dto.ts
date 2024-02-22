import { ApiProperty } from "@nestjs/swagger";
import { IsArray, IsInt, IsNotEmpty, IsNumber, IsOptional, IsString, MaxLength, MinLength } from "class-validator";
import { USER_CONST } from "src/helpers/helper";

export class RegisterDto {

	@ApiProperty()
	@IsNotEmpty()
	@IsString()
	username: string;

	@ApiProperty()
	@IsNotEmpty()
	@IsString()
	name: string;

	@ApiProperty()
	@IsNotEmpty()
	@IsString()
	@MaxLength(20, {message: 'Password max length is 20 characters'})
	@MinLength(6, {message: 'Password min length is 6 characters'})
	password: string;

	@ApiProperty()
	@IsNotEmpty()
	@IsString()
	@MaxLength(20, {message: 'Password max length is 20 characters'})
	@MinLength(6, {message: 'Password min length is 6 characters'})
	password_cf: string;

	@ApiProperty()
	@IsNotEmpty()
	@IsString()
	email: string;

	@ApiProperty()
	@IsOptional()
	@IsInt()
	status?: number;

	@ApiProperty()
	@IsNotEmpty()
	@IsString()
	gender: string;
	
	created_at = new Date();
	updated_at = new Date();
	type = USER_CONST.USER_PUB;
}