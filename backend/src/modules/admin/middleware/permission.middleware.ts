import { Injectable, NestMiddleware } from '@nestjs/common';
import { JwtService } from '@nestjs/jwt';

@Injectable()
export class PermissionMiddleware implements NestMiddleware {
	constructor(private readonly jwtService: JwtService) {

	}
	use(req: any, res: any, next: () => void) {
		// let userData: any = req.headers.user_data,
		// 	sso_id = userData.sso_id,
		// 	requestUrl = req.url
		// 		.replace(/\d+/, ':id')
		// 		.replace(/^\/|\/$/, '')
		// 		.replace(/\?.*/, '');

		// let admin: any = await this.adminService.show(sso_id, 'sso_id');
		// if (!admin) {
		// 	throw new HttpException(
		// 		{
		// 			status: HttpStatus.FORBIDDEN,
		// 			message: 'Permission denied! Not found info admin.',
		// 		},
		// 		HttpStatus.FORBIDDEN
		// 	);
		// }
		// // Nếu route thuộc nhóm auto pass thì next luôn
		// if (
		// 	ROUTE_AUTO_PASS.includes(requestUrl) ||
		// 	(req.query.accept_pass == 'yes' && req.method == 'GET') ||
		// 	admin.list_roles.includes(SUPER_ADMIN_ROLE_NAME)
		// ) {
		// 	req.headers['admin_data'] = admin;
		// 	next();
		// } else {
		// 	if (ROUTE_ONLY_SUPER_ADMIN.includes(requestUrl)) {
		// 		if (!admin.list_roles.includes(SUPER_ADMIN_ROLE_NAME)) {
		// 			throw new HttpException(
		// 				{
		// 					status: HttpStatus.FORBIDDEN,
		// 					message: 'Permission denied! Admin is not super admin.',
		// 				},
		// 				HttpStatus.FORBIDDEN
		// 			);
		// 		}
		// 		req.headers['admin_data'] = admin;
		// 		next();
		// 	} else {
		// 		let pass = false;
		// 		for (let item of ROUTE_AUTO_PASS_WITH_ROLE) {
		// 			if (!admin.list_roles.includes(item.role_name)) continue;
		// 			let route = item.route;
		// 			if (route.endsWith('*')) {
		// 				let baseRoute = route.replace('*', '');
		// 				if (requestUrl.startsWith(baseRoute)) pass = true;
		// 			} else if (requestUrl == route) pass = true;
		// 		}

		// 		if (pass) {
		// 			req.headers['admin_data'] = admin;
		// 			next();
		// 		} else {
		// 			let permissions = PERMISSION_ROUTE,
		// 				permission = null;
		// 			permissions.map((item) => {
		// 				if (item.route == requestUrl) permission = item.permission;
		// 			});
		// 			if (permission == null) {
		// 				throw new HttpException(
		// 					{
		// 						status: HttpStatus.INTERNAL_SERVER_ERROR,
		// 						message: 'Permission route not found!',
		// 					},
		// 					HttpStatus.INTERNAL_SERVER_ERROR
		// 				);
		// 			} else {
		// 				req.headers['admin_data'] = admin;
		// 				if (admin.list_permissions.includes(permission)) next();
		// 				else
		// 					throw new HttpException(
		// 						{ status: HttpStatus.FORBIDDEN, message: 'Permission denied!' },
		// 						HttpStatus.FORBIDDEN
		// 					);
		// 			}
		// 		}
		// 	}
		// }
		next()
	}
}
