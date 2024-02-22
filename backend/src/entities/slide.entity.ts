import {
	Column,
	Entity,
	PrimaryGeneratedColumn,
} from 'typeorm';

@Entity('slides', { schema: 'public' })
export class Slide {
	@PrimaryGeneratedColumn('increment',{name: "id"})
	id: number;

	@Column({ name: 'avatar', nullable: true })
	avatar: string | null;

	@Column({ name: 'link', nullable: true })
	link: string | null;

	@Column({ name: 'name', nullable: true })
	name: string | null;

	@Column('smallint', { name: 'status', nullable: false, default: 0 })
	status: number | 0;

	@Column('smallint', { name: 'hot', nullable: false, default: 0 })
	hot: number | 0;

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
