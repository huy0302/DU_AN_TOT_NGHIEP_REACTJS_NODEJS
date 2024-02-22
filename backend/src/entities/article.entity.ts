import {
	Column,
	Entity,
	PrimaryGeneratedColumn,
} from 'typeorm';
// import { Menu } from './menu.entity';
// import { User } from './user.entity';

@Entity('articles', { schema: 'public' })
export class Article {
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

    @Column('text', { name: 'content' })
    content: string | null;

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

	@Column('bigint', { name: 'menu_id' })
	menu_id: number;

	@Column('bigint', { name: 'user_id' })
	user_id: number;

	// @ManyToOne(() => Menu, (menu) => menu.article)
	// @JoinColumn({ name: 'menu_id', referencedColumnName: 'id' })
	// menu: Menu[];

	// @ManyToOne(() => User, (user) => user.article)
	// @JoinColumn({ name: 'user_id', referencedColumnName: 'id' })
	// user: User[];
}
