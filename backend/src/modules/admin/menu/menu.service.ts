import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Menu } from 'src/entities/menu.entity';
import { IPaging, Paging } from 'src/helpers/helper';
import { Equal, Raw, Repository } from 'typeorm';
import { CreateMenuDto } from './dto/createMenu.dto';
import { UpdateMenuDto } from './dto/updateMenu.dto';

@Injectable()
export class MenuService {
    
    constructor(
        @InjectRepository(Menu)
        private menuRepo: Repository<Menu>
    ) {}

    async getMenus(paging: IPaging, filters: any, req?: any) {
        let conditions = await this.buildConditions(filters);

        const [menus, total] = await this.menuRepo.findAndCount({
            where: conditions,
            order: { created_at: 'DESC' },
            take: paging.page_size,
            skip: ((paging.page - 1) * paging.page_size)
        });
        
        return { menus: menus, meta: new Paging(paging.page, paging.page_size, total) }
    }

    async getMenuById(id: number): Promise<Menu> {
        return await this.menuRepo.findOneBy({ id: id });
    }

    async createMenu(data: CreateMenuDto) {
        let newMenu = await this.menuRepo.create({
            ...data
        });
        await this.menuRepo.save(newMenu);
        return newMenu;
    }

    async updateMenu(id: number, data: UpdateMenuDto) {
        await this.menuRepo.update(id, data);
        return this.menuRepo.findOneBy({ id: id });
    }

    async deleteMenu(id: number): Promise<void> {
        await this.menuRepo.delete(id);
    }

    async buildConditions(filters: any) {
        const conditions: any = {};

        if (filters.id) conditions.id = Equal(filters.id);
        if (filters.name) conditions.name = Raw(alias => `${alias} ILIKE '%${filters.name}%'`);
        if (filters.status) conditions.status = Equal(filters.status);
        if (filters.hot) conditions.hot = Equal(filters.hot);

        return conditions;
    }
}
