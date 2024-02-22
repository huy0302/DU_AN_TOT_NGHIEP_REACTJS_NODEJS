import { Injectable } from '@nestjs/common';
import { CreateOrderDto } from './dto/create-order.dto';
import { UpdateOrderDto } from './dto/update-order.dto';
import { InjectRepository } from '@nestjs/typeorm';
import { Orders } from 'src/entities/orders.entity';
import { ILike, In, Like, Repository } from 'typeorm';
import { ProductService } from '../product/product.service';
import * as _ from 'lodash';
import { BadRequestException } from 'src/helpers/response/badRequest';
import { IPaging, Paging } from 'src/helpers/helper';
import { Products } from 'src/entities/product.entity';
import { TransactionOrderDto } from './dto/transactionOrder.dto';
import { Transactions } from 'src/entities/transaction.entity';
import { TransactionDto } from './dto/transaction.dto';
import axios from 'axios';
import { MailService } from 'src/modules/mail/mail.service';

@Injectable()
export class OrderService {
	constructor(
		@InjectRepository(Orders) private readonly orderRepo: Repository<Orders>,
		@InjectRepository(Products) private readonly productRepo: Repository<Products>,
		@InjectRepository(Transactions) private readonly transRepo: Repository<Transactions>,
		private readonly productService: ProductService,
		private mailService: MailService
	) { }

	async create(createOrderDto: CreateOrderDto, user: any) {
		let products = createOrderDto.products || null;

		const rs = await this.countProduct(products);
		let transactionOrder: any = rs.products;
		createOrderDto.total_discount = rs.totalDiscount;
		delete createOrderDto.products;
		createOrderDto.total_price = rs.totalPrice;
		createOrderDto.user_id = user.id;
		createOrderDto.status = 1;
		createOrderDto.shipping_status = 1;
		createOrderDto.payment_status = 0;
		createOrderDto.created_at = new Date();
		createOrderDto.updated_at = new Date();

		const newOrder: any = this.orderRepo.create(createOrderDto);
		await this.orderRepo.save(newOrder);
		await this.storeTransaction(transactionOrder, newOrder.id, user.id);

		return newOrder;
	}

	async countProduct(products: any) {
		let totalDiscount = 0;
		let totalPrice = 0;
		if (_.isEmpty(products)) {
			throw new BadRequestException({ code: 'OR0001', message: 'products not empty' });
		}
		for (let item of products) {
			let product: any = await this.productRepo.findOne({
				where: {
					id: Number(item.id),
					status: 1
				}
			});
			if (_.isEmpty(product)) {
				throw new BadRequestException({ code: 'OR0001', message: `Product id ${item.id} not found` });
			}
			if (Number(item.quantity) > Number(product.number)) {
				throw new BadRequestException({ code: 'OR0001', message: `Quantity of product id ${item.id} too much` });
			}
			item.avatar = product.avatar;
			item.price = product.price;
			item.status = product.status;
			item.product_id = item.id;
			delete item.id;

			item.discount = (Number(product.sale) / 100) * Number(product.price) * Number(item.quantity);
			item.name = product.name;
			item.total_price = (Number(product.price) * Number(item.quantity) - item.discount);
			totalDiscount += item.discount;
			totalPrice += item.total_price;
		}
		return { products, totalDiscount, totalPrice };

	}

	async storeTransaction(data: TransactionDto[], orderId: number, userId: number) {
		for (let item of data) {
			const newTrans = await this.transRepo.create(
				{
					...item,
					created_at: new Date(),
					updated_at: new Date(),
					order_id: orderId,
					user_id: userId
				});
			await this.transRepo.save(newTrans);
		}

	}

	async findAll(paging: IPaging, filter: any) {
		let condition: any = {};
		if (filter) {
			if (filter.product_name) condition.transactions = {
				name: ILike(`%${filter.product_name.trim()}%`)
			};
			if (filter.status) condition.status = filter.status;
			if (filter.user_id) condition.user_id = filter.user_id;
			if (filter.shipping_status) condition.shipping_status = filter.shipping_status;
			if (filter.receiver_name) condition.receiver_name = ILike(`%${filter.receiver_name}%`);
			if (filter.receiver_email) condition.receiver_email = ILike(`%${filter.receiver_email}%`);
			if (filter.receiver_phone) condition.receiver_phone = ILike(`%${filter.receiver_phone}%`);
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
		console.log(orders);
		return { orders: orders, meta: new Paging(paging.page, paging.page_size, total) };
	}

	async findOne(id: number) {
		return await this.orderRepo.findOne({
			where: { id: id },
			relations: {
				user: true,
				transactions: true
			}
		});
	}

	update(id: number, updateOrderDto: UpdateOrderDto) {
		return `This action updates a #${id} order`;
	}

	remove(id: number) {
		return `This action removes a #${id} order`;
	}

	async webhook(req: any, res: any) {
		let id = req.query.vnp_TxnRef;
		console.log("order id------> ", id);
		if (req.query.vnp_ResponseCode == "00") {
			// req.query.vnp_ResponseCode === "00" thanh toán thành công
			const order = await this.findOne(id);
			console.log("order=======> ", order);
			// order.status = 2 ;
			order.payment_status = 1;// Đã thanh toán;
			order.payment_type = 1;// Đã thanh toán;
			this.orderRepo.update(order.id,
				{
					payment_status: 1,
					payment_type: 1,
					updated_at: new Date()
				});
			if (order) {
				this.mailService.sendOrderData(order)
			}

			return res.redirect(process.env.URL_REDIRECT_FE + '/payment/success');
		}

		return res.redirect(process.env.URL_REDIRECT_FE + '/payment/error');
		// return res.status(200).json({ data: req.query, status: 200 });
	}
}
