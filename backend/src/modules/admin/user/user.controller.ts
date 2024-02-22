import { Body, Controller, Get, HttpCode, Param, Post, Put, Req, UseGuards } from '@nestjs/common';
import { ApiResponse, ApiTags } from '@nestjs/swagger';
import { UserService } from './user.service';
import { HTTP_STATUS, IPaging, Response, BaseResponse } from 'src/helpers/helper';
import UpdateUserDto from './dtos/update-user.dto';
import CreateUserDto from './dtos/create-user.dto';
import { JwtGuard } from 'src/modules/auth/guards/jwt/jwt.guard';
import { RoleGuard } from 'src/modules/auth/guards/role/role.guard';

@Controller('admin/user')
@ApiTags('Admin User')
@UseGuards(JwtGuard)
export class UserController {

	constructor(
        private userService: UserService
    ) {
    }

    @Get('')
	@UseGuards(RoleGuard)
    @ApiResponse({ status: 200, description: 'success' })
    async getListsUsers(
        @Req() request: any
    )
    {
        try{
			const user = request.user;

            const filter = {
                email : request.query.email || null,
				phone: request.query.phone || null,
				role_id: request.query.role_id || null,
				status: request.query.status || null,
				type: request.query.type || null,
				id: request.query.id || null,
				ignore_id: user.id
            };

			const paging: IPaging = {
                page : request.query.page || 1,
                page_size : request.query.page_size || 20
            };

            const rs = await this.userService.getListsUsers(paging,filter);

            return BaseResponse(HTTP_STATUS.success, rs,'', 'successfully');

        } catch (e) {
            console.log('-------------- acl/getListsUsers@:getListsUsers ', e);
            return BaseResponse(e.status, e.response, e.code || 'E0001', e.message);
        }
    }

    @Post('store')
	@ApiResponse({ status: 200, description: 'success' })
    async create(
        @Body() userDto: CreateUserDto,
    )
    {
        try {
            const user = await this.userService.create(userDto);
            return BaseResponse(HTTP_STATUS.success, user,'', 'successfully');
        }catch (error) {
            console.log('-------------- acl/user@:create ', error);
            return BaseResponse(error.status, error.response, error.code || 'E0001', error.message);
        }
    }

    @Get('show/:id')
	@ApiResponse({ status: 200, description: 'success' })
    async show(
        @Param('id') id: number
    )
    {
        try{
            const user = await this.userService.show(id);
			return BaseResponse(HTTP_STATUS.success, {user: user}, '', 'successfully');
        }catch (error) {
            console.log('-------------- acl/user@:show ', error);
			return BaseResponse(error.status, error.response, error.code || 'E0001', error.message);
        }
    }

    @Put('update/:id')
	@ApiResponse({ status: 200, description: 'success' })
    async update(
        @Param('id') id: number,
        @Body() userDto: UpdateUserDto,
    )
    {
        try {
            const user = await this.userService.update(id, userDto);
            return BaseResponse(HTTP_STATUS.success, user, '', 'successfully');
        }catch (error) {
            console.log('-------------- acl/user@:update ', error);
			return BaseResponse(error.status, error.response, error.code || 'E0001', error.message);
        }
    }

    @Put('active/:id')
	@ApiResponse({ status: 200, description: 'success' })
    async active(
        @Param('id') id: number,
        @Req() request: any
    )
    {
        try {
            const admin = request.headers.user_data;
            const user = await this.userService.activeUser(id, admin);
            return BaseResponse(HTTP_STATUS.success, user, '', 'successfully');
        }catch (error) {
            console.log('-------------- acl/user@:active ', error);
			return BaseResponse(error.status, error.response, error.code || 'E0001', error.message);
        }
    }

    @Put('multi-actives')
	@ApiResponse({ status: 200, description: 'success' })
    async actives(
        @Body() formData: any,
        @Req() request: any
    )
    {
        try {
            const admin = request.headers.user_data;
            const user = await this.userService.activesUser(formData.ids, admin);
            return BaseResponse(HTTP_STATUS.success, user, '', 'successfully');
        }catch (error) {
            console.log('-------------- acl/user@:actives ', error);
			return BaseResponse(error.status, error.response, error.code || 'E0001', error.message);
        }
    }

    @Put('lock/:id')
	@ApiResponse({ status: 200, description: 'success' })
    async accountLock(
        @Param('id') id: number,
        @Req() request: any
    )
    {
        try {
            const admin = request.headers.user_data;
            const user = await this.userService.accountLock(id, admin);
            return BaseResponse(HTTP_STATUS.success, user, '', 'successfully');
        }catch (error) {
            console.log('-------------- acl/user@:accountLock ', error);
			return BaseResponse(error.status, error.response, error.code || 'E0001', error.message);
        }
    }

    @Put('multi-locks')
	@ApiResponse({ status: 200, description: 'success' })
    async accountsLock(
        @Req() request: any,
        @Body() formData: any,
    )
    {
        try {
            const admin = request.headers.user_data;
            const user = await this.userService.accountsLock(formData.ids, admin);
            return BaseResponse(HTTP_STATUS.success, user, '', 'successfully');
        }catch (error) {
            console.log('-------------- acl/user@:accountsLock ', error);
			return BaseResponse(error.status, error.response, error.code || 'E0001', error.message);
        }
    }
	
}
