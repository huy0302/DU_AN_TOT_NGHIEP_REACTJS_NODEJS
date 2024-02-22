import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Permission } from 'src/entities/permission.entity';
import { Role } from 'src/entities/role.entity';
import { UserRole } from 'src/entities/user-roles.entity';
import { User } from 'src/entities/user.entity';
import { IPaging, Paging, USER_CONST, newArrayError } from 'src/helpers/helper';
import { BadRequestException } from 'src/helpers/response/badRequest';
import { ILike, In, Like, Not, Repository } from 'typeorm';
import CreateUserDto from './dtos/create-user.dto';
import * as bcrypt from "bcrypt";
import * as _ from "lodash";
import UpdateUserDto from './dtos/update-user.dto';
import { ValidateService } from './services/validate.service';
import { UserRoleService } from './services/user-role.service';
import { PermissionService } from './services/permission.service';
import { RoleService } from './services/role.service';
import { UserRoleDto } from './dtos/user-role.dto';
import { RolePermission } from 'src/entities/role-permission.entity';

@Injectable()
export class UserService {
	public selectColumn = [
		"id", "avatar", "created_at", 'birthDay',
		'username',
		'roles', 'gender', 'email', 'gender', 'address', 
		'name', 'phone', 'status', 'type', 'updated_at']
	constructor(
		@InjectRepository(User) private readonly admUserRepo: Repository<User>,
		@InjectRepository(Role) private readonly admRoleRepo: Repository<Role>,
		@InjectRepository(Permission) private readonly admPermissionRepo: Repository<Permission>,
		@InjectRepository(UserRole) private readonly admUserRoleRepo: Repository<UserRole>,
		private readonly validateService: ValidateService,
		private readonly userRoleService: UserRoleService,

	) {

	}

	async buildCondition(filter: any) {
		let condition: any = {};
		if (filter) {
			if (filter.email && filter.email.trim() != '') condition.email = Like(`%${filter.email.trim()}%`);
			if (filter.phone && filter.phone.trim() != '') condition.phone = Like(`%${filter.phone.trim()}%`);
			if (filter.status) condition.status = filter.status;
			if (filter.id) condition.id = filter.id;
			if (filter.type) condition.type = filter.type;
			if (filter.ignore_id && filter.id != filter.ignore_id) condition.id = Not(filter.ignore_id);
			if (filter.role_id) condition.roles = {
				id: filter.role_id
			}
		}
		return condition;
	}

	async getListsUsers(paging: IPaging, filter: any) {
		const condition: any = await this.buildCondition(filter);

		const [users, total] = await this.admUserRepo.findAndCount({
			where: condition,
			select: [].concat(this.selectColumn),
			relations: {
				roles: true
			},
			order: {
				created_at: 'DESC'
			},
			take: paging.page_size,
			skip: (paging.page - 1) * paging.page_size
		});

		return {
			users: users,
			meta: new Paging(paging.page, paging.page_size, total)
		};
	}

	async getByUserNameOrEmail(account: string) {
		const user = await this.admUserRepo.findOne({
			relations: {
				roles: true
			},
			where: [
				{ email: account },
				{ username: account },
			]
		});

		return user;
	}

	async create(userDto: CreateUserDto) {
		await this.validateService.validateUser(userDto, true);
		let roles = [];
		if (!_.isEmpty(userDto.roles)) {
			roles = userDto.roles;
		}
		delete userDto.roles;

		userDto.status = userDto.status || USER_CONST.USER_STATUS_ACTIVE;
		if(!userDto.type) {
			userDto.type = USER_CONST.USER_ADM;
		}
		if (userDto.birthDay) {
			userDto.birthDay = new Date(userDto.birthDay);
		}
		userDto.created_at = new Date();
		userDto.updated_at = new Date();
		userDto.password = await bcrypt.hash(userDto.password.trim(), 10);
		const newUser = await this.admUserRepo.create({ ...userDto as any });

		const account: any = await this.admUserRepo.save(newUser);
		if (account && !_.isEmpty(roles)) {
			await this.syncRolesByUser(roles, account.id);
		}

		return account;
	}

	async update(id: number, userDto: UpdateUserDto) {
		await this.validateService.validateUser(userDto);
		let roles: any = [];
		if (userDto.birthDay) {
			userDto.birthDay = new Date(userDto.birthDay);
		}
		// if (!_.isEmpty(userDto.roles)) {
		// 	roles = userDto.roles;
			
		// }
		// delete userDto.roles;

		if(userDto.password) {
			userDto.password = await bcrypt.hash(userDto.password.trim(), 10);
		}
		console.log(userDto);
		await this.admUserRepo.update(id, userDto)
		
		// if (!_.isEmpty(roles)) {
		// 	await this.syncRolesByUser(roles, id);
		// }
		return await this.show(id);
	}

	async syncRolesByUser(roles: any, user_id: number) {
		await this.userRoleService.deleteByUserId(user_id);
		for (let item of roles) {
			let userRoleDto = new UserRoleDto();
			userRoleDto.role_id = item;
			userRoleDto.user_id = user_id;
			await this.admUserRoleRepo.save(userRoleDto);
		}
	}

	async show(id: number) {
		return await this.findById(id);
	}

	async findById(id: number) {
		return await this.admUserRepo.findOne({
			where: {
				id: id
			},
			relations: {
				roles: true
			},
			select: [].concat(this.selectColumn)
		});
	}

	async activeUser(id: number, admin: any) {
		const user = await this.findById(id);
		if (_.isEmpty(user)) {
			throw new BadRequestException({ code: 'E0002' });
		}
		user.status = USER_CONST.USER_STATUS_ACTIVE;
		this.admUserRepo.save({ ...user, updated_at: new Date() });

	}

	async activesUser(ids: any, admin: any) {
		if (!_.isEmpty(ids)) {
			ids.map(async (id: number) => {
				await this.activeUser(id, admin);
			})
		}
	}

	async accountLock(id: number, admin: any) {
		const user = await this.findById(id);
		if (_.isEmpty(user)) {
			throw new BadRequestException({ code: 'E0002' });
		}
		user.status = USER_CONST.USER_STATUS_LOCK;
		await this.admUserRepo.save({ ...user, updated_at: new Date() });
	}

	async accountsLock(ids: any, admin: any) {
		if (!_.isEmpty(ids)) {
			ids.map(async (id: number) => {
				await this.accountLock(id, admin);
			});
		}
	}

	async getPermissionByUserId(id: number) {
		return await this.admUserRepo.findOne({
			where: {
				id: id
			},
			// relations: [
			//     'permissions'
			// ]
		})
	}

	async findByUsername(username: string) {

	}
}
