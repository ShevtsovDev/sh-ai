import { CreateServiceSchemaDto } from './dto/create-service_schema.dto';
import { UpdateServiceSchemaDto } from './dto/update-service_schema.dto';
export declare class ServiceSchemaService {
    create(createServiceSchemaDto: CreateServiceSchemaDto): string;
    findAll(): string;
    findOne(id: number): string;
    update(id: number, updateServiceSchemaDto: UpdateServiceSchemaDto): string;
    remove(id: number): string;
}
