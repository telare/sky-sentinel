import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { FailuresController } from './modules/failures/failures.controller';
import { FailuresModule } from './modules/failures/failures.module';
import { FailuresModule } from './modules/failures/failures.module';

@Module({
  imports: [FailuresModule],
  controllers: [AppController, FailuresController],
  providers: [AppService],
})
export class AppModule {}
