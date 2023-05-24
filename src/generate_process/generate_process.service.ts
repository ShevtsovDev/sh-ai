import { Injectable } from '@nestjs/common';
import { CreateGenerateProcessDto } from './dto/create-generate_process.dto';
import { UpdateGenerateProcessDto } from './dto/update-generate_process.dto';
import { InjectRepository } from '@nestjs/typeorm';
import { GenerateProcess } from './entities/generate_process.entity';
import { Repository } from 'typeorm';

@Injectable()
export class GenerateProcessService {
  constructor(
    @InjectRepository(GenerateProcess)
    private readonly generateRepository: Repository<GenerateProcess>,
  ) {}
  async create(createGenerateProcessDto: CreateGenerateProcessDto) {
    const newProcess = await this.generateRepository.create({
      ...createGenerateProcessDto,
      service: { id: createGenerateProcessDto.service },
    });
    return await this.generateRepository.save(newProcess);
  }

  findAll() {
    return `This action returns all generateProcess`;
  }

  async findOne(id: number, userId: number) {
    const processes = await this.generateRepository.find({
      where: {
        user_id: userId,
        service: {
          id: id,
        },
      },
      order: {
        id: 'DESC',
      },
    });

    return processes;
  }

  async update(id: number, updateGenerateProcessDto: UpdateGenerateProcessDto) {
    const updatedProcess = await this.generateRepository.update(id, {
      status: updateGenerateProcessDto.status,
      response: updateGenerateProcessDto.response,
    });

    return updatedProcess;
  }

  async remove(id: number) {
    try {
      await this.generateRepository.delete(id);
    } catch (e) {}
  }
}
