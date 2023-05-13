import { ServiceSchema } from '../../service_schema/entities/service_schema.entity';
export declare class Service {
    id: number;
    name: string;
    description: string;
    icon: string;
    updated_at: Date;
    created_at: Date;
    schema: ServiceSchema;
}
