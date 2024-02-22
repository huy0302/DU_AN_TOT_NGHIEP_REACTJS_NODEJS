import { IsString, IsInt, IsNotEmpty } from 'class-validator'
import { ApiProperty } from '@nestjs/swagger';
export class CreateContactDto {
	@IsString()
    @IsNotEmpty()
    @ApiProperty()
	content: string;

    @IsNotEmpty()
    @ApiProperty()
    name: string;

    @IsNotEmpty()
    @ApiProperty()
    email: string;

	updatedAt = new Date();
}
