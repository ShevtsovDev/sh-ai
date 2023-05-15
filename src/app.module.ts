import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { ServiceModule } from './service/service.module';
import { DatabaseModule } from '../libs/common/src';
import { ServiceSchemaModule } from './service_schema/service_schema.module';
import { GenerateProcessModule } from './generate_process/generate_process.module';
import { ContentModule } from '../libs/common/src/content/content.module';
import { HttpModule } from '@nestjs/axios';
import { ConfigModule, ConfigService } from '@nestjs/config';
import { ServiceCategoryModule } from './service_category/service_category.module';

@Module({
  imports: [
    ServiceModule,
    DatabaseModule,
    ServiceSchemaModule,
    GenerateProcessModule,
    ContentModule,
    ConfigModule.forRoot({ isGlobal: true }),
    ServiceCategoryModule,
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {
}
