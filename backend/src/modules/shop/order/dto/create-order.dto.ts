import { ApiProperty } from "@nestjs/swagger";
import { IsArray, IsInt, IsNotEmpty, IsNotEmptyObject, IsOptional, IsString, Min, MinLength, isNotEmptyObject } from "class-validator";
import { TransactionOrderDto } from "./transactionOrder.dto";

export class CreateOrderDto {
	
	@ApiProperty()
	@IsOptional()
	user_id?: number;

	@ApiProperty()
	@IsOptional()
	total_discount?: number |0;

	@ApiProperty()
	@IsOptional()
	total_price?: number | 0;


	@ApiProperty()
	@IsOptional()
	payment_type?: number | 1;

	@ApiProperty()
	@IsString()
	@IsOptional()
	note: string;

	@ApiProperty()
	@IsOptional()
	order_type: number | 1;

	@ApiProperty()
	@IsInt()
	@IsOptional()
	payment_status?: number | 0;

	@ApiProperty()
	@IsInt()
	@IsOptional()
	status: number | 1;

	@ApiProperty()
	@IsInt()
	@IsOptional()
	shipping_status: number | 1;

	@ApiProperty()
	@IsString()
	@IsOptional()
	receiver_name: string;

	@ApiProperty()
	@IsString()
	@IsOptional()
	receiver_email: string;

	@ApiProperty()
	@IsString()
	@IsOptional()
	receiver_phone: string;

	@ApiProperty()
	@IsString()
	@IsOptional()
	receiver_address: string;

	@ApiProperty()
	@IsOptional()
	products?: TransactionOrderDto[];

	@IsOptional()
	created_at? = new Date();

	updated_at = new Date();
}
