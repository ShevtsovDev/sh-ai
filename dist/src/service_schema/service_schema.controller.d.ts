import { ServiceSchemaService } from './service_schema.service';
import { CreateServiceSchemaDto } from './dto/create-service_schema.dto';
import { UpdateServiceSchemaDto } from './dto/update-service_schema.dto';
export declare class ServiceSchemaController {
    private readonly serviceSchemaService;
    constructor(serviceSchemaService: ServiceSchemaService);
    create(createServiceSchemaDto: CreateServiceSchemaDto): string;
    findAll(): string;
    findOne(id: string): string;
    update(id: string, updateServiceSchemaDto: UpdateServiceSchemaDto): string;
    remove(id: string): string;
}
