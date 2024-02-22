import { ApiProperty } from "@nestjs/swagger";
import { IsInt, IsNotEmpty, IsOptional, IsString, Min } from "class-validator";

export class TransactionOrderDto {


	@ApiProperty()
	@IsOptional()
	id?: number;

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
}
