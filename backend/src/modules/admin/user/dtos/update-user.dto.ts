import { IsString, IsInt, IsOptional, IsNotEmpty, IsEnum, IsArray } from 'class-validator';
import { ApiProperty } from '@nestjs/swagger';

export default class UpdateUserDto {
	@ApiProperty()
	@IsString()
	@IsOptional()
	name?: string;

	@ApiProperty()
	@IsString()
	@IsOptional()
	password?: string;

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
	phone?: string;

	@ApiProperty()
	@IsString()
	@IsOptional()
	avatar?: string;

	@ApiProperty()
	@IsOptional()
	birthDay?: Date;

	@ApiProperty()
	@IsInt()
	@IsOptional()
	status?: number | 1;

	// @ApiProperty()
	// @IsOptional()
	// @IsArray()
	// roles?: number[];

	updated_at = new Date();
}
