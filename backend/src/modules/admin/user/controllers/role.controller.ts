import { Body, Controller, Delete, Get, HttpStatus, Param, Post, Put, Req, UseFilters, UseGuards } from "@nestjs/common";
import { ApiResponse, ApiTags } from "@nestjs/swagger";
import { Request } from "express";
import { RoleService } from "../services/role.service";
import { BaseResponse } from "src/helpers/helper";
import { RoleDto } from "../dtos/role.dto";
import { JwtGuard } from "src/modules/auth/guards/jwt/jwt.guard";

@Controller('admin/role')
@ApiTags('Admin Roles')
@UseGuards(JwtGuard)
export class RoleController {
    constructor(
        private roleService: RoleService
    ) {
    }
    @Get('')
	@ApiResponse({ status: 200, description: 'success' })
    async getListsRoles(
        @Req() request: Request
    )
    {
        try{
            const filter = {
                page : request.query.page || 1,
                page_size : request.query.page_size || 10,
				name: request.query.name || null
            };

            const response = await this.roleService.getListsRoles(filter);
            return BaseResponse('success', response,'',  'success');

        } catch (e) {
            console.log('-------------- acl/permission@:getListsPermissions ', e);
            return BaseResponse(e.status, e.response, e.code || 'E0001', e.message);
        }
    }

    @Post('store')
	@ApiResponse({ status: 200, description: 'success' })
    async create(
        @Body() roleData: RoleDto
    )
    {
        try {
            const role = await this.roleService.create(roleData);
			return BaseResponse('success', role,'',  'success');
        }catch (e) {
            console.log('-------------- acl/role@:create ', e);
            return BaseResponse(e.status, e.response, e.code || 'E0001', e.message);
        }
    }

    @Get('show/:id')
	@ApiResponse({ status: 200, description: 'success' })
    async show(
        @Param('id') id: number
    )
    {
        try{
            const role = await this.roleService.show(id);
            return BaseResponse('success', role,'',  'success');
        }catch (e) {
            console.log('-------------- acl/role@:show ', e);
			return BaseResponse(e.status, e.response, e.code || 'E0001', e.message);

        }
    }

    @Put('update/:id')
	@ApiResponse({ status: 200, description: 'success' })
    async update(
        @Param('id') id: number,
        @Body() data: RoleDto
    )
    {
        try{
            const role = await this.roleService.update(id, data);
            return BaseResponse('success', role,'',  'success');
        }catch (e) {
            console.log('-------------- acl/role@:update ', e);
            return BaseResponse(e.status, e.response, e.code || 'E0001', e.message);
        }
    }

	@Delete('/delete/:id')
	@ApiResponse({ status: 200, description: 'success' })
    async delete(
        @Param('id') id: number,
    )
    {
        try{
            const role = await this.roleService.delete(id);
            return BaseResponse('success', role,'',  'success');
        }catch (e) {
            console.log('-------------- acl/role@:update ', e);
            return BaseResponse(e.status, e.response, e.code || 'E0001', e.message);
        }
    }
}
