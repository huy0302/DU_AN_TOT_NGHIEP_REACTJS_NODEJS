import { Module } from '@nestjs/common';
import { UserController } from './user.controller';
import { UserService } from './user.service';
import { TypeOrmModule } from '@nestjs/typeorm';

import { User } from 'src/entities/user.entity';
import { Role } from 'src/entities/role.entity';
import { Permission } from 'src/entities/permission.entity';
import { RolePermission } from 'src/entities/role-permission.entity';
import { UserRole } from 'src/entities/user-roles.entity';

import { UserRoleService } from './services/user-role.service';
import { RolePermissionService } from './services/role-permission.service';
import { RoleService } from './services/role.service';
import { PermissionService } from './services/permission.service';
import { ValidateService } from './services/validate.service';
import { RoleController } from './controllers/role.controller';
import { PermissionController } from './controllers/permission.controller';
import { JwtModule, JwtService } from '@nestjs/jwt';

@Module({
	imports: [
		TypeOrmModule.forFeature([
			User,
			Role,
			Permission,
			UserRole,
			RolePermission
		]),
		JwtModule
	],
	controllers: [UserController, RoleController, PermissionController],
	providers: [
		UserService, 
		UserRoleService, 
		RolePermissionService,
		RoleService,
		PermissionService,
		ValidateService,
		JwtService
	], 
	exports: [
		UserService, 
		UserRoleService, 
		RolePermissionService,
		RoleService,
		PermissionService,
		ValidateService
	]
})
export class UserModule { }
