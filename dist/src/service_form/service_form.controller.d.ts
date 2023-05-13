import { ServiceFormService } from './service_form.service';
import { CreateServiceFormDto } from './dto/create-service_form.dto';
import { UpdateServiceFormDto } from './dto/update-service_form.dto';
export declare class ServiceFormController {
    private readonly serviceFormService;
    constructor(serviceFormService: ServiceFormService);
    create(createServiceFormDto: CreateServiceFormDto): string;
    findAll(): string;
    findOne(id: string): string;
    update(id: string, updateServiceFormDto: UpdateServiceFormDto): string;
    remove(id: string): string;
}
