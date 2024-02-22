import { Injectable } from '@nestjs/common';
import { CreateOrderDto } from './dto/create-order.dto';
import { UpdateOrderDto } from './dto/update-order.dto';
import { InjectRepository } from '@nestjs/typeorm';
import { Orders } from 'src/entities/orders.entity';
import { ILike, In, Like, Repository } from 'typeorm';
import { ProductService } from '../product/product.service';
import * as _ from 'lodash';
import { BadRequestException } from 'src/helpers/response/badRequest';
import { IPaging, Paging, regexEmail, regexPhone } from 'src/helpers/helper';
import { Products } from 'src/entities/product.entity';

@Injectable()
export class OrderService {
	constructor(
		@InjectRepository(Orders) private readonly orderRepo: Repository<Orders>,
		@InjectRepository(Products) private readonly productRepo: Repository<Products>,
		private readonly productService: ProductService
	){}

	async create(createOrderDto: CreateOrderDto, user: any) {
		let product: any = await this.productRepo.find({
			// where: {
			// 	id: In()
			// }
		});
		if(_.isEmpty(product)) {
			throw new BadRequestException({code: 'Or0001', message: 'Product not found!'});
		}
		if(product.number < createOrderDto.quantity) {
			throw new BadRequestException({code: 'Or0002', message: 'Quantity in order must be less than quantity of product!'});
		}

		createOrderDto.discount = product.sale;
		createOrderDto.total_discount = product.sale;
		createOrderDto.product_price = product.price;
		createOrderDto.total_price = product.price * createOrderDto.quantity - createOrderDto.total_discount;

		if(!createOrderDto.receiver_email) {
			createOrderDto.receiver_email = user.email;
		}
		if(!createOrderDto.receiver_name) {
			createOrderDto.receiver_email = user.receiver_name;
		}
		if(!createOrderDto.receiver_phone) {
			createOrderDto.receiver_email = user.receiver_phone;
		}
		if(!createOrderDto.receiver_address) {
			createOrderDto.receiver_email = user.receiver_address;
		}
		createOrderDto.user_id = user.id;

		// let newOrder = await this.orderRepo.create(createOrderDto);
		// await this.orderRepo.save(newOrder);
		// return newOrder;
	}

	async findAll(paging: IPaging,filter: any) {
		let condition: any = {};
		if(filter) {
			if(filter.product_name) condition.transactions = {
				name: ILike(`%${filter.product_name.trim()}%`)
			};
			if(filter.status) condition.status = filter.status;
			if(filter.user_id) condition.user_id = filter.user_id;
			if(filter.shipping_status) condition.shipping_status = filter.shipping_status;
			if(filter.receiver_name) condition.receiver_name = ILike(`%${filter.receiver_name}%`);
			if(filter.receiver_email) condition.receiver_email = ILike(`%${filter.receiver_email}%`);
			if(filter.receiver_phone) condition.receiver_phone = ILike(`%${filter.receiver_phone}%`);
		}
		const [orders, total] = await this.orderRepo.findAndCount({
			where: condition,
			order: {
				created_at: 'DESC'
			},
			relations: {
				user: true,
				transactions: true
			},
			take: paging.page_size,
			skip: ((paging.page - 1) * paging.page_size)
		});

		return { orders: orders, meta: new Paging(paging.page, paging.page_size, total) };
	}

	async findOne(id: number) {
		return await this.orderRepo.findOne({
			where: {
				id: id
			},
			relations: {
				user: true,
				transactions: true
			}
		});
	}

	async update(id: number, updateOrderDto: UpdateOrderDto) {
		// if(updateOrderDto. receiver_email&& !regexEmail.test(updateOrderDto.receiver_email.trim())) {
		// 	throw new BadRequestException({code: 'OR0003', message: 'Email invalid'});
		// }
		await this.orderRepo.update(id, updateOrderDto);
		return await this.findOne(id);
	}

	remove(id: number) {
		return `This action removes a #${id} order`;
	}
}
