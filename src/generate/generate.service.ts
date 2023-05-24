import { HttpException, HttpStatus, Injectable } from '@nestjs/common';
import { CreateGenerateDto } from './dto/create-generate.dto';
import { UpdateGenerateDto } from './dto/update-generate.dto';
import { InjectRepository } from '@nestjs/typeorm';
import { Prompt } from '../prompt/entities/prompt.entity';
import { Repository } from 'typeorm';
import { Service } from '../service/entities/service.entity';
import { OpenAiService } from '../open-ai/open-ai.service';
import { ChatCompletionRequestMessage } from 'openai';
import { GenerateProcessService } from '../generate_process/generate_process.service';

const persons = [
  {
    id: 0,
    label: 'Токсичного человека',
    value: 'Токсичного человека',
  },
  {
    id: 1,
    label: 'Доброго человека',
    value: 'Доброго человека',
  },
  {
    id: 2,
    label: 'Равнодушного человека',
    value: 'Равнодушного человека',
  },
  {
    id: 3,
    label: 'Злой бабушки',
    value: 'Злой бабушки',
  },
  {
    id: 4,
    label: 'Продажнк от бога',
    value: 'Продажнк от бога',
  },
  {
    id: 5,
    label: 'Злого гопника, епта бля!',
    value: 'Злого гопника, епта бля!',
  },
  {
    id: 6,
    label: 'Доброго гопника, епта',
    value: 'Доброго гопника, епта',
  },
  {
    id: 7,
    label: 'Владимира Владимировича Путина',
    value: 'Владимира Владимировича Путинка',
  },
];

@Injectable()
export class GenerateService {
  constructor(
    private readonly generateProcessService: GenerateProcessService,
    private readonly openAiService: OpenAiService,
    @InjectRepository(Prompt)
    private readonly promptRepository: Repository<Prompt>,
  ) {}
  async create(createGenerateDto: CreateGenerateDto, userId: number) {
    try {
      const prompts = await this.promptRepository.find({
        where: {
          service: {
            id: createGenerateDto.service,
          },
        },
        order: {
          id: 'ASC',
        },
      });

      const params = Object.entries(createGenerateDto);

      const formatted = prompts.map((prompt) => {
        const data = params.reduce((acc, cur) => {
          const value =
            cur[0] === 'person'
              ? persons.find((person) => person.id === cur[1]).value
              : cur[1];
          return {
            ...acc,
            message: acc.message.replace(`[${cur[0]}]`, value),
          };
        }, prompt);
        return {
          role: data.role,
          content: data.message,
        } as ChatCompletionRequestMessage;
      });

      const process = await this.generateProcessService.create({
        service: createGenerateDto.service,
        request: createGenerateDto,
        status: 0,
        user_id: userId,
        response: {},
      });
      this.openAiService
        .createAiCompletion(formatted)
        .then((response) => {
          this.generateProcessService.update(process.id, {
            status: 1,
            response,
          });
        })
        .catch((e) => {
          this.generateProcessService.update(process.id, {
            status: 2,
          });
        });
      return 'ok';
    } catch (e) {
      throw new HttpException(e.message, HttpStatus.BAD_REQUEST);
    }
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

[
  {
    label: 'Токсичного человека',
    value: 'Токсичного человека',
  },
  {
    label: 'Доброго человека',
    value: 'Доброго человека',
  },
  {
    label: 'Равнодушного человека',
    value: 'Равнодушного человека',
  },
  {
    label: 'Злой бабушки',
    value: 'Злой бабушки',
  },
  {
    label: 'Продажнк от бога',
    value: 'Продажнк от бога',
  },
  {
    label: 'Злого гопника',
    value: 'Злого гопника, епта бля!',
  },
  {
    label: 'Доброго гопника',
    value: 'Доброго гопника',
  },
  {
    label: 'Владимира Владимировича',
    value: 'Владимира Владимировича',
  },
];
