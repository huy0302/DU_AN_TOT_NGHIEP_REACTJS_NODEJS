import { Module } from '@nestjs/common';
import { StatisticService } from './statistic.service';
import { StatisticController } from './statistic.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Products } from 'src/entities/product.entity';
import { User } from 'src/entities/user.entity';
import { Orders } from 'src/entities/orders.entity';
import { Transactions } from 'src/entities/transaction.entity';

@Module({
	imports: [
		TypeOrmModule.forFeature([
			Products,
			User,
			Orders,
			Transactions,
			
		])
	],
	controllers: [StatisticController],
	providers: [StatisticService]
})
export class StatisticModule { }
