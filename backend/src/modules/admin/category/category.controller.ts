import { Controller, Get, Post, Put, Delete, Param, Body, HttpCode, HttpStatus, Request, UseGuards } from '@nestjs/common';
import { CategoryService } from './category.service';
import { ApiResponse, ApiTags } from '@nestjs/swagger';
import { BaseResponse, HTTP_STATUS, IPaging, Paging } from 'src/helpers/helper';
import { CreateCategoryDto } from './dto/createCate.dto';
import { UpdateCategoryDto } from './dto/updateCate.dto';
import * as _ from 'lodash';
import { BadRequestException } from 'src/helpers/response/badRequest';
import { JwtGuard } from 'src/modules/auth/guards/jwt/jwt.guard';
import { RoleGuard } from 'src/modules/auth/guards/role/role.guard';

@Controller('admin/category')
@ApiTags('Admin Category')
@UseGuards(JwtGuard)
export class CategoryController {

    constructor(
        private cateService: CategoryService
    ) { }

    @Get('')
    @HttpCode(HttpStatus.OK)
	@UseGuards(RoleGuard)
    @ApiResponse({ status: 200, description: 'success' })
    async getCategories(@Request() req: any) {
        try {
            const filters = await this.buildFilter(req);
            const paging: IPaging = {
                page: req.query.page || 1,
                page_size: req.query.page_size || 20
            };
            let categories: any = await this.cateService.getCategories(paging, filters, req);

            return BaseResponse(HTTP_STATUS.success, categories, '', 'Successful');

        } catch (e) {
            console.log('get category list ---------->', e.message);
            return BaseResponse(e.status, e.response, e.code || 'E0001', e.message);
        }
    }

    @Get('show/:id')
    @HttpCode(HttpStatus.OK)
	@UseGuards(RoleGuard)
    @ApiResponse({ status: 200, description: 'success' })
    async getCategoryById(@Param('id') id: number) {
        try {
            const res = await this.cateService.getCategoryById(id);
            if (!res)
                return BaseResponse(HTTP_STATUS.fail, {}, 'E0001', 'category does not exist');
            else
                return BaseResponse(HTTP_STATUS.success, res, '', 'Successful!');
        } catch (e) {
            return BaseResponse(e.status, e.response, e.code || 'E0001', e.message);
        }
    }

    @Post('store')
    @HttpCode(HttpStatus.OK)
	@UseGuards(RoleGuard)
    @ApiResponse({ status: 200, description: 'success' })
    async createCategory(@Body() createCate: CreateCategoryDto) {
        try {
            if (_.isEmpty(createCate)) throw new BadRequestException({code: 'F0001'});
            else {
                createCate.created_at = new Date();
                createCate.updated_at = new Date();
                return BaseResponse(
                    HTTP_STATUS.success,
                    await this.cateService.createCategory(createCate), 
                    '',
                    'Created successfully!'
                );
            }
        } catch (e) {
            console.log('create category -------------->', e.message);
            return BaseResponse(e.status, e.response, e.code || 'E0001', e.message);
        }
    }

    @Put('update/:id')
    @HttpCode(HttpStatus.OK)
	@UseGuards(RoleGuard)
    @ApiResponse({ status: 200, description: 'success' })
    async updateCategory(@Param('id') cateId: number, @Body() updateCate: UpdateCategoryDto) {
        try {
            const check = await this.cateService.getCategoryById(cateId);
            if (!check) return BaseResponse(HTTP_STATUS.fail, {}, 'E0001','category does not exist');
            if (_.isEmpty(updateCate)) throw new BadRequestException({code: 'F0001'});
            else {
                updateCate.updated_at = new Date();
                return BaseResponse(HTTP_STATUS.success, await this.cateService.updateCategory(cateId, updateCate), '','Updated successfully!');
            }
        } catch (e) {
            console.log('update category ---------------->', e.message);
            return BaseResponse(e.status, e.response, e.code || 'E0001', e.message);
        }
    }

    @Delete('delete/:id')
    @HttpCode(HttpStatus.OK)
	@UseGuards(RoleGuard)
    @ApiResponse({ status: 200, description: 'success' })
    async deleteCategory(@Param('id') cateId: number) {
        try {
            let category = await this.cateService.getCategoryById(cateId);

            if (!category) {
                return BaseResponse(HTTP_STATUS.fail, {}, 'E0001','category does not exist!');
            } else {
                await this.cateService.deleteCategory(cateId);
                return BaseResponse(HTTP_STATUS.success, {}, '','Deleted successfully!');
            }
        } catch (e) {
            return BaseResponse(e.status, e.response, e.code || 'E0001', e.message);
        }
    }

    async buildFilter(@Request() req: any) {
        const filters = {
            id: req.query.id || null,
            name: req.query.name || null,
            status: req.query.status || null,
            hot: req.query.hot || null,
        };
        return filters;
    }

    @Get('list/hot')
    @HttpCode(HttpStatus.OK)
	@UseGuards(RoleGuard)
    @ApiResponse({ status: 200, description: 'success' })
    async getCategoriesHot(@Request() req: any) {
        try {
            const paging: IPaging = {
                page: req.query.page || 1,
                page_size: req.query.page_size || 10
            };
            let categories: any = await this.cateService.getCategoriesHot(paging);

            return BaseResponse(HTTP_STATUS.success, categories, '', 'Successful');

        } catch (e) {
            console.log('get category list ---------->', e.message);
            return BaseResponse(e.status, e.response, e.code || 'E0001', e.message);
        }
    }
}
