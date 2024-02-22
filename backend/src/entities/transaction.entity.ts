import {
	Column,
	Entity,
	Index,
	JoinColumn,
	ManyToOne,
	PrimaryGeneratedColumn,
} from 'typeorm';
import { User } from './user.entity';
import { Orders } from './orders.entity';

@Index('transactions_pkey', ['id'], { unique: true })
@Entity('transactions', { schema: 'public' })
export class Transactions {
	@PrimaryGeneratedColumn('increment',{name: "id"})
	id: number;

	@Column({ type: 'bigint', name: 'order_id', nullable: false, default: 0 })
	order_id: number;

	@Column('bigint', { name: 'product_id', nullable: false, default: 0 })
	product_id: number;

	@Column('bigint', { name: 'user_id', nullable: false, default: 0 })
	user_id: number;

	@Column('int', { name: 'discount', nullable: false, default: 0 })
	discount: number;

	@Column('int', { name: 'price', nullable: false, default: 0 })
	price: number;

	@Column('smallint', { name: 'status', nullable: true, default: 0 })
	status: number | -1;

	@Column({ name: 'name', nullable: true, default: null })
	name: string;

	@Column({ name: 'avatar', nullable: true })
	avatar: string;

	@Column('int', { name: 'quantity', nullable: false, default: 0 })
	quantity: number;

	@Column({ name: 'total_price', nullable: false, default: 0 })
	total_price: number;

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

	@ManyToOne(() => Orders, o => o.transactions)
	@JoinColumn({ name: "order_id", referencedColumnName: "id"})
	order: Orders;
}
