import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { FailuresModule } from './modules/failures/failures.module';
import { AiModule } from './modules/ai/ai.module';
import { LogicEngineModule } from './modules/logic-engine/logic-engine.module';
import { TemelemtryParserService } from './modules/temelemtry-parser/temelemtry-parser.service';
import { ValidatorService } from './modules/validator/validator.service';

@Module({
  imports: [FailuresModule, AiModule, LogicEngineModule],
  controllers: [AppController],
  providers: [AppService, TemelemtryParserService, ValidatorService],
})
export class AppModule {}
