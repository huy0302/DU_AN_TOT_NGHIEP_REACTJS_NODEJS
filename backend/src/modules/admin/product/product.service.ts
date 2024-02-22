import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { ProductsImages } from 'src/entities/product-image.entity';
import { Products } from 'src/entities/product.entity';
import { ILike, Repository } from 'typeorm';
import CreateProductDto from './dtos/create-product.dto';
import { IPaging, Paging } from 'src/helpers/helper';
import * as _ from "lodash";
import { HttpException } from '@nestjs/common/exceptions';
import { BadRequestException } from 'src/helpers/response/badRequest';

@Injectable()
export class ProductService {

	constructor(
		@InjectRepository(Products) private readonly adminProdRepo: Repository<Products>,
		@InjectRepository(ProductsImages) private readonly adminProdImgRepo: Repository<ProductsImages>
	) { }

	async createProduct(products: CreateProductDto) {
		products.updated_at = new Date();
		products.created_at = new Date();
		let newProducts = this.adminProdRepo.create({ ...products });
		delete newProducts.product_images;
		await this.adminProdRepo.save(newProducts);
		if(newProducts && !_.isEmpty(products.products_images)) {
			await this.saveProductImage(newProducts.id, products.products_images);
		}
		return { products: newProducts };
	}

	async getProducts(paging: IPaging, filters: any) {
		let condition: any = {};
		if (!_.isEmpty(filters)) {
			if (filters.name) condition.name = ILike(`%${filters.name}%`);
			if (filters.status) condition.status = filters.status;
			if (filters.category_id) condition.category_id = filters.category_id;
			if (filters.hot) condition.hot = filters.hot;
			if (filters.id) condition.id = filters.id;
		}
		const [products, total] = await this.adminProdRepo.findAndCount({
			where: condition,
			order: {
				created_at: 'DESC'
			},
			relations: {
				product_images: true,
				category: true
			},
			take: paging.page_size,
			skip: ((paging.page - 1) * paging.page_size)
		});

		return { products: products, meta: new Paging(paging.page, paging.page_size, total) };
	}

	async show(id: number, condition = {}) {
		return {
			product: await this.adminProdRepo.findOne({
				where: {
					id, ...condition
				},
				relations: {
					product_images: true
				},
			})
		};
	}


	async update(id: number, product: any) {
		let errorData: any = {};
		if (!id) {
			errorData.id = ['Id sản phẩm không đúng định dạng'];
		}
		if (_.isEmpty(product)) {
			errorData.form = ['Form không đúng định dạng'];
		}
		let show = await this.show(id);
		if (_.isEmpty(show)) {
			errorData.product = ['Không tìm thấy sản phẩm'];
		}
		if (!_.isEmpty(errorData)) {
			throw new BadRequestException({ code: 'F0002', message: null, data: errorData });
		}
		const newProducts: any = await this.adminProdRepo.create({ ...product, updated_at: new Date() });
		await this.adminProdRepo.update(id, newProducts);
		if (product.products_images) {
			await this.adminProdImgRepo.delete({ product_id: id });
			await this.saveProductImage(id, product.products_images);
		}
		return await this.show(id);
	}

	async saveProductImage(productId: number, productImages: any) {
		const images = productImages.reduce( (newImg: any, img: any) => {
			let obj = {
				name: img.name,
				path: img.path,
				product_id: productId,
				created_at: new Date(),
				updated_at: new Date()
			}
			newImg.push(obj);

			return newImg;
		}, []);
		await this.adminProdImgRepo.createQueryBuilder()
			.insert()
			.into(ProductsImages)
			.values(images)
			.execute();
	}

	async deleteProduct(id: number) {
		await this.adminProdRepo.delete(id);
		await this.adminProdImgRepo.delete({ product_id: id });
	}

	async validateCreateProd(formProduct: CreateProductDto) {
		let errorData: any = {};

		if (!formProduct.name || (formProduct.name && formProduct.name.trim() == '')) {
			errorData.name = ['Name is required'];
		}

		// if (!formProduct.avatar || (formProduct.avatar && formProduct.avatar.trim() == '')) {
		// 	errorData.avatar = ['Avatar is required'];
		// }

		if (!formProduct.slug || (formProduct.slug && formProduct.slug.trim() == '')) {
			errorData.slug = ['Slug is required'];
		}

		if (![-1, 1].includes(Number(formProduct.status))) {
			errorData.status = ['Status is invalid'];
		}
		if (![-1, 1].includes(Number(formProduct.hot))) {
			errorData.hot = ['Hot is required'];
		}
		if (!_.isEmpty(errorData)) {
			throw new BadRequestException({ code: 'F0002', message: null, data: errorData });
		}
	}
}
