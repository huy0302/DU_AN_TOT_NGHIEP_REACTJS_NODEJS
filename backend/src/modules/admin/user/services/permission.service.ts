import { Injectable } from '@nestjs/common';
import { InjectRepository } from "@nestjs/typeorm";
import { Like, Repository } from "typeorm";
import { Permission } from 'src/entities/permission.entity';
import { PermissionDto } from '../dtos/permission.dto';
import { Paging } from 'src/helpers/helper';

@Injectable()
export class PermissionService {
    constructor(
        @InjectRepository(Permission)
        private permissionRepository: Repository<Permission>
    ) {
    }
    async getListsPermissions(filter: any)
    {
        const condition: any = {};
        if (filter.group) condition.group = filter.group;
        if (filter.id) condition.id = filter.id;
        if (filter.name) condition.name = Like('%' + filter.name +'%');

        const [rs, total] = await this.permissionRepository.findAndCount({
            where: condition,
            take: filter.page_size,
            skip: (filter.page - 1) * filter.page_size
        });
		return {
			permissions: rs,
			meta: new Paging(filter.page, filter.page_size, total)
		};
    }

    async create(permissionData: PermissionDto)
    {
        const newData = await this.permissionRepository.create(permissionData);
        return await this.permissionRepository.save(newData);
    }

	async seed() {
		console.log("seed");
		const permissions = [
            {
                name : 'List Order',
                description: 'Danh sách Đơn hàng',
                group: 'ORDER',
                guard_name: '/order/'
            },
            {
                name : 'Show Order',
                description: 'Chi tiết đơn hàng',
				group: 'ORDER',
                guard_name: '/order/show/:id'
            },
            {
                name : 'Update Order',
                description: 'Cập nhật đơn hàng',
				group: 'ORDER',
                guard_name: '/order/update/:id'
            },
            {
                name : 'List Product',
				group: 'PRODUCT',
                description: 'Danh sách sản phẩm',
                guard_name: '/product/'
            },
            {
                name : 'Show Product',
				group: 'PRODUCT',
                description: 'Chi tiết sản phẩm',
                guard_name: '/product/show/:id'
            },
            {
                name : 'Add Product',
				group: 'PRODUCT',
                description: 'Thêm mới sản phẩm',
                guard_name: '/product/store'
            },
            {
                name : 'Update Product',
				group: 'PRODUCT',
                description: 'Cập nhật sản phẩm',
                guard_name: '/product/update/:id'
            },
            {
                name : 'List Category',
				group: 'CATEGORY',
                description: 'Danh sách phân loại',
                guard_name: '/category/'
            },
            {
                name : 'Show Category',
				group: 'CATEGORY',
                description: 'Chi tiết phân loại',
                guard_name: '/category/show/:id'
            },
            {
                name : 'Add Category',
				group: 'CATEGORY',
                description: 'Thêm mới Phân loại',
                guard_name: '/category/store'
            },
            {
                name : 'Update Category',
				group: 'CATEGORY',
                description: 'Cập nhật phân loại',
                guard_name: '/category/update/:id'
            },
            {
                name : 'List Slide',
				group: 'SLIDE',
                description: 'Danh sách slide',
                guard_name: '/slide/'
            },
            {
                name : 'Show Slide',
				group: 'SLIDE',
                description: 'Chi tiết slide',
                guard_name: '/slide/show/:id'
            },
            {
                name : 'Add Slide',
				group: 'SLIDE',
                description: 'Thêm mới slide',
                guard_name: '/slide/store'
            },
            {
                name : 'Update Slide',
				group: 'SLIDE',
                description: 'Cập nhật slide',
                guard_name: '/slide/update/:id'
            },
			
            {
                name : 'List Role',
				group: 'ROLE',
                description: 'Danh sách Role',
                guard_name: '/role/'
            },
            {
                name : 'Show Role',
				group: 'ROLE',
                description: 'Chi tiết Role',
                guard_name: '/role/show/:id'
            },
            {
                name : 'Add Role',
				group: 'ROLE',
                description: 'Thêm mới Role',
                guard_name: '/role/store'
            },
            {
                name : 'Update Role',
				group: 'ROLE',
                description: 'Update Role',
                guard_name: '/role/update/:id'
            },
            {
                name : 'List permission',
				group: 'PERMISSION',
                description: 'Danh sách permission',
                guard_name: '/permission/'
            },
            // {
            //     name : 'Show permission',
            //     description: 'how permission',
            //     guard_name: '/permission/:id'
            // },
            // {
            //     name : 'add permission',
            //     description: 'Thêm mới permission',
            //     guard_name: '/permission/store'
            // },
            // {
            //     name : 'Update permission',
            //     description: 'Update permission',
            //     guard_name: '/permission/update/:id'
            // },
            {
                name : 'List Contact',
				group: 'CONTACT',
                description: 'Danh sách contact',
                guard_name: '/contact/'
            },
            {
                name : 'Show contact',
				group: 'CONTACT',
                description: 'Chi tiết contact',
                guard_name: '/contact/show/:id'
            },
            {
                name : 'Add contact',
				group: 'CONTACT',
                description: 'Thêm mới contact',
                guard_name: '/contact/store'
            },
            {
                name : 'Update contact',
				group: 'CONTACT',
                description: 'Update contact',
                guard_name: '/contact/update/:id'
            },
            {
                name : 'List user',
				group: 'USER',
                description: 'Danh sách user',
                guard_name: '/user/'
            },
            {
                name : 'Show user',
				group: 'USER',
                description: 'Chi tiết user',
                guard_name: '/user/show/:id'
            },
            {
                name : 'Add user',
				group: 'USER',
                description: 'Thêm mới user',
                guard_name: '/user/store'
            },
            {
                name : 'Update user',
                description: 'Cập nhật user',
				group: 'USER',
                guard_name: '/user/update/:id'
            },
            

			{
                name : 'List reviews',
				group: 'VOTE',
                description: 'List reviews',
                guard_name: '/vote'
            },

			{
                name : 'Show vote',
				group: 'VOTE',
                description: 'Show vote',
                guard_name: '/vote/show/:id'
            },

			{
                name : 'Update Vote',
				group: 'VOTE',
                description: 'Update Vote',
                guard_name: '/vote/update/:id'
            },

			{
                name : 'Create Vote',
				group: 'VOTE',
                description: 'Create Vote',
                guard_name: '/vote/store'
            },

			{
                name : 'Delete vote',
				group: 'VOTE',
                description: 'delete vote',
                guard_name: '/vote/:id'
            },
			
        ]

        for(let i = 0 ; i < permissions.length ; i ++) {
            let permission = permissions[i];
            let check = await this.permissionRepository.findOne({
				where: {
					guard_name: permission.guard_name
				}
			});
            console.log('------- CHECK: =>  ', check);
            if (!check) {
                const newData = this.permissionRepository.create({...permission, created_at: new Date(), updated_at: new Date()});
                await this.permissionRepository.save(newData);
                console.log('------------- NEW PERMISSION: ', permission);
            } else {
				await this.permissionRepository.update(check?.id, {...permission, created_at: new Date(), updated_at: new Date()})
			}
        }
	}

    async show(id: number)
    {
        return await this.permissionRepository.findOne({
            where: {
                id
            },
            relations: ['roles']
        });
    }

    async update(id: number, permissionData: any)
    {
         await this.permissionRepository.createQueryBuilder()
            .update(Permission)
            .set({...permissionData, updated_at: new Date()})
            .where("id = :id", { id: id })
            .execute();

         return await this.show(id);
    }
}
