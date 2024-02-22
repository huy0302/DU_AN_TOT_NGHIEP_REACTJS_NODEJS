import { Injectable, NestMiddleware } from '@nestjs/common';
import { JwtService } from '@nestjs/jwt';
import * as _ from 'lodash';
import { USER_CONST } from 'src/helpers/helper';
import { BadRequestException } from 'src/helpers/response/badRequest';

@Injectable()
export class MiddlewareMiddleware implements NestMiddleware {
	constructor(private readonly jwtService: JwtService) {

	}
	async use(req: any, res: any, next: () => void) {
		try {
			let access_token = req.headers?.authorization || null;
			if (_.isEmpty(access_token)) {
				throw new BadRequestException({ code: 'LG0401' });
			}

			let token = access_token.replace(/bearer\s+/i, '');
			const payload: any = await this.jwtService.decode(token);
			if(_.isEmpty(payload)) {
				throw new BadRequestException({ code: 'LG0001' });
			}
			if(payload.type !== USER_CONST.USER_ADM) {
				throw new BadRequestException({ code: 'LG0403' });
			}
			next()

		} catch (error) {
			throw new BadRequestException({ code: 'LG0401' });
		}
	}
}
