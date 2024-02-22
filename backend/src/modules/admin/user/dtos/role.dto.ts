import { IsArray, IsEmpty, IsNotEmpty, IsNumber, IsOptional, IsString } from "class-validator";
import { ApiProperty } from "@nestjs/swagger";

export class RoleDto {
    @IsNotEmpty()
    @IsString()
    @ApiProperty()
    name: string;

    @IsString()
    @ApiProperty()
	@IsOptional()
    description?: string;

	@IsNotEmpty()
    @IsString()
    @ApiProperty()
    guard_name: string;

    @IsArray()
    @ApiProperty()
	@IsOptional()
    permissions?: number[];

	created_at = new Date();
	updated_at = new Date();
}
