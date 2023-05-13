import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { getDatabaseConfig } from './database.config';

@Module({
  imports: [
    TypeOrmModule.forRootAsync({ useFactory: () => getDatabaseConfig() }),
  ],
  exports: [],
  providers: [],
  controllers: [],
})
export class DatabaseModule {}
