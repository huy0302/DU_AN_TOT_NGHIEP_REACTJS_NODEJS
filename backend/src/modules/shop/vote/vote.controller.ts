import { BadRequestException, Body, Controller, Delete, Get, HttpCode, HttpStatus, Param, Put, Request, Post, UseGuards } from '@nestjs/common';
import { ApiResponse, ApiTags } from '@nestjs/swagger';
import { VoteService } from './vote.service';
import { HTTP_STATUS, IPaging, Paging, Response, BaseResponse } from 'src/helpers/helper';
import CreateVoteDto from './dto/createVote.dto';
import UpdateVoteDto from './dto/updateVote.dto';
import * as _ from 'lodash';
import { JwtGuard } from 'src/modules/auth/guards/jwt/jwt.guard';

@Controller('vote')
@ApiTags('Shop Votes')
export class VoteController {

    constructor(
        private voteService: VoteService
    ) { }

    @Get('')
    @HttpCode(HttpStatus.OK)
    @ApiResponse({ status: 200, description: 'success' })
    async getVotes(@Request() req: any) {
        try {
            const filters = await this.buildFilter(req);
            const paging: IPaging = {
                page: req.query.page || 1,
                page_size: req.query.page_size || 20
            };
            let votes = await this.voteService.getVotes(paging, filters);

            return BaseResponse(HTTP_STATUS.success, votes, '', 'Successful');

        } catch (e) {
            console.log('get vote list ----------------> ', e.message);
            return BaseResponse(e.status, e.response, e.code || 'E0001', e.message);
        }
    }

    @Get('show/:id')
    @HttpCode(HttpStatus.OK)
    @ApiResponse({ status: 200, description: 'success' })
    async getVoteById(@Param('id') id: number) {
        try {
            const res = await this.voteService.getVoteById(id);
            if (!res)
                return BaseResponse(HTTP_STATUS.fail, {}, 'E0001', 'vote does not exist');
            else
                return BaseResponse('success', res, '', 'Successful!');
        } catch (e) {
            return BaseResponse(e.status, e.response, e.code || 'E0001', e.message);
        }
    }

    @Post('store')
    @HttpCode(HttpStatus.OK)
	@UseGuards(JwtGuard)
    @ApiResponse({ status: 200, description: 'success' })
    async createVote(@Request() req: any, @Body() data: CreateVoteDto) {
        try {

            const { id: user_id } = req.user;
            if (_.isEmpty(data)) throw new BadRequestException({code: 'F0001'});
            else { 
                data.user_id = user_id;
                return BaseResponse(HTTP_STATUS.success, await this.voteService.createVote(data), '', 'Created successfully!');
            }
        } catch (e) {
            console.log('update category ---------------->', e.message);
            return BaseResponse(e.status, e.response, e.code || 'E0001', e.message);
        }
    }

    // @Put('update/:id')
    // @HttpCode(HttpStatus.OK)
    // @ApiResponse({ status: 200, description: 'success' })
    // async updateVote(@Request() req: any, @Param('id') id: number, @Body() data: UpdateVoteDto) {
    //     try {
    //         const { id: user_id } = req.user;
    //         const check = await this.voteService.getVoteById(id);
    //         if (!check) return BaseResponse('fail', {}, 'vote does not exist');
    //         if (!data) throw new BadRequestException({code: 'F0001'});
    //         else { 
    //             data.user_id = user_id;
    //             data.product_id = check.product_id;
    //             data.updated_at = new Date();
    //             return BaseResponse(HTTP_STATUS.success, await this.voteService.updateVote(id, data), '', 'Updated successfully!');
    //         }
    //     } catch (e) {
    //         console.log('update category ---------------->', e.message);
    //         return BaseResponse(e.status, e.response, e.code || 'E0001', e.message);
    //     }
    // }

    // @Delete('delete/:id')
    // @HttpCode(HttpStatus.OK)
    // @ApiResponse({ status: 200, description: 'success' })
    // async deleteVote(@Param('id') id: number) {
    //     try {
    //         let vote = await this.voteService.getVoteById(id);

    //         if (!vote) {
    //             return BaseResponse(HTTP_STATUS.fail, {}, 'E0001', 'vote does not exist!');
    //         } else {
    //             await this.voteService.deleteVote(id);
    //             return BaseResponse('success', {}, '', 'Deleted successfully!');
    //         }
    //     } catch (e) {
    //         return BaseResponse(e.status, e.response, e.code || 'E0001', e.message);
    //     }
    // }

    async buildFilter(@Request() req: any) {
        const filters = {
            id: req.query.id || null,
            user_id: req.query.user_id || null,
            product_id: req.query.product_id || null,
            number: req.query.number || null,
        };
        return filters;
    }
}
