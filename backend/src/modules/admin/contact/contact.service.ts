import { Injectable } from '@nestjs/common';
import { CreateContactDto } from './dto/create-contact.dto';
import { UpdateContactDto } from './dto/update-contact.dto';
import { IPaging, Paging } from 'src/helpers/helper';
import { InjectRepository } from '@nestjs/typeorm';
import { Contact } from 'src/entities/contact.entity';
import { Like, Repository } from 'typeorm';

@Injectable()
export class ContactService {
	constructor(
		@InjectRepository(Contact)
        private contactRepo: Repository<Contact>
	) {

	}
	create(createContactDto: CreateContactDto) {
		return 'This action adds a new contact';
	}

	async findAll(paging: IPaging, filters: any) {
		let condition: any = {};
		if(filters?.name) condition.name = Like(`%${filters?.name}%`);
		if(filters?.title) condition.title = Like(`%${filters?.title}%`);
		if(filters?.email) condition.email = Like(`%${filters?.email}%`);
		const [result, total] =  await this.contactRepo.findAndCount({
			where: condition,
			take: paging.page_size,
			order: {
				created_at: 'DESC'
			},
			skip: (paging.page - 1) * paging.page_size
		});
		return { results: result, meta: new Paging(paging.page, paging.page_size, total) };
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
