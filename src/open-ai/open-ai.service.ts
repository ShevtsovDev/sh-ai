import { HttpException, HttpStatus, Injectable, Logger } from '@nestjs/common';
import {
  ChatCompletionRequestMessage,
  ChatCompletionResponseMessage,
  Configuration,
  CreateChatCompletionResponse,
  OpenAIApi,
} from 'openai';
import axios, { AxiosResponse } from 'axios';
import { ConfigService } from '@nestjs/config';
import { GenerateProcessService } from '../generate_process/generate_process.service';
@Injectable()
export class OpenAiService {

  protected openai: OpenAIApi;
  private readonly logger = new Logger(OpenAiService.name)


  constructor(
    private readonly generateProcessService: GenerateProcessService,
    private readonly configService: ConfigService
  ) {
    const configuration = new Configuration({
      apiKey: this.configService.get('OPEN_AI_KEY'),
    });
    this.openai = new OpenAIApi(configuration);
  }

  async createAiCompletion(messages: ChatCompletionRequestMessage[]):  Promise<ChatCompletionResponseMessage> {
    try {
      const completion = await this.openai.createChatCompletion({
        model: 'gpt-3.5-turbo',
        max_tokens: 2048,
        temperature: 0.7,
        messages: messages,
      });
      return completion.data.choices[0].message
    } catch (e) {
      this.logger.error(`ERROR FROM [${this.createAiCompletion.name}]`, e.message)
      throw new HttpException(e.message, HttpStatus.BAD_REQUEST)
    }
  };
}
