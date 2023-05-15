import { IsInt, IsNotEmpty, IsString } from 'class-validator';

export class CreateServiceCategoryDto {

  @IsString()
  name: string

  @IsString()
  description: string
}
