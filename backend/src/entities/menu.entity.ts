import {
	Column,
	Entity,
	OneToMany,
	PrimaryGeneratedColumn,
} from 'typeorm';
import { Article } from './article.entity';

@Entity('menus', { schema: 'public' })
export class Menu {
	@PrimaryGeneratedColumn('increment',{name: "id"})
	id: number;

	@Column({ name: 'name', length: 255 })
	name: string | null;

	@Column({ name: 'description', length: 255, nullable: true })
	description: string | null;

	@Column({ name: 'avatar', nullable: true })
	avatar: string | null;

	@Column({ name: 'slug', nullable: false })
	slug: string | null;

	@Column('smallint', { name: 'status', nullable: false, default: 0 })
	status: number | -1;

	@Column('smallint', { name: 'hot', nullable: false, default: 0 })
	hot: number | -1;

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

	// @OneToMany(() => Article, article => article.menu)
	// article: Article[];
} 
