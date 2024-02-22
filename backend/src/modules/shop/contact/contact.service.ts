import { Injectable } from '@nestjs/common';
import { CreateContactDto } from './dto/create-contact.dto';
import { UpdateContactDto } from './dto/update-contact.dto';
import { IPaging } from 'src/helpers/helper';
import { InjectRepository } from '@nestjs/typeorm';
import { Contact } from 'src/entities/contact.entity';
import { Repository } from 'typeorm';
import { MailService } from 'src/modules/mail/mail.service';

@Injectable()
export class ContactService {
	constructor(
		@InjectRepository(Contact)
        private contactRepo: Repository<Contact>,
		private sendMailService: MailService
	) {

	}
	async create(createContactDto: CreateContactDto) {
		const newData = this.contactRepo.create({...createContactDto, created_at: new Date()});
		await this.contactRepo.save(newData);
		this.sendMailService.sendEmailContact(newData);
		return newData;
	}

	async findAll(paging: IPaging, filters: any) {
		let condition: any = {};
		if(filters?.name) condition.name = filters?.name;
		if(filters?.title) condition.title = filters?.title;
		if(filters?.email) condition.email = filters?.email;
		return await this.contactRepo.findAndCount({
			where: condition,
			take: paging.page_size,
			skip: (paging.page - 1) * paging.page_size
		})
	}

	findOne(id: number) {
		return `This action returns a #${id} contact`;
	}

	update(id: number, updateContactDto: UpdateContactDto) {
		return `This action updates a #${id} contact`;
	}

	remove(id: number) {
		return `This action removes a #${id} contact`;
	}
}
