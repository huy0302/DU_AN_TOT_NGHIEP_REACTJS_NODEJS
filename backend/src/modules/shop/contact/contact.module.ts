import { Module, forwardRef } from '@nestjs/common';
import { ContactService } from './contact.service';
import { ContactController } from './contact.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Contact } from 'src/entities/contact.entity';
import { MailModule } from 'src/modules/mail/mail.module';

@Module({
	imports: [
		TypeOrmModule.forFeature([
			Contact
		]),
		forwardRef(() => MailModule),
	],

	controllers: [ContactController],
	providers: [ContactService]
})
export class ContactModule { }
