import { Injectable } from '@nestjs/common';
import { CreatePromptDto } from './dto/create-prompt.dto';
import { UpdatePromptDto } from './dto/update-prompt.dto';
import { InjectRepository } from '@nestjs/typeorm';
import { Prompt } from './entities/prompt.entity';
import { Repository } from 'typeorm';

@Injectable()
export class PromptService {

  constructor(
    @InjectRepository(Prompt)
    private readonly promptRepository: Repository<Prompt>,
  ) {
  }

  async create(createPromptDto: CreatePromptDto) {
    const newPrompt = await this.promptRepository.create({...createPromptDto, service: { id: createPromptDto.service}})
    return (await this.promptRepository.save(newPrompt))
  }

  findAll() {
    return `This action returns all prompt`;
  }

  findOne(id: number) {
    return `This action returns a #${id} prompt`;
  }

  update(id: number, updatePromptDto: UpdatePromptDto) {
    return `This action updates a #${id} prompt`;
  }

  remove(id: number) {
    return `This action removes a #${id} prompt`;
  }
}
