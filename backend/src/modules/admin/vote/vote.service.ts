import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Vote } from 'src/entities/vote.entity';
import { IPaging, Paging } from 'src/helpers/helper';
import { Equal, Repository } from 'typeorm';
import CreateVoteDto from './dto/createVote.dto';
import UpdateVoteDto from './dto/updateVote.dto';

@Injectable()
export class VoteService {

    constructor(
        @InjectRepository(Vote)
        private voteRepo: Repository<Vote>
    ) { }

    async getVotes(paging: IPaging, filters: any) {
        let conditions = await this.buildConditions(filters);

        const [votes, total] = await this.voteRepo.findAndCount({
            where: conditions,
            order: { created_at: 'DESC' },
            take: paging.page_size,
            relations: {
                user: true,
                product: true,
            },
            skip: ((paging.page - 1) * paging.page_size)
        });

        return { votes: votes, meta: new Paging(paging.page, paging.page_size, total) }
    }

    async getVoteById(id: number) {
        return await this.voteRepo.findOneBy({ id: id });
    }

    async createVote(data: CreateVoteDto) {
        let newVote = await this.voteRepo.create({
            ...data
        });
        await this.voteRepo.save(newVote);
        return newVote;
    }

    async updateVote(id: number, data: UpdateVoteDto) {
        await this.voteRepo.update(id, data);
        return this.voteRepo.findOneBy({ id: id });
    }
    
    async deleteVote(id: number): Promise<void> {
        await this.voteRepo.delete(id);
    }

    async buildConditions(filters: any)
    {
        const conditions: any = {};

        if (filters.id) conditions.id = Equal(filters.id);
        if (filters.user_id) conditions.user_id = Equal(filters.user_id);
        if (filters.product_id) conditions.product_id = Equal(filters.product_id);
        if (filters.number) conditions.number = Equal(filters.number);
 
        return conditions;
    }
}
