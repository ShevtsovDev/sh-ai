import { CreateServiceFormDto } from './dto/create-service_form.dto';
import { UpdateServiceFormDto } from './dto/update-service_form.dto';
export declare class ServiceFormService {
    create(createServiceFormDto: CreateServiceFormDto): string;
    findAll(): string;
    findOne(id: number): string;
    update(id: number, updateServiceFormDto: UpdateServiceFormDto): string;
    remove(id: number): string;
}
