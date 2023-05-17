import { HttpException, HttpStatus, Injectable } from '@nestjs/common';
import { CreateServiceDto } from './dto/create-service.dto';
import { UpdateServiceDto } from './dto/update-service.dto';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Service } from './entities/service.entity';
import { ContentService } from '../../libs/common/src/content/content.service';

@Injectable()
export class ServiceService {

  constructor(
    private readonly contentService: ContentService,
    @InjectRepository(Service)

    private readonly serviceService: Repository<Service>,
  ) {
  }

  async create(createServiceDto: CreateServiceDto, icon: Express.Multer.File, token: string) {
    try {
      const uploadedFile = await this.contentService.upload(icon, token);
      const newService = await this.serviceService.create({
        ...createServiceDto,
        icon: uploadedFile[0].url,
        schema: { id: createServiceDto.schema },
        category: { id: createServiceDto.category },
      });

      return (await this.serviceService.save(newService));
    } catch (e) {
      throw new HttpException(e.message, HttpStatus.BAD_REQUEST);
    }
  }

  async findAll() {
    try {
      const services = await this.serviceService.find({ relations: ['schema', 'category', 'prompts'] });
      return services;
    } catch (e) {
      throw new HttpException(e.message, HttpStatus.BAD_REQUEST);
    }
  }

  async findOne(id: number) {
    try {
      const services = await this.serviceService.findOne({
        where: {
          id,
        },
        relations: ['schema', 'prompts'],
      });
      return services;
    } catch (e) {
      throw new HttpException(e.message, HttpStatus.BAD_REQUEST);
    }
  }

  update(id: number, updateServiceDto: UpdateServiceDto) {
    return `This action updates a #${id} service`;
  }

  async remove(id: number) {
    try {
      const services = await this.serviceService.delete(id);
      return services;
    } catch (e) {
      throw new HttpException(e.message, HttpStatus.BAD_REQUEST);
    }
  }
}