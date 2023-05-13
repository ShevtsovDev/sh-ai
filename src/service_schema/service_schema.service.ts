import { Injectable } from '@nestjs/common';
import { CreateServiceSchemaDto } from './dto/create-service_schema.dto';
import { UpdateServiceSchemaDto } from './dto/update-service_schema.dto';

@Injectable()
export class ServiceSchemaService {
  create(createServiceSchemaDto: CreateServiceSchemaDto) {
    return 'This action adds a new serviceSchema';
  }

  findAll() {
    return `This action returns all serviceSchema`;
  }

  findOne(id: number) {
    return `This action returns a #${id} serviceSchema`;
  }

  update(id: number, updateServiceSchemaDto: UpdateServiceSchemaDto) {
    return `This action updates a #${id} serviceSchema`;
  }

  remove(id: number) {
    return `This action removes a #${id} serviceSchema`;
  }
}
