import { Controller, Get, Post, Put, Delete, Param, Body, HttpCode, HttpStatus, Request, BadRequestException } from '@nestjs/common';
import { ApiResponse, ApiTags } from '@nestjs/swagger';
import { HTTP_STATUS, IPaging, Paging, Response, BaseResponse } from 'src/helpers/helper';
import { SlideService } from './slide.service';
import { CreateSlidesDto } from './dto/createSlide.dto';
import { UpdateSlidesDto } from './dto/updateSlide.dto';
import * as _ from 'lodash';

@Controller('slide')
@ApiTags('Shop Slide')
export class SlideController {

    constructor(
        private slideService: SlideService
    ) {}

    @Get('')
    @HttpCode(HttpStatus.OK)
    @ApiResponse({ status: 200, description: 'success' })
    async getSlides(@Request() req: any) {
        try {
            const filters = await this.buildFilter(req);
            const paging: IPaging = {
                page: req.query.page || 1,
                page_size: req.query.page_size || 20
            };
            let slides: any = await this.slideService.getSlides(paging, filters, req);

            return BaseResponse(HTTP_STATUS.success, slides, '','Successful');

        } catch (e) {
            console.log('get slide list ---------->', e.message);
            return BaseResponse(e.status, e.response, e.code || 'E0001', e.message);
        }
    }

    @Get('show/:id')
    @HttpCode(HttpStatus.OK)
    @ApiResponse({ status: 200, description: 'success' })
    async getSlideById(@Param('id') id: number) {
        try {
            const res = await this.slideService.getSlideById(id);
            if (!res)
                return BaseResponse(HTTP_STATUS.fail, {}, 'E0001', 'slide does not exist');
            else
                return BaseResponse(HTTP_STATUS.success, res, '', 'Successful!');
        } catch (e) {
            return BaseResponse(e.status, e.response, e.code || 'E0001', e.message);
        }
    }

    // @Post('store')
    // @HttpCode(HttpStatus.OK)
    // @ApiResponse({ status: 200, description: 'success' })
    // async createSlide(@Body() createSlide: CreateSlidesDto) {
    //     try {
    //         if (_.isEmpty(createSlide)) throw new BadRequestException({code: 'F0001'});
    //         else {
    //             createSlide.created_at = new Date();
    //             createSlide.updated_at = new Date();
    //             return BaseResponse(
    //                 HTTP_STATUS.success,
    //                 await this.slideService.createSlide(createSlide),
    //                 '',
    //                 'Created successfully!'
    //             );
    //         }
    //     } catch (e) {
    //         console.log('create slide -------------->', e.message);
    //         return BaseResponse(e.status, e.response, e.code || 'E0001', e.message);
    //     }
    // }

    // @Put('update/:id')
    // @HttpCode(HttpStatus.OK)
    // @ApiResponse({ status: 200, description: 'success' })
    // async updateSlide(@Param('id') id: number, @Body() updateSlide: UpdateSlidesDto) {
    //     console.log('------------ update slide');
    //     try {
    //         const check = await this.slideService.getSlideById(id);
    //         if (!check) {
    //             return BaseResponse(HTTP_STATUS.fail, {}, 'E0001', 'slide does not exist');
    //         }
    //         if (_.isEmpty(updateSlide)) throw new BadRequestException({code: 'F0001'});
    //         else {
    //             updateSlide.updated_at = new Date();
    //             return BaseResponse(HTTP_STATUS.success, await this.slideService.updateSlide(id, updateSlide), '', 'Updated successfully!');
    //         }
    //     } catch (e) {
    //         console.log('update slide ---------------->', e.message);
    //         return BaseResponse(e.status, e.response, e.code || 'E0001', e.message);
    //     }
    // }

    // @Delete('delete/:id')
    // async deleteSlide(@Param('id') id: number) {
    //     try {
    //         let slide = await this.slideService.getSlideById(id);

    //         if (!slide) {
    //             return BaseResponse(HTTP_STATUS.fail, {}, 'E0001', 'Slide does not exist!');
    //         } else {
    //             await this.slideService.deleteSlide(id);
    //             return BaseResponse(HTTP_STATUS.success, {}, '', 'Deleted successfully!');
    //         }
    //     } catch (e) {
    //         return BaseResponse(e.status, e.response, e.code || 'E0001', e.message);
    //     }
    // }

    async buildFilter(@Request() req: any) {
        const filters = {
            id: req.query.id || null,
            name: req.query.name || null,
            status: req.query.status || null,
        };
        return filters;
    }
}
