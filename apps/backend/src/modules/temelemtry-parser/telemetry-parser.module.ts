import { Module } from '@nestjs/common';
import { TelemetryParserGateway } from './temelemtry-parser.gateway';
import { ValidatorModule } from '../validator/validator.module';
import { FailuresModule } from '../failures/failures.module';
import { DatabaseModule } from '../database/database.module';

@Module({
  imports: [ValidatorModule, FailuresModule, DatabaseModule],
  providers: [TelemetryParserGateway],
  exports: [TelemetryParserGateway],
})
export class TelemetryParseModule {}
