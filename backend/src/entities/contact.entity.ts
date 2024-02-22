import {
	Column,
	Entity,
	JoinColumn,
	ManyToOne,
	PrimaryGeneratedColumn,
} from 'typeorm';
import { User } from './user.entity';
@Entity('contacts', { schema: 'public' })
export class Contact {
	@PrimaryGeneratedColumn('increment',{name: "id"})
	id: number;

	@Column()
	title: string;

	@Column()
	name: string;

	@Column()
	email: string;

	@Column()
	content: string;

	@Column('timestamp', {
		name: 'created_at',
		default: () => 'now()',
	})
	created_at: Date;

	@Column('timestamp', {
		name: 'updated_at',
		nullable: true,
		default: () => 'now()',
	})
	updated_at: Date;
}
