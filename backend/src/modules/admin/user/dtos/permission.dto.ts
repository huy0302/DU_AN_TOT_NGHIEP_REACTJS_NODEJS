import { IsNotEmpty, IsNumber, IsOptional, IsString } from "class-validator";
import { ApiProperty } from "@nestjs/swagger";

export class PermissionDto {

    @IsNotEmpty()
    @IsString()
    @ApiProperty()
    name?: string;

    @IsNotEmpty()
    @IsString()
    @ApiProperty()
    description: string;

	@IsNotEmpty()
    @IsString()
    @ApiProperty()
    guard_name: string;

    @IsNotEmpty()
    @IsString()
    @ApiProperty()
    group: string;

	@IsOptional()
	created_at? = new Date();
	@IsOptional()
	updated_at? = new Date();
}
