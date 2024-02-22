import { IsString, IsInt, IsOptional, IsNotEmpty } from 'class-validator';
import { ApiProperty } from '@nestjs/swagger';

export default class UpdateVoteDto {

	@ApiProperty()
	@IsString()
	@IsNotEmpty()
	content: string;

	@ApiProperty()
	@IsInt()
	@IsOptional()
	number: number;

    @ApiProperty()
	@IsInt()
	@IsOptional()
	user_id: number;

    @ApiProperty()
	@IsInt()
	@IsOptional()
	product_id: number;

    updated_at: Date = new Date();
}
