import { IsNotEmpty, IsNumber } from "class-validator";
import { ApiProperty } from "@nestjs/swagger";

export class UserRoleDto {
    @IsNotEmpty()
    @IsNumber()
    @ApiProperty()
    role_id: number;

    @IsNotEmpty()
    @IsNumber()
    @ApiProperty()
    user_id: number;
}
