import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Equal, Like, Raw, Repository } from 'typeorm';
import { IPaging, Paging } from 'src/helpers/helper';
import { CreateSlidesDto } from './dto/createSlide.dto';
import { UpdateSlidesDto } from './dto/updateSlide.dto';
import { Slide } from 'src/entities/slide.entity';

@Injectable()
export class SlideService {

    constructor(
        @InjectRepository(Slide)
        private slideRepo: Repository<Slide>,
    ) { }

    async getSlides(paging: IPaging, filters: any, req?: any) {
        let conditions = await this.buildConditions(filters);

        const [slides, total] = await this.slideRepo.findAndCount({
            where: conditions,
            order: { created_at: 'DESC' },
            take: paging.page_size,
            skip: ((paging.page - 1) * paging.page_size)
        });

        return { slides: slides, meta: new Paging(paging.page, paging.page_size, total) }
    }

    async getSlideById(id: number): Promise<Slide> {
        return await this.slideRepo.findOneBy({ id: id });
    }

    async createSlide(data: CreateSlidesDto) {
        let newSlide = await this.slideRepo.create({
            ...data
        });
        await this.slideRepo.save(newSlide);
        return newSlide;
    }

    async updateSlide(id: number, data: UpdateSlidesDto) {
        await this.slideRepo.update(id, data);
        return this.slideRepo.findOneBy({ id: id });
    }

    async deleteSlide(id: number): Promise<void> {
        await this.slideRepo.delete(id)
    }

    async buildConditions(filters: any)
    {
        const conditions: any = {};
        if (filters.id) conditions.id = Equal(filters.id);
        if (filters.name) conditions.name = Like(`%${filters.name}%`) ;
        if (filters.status) conditions.status = Equal(filters.status);

        return conditions;
    }

}
