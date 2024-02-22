import { ApiProperty } from "@nestjs/swagger";
import { IsInt, IsNotEmpty, IsOptional, IsString, Min } from "class-validator";

export class UpdateOrderDto {

	@ApiProperty()
	@IsString()
	@IsOptional()
	note?: string;

	@ApiProperty()
	@IsInt()
	@IsOptional()
	status?: number | 1;

	@ApiProperty()
	@IsInt()
	@IsOptional()
	payment_status?: number | 0;

	@ApiProperty()
	@IsInt()
	@IsOptional()
	shipping_status?: number | 1;

	@ApiProperty()
	@IsString()
	@IsOptional()
	receiver_name?: string;

	@ApiProperty()
	@IsString()
	@IsOptional()
	receiver_email?: string;

	@ApiProperty()
	@IsString()
	@IsOptional()
	receiver_phone?: string;

	@ApiProperty()
	@IsString()
	@IsOptional()
	receiver_address?: string;

	updated_at = new Date();
}
