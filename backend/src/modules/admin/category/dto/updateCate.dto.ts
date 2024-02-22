import { IsString, IsNotEmpty } from 'class-validator'
import { ApiProperty } from '@nestjs/swagger';
import { IsInt } from 'class-validator';

export class UpdateCategoryDto {

    @IsString()
    @IsNotEmpty()
    @ApiProperty()
	name: string;

    @IsString()
    @ApiProperty()
	description: string;

    @IsString()
    @ApiProperty()
	avatar: string;

    @IsString()
    @ApiProperty()
	slug: string;

    @IsInt()
    @ApiProperty()
	status: number;

    @IsInt()
    @ApiProperty()
	hot: number;

    updated_at: Date = new Date();
}