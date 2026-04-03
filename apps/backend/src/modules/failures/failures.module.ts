import { Module } from '@nestjs/common';
import { FailuresService } from './failures.service';
import { FailuresController } from './failures.controller';
import { DatabaseModule } from '../database/database.module';

@Module({
  imports: [DatabaseModule],
  controllers: [FailuresController],
  providers: [FailuresService],
  exports: [FailuresService],
})
export class FailuresModule {}
