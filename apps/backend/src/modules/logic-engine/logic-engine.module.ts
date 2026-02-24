import { Module } from '@nestjs/common';
import { LogicEngineService } from './logic-engine.service';
import { LogicEngineController } from './logic-engine.controller';

@Module({
  controllers: [LogicEngineController],
  providers: [LogicEngineService],
})
export class LogicEngineModule {}
