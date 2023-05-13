import { PartialType } from '@nestjs/mapped-types';
import { CreateGenerateProcessDto } from './create-generate_process.dto';

export class UpdateGenerateProcessDto extends PartialType(CreateGenerateProcessDto) {}
