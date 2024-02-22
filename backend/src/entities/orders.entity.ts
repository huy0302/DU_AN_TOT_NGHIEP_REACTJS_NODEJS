import {
	Column,
	Entity,
	Index,
	JoinColumn,
	ManyToOne,
	OneToMany,
	PrimaryGeneratedColumn,
} from 'typeorm';
import { User } from './user.entity';
import { Transactions } from './transaction.entity';

@Index('orders_pkey', ['id'], { unique: true })
@Entity('orders', { schema: 'public' })
export class Orders {
	@PrimaryGeneratedColumn('increment',{name: "id"})
	id: number;

	@Column({ type: 'bigint', name: 'user_id', nullable: true, default: 0 })
	user_id: number;

	@Column('float', { name: 'total_discount', nullable: true, default: 0 })
	total_discount: number;

	@Column('float', { name: 'total_price', nullable: false, default: 0 })
	total_price: number;

	@Column()
	payment_type: number;

	@Column('text', { name: 'note', nullable: true })
	note: string | null;

	@Column('smallint', { name: 'status', nullable: true, default: 0 })
	status: number | -1;

	@Column('smallint', { name: 'payment_status', nullable: true, default: 0 })
	payment_status: number | 0;

	@Column('smallint', { name: 'shipping_status', nullable: true, default: 0 })
	shipping_status: number | -1;

	@Column({ name: 'receiver_name', nullable: true })
	receiver_name: string;

	@Column({ name: 'receiver_email', nullable: true })
	receiver_email: string;

	@Column({ name: 'receiver_phone', nullable: true })
	receiver_phone: string;

	@Column({ name: 'receiver_address', nullable: true })
	receiver_address: string;

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

	@ManyToOne(() => User, user => user.orders)
	@JoinColumn({ name: "user_id", referencedColumnName: "id"})
	user: User;

	@OneToMany(() => Transactions, t => t.order)
	@JoinColumn({ name: "order_id", referencedColumnName: "id"})
	transactions: Transactions[];
}
