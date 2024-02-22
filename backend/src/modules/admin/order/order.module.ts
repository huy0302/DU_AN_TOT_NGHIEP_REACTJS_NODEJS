import { Module } from '@nestjs/common';
import { OrderService } from './order.service';
import { OrderController } from './order.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Products } from 'src/entities/product.entity';
import { Orders } from 'src/entities/orders.entity';
import { User } from 'src/entities/user.entity';
import { ProductService } from '../product/product.service';
import { UserService } from '../user/user.service';
import { ProductsImages } from 'src/entities/product-image.entity';
import { Role } from 'src/entities/role.entity';
import { Permission } from 'src/entities/permission.entity';
import { UserRole } from 'src/entities/user-roles.entity';
import { ValidateService } from '../user/services/validate.service';
import { Transactions } from 'src/entities/transaction.entity';

@Module({
	imports: [
		TypeOrmModule.forFeature([
			Products,
			Orders,
			User,
			ProductsImages,
			Role,
			Permission,
			UserRole,
			Transactions
		])
	],
	controllers: [OrderController],
	providers: [OrderService, ProductService]
})
export class OrderModule { }
