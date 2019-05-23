import { Injectable } from '@nestjs/common';
import { Cfgenti } from './cfgenti.entity';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';

@Injectable()
export class CfgentiService {
    constructor(@InjectRepository(Cfgenti)
                private readonly cfgentiRepository: Repository<Cfgenti>) { }

    async findAll(): Promise<Cfgenti[]> {
    return await this.cfgentiRepository.find();
    }
}
