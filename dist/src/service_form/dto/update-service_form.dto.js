"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.UpdateServiceFormDto = void 0;
const mapped_types_1 = require("@nestjs/mapped-types");
const create_service_form_dto_1 = require("./create-service_form.dto");
class UpdateServiceFormDto extends (0, mapped_types_1.PartialType)(create_service_form_dto_1.CreateServiceFormDto) {
}
exports.UpdateServiceFormDto = UpdateServiceFormDto;
//# sourceMappingURL=update-service_form.dto.js.map