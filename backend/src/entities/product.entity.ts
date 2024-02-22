import {
	Column,
	Entity,
	Index,
	JoinColumn,
	ManyToOne,
	OneToMany,
	PrimaryColumn,
	PrimaryGeneratedColumn,
} from 'typeorm';
import { ProductsImages } from './product-image.entity';
import { Category } from './category.entity';
import { Vote } from './vote.entity';

@Index('products_pkey', ['id'], { unique: true })
@Entity('products', { schema: 'public' })
export class Products {
	@PrimaryGeneratedColumn('increment',{name: "id"})
	id: number;

	@Column({ name: 'name', length: 255 })
	name: string | null;

	@Column({ name: 'description', length: 255, nullable: true })
	description: string | null;

	@Column()
	avatar: string;

	@Column({ name: 'slug', nullable: false })
	slug: string | null;

	@Column('text', { name: 'content', nullable: false })
	content: string | null;

	@Column('smallint', { name: 'status', nullable: false, default: 0 })
	status: number | -1;

	@Column('smallint', { name: 'hot', nullable: false, default: 0 })
	hot: number;

	@Column('bigint', { name: 'category_id', nullable: false })
	category_id: number;

	@Column('json', { name: 'options', nullable: false })
	options: any;

	@Column('float', { name: 'price', nullable: false, default: 0 })
	price: number;

	@Column('int', { name: 'number', nullable: false, default: 0})
	number: number;

	@Column('int', { name: 'total_stars', nullable: false, default: 0})
	total_stars: number;

	@Column('int', { name: 'total_reviews', nullable: false, default: 0})
	total_reviews: number;

	@Column('smallint', { name: 'sale', nullable: false, default: 0 })
	sale: number;

	@Column('bigint', { name: 'user_id', nullable: false, default: 0 })
	user_id: number;


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

	@OneToMany(() => ProductsImages, image => image.product)
	product_images: ProductsImages[];

	@ManyToOne(() => Category, cate => cate.products)
	@JoinColumn({ name: "category_id", referencedColumnName: "id"})
	category: Category;
	
	@OneToMany(() => Vote, (vote) => vote.product)
	votes: Vote[];
}
