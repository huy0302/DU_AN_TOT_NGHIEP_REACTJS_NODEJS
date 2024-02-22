import { Controller, Get, Post, Put, Delete, HttpCode, HttpStatus, Request, Param, Body, BadRequestException } from '@nestjs/common';
import { ApiResponse, ApiTags } from '@nestjs/swagger';
import { HTTP_STATUS, IPaging, Paging, Response, BaseResponse } from 'src/helpers/helper';
import * as _ from 'lodash';
import { ArticleService } from './article.service';
import { CreateArticleDto } from './dto/createArticle.dto';
import { UpdateArticleDto } from './dto/updateArticle.dto';


@Controller('article')
@ApiTags('Shop Article')
export class ArticleController {
    constructor(
        private articleService: ArticleService
    ) { }

    @Get('')
    @HttpCode(HttpStatus.OK)
    @ApiResponse({ status: 200, description: 'success' })
    async getArticles(@Request() req: any) {
        try {
            const filters = this.buildFilter(req);
            const paging: IPaging = {
                page: req.query.page || 1,
                page_size: req.query.page_size || 20
            };

            let menus: any = await this.articleService.getArticles(paging, filters, req);

            return BaseResponse(HTTP_STATUS.success, menus, '', 'Successful');
        } catch (e) {
            console.log('get list menu -------------> ', e.message);
            return BaseResponse(e.status, e.response, e.code || 'E0001', e.message);
        }
    }

    @Get('show/:id')
    @HttpCode(HttpStatus.OK)
    @ApiResponse({ status: 200, description: 'success' })
    async getArticleById(@Param('id') id: number) {
        try {
            const res = await this.articleService.getArticleById(id);
            if (!res) return BaseResponse(HTTP_STATUS.fail, {}, 'E0001', 'article does not exist');
            else return BaseResponse('success', res, '', 'Successful');
        } catch (e) {
            return BaseResponse(e.status, e.response, e.code || 'E0001', e.message);
        }
    }

    // @Post('store')
    // @HttpCode(HttpStatus.OK)
    // @ApiResponse({ status: 200, description: 'success' })
    // async createArticle(@Body() createArticle: CreateArticleDto) {
    //     try {
    //         if (_.isEmpty(createArticle)) throw new BadRequestException({code: 'F0001'});
    //         else {
    //             createArticle.created_at = new Date();
    //             createArticle.updated_at = new Date();
    //             return BaseResponse(
    //                 HTTP_STATUS.success,
    //                 await this.articleService.createArticle(createArticle),
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
    // async updateArticle(@Param('id') id: number, @Body() updateArticle: UpdateArticleDto) {
    //     try {
    //         const check = await this.articleService.getArticleById(id);
    //         if (!check) return BaseResponse(HTTP_STATUS.fail, {}, 'E0001', 'article does not exist');
    //         if (_.isEmpty(updateArticle)) throw new BadRequestException({code: 'F0001'});
    //         else {
    //             updateArticle.updated_at = new Date();
    //             return BaseResponse(HTTP_STATUS.success, await this.articleService.updateArticle(id, updateArticle), '', 'Updated successfully!');
    //         }
    //     } catch (e) {
    //         console.log('put menu ---------->', e.message);
    //         return BaseResponse(e.status, e.response, e.code || 'E0001', e.message);
    //     }
    // }

    // @Delete('delete/:id')
    // @HttpCode(HttpStatus.OK)
    // @ApiResponse({ status: 200, description: 'success' })
    // async deleteArticle(@Param('id') id: number) {
    //     try {
    //         let menu = await this.articleService.getArticleById(id);

    //         if (!menu) {
    //             return BaseResponse(HTTP_STATUS.fail, {}, 'E0001', 'article does not exist!');
    //         } else {
    //             await this.articleService.deleteArticle(id);
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
            hot: req.query.hot || null,
            menu_id: req.query.menu_id || null,
            user_id: req.query.user_id || null
        };

        return filters;
    }

}
