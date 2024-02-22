import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Article } from 'src/entities/article.entity';
import { IPaging, Paging } from 'src/helpers/helper';
import { Equal, Raw, Repository } from 'typeorm';
import { CreateArticleDto } from './dto/createArticle.dto';
import { UpdateArticleDto } from './dto/updateArticle.dto';

@Injectable()
export class ArticleService {
    
    constructor(
        @InjectRepository(Article)
        private articleRepo: Repository<Article>
    ) {}

    async getArticles(paging: IPaging, filters: any, req?: any) {
        let conditions = await this.buildConditions(filters);

        const [articles, total] = await this.articleRepo.findAndCount({
            where: conditions,
            order: { created_at: 'DESC' },
            relations: {
               
                // user: true
            },
            take: paging.page_size,
            skip: ((paging.page - 1) * paging.page_size)
        });

        return { articles: articles, meta: new Paging(paging.page, paging.page_size, total) }
    }

    async getArticleById(id: number): Promise<Article> {
        return await this.articleRepo.findOneBy({ id: id });
    }

    async createArticle(data: CreateArticleDto) {
        let newArticle = await this.articleRepo.create({
            ...data
        });
        await this.articleRepo.save(newArticle);
        return newArticle;
    }

    async updateArticle(id: number, data: UpdateArticleDto) {
        await this.articleRepo.update(id, data);
        return this.articleRepo.findOneBy({ id: id });
    }

    async deleteArticle(id: number): Promise<void> {
        await this.articleRepo.delete(id);
    }

    async buildConditions(filters: any) {
        const conditions: any = {};

        if (filters.id) conditions.id = Equal(filters.id);
        if (filters.name) conditions.name = Raw(alias => `${alias} ILIKE '%${filters.name}%'`);
        if (filters.status) conditions.status = Equal(filters.status);
        if (filters.hot) conditions.hot = Equal(filters.hot);
        if (filters.menu_id) conditions.menu_id = Equal(filters.menu_id);
        if (filters.user_id) conditions.user_id = Equal(filters.user_id);

        return conditions;
    }
}
