import { Module } from '@nestjs/common';
import { VoteController } from './vote.controller';
import { VoteService } from './vote.service';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Vote } from 'src/entities/vote.entity';
import { User } from 'src/entities/user.entity';
import { Products } from 'src/entities/product.entity';

@Module({
    imports: [TypeOrmModule.forFeature([
        Vote,
        User,
        Products
    ])
    ],
    controllers: [VoteController],
    providers: [VoteService],
    exports: [TypeOrmModule]
})
export class VoteModule { }
