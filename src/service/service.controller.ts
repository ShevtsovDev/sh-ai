import {
  Body,
  Controller,
  Delete,
  Get,
  HttpCode,
  HttpException,
  HttpStatus,
  Param,
  Patch,
  Post,
  UploadedFile,
  UseInterceptors,
} from '@nestjs/common';
import { ServiceService } from './service.service';
import { CreateServiceDto } from './dto/create-service.dto';
import { UpdateServiceDto } from './dto/update-service.dto';
import { FileInterceptor } from '@nestjs/platform-express';
import { ExtractToken } from '../auth/decorator/current-user.decorator';
import { validate } from 'class-validator';
import { plainToClass } from 'class-transformer';

@Controller('service')
export class ServiceController {
  constructor(private readonly serviceService: ServiceService) {}

  @Post()
  @UseInterceptors(FileInterceptor('icon'))
  async create(
    @Body() createServiceDto: CreateServiceDto,
    @UploadedFile() icon: Express.Multer.File,
    @ExtractToken() token,
  ) {
    const errors = await validate(
      plainToClass(CreateServiceDto, createServiceDto),
    );
    if (!errors.length) {
      return this.serviceService.create(createServiceDto, icon, token);
    }

    const formattedErrors = errors.map((error) => ({
      [error.property]: Object.values(error.constraints),
    }));
    throw new HttpException(formattedErrors, HttpStatus.BAD_REQUEST);
  }

  @Get()
  findAll() {
    return this.serviceService.findAll();
  }

  @Get(':id')
  findOne(@Param('slug') slug: string) {
    return this.serviceService.findOne(slug);
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() updateServiceDto: UpdateServiceDto) {
    return this.serviceService.update(+id, updateServiceDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.serviceService.remove(+id);
  }
}
