import { Module } from '@nestjs/common';
import { GenerateService } from './generate.service';
import { GenerateController } from './generate.controller';
import { PromptModule } from '../prompt/prompt.module';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Prompt } from '../prompt/entities/prompt.entity';
import { OpenAiModule } from '../open-ai/open-ai.module';
import { GenerateProcessModule } from '../generate_process/generate_process.module';
import { GenerateProcess } from '../generate_process/entities/generate_process.entity';

@Module({
  exports: [GenerateService],
  imports: [TypeOrmModule.forFeature([Prompt, GenerateProcess]), PromptModule, OpenAiModule, GenerateProcessModule],
  controllers: [GenerateController],
  providers: [GenerateService]
})
export class GenerateModule {}
