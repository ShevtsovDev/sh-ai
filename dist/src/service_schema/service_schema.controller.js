"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.ServiceSchemaController = void 0;
const common_1 = require("@nestjs/common");
const service_schema_service_1 = require("./service_schema.service");
const create_service_schema_dto_1 = require("./dto/create-service_schema.dto");
const update_service_schema_dto_1 = require("./dto/update-service_schema.dto");
let ServiceSchemaController = class ServiceSchemaController {
    constructor(serviceSchemaService) {
        this.serviceSchemaService = serviceSchemaService;
    }
    create(createServiceSchemaDto) {
        return this.serviceSchemaService.create(createServiceSchemaDto);
    }
    findAll() {
        return this.serviceSchemaService.findAll();
    }
    findOne(id) {
        return this.serviceSchemaService.findOne(+id);
    }
    update(id, updateServiceSchemaDto) {
        return this.serviceSchemaService.update(+id, updateServiceSchemaDto);
    }
    remove(id) {
        return this.serviceSchemaService.remove(+id);
    }
};
__decorate([
    (0, common_1.Post)(),
    __param(0, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [create_service_schema_dto_1.CreateServiceSchemaDto]),
    __metadata("design:returntype", void 0)
], ServiceSchemaController.prototype, "create", null);
__decorate([
    (0, common_1.Get)(),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", void 0)
], ServiceSchemaController.prototype, "findAll", null);
__decorate([
    (0, common_1.Get)(':id'),
    __param(0, (0, common_1.Param)('id')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", void 0)
], ServiceSchemaController.prototype, "findOne", null);
__decorate([
    (0, common_1.Patch)(':id'),
    __param(0, (0, common_1.Param)('id')),
    __param(1, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String, update_service_schema_dto_1.UpdateServiceSchemaDto]),
    __metadata("design:returntype", void 0)
], ServiceSchemaController.prototype, "update", null);
__decorate([
    (0, common_1.Delete)(':id'),
    __param(0, (0, common_1.Param)('id')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", void 0)
], ServiceSchemaController.prototype, "remove", null);
ServiceSchemaController = __decorate([
    (0, common_1.Controller)('service-schema'),
    __metadata("design:paramtypes", [service_schema_service_1.ServiceSchemaService])
], ServiceSchemaController);
exports.ServiceSchemaController = ServiceSchemaController;
//# sourceMappingURL=service_schema.controller.js.map