import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Category } from 'src/entities/category.entity';
import { Equal, Raw, Repository } from 'typeorm';
import { UpdateCategoryDto } from './dto/updateCate.dto';
import { CreateCategoryDto } from './dto/createCate.dto';
import { IPaging, Paging } from 'src/helpers/helper';

@Injectable()
export class CategoryService {

    constructor(
        @InjectRepository(Category)
        private cateRepo: Repository<Category>,
    ) { }

    async getCategories(paging: IPaging, filters: any, req?: any) {
        let conditions = await this.buildConditions(filters);

        const [categories, total] = await this.cateRepo.findAndCount({
            where: conditions,
            order: { created_at: 'DESC' },
            take: paging.page_size,
            skip: ((paging.page - 1) * paging.page_size),
        });

        return { categories: categories, meta: new Paging(paging.page, paging.page_size, total) };
    }

    async getCategoryById(cateId: number): Promise<Category> {
        return await this.cateRepo.findOneBy({ id: cateId });
    }

    async createCategory(data: CreateCategoryDto) {
        let newCate = await this.cateRepo.create({
            ...data
        });
        await this.cateRepo.save(newCate);
        return newCate;
    }

    async updateCategory(cateId: number, data: UpdateCategoryDto) {
        await this.cateRepo.update(cateId, data);
        return this.cateRepo.findOneBy({ id: cateId });
    }

    async deleteCategory(cateId: number): Promise<void> {
        await this.cateRepo.delete(cateId)
    }

    async buildConditions(filters: any)
    {
        const conditions: any = {};

        if (filters.id) conditions.id = Equal(filters.id);
        if (filters.name) conditions.name = Raw(alias => `${alias} ILIKE '%${filters.name}%'`);
        if (filters.status) conditions.status = Equal(filters.status);
        if (filters.hot) conditions.hot = Equal(filters.hot);

        return conditions;
    }

    async getCategoriesHot(paging: IPaging) {
        const condition: any = {};
        condition.hot = Equal(1);

        const [ categories, total] = await this.cateRepo.findAndCount({
            where: condition,
            order: { created_at: 'DESC' },
            take: paging.page_size,
            skip: ((paging.page - 1) * paging.page_size)
        });

        return { categories: categories, meta: new Paging(paging.page, paging.page_size, total) };
    } 

}
