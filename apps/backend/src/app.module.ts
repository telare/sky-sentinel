import { Module } from '@nestjs/common';
import { FailuresModule } from './modules/failures/failures.module';
import { AiModule } from './modules/ai/ai.module';
import { ValidatorModule } from './modules/validator/validator.module';
import { ConfigModule } from '@nestjs/config';

@Module({
  imports: [
    FailuresModule,
    AiModule,
    ValidatorModule,
    ConfigModule.forRoot({
      isGlobal: true,
    }),
  ],
})
export class AppModule {}
