import { IsNotEmpty, IsNumber } from "class-validator";
import { ApiProperty } from "@nestjs/swagger";

export class RolePermissionDto {
    @IsNotEmpty()
    @IsNumber()
    @ApiProperty()
    role_id: number;

    @IsNotEmpty()
    @IsNumber()
    @ApiProperty()
    permission_id: number;
}
