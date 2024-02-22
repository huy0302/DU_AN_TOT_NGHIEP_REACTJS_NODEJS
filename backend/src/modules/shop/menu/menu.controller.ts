import { Controller, Get, Post, Put, Delete, HttpCode, HttpStatus, Request, Param, Body, BadRequestException } from '@nestjs/common';
import { MenuService } from './menu.service';
import { ApiResponse, ApiTags } from '@nestjs/swagger';
import { HTTP_STATUS, IPaging, Paging, Response, BaseResponse } from 'src/helpers/helper';
import { CreateMenuDto } from './dto/createMenu.dto';
import { UpdateMenuDto } from './dto/updateMenu.dto';
import * as _ from 'lodash';

@Controller('menu')
@ApiTags('Shop Menu')
export class MenuController {

    constructor(
        private menuService: MenuService
    ) { }

    @Get('')
    @HttpCode(HttpStatus.OK)
    @ApiResponse({ status: 200, description: 'success' })
    async getMenus(@Request() req: any) {
        try {
            const filters = this.buildFilter(req);
            const paging: IPaging = {
                page: req.query.page || 1,
                page_size: req.query.page_size || 20
            };

            let menus: any = await this.menuService.getMenus(paging, filters, req);

            return BaseResponse(HTTP_STATUS.success, menus, '', 'Successful');
        } catch (e) {
            console.log('get list menu -------------> ', e.message);
            return BaseResponse(e.status, e.response, e.code || 'E0001', e.message);
        }
    }

    @Get('show/:id')
    @HttpCode(HttpStatus.OK)
    @ApiResponse({ status: 200, description: 'success' })
    async getMenuById(@Param('id') id: number) {
        try {
            const res = await this.menuService.getMenuById(id);
            if (!res) return BaseResponse(HTTP_STATUS.fail, {}, 'E0001', 'menu does not exist');
            else return BaseResponse('success', res, '', 'Successful');
        } catch (e) {
            return BaseResponse(e.status, e.response, e.code || 'E0001', e.message);
        }
    }

    // @Post('store')
    // @HttpCode(HttpStatus.OK)
    // @ApiResponse({ status: 200, description: 'success' })
    // async createMenu(@Body() createMenu: CreateMenuDto) {
    //     try {
    //         if (_.isEmpty(createMenu)) throw new BadRequestException({code: 'F0001'});
    //         else {
    //             createMenu.created_at = new Date();
    //             createMenu.updated_at = new Date();
    //             return BaseResponse(
    //                 HTTP_STATUS.success,
    //                 await this.menuService.createMenu(createMenu),
    //                 '',
    //                 'Created successfully!'
    //             );
    //         }
    //     } catch (e) {
    //         console.log('create menu ---------> ', e.message);
    //         return BaseResponse(e.status, e.response, e.code || 'E0001', e.message);
    //     }
    // }

    // @Put('update/:id')
    // @HttpCode(HttpStatus.OK)
    // @ApiResponse({ status: 200, description: 'success' })
    // async updateMenu(@Param('id') id: number, @Body() updateMenu: UpdateMenuDto) {
    //     try {
    //         const check = await this.menuService.getMenuById(id);
    //         if (!check) return BaseResponse(HTTP_STATUS.fail, {}, 'E0001', 'menu does not exist');
    //         if (_.isEmpty(updateMenu)) throw new BadRequestException({code: 'F0001'});
    //         else {
    //             updateMenu.updated_at = new Date();
    //             return BaseResponse(HTTP_STATUS.success, await this.menuService.updateMenu(id, updateMenu), '', 'Updated successfully!');
    //         }
    //     } catch (e) {
    //         console.log('put menu ---------->', e.message);
    //         return BaseResponse(e.status, e.response, e.code || 'E0001', e.message);
    //     }
    // }

    // @Delete('delete/:id')
    // @HttpCode(HttpStatus.OK)
    // @ApiResponse({ status: 200, description: 'success' })
    // async deleteMenu(@Param('id') id: number) {
    //     try {
    //         let menu = await this.menuService.getMenuById(id);

    //         if (!menu) {
    //             return BaseResponse(HTTP_STATUS.fail, {}, 'E0001', 'menu does not exist!');
    //         } else {
    //             await this.menuService.deleteMenu(id);
    //             return BaseResponse(HTTP_STATUS.success, {}, '', 'Deleted successfully!');
    //         }
    //     } catch (e) {
    //         return BaseResponse(e.status, e.response, e.code || 'E0001', e.message);
    //     }
    // }

    async buildFilter(req: any) {
        const filters = {
            id: req.query.id || null,
            name: req.query.name || null,
            status: req.query.status || null,
            hot: req.query.hot || null
        };

        return filters;
    }

}
