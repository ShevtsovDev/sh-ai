import { Injectable } from '@nestjs/common';
import { CreateGenerateProcessDto } from './dto/create-generate_process.dto';
import { UpdateGenerateProcessDto } from './dto/update-generate_process.dto';

@Injectable()
export class GenerateProcessService {
  create(createGenerateProcessDto: CreateGenerateProcessDto) {
    return 'This action adds a new generateProcess';
  }

  findAll() {
    return `This action returns all generateProcess`;
  }

  findOne(id: number) {
    return `This action returns a #${id} generateProcess`;
  }

  update(id: number, updateGenerateProcessDto: UpdateGenerateProcessDto) {
    return `This action updates a #${id} generateProcess`;
  }

  remove(id: number) {
    return `This action removes a #${id} generateProcess`;
  }
}
