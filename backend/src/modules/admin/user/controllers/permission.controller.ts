import { Body, Controller, Get, HttpStatus, Param, Post, Put, Req, UseGuards } from "@nestjs/common";
import { ApiResponse, ApiTags } from "@nestjs/swagger";
import { PermissionService } from "../services/permission.service";
import { BaseResponse, GROUP_TYPE } from "src/helpers/helper";
import { PermissionDto } from "../dtos/permission.dto";
import { JwtGuard } from "src/modules/auth/guards/jwt/jwt.guard";
import { RoleGuard } from "src/modules/auth/guards/role/role.guard";

@Controller('admin/permission')
@ApiTags('Admin Permission')
@UseGuards(JwtGuard)
export class PermissionController {
	constructor(
		private permissionService: PermissionService
	) {
	}
	@Get('')
	@UseGuards(RoleGuard)
	@ApiResponse({ status: 200, description: 'success' })
	async getListsPermissions(
		@Req() request: any
	) {
		try {
			const filter = {
				group: request.query.group || null,
				page: request.query.page || 1,
				name: request.query.name || null,
				page_size: request.query.page_size || 10,
				id: request.query.id || null
			};

			const response = await this.permissionService.getListsPermissions(filter);

			return BaseResponse('success', response,'',  'success');

		} catch (e) {
			console.log('-------------- acl/permission@:getListsPermissions ', e);
			return BaseResponse(e.status, e.response, e.code || 'E0001', e.message);
		}
	}

	@Post('store')
	@ApiResponse({ status: 200, description: 'success' })
	async create(
		@Body() permissionData: PermissionDto
	) {
		try {
			// const permission = await this.permissionService.create(permissionData);
			return BaseResponse('success', [],'',  'success');
		} catch (e) {
			console.log('-------------- acl/permission@:create ', e);
			return BaseResponse(e.status, e.response, e.code || 'E0001', e.message);
		}
	}

	@Post('seed')
	@ApiResponse({ status: 200, description: 'success' })
	async seed(
	) {
		try {
			const permission = await this.permissionService.seed();
			return BaseResponse('success', [],'',  'success');
		} catch (e) {
			console.log('-------------- acl/permission@:create ', e);
			return BaseResponse(e.status, e.response, e.code || 'E0001', e.message);
		}
	}

	@Get('show/:id')
	@ApiResponse({ status: 200, description: 'success' })
	async show(
		@Param('id') id: number
	) {
		try {
			const permission = await this.permissionService.show(id);
			return BaseResponse('success', permission,'',  'success');
		} catch (e) {
			console.log('-------------- acl/permission@:show ', e);
			return BaseResponse(e.status, e.response, e.code || 'E0001', e.message);
		}
	}

	@Put('update/:id')
	@ApiResponse({ status: 200, description: 'success' })
	async update(
		@Param('id') id: number,
		@Body() permissionData: any
	) {
		try {
			const permission = await this.permissionService.update(id, permissionData);
			return BaseResponse('success', permission,'',  'success');
		} catch (e) {
			console.log('-------------- acl/permission@:update ', e);
			return BaseResponse(e.status, e.response, e.code || 'E0001', e.message);
		}
	}

	@Put(':id')
	@ApiResponse({ status: 200, description: 'success' })
	async delete(
		@Param('id') id: number,
		@Body() permissionData: PermissionDto
	) {
		try {
			const permission = await this.permissionService.update(id, permissionData);
			return BaseResponse('success', permission,'',  'success');
		} catch (e) {
			console.log('-------------- acl/permission@:update ', e);
			return BaseResponse(e.status, e.response, e.code || 'E0001', e.message);
		}
	}

	@Get('config-type')
	@ApiResponse({ status: 200, description: 'success' })
	async groupType() {
		try {
			return BaseResponse('success', GROUP_TYPE,'',  'success');
		} catch (e) {
			console.log('-------------- acl/permission@:groupType ', e);
		}
	}
}
