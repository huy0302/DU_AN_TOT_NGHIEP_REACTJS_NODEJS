import { Injectable } from '@nestjs/common';

import { InjectRepository } from '@nestjs/typeorm';
import { User } from 'src/entities/user.entity';
import { Like, Repository } from 'typeorm';
import { newArrayError, regexEmail, regexGmail, regexPass, regexPhone, regexUserName } from 'src/helpers/helper';
import * as _ from 'lodash';
import { BadRequestException } from 'src/helpers/response/badRequest';

@Injectable()
export class ValidateService {

	constructor(@InjectRepository(User) private readonly userRepository: Repository<User>) { }

	async validateUser(userDto: any, isCreated = false, user_id = 0) {
		if (_.isEmpty(userDto)) {
			throw new BadRequestException({ code: 'F0001' });
		}
		let errorData: any = {};
		
		if (isCreated) {
			// if (!userDto.username || userDto.username?.trim() == '') {
			// 	errorData.username = newArrayError(errorData.email, 'User name is required');
			// } else if (!regexUserName.test(userDto.username)) {
			// 	errorData.username = newArrayError(errorData.username, 'User name is invalid');
			// } else {
			// 	let user = await this.userRepository.findOne({
			// 		where: {
			// 			username: userDto.username.trim()
			// 		}
			// 	});
			// 	if (!_.isEmpty(user)) {
			// 		errorData.username = newArrayError(errorData.username, 'User name is existed');
			// 	}
			// }
			if (!userDto.password.match(regexPass)) {
				errorData.password = newArrayError(errorData.password, 'Password không đúng định dạng!');
			}
			if(userDto.password_cf && userDto.password_cf.trim() != '') {
				if(userDto.password.trim() !== userDto.password_cf.trim()) {
					errorData.password_cf = newArrayError(errorData.password_cf, 'Password does not match!');
				}
			}
		}

		if (userDto.email) {
			// if (!regexEmail.test(userDto.email)) {
			// 	errorData.email = newArrayError(errorData.email, 'Email is invalid');
			// } else {
				let userEmail: any = await this.userRepository.findOne({ where: { email: userDto.email } });
				if (!_.isEmpty(userEmail)) {
					if(isCreated) {
						errorData.email =  newArrayError(errorData.email, 'Email is existed');
					}
					else if(userEmail.id === user_id) {
						errorData.email =  newArrayError(errorData.email, 'Email is existed');
					}
				}
			// }
		}

		if (userDto.phone) {
			if (!userDto.phone.match(regexPhone)) {
				errorData.phone = newArrayError(errorData.phone, 'Phone is invalid');
			} else if(isCreated || user_id){
				let user: any = this.userRepository.findOne({
					where: {
						phone: Like(`%${userDto.phone}%`),
					}
				});
				if (!_.isEmpty(user)) {
					if(isCreated) {
						errorData.phone =  newArrayError(errorData.phone, 'Phone is existed');
					}
					else if(user.id === user_id) {
						errorData.phone =  newArrayError(errorData.phone, 'Phone is existed');
					}
				}
			}
		}

		if (!_.isEmpty(errorData)) {
			throw new BadRequestException({ code: 'F0002', message: null, data: errorData });
		}
	}

}
