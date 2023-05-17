import { Injectable } from '@nestjs/common';
import { CreateGenerateDto } from './dto/create-generate.dto';
import { UpdateGenerateDto } from './dto/update-generate.dto';
import { InjectRepository } from '@nestjs/typeorm';
import { Prompt } from '../prompt/entities/prompt.entity';
import { Repository } from 'typeorm';
import { Service } from '../service/entities/service.entity';
import { OpenAiService } from '../open-ai/open-ai.service';
import { ChatCompletionRequestMessage } from 'openai';
import { GenerateProcessService } from '../generate_process/generate_process.service';

@Injectable()
export class GenerateService {

  constructor(

    private readonly generateProcessService: GenerateProcessService,
    private readonly openAiService: OpenAiService,
    @InjectRepository(Prompt)
    private readonly promptRepository: Repository<Prompt>
  ) {
  }
  async create(createGenerateDto: CreateGenerateDto) {
    const prompts = await this.promptRepository.find({
      where: {
        service: {
          id: createGenerateDto.service
        }
      },
      order: {
        id: 'ASC'
      }
    })

    const params = Object.entries(createGenerateDto)

    const formatted = prompts.map(prompt => {
      const data = params.reduce((acc, cur) => {
        return {...acc, message: acc.message.replace(`[${cur[0]}]`, cur[1])}
      }, prompt)
      return { role: data.role, content: data.message } as ChatCompletionRequestMessage
    })

    const process = await this.generateProcessService.create({service: createGenerateDto.service, request: createGenerateDto, status: 0, user_id: 2, response: {}})
    this.openAiService.createAiCompletion(formatted)
      .then((response) => {
        this.generateProcessService.update(process.id, {status: 1, response})
      })
    return 'ok'
  }

  findAll() {
    return `This action returns all generate`;
  }

  findOne(id: number) {
    return `This action returns a #${id} generate`;
  }

  update(id: number, updateGenerateDto: UpdateGenerateDto) {
    return `This action updates a #${id} generate`;
  }

  remove(id: number) {
    return `This action removes a #${id} generate`;
  }
}
