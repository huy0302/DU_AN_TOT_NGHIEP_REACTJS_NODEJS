import { CanActivate, ExecutionContext, Injectable } from '@nestjs/common';
import { Reflector } from '@nestjs/core';
import { Observable } from 'rxjs';
import { BadRequestException } from 'src/helpers/response/badRequest';
import * as _ from 'lodash';
import { PERMISSION_ROUTE } from 'src/helpers/helper';

@Injectable()
export class RoleGuard implements CanActivate {
	constructor() {
	}
	canActivate(
		context: ExecutionContext,
	): boolean | Promise<boolean> | Observable<boolean> {

		const request = context.switchToHttp().getRequest();
		let userInfo = request.user || null;
		if(_.isEmpty(userInfo) || (userInfo?.type !== 1 && userInfo?.status !== 1)) {
			throw new BadRequestException({ code: 'LG0401' });
		}
		return true;
		// if(_.isEmpty(userInfo.roles)) {
		// 	throw new BadRequestException({ code: 'LG0403' });
		// }
		let roles = userInfo.roles.map((item: any) => item.guard_name);
		if(roles.includes('SUPER_ADMIN')) {
			return true;
		}


		let url = request.url.replace(/\?.*/, '').split('/');
		let moduleUrl = `${url[url.length - 2]}/${url[url.length - 1]}`;
		const path = request.path;
		// let 

		let permissionRoute = PERMISSION_ROUTE.find(item => item.route.includes(moduleUrl));
		
		if(!permissionRoute) return true;

		let checkRole = roles.some((item: any) => item.guard_name === checkRole.permission);
		if(!checkRole) {
			throw new BadRequestException({ code: 'LG0403' });
		}
		return true;
		

		// const user = request.user;
		// if (_.isEmpty(this.role)) {
		// 	throw new BadRequestException({ code: 'LG0403' });
		// }
		// if (_.isEmpty(user)) {
		// 	throw new BadRequestException({ code: 'LG0401' });
		// }
		// if (!this.role.includes(user.role)) {
		// 	throw new BadRequestException({ code: 'LG0403' });
		// }
		return true;
	}
}
