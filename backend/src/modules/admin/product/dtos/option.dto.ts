import { IsString, IsInt, IsOptional, IsNotEmpty, Min, IsArray, Max } from 'class-validator';
import { ApiProperty } from '@nestjs/swagger';

export default class OptionDto {
	@ApiProperty()
	@IsString()
	@IsNotEmpty()
	key: string;

	@ApiProperty()
	@IsString()
	@IsOptional()
	value: string;

	
}
