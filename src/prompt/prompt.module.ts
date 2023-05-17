import { Module } from '@nestjs/common';
import { PromptService } from './prompt.service';
import { PromptController } from './prompt.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Service } from '../service/entities/service.entity';
import { Prompt } from './entities/prompt.entity';

@Module({
  imports: [TypeOrmModule.forFeature([Prompt])],
  exports: [PromptService],
  controllers: [PromptController],
  providers: [PromptService]
})
export class PromptModule {}
