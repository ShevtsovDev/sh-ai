import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { ServiceSchemaService } from './service_schema.service';
import { CreateServiceSchemaDto } from './dto/create-service_schema.dto';
import { UpdateServiceSchemaDto } from './dto/update-service_schema.dto';

@Controller('service-schema')
export class ServiceSchemaController {
  constructor(private readonly serviceSchemaService: ServiceSchemaService) {}

  @Post()
  create(@Body() createServiceSchemaDto: CreateServiceSchemaDto) {
    return this.serviceSchemaService.create(createServiceSchemaDto);
  }

  @Get()
  findAll() {
    return this.serviceSchemaService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.serviceSchemaService.findOne(+id);
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() updateServiceSchemaDto: UpdateServiceSchemaDto) {
    return this.serviceSchemaService.update(+id, updateServiceSchemaDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.serviceSchemaService.remove(+id);
  }
}
