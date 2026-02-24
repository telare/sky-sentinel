import { PartialType } from '@nestjs/mapped-types';
import { CreateLogicEngineDto } from './create-logic-engine.dto';

export class UpdateLogicEngineDto extends PartialType(CreateLogicEngineDto) {}
