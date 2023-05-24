import {
  Controller,
  Get,
  Post,
  Body,
  Patch,
  Param,
  Delete,
} from '@nestjs/common';
import { GenerateProcessService } from './generate_process.service';
import { CreateGenerateProcessDto } from './dto/create-generate_process.dto';
import { UpdateGenerateProcessDto } from './dto/update-generate_process.dto';
import {
  ExtractDataFromToken,
  ExtractToken,
} from '../auth/decorator/current-user.decorator';

@Controller('generate-process')
export class GenerateProcessController {
  constructor(
    private readonly generateProcessService: GenerateProcessService,
  ) {}

  @Post()
  create(@Body() createGenerateProcessDto: CreateGenerateProcessDto) {
    return this.generateProcessService.create(createGenerateProcessDto);
  }

  @Get()
  findAll() {
    return this.generateProcessService.findAll();
  }

  @Get(':id')
  findOne(
    @Param('id') id: string,
    @ExtractToken() token: string,
    @ExtractDataFromToken() data: { id: number },
  ) {
    const extractDataFromTonek = JSON.parse(
      Buffer.from(token.split('.')[1], 'base64').toString(),
    ) as { id: number };

    return this.generateProcessService.findOne(+id, data.id);
  }

  @Patch(':id')
  update(
    @Param('id') id: string,
    @Body() updateGenerateProcessDto: UpdateGenerateProcessDto,
  ) {
    return this.generateProcessService.update(+id, updateGenerateProcessDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.generateProcessService.remove(+id);
  }
}
