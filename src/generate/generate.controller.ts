import {
  Controller,
  Get,
  Post,
  Body,
  Patch,
  Param,
  Delete,
} from '@nestjs/common';
import { GenerateService } from './generate.service';
import { CreateGenerateDto } from './dto/create-generate.dto';
import { UpdateGenerateDto } from './dto/update-generate.dto';
import {
  ExtractDataFromToken,
  ExtractToken,
} from '../auth/decorator/current-user.decorator';

@Controller('generate')
export class GenerateController {
  constructor(private readonly generateService: GenerateService) {}

  @Post()
  create(
    @Body() createGenerateDto: CreateGenerateDto,
    @ExtractToken() token: string,
    @ExtractDataFromToken() data: { id: number },
  ) {
    return this.generateService.create(createGenerateDto, data.id);
  }

  @Get()
  findAll() {
    return this.generateService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.generateService.findOne(+id);
  }

  @Patch(':id')
  update(
    @Param('id') id: string,
    @Body() updateGenerateDto: UpdateGenerateDto,
  ) {
    return this.generateService.update(+id, updateGenerateDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.generateService.remove(+id);
  }
}
