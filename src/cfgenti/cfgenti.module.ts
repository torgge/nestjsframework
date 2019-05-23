import { Module } from '@nestjs/common';
import { CfgentiService } from './cfgenti.service';
import { CfgentiController } from './cfgenti.controller';
import { Cfgenti } from './cfgenti.entity';
import { TypeOrmModule } from '@nestjs/typeorm';

@Module({
  imports: [TypeOrmModule.forFeature([Cfgenti])],
  providers: [CfgentiService],
  controllers: [CfgentiController],
})
export class CfgentiModule {}
