import { TypeOrmModuleOptions } from '@nestjs/typeorm';

export const getDatabaseConfig = (): TypeOrmModuleOptions => ({
  type: 'postgres',
  host: 'ai-postgres-1',
  port: 5432,
  username: 'sh_ai_admin',
  password: 'qwer1234',
  database: 'sh_ai_db',
  autoLoadEntities: true,
  synchronize: true,
});
