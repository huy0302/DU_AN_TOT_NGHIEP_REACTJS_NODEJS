import { Injectable } from '@nestjs/common';
import { InjectRepository } from "@nestjs/typeorm";
import { Role } from 'src/entities/role.entity';
import { Like, Repository } from "typeorm";
import { RolePermissionService } from './role-permission.service';
import { RoleDto } from '../dtos/role.dto';
import { RolePermissionDto } from '../dtos/role-permission.dto';
import { Paging } from 'src/helpers/helper';
import { UserRoleService } from './user-role.service';

@Injectable()
export class RoleService {
    constructor(
        @InjectRepository(Role)
        private roleRepository: Repository<Role>,
        private rolePermissionService: RolePermissionService,
        private userRoleService: UserRoleService
    ) {
    }

    async getListsRoles(filter: any)
    {
        const condition: any = {};
		if(filter && filter.name && filter.name.trim() !== '') {
			condition.name = Like(`%${filter.name.trim()}%`);
		}

        const [roles, total] = await this.roleRepository.findAndCount({
            where: condition,
            relations: {
                permissions: true
            },
            take: filter.page_size,
            skip: (filter.page - 1) * filter.page_size
        });

		return {
			roles: roles,
			meta: new Paging(filter.page, filter.page_size, total)
		}
    }

    async create(roleData: RoleDto)
    {
        const permissions: any = roleData.permissions;
        delete roleData.permissions;

        const newData = this.roleRepository.create({ ...roleData as any });
        const permission: any = await this.roleRepository.save(newData);

        if(permission && permissions.length > 0) {
            await this.insertOrUpdateRolePermission(permission.id, permissions);
        }

        return newData;
    }

    async show(id: number)
    {
        return await this.roleRepository.findOne({
            where: {
                id
            },
            relations: ['permissions']
        });
    }

    async update(id: number, roleData: any)
    {
        const permissions: any = roleData.permissions;
        delete roleData.permissions;

        await this.roleRepository.createQueryBuilder()
            .update(Role)
            .set({ ...roleData as any, updated_at: new Date()})
            .where("id = :id", { id: id })
            .execute();

        if(permissions.length > 0) {
            await this.insertOrUpdateRolePermission(id, permissions);
        }

        return await this.show(id);
    }

    async insertOrUpdateRolePermission(role_id: number, permission_ids: any)
    {
        // xoá dữ liệu cũ theo role_id
        await this.rolePermissionService.deleteByRoleId(role_id);
		
        // insert role_id và permission_id
        permission_ids.map((item, index) => {

            let rolePermissionDto = new RolePermissionDto();
            rolePermissionDto.role_id = Number(role_id);
            rolePermissionDto.permission_id = item;

            this.rolePermissionService.create(rolePermissionDto);
        });
    }

	async findByCondition(filter: any) {
		return await this.roleRepository.find({
			where: filter
		});
	}

	async delete(id: number) {
		await this.roleRepository.delete(id);
		await this.rolePermissionService.deleteByRoleId(id);
		await this.userRoleService.deleteByRoleId(id);
	}
}
