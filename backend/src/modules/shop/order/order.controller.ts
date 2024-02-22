import { Controller, Get, Post, Body, Patch, Param, Delete, Put, UseGuards, Request, Response } from '@nestjs/common';
import { OrderService } from './order.service';
import { CreateOrderDto } from './dto/create-order.dto';
import { UpdateOrderDto } from './dto/update-order.dto';
import { JwtGuard } from 'src/modules/auth/guards/jwt/jwt.guard';
import { RoleGuard } from 'src/modules/auth/guards/role/role.guard';
import * as _ from 'lodash';
import { BadRequestException } from 'src/helpers/response/badRequest';
import { BaseResponse, HTTP_STATUS, IPaging } from 'src/helpers/helper';
import { ApiTags } from '@nestjs/swagger';
import { request } from 'http';

@Controller('order')
@ApiTags('Shop order')
export class OrderController {
	constructor(private readonly orderService: OrderService) { }

	@Post('store')
	@UseGuards(JwtGuard)
	async create(@Request() req: any, @Body() createOrderDto: CreateOrderDto) {
		try {
			if(_.isEmpty(createOrderDto)) {
				throw new BadRequestException({code: 'F0001'});
			}
			const user = req.user;
			
			return BaseResponse(HTTP_STATUS.success, 
				await this.orderService.create(createOrderDto, user)
				,'', 'successfully');
		} catch (error) {
			console.log('e@createProduct----> ', error);
			return BaseResponse(error.status, error.response, error.code || 'E0001', error.message);
		}
	}

	@Get('')
	@UseGuards(JwtGuard)
	async findAll(@Request() req: any) {
		
		try {
			let paging: IPaging = {
				page: req.query.page || 1,
				page_size: req.query.page_size || 20,
			};
			let filter = {
				product_name: req.query.product_name || null,
				user_id: req.user?.id,
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
	@UseGuards(JwtGuard)
	findOne(@Param('id') id: string) {
		return this.orderService.findOne(+id);
	}

	@Get('/callback')
	async webhook(@Request() req: any, @Response() res: any) {
		return await this.orderService.webhook(req, res);
	}
}
