import { Injectable } from '@nestjs/common';
import { InjectRepository } from "@nestjs/typeorm";
import { UserRole } from 'src/entities/user-roles.entity';
import { Repository } from "typeorm";
import { UserRoleDto } from '../dtos/user-role.dto';

@Injectable()
export class UserRoleService {
    constructor(
        @InjectRepository(UserRole)
        private userRoleRepository: Repository<UserRole>

    ) {
    }

    async deleteByRoleId(role_id: number)
    {
        await this.userRoleRepository.createQueryBuilder()
            .delete()
            .from(UserRole)
            .where("role_id = :role_id", { role_id: role_id })
            .execute();
    }

	async deleteByUserId(user_id: number)
    {
        await this.userRoleRepository.createQueryBuilder()
            .delete()
            .from(UserRole)
            .where("user_id = :user_id", { user_id: user_id })
            .execute();
    }

    async create(userRoleDto: UserRoleDto)
    {
        const newData = await this.userRoleRepository.create(userRoleDto);
        return await this.userRoleRepository.save(newData);
    }
}
