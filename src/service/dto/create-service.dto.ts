import { IsDefined, IsEmail, IsInt, IsNotEmpty } from 'class-validator';

export class CreateServiceDto {
    name: string;
    description: string

    schema: number

    @IsNotEmpty()
    category: number
}
