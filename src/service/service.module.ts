import { Module } from '@nestjs/common';
import { ServiceService } from './service.service';
import { ServiceController } from './service.controller';
import { Service } from './entities/service.entity';
import { TypeOrmModule } from '@nestjs/typeorm';
import {ServiceSchemaService} from "../service_schema/service_schema.service";
import {ServiceSchemaModule} from "../service_schema/service_schema.module";
import { ContentService } from '../../libs/common/src/content/content.service';
import { ContentModule } from '../../libs/common/src';

@Module({
  exports: [ServiceService],
  imports: [TypeOrmModule.forFeature([Service]), ServiceSchemaModule, ContentModule],
  controllers: [ServiceController],
  providers: [ServiceService],
})
export class ServiceModule {}
