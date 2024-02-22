import { IsString, IsInt, IsOptional, IsNotEmpty, IsEnum, IsArray, MinLength, MaxLength } from 'class-validator';
import { ApiProperty } from '@nestjs/swagger';

export default class CreateUserDto {
	@ApiProperty()
	@IsString()
	@IsNotEmpty()
	name: string;

	@ApiProperty()
	@IsString()
	@IsNotEmpty()
	email: string;

	@ApiProperty()
	@IsString()
	@IsNotEmpty()
	username: string;

	@ApiProperty()
	@IsString()
	@IsNotEmpty()
	@MinLength(6)
	@MaxLength(20)
	password: string;

	@ApiProperty()
	@IsString()
	@IsOptional()
	address?: string;

	@ApiProperty()
	@IsString()
	@IsOptional()
	gender?: string;

	@ApiProperty()
	@IsString()
	@IsOptional()
	phone: string;

	@ApiProperty()
	@IsString()
	@IsOptional()
	avatar: string;

	@ApiProperty()
	@IsOptional()
	birthDay?: Date;

	@ApiProperty()
	@IsInt()
	@IsOptional()
	status: number | 1;

	@ApiProperty()
	@IsInt()
	@IsOptional()
	type: number | 1;

	@ApiProperty()
	@IsOptional()
	@IsArray()
	roles?: number[];

	created_at: Date = new Date();
	updated_at: Date = new Date();
}
