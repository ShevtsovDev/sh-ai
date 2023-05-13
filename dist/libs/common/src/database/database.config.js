"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.getDatabaseConfig = void 0;
const getDatabaseConfig = () => ({
    type: 'postgres',
    host: 'sh-ai-api-postgres-1',
    port: 5432,
    username: 'sh_ai_admin',
    password: 'qwer1234',
    database: 'sh_ai_db',
    autoLoadEntities: true,
    synchronize: true,
});
exports.getDatabaseConfig = getDatabaseConfig;
//# sourceMappingURL=database.config.js.map