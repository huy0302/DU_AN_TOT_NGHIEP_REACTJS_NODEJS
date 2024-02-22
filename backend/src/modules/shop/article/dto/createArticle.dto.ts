import { IsString, IsInt, IsNotEmpty } from 'class-validator'
import { ApiProperty } from '@nestjs/swagger';

export class CreateArticleDto {

    @IsString()
    @IsNotEmpty()
    @ApiProperty()
	name: string;

    @IsInt()
    @IsNotEmpty()
    @ApiProperty()
    menu_id: number;

    @IsInt()
    @IsNotEmpty()
    @ApiProperty()
    user_id: number;

    @IsString()
    @ApiProperty()
	description: string;

    @IsString()
    @ApiProperty()
	avatar: string;

    @IsString()
    @IsNotEmpty()
    @ApiProperty()
	slug: string;

    @IsInt()
    @ApiProperty()
	status: number;

    @IsInt()
    @ApiProperty()
	hot: number;

    @IsString()
    @ApiProperty()
    content: string;

    created_at: Date = new Date();
    updated_at: Date = new Date();

}