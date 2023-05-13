import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { ServiceModule } from './service/service.module';
import { DatabaseModule } from '../libs/common/src';
import { ServiceSchemaModule } from './service_schema/service_schema.module';

@Module({
  imports: [ServiceModule, DatabaseModule, ServiceSchemaModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
