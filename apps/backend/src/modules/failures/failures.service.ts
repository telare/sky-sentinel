import { Injectable } from '@nestjs/common';
import { CreateFailureDto } from './dto/create-failure.dto';
import { UpdateFailureDto } from './dto/update-failure.dto';

@Injectable()
export class FailuresService {
  create(createFailureDto: CreateFailureDto) {
    return 'This action adds a new failure';
  }

  findAll() {
    return `This action returns all failures`;
  }

  findOne(id: number) {
    return `This action returns a #${id} failure`;
  }

  update(id: number, updateFailureDto: UpdateFailureDto) {
    return `This action updates a #${id} failure`;
  }

  remove(id: number) {
    return `This action removes a #${id} failure`;
  }
}
