import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { LogicEngineService } from './logic-engine.service';
import { CreateLogicEngineDto } from './dto/create-logic-engine.dto';
import { UpdateLogicEngineDto } from './dto/update-logic-engine.dto';

@Controller('logic-engine')
export class LogicEngineController {
  constructor(private readonly logicEngineService: LogicEngineService) {}

  @Post()
  create(@Body() createLogicEngineDto: CreateLogicEngineDto) {
    return this.logicEngineService.create(createLogicEngineDto);
  }

  @Get()
  findAll() {
    return this.logicEngineService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.logicEngineService.findOne(+id);
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() updateLogicEngineDto: UpdateLogicEngineDto) {
    return this.logicEngineService.update(+id, updateLogicEngineDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.logicEngineService.remove(+id);
  }
}
