import { HttpException, HttpStatus, Injectable } from '@nestjs/common';
import { CreateServiceSchemaDto } from './dto/create-service_schema.dto';
import { UpdateServiceSchemaDto } from './dto/update-service_schema.dto';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { ServiceSchema } from './entities/service_schema.entity';

@Injectable()
export class ServiceSchemaService {

  constructor(
    @InjectRepository(ServiceSchema)

    private readonly serviceSchemaService: Repository<ServiceSchema>,
  ) {
  }

  async create(createServiceSchemaDto: CreateServiceSchemaDto) {
    try {
      const newSchema = await this.serviceSchemaService.create(createServiceSchemaDto);

      return (await this.serviceSchemaService.save(newSchema));
    } catch (e) {
      throw new HttpException(e.message, HttpStatus.BAD_REQUEST);
    }
  }

  async findAll() {
    try {
      const schemas = await this.serviceSchemaService.find();

      return schemas;
    } catch (e) {
      throw new HttpException(e.message, HttpStatus.BAD_REQUEST);
    }
  }

  async findOne(id: number) {
    try {
      const schema = await this.serviceSchemaService.findOne({ where: { id }, relations: ['service'] });

      return schema;
    } catch (e) {
      throw new HttpException(e.message, HttpStatus.BAD_REQUEST);
    }
  }

  update(id: number, updateServiceSchemaDto: UpdateServiceSchemaDto) {
    return `This action updates a #${id} serviceSchema`;
  }

  async remove(id: number) {
    try {
      const schema = await this.serviceSchemaService.delete(id);

      return schema;
    } catch (e) {
      throw new HttpException(e.message, HttpStatus.BAD_REQUEST);
    }
  }
}
