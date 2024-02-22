import { Module } from '@nestjs/common';
import { SlideService } from './slide.service';
import { SlideController } from './slide.controller';
import { Slide } from 'src/entities/slide.entity';
import { TypeOrmModule } from '@nestjs/typeorm';

@Module({
  imports: [
    TypeOrmModule.forFeature([
        Slide
    ])
],
  providers: [SlideService],
  controllers: [SlideController],
  exports: [TypeOrmModule]
})
export class SlideModule {}
