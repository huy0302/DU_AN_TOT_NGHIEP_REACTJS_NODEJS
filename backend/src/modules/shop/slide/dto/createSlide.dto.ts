import { IsString, IsInt } from 'class-validator'
import { ApiProperty } from '@nestjs/swagger';

export class CreateSlidesDto {

    @IsString()
    @ApiProperty()
	avatar: string;

    @IsString()
    @ApiProperty()
	link: string;

    @IsString()
    @ApiProperty()
	name: string;

    @IsInt()
    @ApiProperty()
	status: number;

    created_at: Date = new Date();
    updated_at: Date = new Date();

}