import { PartialType } from '@nestjs/mapped-types';
import { CreateServiceSchemaDto } from './create-service_schema.dto';

export class UpdateServiceSchemaDto extends PartialType(CreateServiceSchemaDto) {}
