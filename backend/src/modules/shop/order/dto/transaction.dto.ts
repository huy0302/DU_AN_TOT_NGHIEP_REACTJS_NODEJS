import { ApiProperty } from "@nestjs/swagger";
import { IsInt, IsNotEmpty, IsOptional, IsString, Min } from "class-validator";

export class TransactionDto {
	
	@ApiProperty()
	@IsOptional()
	user_id?: number;

	@ApiProperty()
	@IsOptional()
	order_id?: number;

	@ApiProperty()
	@IsOptional()
	product_id?: number;

	@ApiProperty()
	@IsOptional()
	discount?: number;

	@ApiProperty()
	@IsOptional()
	price: number;

	@ApiProperty()
	@IsOptional()
	name?: string;

	@ApiProperty()
	@IsInt()
	@IsOptional()
	status: number;

	@ApiProperty()
	@IsOptional()
	avatar: string;

	@ApiProperty()
	quantity: number;

	@ApiProperty()
	total_price: number;

	created_at = new Date();
	updated_at  = new Date();
}
