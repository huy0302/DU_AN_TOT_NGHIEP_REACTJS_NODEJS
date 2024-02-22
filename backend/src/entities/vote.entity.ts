import {
	Column,
	Entity,
	JoinColumn,
	ManyToOne,
	PrimaryGeneratedColumn,
} from 'typeorm';
import { User } from './user.entity';
import { Products } from './product.entity';

@Entity('votes', { schema: 'public' })
export class Vote {
	@PrimaryGeneratedColumn('increment',{name: "id"})
	id: number;

	@Column('text', { name: 'content' })
	content: string;

	@Column('smallint', { name: 'number' })
	number: number;

	@Column('bigint', { name: 'user_id' })
	user_id: number;

	@Column('bigint', { name: 'product_id' })
	product_id: number;

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

	@ManyToOne(() => User, (user) => user.votes)
	@JoinColumn({ name: 'user_id', referencedColumnName: 'id' })
	user: User[];

	@ManyToOne(() => Products, (products) => products.votes)
	@JoinColumn({ name: 'product_id', referencedColumnName: 'id' })
	product: Products[];
}
