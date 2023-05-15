import { Module } from '@nestjs/common';
import { HttpModule, HttpService } from '@nestjs/axios';
import { ConfigService } from '@nestjs/config';
import { ContentService } from './content.service';

@Module({
  imports: [
    HttpModule.registerAsync({
      useFactory: async (configService: ConfigService) => ({
        baseURL: configService.get('STRAPI_HOST'),
      }),
      inject: [ConfigService]
    }),
  ],
  exports: [ContentService],
  providers: [ContentService],
})
export class ContentModule {}
