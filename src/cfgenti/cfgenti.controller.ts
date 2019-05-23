import { Controller, Get } from '@nestjs/common';
import { CfgentiService } from './cfgenti.service';
import { Cfgenti } from './cfgenti.entity';

@Controller('cfgenti')
export class CfgentiController {
    constructor(private readonly service: CfgentiService) {
    }

    @Get('')
    findAll(): Promise<Cfgenti[]> {
        return this.service.findAll();
    }
}
