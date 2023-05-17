import { Module } from '@nestjs/common';
import { OpenAiService } from './open-ai.service';
import { ConfigService } from '@nestjs/config';
import { GenerateProcessModule } from '../generate_process/generate_process.module';

@Module({
  imports: [GenerateProcessModule],
  exports: [OpenAiService],
  providers: [OpenAiService],
})
export class OpenAiModule {}
