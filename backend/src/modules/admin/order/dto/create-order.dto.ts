import { ApiProperty } from "@nestjs/swagger";
import { IsInt, IsNotEmpty, IsOptional, IsString, Min } from "class-validator";

export class CreateOrderDto {
	
	@ApiProperty()
	@IsOptional()
	user_id?: number;

	@ApiProperty()
	@IsOptional()
	discount?: number = 0;

	@ApiProperty()
	@IsOptional()
	total_discount?: number = 0;

	@ApiProperty()
	product_id: number = 0;

	@ApiProperty()
	payment_status: number = 0;


	@ApiProperty()
	quantity: number = 0;

	@ApiProperty()
	product_price: number = 0;

	@ApiProperty()
	@IsOptional()
	total_price?: number = 0;

	@ApiProperty()
	@IsString()
	@IsOptional()
	note: string;

	@ApiProperty()
	@IsOptional()
	order_type: number = 1;

	@ApiProperty()
	@IsInt()
	@IsOptional()
	status: number = 1;

	@ApiProperty()
	@IsInt()
	@IsOptional()
	shipping_status: number = 1;

	@ApiProperty()
	@IsString()
	@IsNotEmpty()
	receiver_name: string;

	@ApiProperty()
	@IsString()
	@IsNotEmpty()
	receiver_email: string;

	@ApiProperty()
	@IsString()
	@IsNotEmpty()
	receiver_phone: string;

	@ApiProperty()
	@IsString()
	@IsNotEmpty()
	receiver_address: string;

	created_at = new Date();
	updated_at  = new Date();
}
