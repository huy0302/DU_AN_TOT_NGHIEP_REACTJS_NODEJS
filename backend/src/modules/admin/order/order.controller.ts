import { Controller, Get, Post, Body, Patch, Param, Delete, Put, UseGuards, Request } from '@nestjs/common';
import { OrderService } from './order.service';
import { CreateOrderDto } from './dto/create-order.dto';
import { UpdateOrderDto } from './dto/update-order.dto';
import { JwtGuard } from 'src/modules/auth/guards/jwt/jwt.guard';
import { RoleGuard } from 'src/modules/auth/guards/role/role.guard';
import * as _ from 'lodash';
import { BadRequestException } from 'src/helpers/response/badRequest';
import { BaseResponse, HTTP_STATUS, IPaging } from 'src/helpers/helper';
import { ApiTags } from '@nestjs/swagger';

@Controller('admin/order')
@ApiTags('Admin Order')
@UseGuards(JwtGuard)
export class OrderController {
	constructor(private readonly orderService: OrderService) { }

	@Post('store')
	@UseGuards(RoleGuard)
	async create(@Request() req: any, @Body() createOrderDto: CreateOrderDto) {
		try {
			if(_.isEmpty(createOrderDto)) {
				throw new BadRequestException({code: 'F0001'});
			}

			const user = req.user;
			
			return BaseResponse(HTTP_STATUS.success, await this.orderService.create(createOrderDto, user),'', 'successfully');
		} catch (error) {
			console.log('e@createProduct----> ', error);
			return BaseResponse(error.status, error.response, error.code || 'E0001', error.message);
		}
	}

	@Get('')
	@UseGuards(RoleGuard)
	async findAll(@Request() req: any) {
		

		try {
			let paging: IPaging = {
				page: req.query.page || 1,
				page_size: req.query.page_size || 20,
			};
			let filter = {
				product_name: req.query.product_name || null,
				user_id: req.query.user_id || null,
				receiver_name: req.query.receiver_name || null,
				receiver_email: req.query.receiver_email || null,
				receiver_phone: req.query.receiver_phone || null,
				status: req.query.status || null,
				shipping_status: req.query.shipping_status || null,
			}
			return BaseResponse(HTTP_STATUS.success, await this.orderService.findAll(paging, filter),'', 'successfully');
		} catch (error) {
			console.log('e@createProduct----> ', error);
			return BaseResponse(error.status, error.response, error.code || 'E0001', error.message);
		}
	}

	@Get('show/:id')
	@UseGuards(RoleGuard)
	async findOne(@Param('id') id: string) {
		try {
			
			return BaseResponse(HTTP_STATUS.success, await this.orderService.findOne(Number(id)),'', 'successfully');
		} catch (error) {
			console.log('e@findOne Order----> ', error);
			return BaseResponse(error.status, error.response, error.code || 'E0001', error.message);
		}
	}

	@Put('update/:id')
	@UseGuards(RoleGuard)
	async update(@Param('id') id: string, @Body() updateOrderDto: UpdateOrderDto) {
		try {
			let order = await this.orderService.findOne(Number(id));
			if(_.isEmpty(order)) {
				throw new BadRequestException({code: 'OR0002', message:'Not found order by Id'});
			}
			return BaseResponse(HTTP_STATUS.success, await this.orderService.update(Number(id), updateOrderDto),'', 'successfully');
		} catch (error) {
			console.log('e@findOne Order----> ', error);
			return BaseResponse(error.status, error.response, error.code || 'E0001', error.message);
		}
	}
	
	@Delete('delete/:id')
	@UseGuards(RoleGuard)
	remove(@Param('id') id: string) {
		return this.orderService.remove(+id);
	}
}
