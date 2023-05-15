import { Injectable } from '@nestjs/common';
import { CreateServiceCategoryDto } from './dto/create-service_category.dto';
import { UpdateServiceCategoryDto } from './dto/update-service_category.dto';
import { InjectRepository } from '@nestjs/typeorm';
import { ServiceCategory } from './entities/service_category.entity';
import { Repository } from 'typeorm';

@Injectable()
export class ServiceCategoryService {

  constructor(
    @InjectRepository(ServiceCategory)
    private readonly serviceCategory: Repository<ServiceCategory>,
  ) {
  }

  async create(createServiceCategoryDto: CreateServiceCategoryDto) {
    const newServiceCategory = await this.serviceCategory.create(createServiceCategoryDto);
    return (await this.serviceCategory.save(newServiceCategory))
  }

  async findAll() {
    const serviceCategories = await this.serviceCategory.find()
    return serviceCategories
  }

  findOne(id: number) {
    return `This action returns a #${id} serviceCategory`;
  }

  update(id: number, updateServiceCategoryDto: UpdateServiceCategoryDto) {
    return `This action updates a #${id} serviceCategory`;
  }

  remove(id: number) {
    return `This action removes a #${id} serviceCategory`;
  }
}
