import {
  Controller,
  Get,
  Post,
  Body,
  Patch,
  Param,
  Delete,
} from '@nestjs/common';
import { FailuresService } from './failures.service';

@Controller('failures')
export class FailuresController {
  constructor(private readonly failuresService: FailuresService) {}

  @Post()
  create() {
    return this.failuresService.create();
  }

  @Get()
  findAll() {
    return this.failuresService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.failuresService.findOne(+id);
  }

  @Patch(':id')
  update(@Param('id') id: string) {
    return this.failuresService.update(+id);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.failuresService.remove(+id);
  }
}
