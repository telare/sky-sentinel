import { Injectable } from '@nestjs/common';
import { CreateLogicEngineDto } from './dto/create-logic-engine.dto';
import { UpdateLogicEngineDto } from './dto/update-logic-engine.dto';

@Injectable()
export class LogicEngineService {
  create(createLogicEngineDto: CreateLogicEngineDto) {
    return 'This action adds a new logicEngine';
  }

  findAll() {
    return `This action returns all logicEngine`;
  }

  findOne(id: number) {
    return `This action returns a #${id} logicEngine`;
  }

  update(id: number, updateLogicEngineDto: UpdateLogicEngineDto) {
    return `This action updates a #${id} logicEngine`;
  }

  remove(id: number) {
    return `This action removes a #${id} logicEngine`;
  }
}
