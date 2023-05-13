"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.UpdateServiceSchemaDto = void 0;
const mapped_types_1 = require("@nestjs/mapped-types");
const create_service_schema_dto_1 = require("./create-service_schema.dto");
class UpdateServiceSchemaDto extends (0, mapped_types_1.PartialType)(create_service_schema_dto_1.CreateServiceSchemaDto) {
}
exports.UpdateServiceSchemaDto = UpdateServiceSchemaDto;
//# sourceMappingURL=update-service_schema.dto.js.map