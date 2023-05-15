import { Module } from '@nestjs/common';
import { ServiceSchemaService } from './service_schema.service';
import { ServiceSchemaController } from './service_schema.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { ServiceSchema } from './entities/service_schema.entity';
import {ServiceModule} from "../service/service.module";

@Module({
  exports: [ServiceSchemaService],
  imports: [TypeOrmModule.forFeature([ServiceSchema])],
  controllers: [ServiceSchemaController],
  providers: [ServiceSchemaService],
})
export class ServiceSchemaModule {}
