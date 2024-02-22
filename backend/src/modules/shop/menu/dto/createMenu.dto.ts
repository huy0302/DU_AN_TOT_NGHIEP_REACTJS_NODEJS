import { IsString, IsInt, IsNotEmpty } from 'class-validator'
import { ApiProperty } from '@nestjs/swagger';

export class CreateMenuDto {

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
    @IsNotEmpty()
    @ApiProperty()
	slug: string;

    @IsInt()
    @ApiProperty()
	status: number;

    @IsInt()
    @ApiProperty()
	hot: number;

    created_at: Date = new Date();
    updated_at: Date = new Date();

}