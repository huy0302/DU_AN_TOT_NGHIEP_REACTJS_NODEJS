import { Injectable } from '@nestjs/common';
import { InjectRepository } from "@nestjs/typeorm";
import { RolePermission } from 'src/entities/role-permission.entity';
import { In, Repository } from "typeorm";
import { RolePermissionDto } from '../dtos/role-permission.dto';

@Injectable()
export class RolePermissionService {
    constructor(
        @InjectRepository(RolePermission)
        private rolePermissionRepository: Repository<RolePermission>
    ) {
    }

    async deleteByRoleId(role_id: number)
    {
        await this.rolePermissionRepository.createQueryBuilder()
            .delete()
            .from(RolePermission)
            .where("role_id = :role_id", { role_id: role_id })
            .execute();
    }

    async create(RolePermissionData: RolePermissionDto)
    {
        const newData = await this.rolePermissionRepository.create(RolePermissionData);
        return await this.rolePermissionRepository.save(newData);
    }

    async getPermissionIdsByRoleIds(roleIds: any)
    {
        return await this.rolePermissionRepository.find({
            where : {
                role_id:  In(roleIds)
            },
            select: ['permission_id']
        });
    }
}
