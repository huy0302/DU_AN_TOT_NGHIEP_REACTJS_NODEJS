import { Module } from '@nestjs/common';
import { CategoryController } from './category.controller';
import { CategoryService } from './category.service';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Category } from 'src/entities/category.entity';
import { Products } from 'src/entities/product.entity';

@Module({
    imports: [
        TypeOrmModule.forFeature([
            Category,
            Products
        ])
    ],
    controllers: [CategoryController],
    providers: [CategoryService],
    exports: [TypeOrmModule]
})
export class CategoryModule { }
