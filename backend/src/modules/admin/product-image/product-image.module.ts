import { Module } from '@nestjs/common';
import { ProductImageController } from './product-image.controller';
import { ProductImageService } from './product-image.service';
import { TypeOrmModule } from '@nestjs/typeorm';
import { ProductsImages } from 'src/entities/product-image.entity';

@Module({
  imports: [TypeOrmModule.forFeature([
    ProductsImages
  ])],
  controllers: [ProductImageController],
  providers: [ProductImageService],
  exports: [ProductImageService]
})
export class ProductImageModule {}
