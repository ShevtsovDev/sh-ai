import { Module } from '@nestjs/common';
import { GenerateProcessService } from './generate_process.service';
import { GenerateProcessController } from './generate_process.controller';
import {TypeOrmModule} from "@nestjs/typeorm";
import {Service} from "../service/entities/service.entity";
import {GenerateProcess} from "./entities/generate_process.entity";

@Module({
  imports: [TypeOrmModule.forFeature([GenerateProcess]), Service],
  controllers: [GenerateProcessController],
  providers: [GenerateProcessService],
  exports: [GenerateProcessService]
})
export class GenerateProcessModule {}
