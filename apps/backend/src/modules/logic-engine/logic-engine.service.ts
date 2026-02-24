import { Injectable } from '@nestjs/common';

@Injectable()
export class LogicEngineService {
  create() {
    return 'This action adds a new logicEngine';
  }

  findAll() {
    return `This action returns all logicEngine`;
  }

  findOne(id: number) {
    return `This action returns a #${id} logicEngine`;
  }

  update(id: number) {
    return `This action updates a #${id} logicEngine`;
  }

  remove(id: number) {
    return `This action removes a #${id} logicEngine`;
  }
}
