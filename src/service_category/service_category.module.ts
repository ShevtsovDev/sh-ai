import { Module } from '@nestjs/common';
import { ServiceCategoryService } from './service_category.service';
import { ServiceCategoryController } from './service_category.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { ServiceCategory } from './entities/service_category.entity';
import { ServiceModule } from '../service/service.module';

@Module({
  imports: [
    TypeOrmModule.forFeature([ServiceCategory]),
    ServiceModule
  ],
  controllers: [ServiceCategoryController],
  providers: [ServiceCategoryService]
})
export class ServiceCategoryModule {}
