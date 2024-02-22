import { Controller, Get, Post, Body, Patch, Param, Delete, HttpCode, HttpStatus, UseGuards, Request } from '@nestjs/common';
import { StatisticService } from './statistic.service';
import { ApiResponse, ApiTags } from '@nestjs/swagger';
import { RoleGuard } from 'src/modules/auth/guards/role/role.guard';
import { JwtGuard } from 'src/modules/auth/guards/jwt/jwt.guard';
import { BaseResponse, HTTP_STATUS } from 'src/helpers/helper';

@Controller('/admin/statistical')
@ApiTags('Admin statistic')
@UseGuards(JwtGuard)

export class StatisticController {

	constructor(private readonly statisticService: StatisticService) { }


	@Get('')
	@HttpCode(HttpStatus.OK)
	@ApiResponse({ status: 200, description: 'success' })
	async getStatistic(
		@Request() req: any
	) {
		try {
			
			const filters = {
				month: req.query.month || null,
			};
			return BaseResponse(HTTP_STATUS.success, await this.statisticService.getStatistic(filters), '', 'successfully!');
		} catch (error) {
			console.log('-----e@getStatistic---> ', error);
			return BaseResponse(error.status, error.response, error.code || 'E0001', error.message);
		}
	}

}
