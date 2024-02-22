import { Body, Controller, Delete, Get, HttpCode, HttpStatus, Param, Post, Put, Request } from '@nestjs/common';
import { ProductService } from './product.service';
import CreateProductDto from './dtos/create-product.dto';
import { HTTP_STATUS, IPaging, Response, BaseResponse } from 'src/helpers/helper';
import { ApiResponse, ApiTags } from '@nestjs/swagger';
import { BadRequestException } from 'src/helpers/response/badRequest';
import * as _ from 'lodash';

@Controller('product')
@ApiTags('Shop Products')
export class ProductController {

	constructor(
		private readonly adminProdService: ProductService
	){}

	@Get('')
	@HttpCode(HttpStatus.OK)
    @ApiResponse({ status: 200, description: 'success' })
	async getProducts(
		@Request() req: any
	) {
		try {
			const paging: IPaging = {
				page: req.query.page || 1,
				page_size: req.query.page_size || 20
			};
			const filters = {
				name: req.query.name || null,
				status: req.query.status || null,
				category_id: req.query.category_id || null,
				is_hot: req.query.is_hot || null,
				is_sale: req.query.is_sale || null,
				order: req?.query?.order || null
			};
			return BaseResponse(HTTP_STATUS.success, await this.adminProdService.getProducts(paging, filters),'', 'successfully!');
		} catch (error) {
			console.log('-----e@getProducts---> ', error);
			return BaseResponse(error.status, error.response, error.code || 'E0001', error.message);
		}
	}


	@Get('/show/:id')
	@HttpCode(HttpStatus.OK)
    @ApiResponse({ status: 200, description: 'success' })
	async show(
		@Param('id') id: number
	) {
		try {
			return BaseResponse(HTTP_STATUS.success, await this.adminProdService.show(id), '', 'successfully!');
		} catch (error) {
			console.log('-----e@show---> ', error);
			return BaseResponse(error.status, error.response,error.code || 'E0001', error.message);
		}
	}

	// @Delete('delete/:id')
	// @HttpCode(HttpStatus.OK)
    // @ApiResponse({ status: 200, description: 'success' })
	// async DeleteProduct(
	// 	@Param('id') id: number
	// ) {
	// 	try {
	// 		await this.adminProdService.deleteProduct(id);
	// 		return BaseResponse(HTTP_STATUS.success, {},'', 'successfully!');
	// 	} catch (error) {
	// 		console.log('-----e@updateProduct---> ', error);
	// 		return BaseResponse(error.status, error.response,'E0001', error.message);
	// 	}
	// }

}
