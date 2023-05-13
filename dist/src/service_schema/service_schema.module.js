"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.ServiceSchemaModule = void 0;
const common_1 = require("@nestjs/common");
const service_schema_service_1 = require("./service_schema.service");
const service_schema_controller_1 = require("./service_schema.controller");
const typeorm_1 = require("@nestjs/typeorm");
const service_schema_entity_1 = require("./entities/service_schema.entity");
let ServiceSchemaModule = class ServiceSchemaModule {
};
ServiceSchemaModule = __decorate([
    (0, common_1.Module)({
        imports: [typeorm_1.TypeOrmModule.forFeature([service_schema_entity_1.ServiceSchema])],
        controllers: [service_schema_controller_1.ServiceSchemaController],
        providers: [service_schema_service_1.ServiceSchemaService],
    })
], ServiceSchemaModule);
exports.ServiceSchemaModule = ServiceSchemaModule;
//# sourceMappingURL=service_schema.module.js.map