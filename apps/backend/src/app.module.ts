import { Module } from '@nestjs/common';
import { FailuresModule } from './modules/failures/failures.module';
import { AiModule } from './modules/ai/ai.module';
import { ValidatorModule } from './modules/validator/validator.module';
import { ConfigModule } from '@nestjs/config';
import * as Joi from 'joi';
import { TelemetryParseModule } from './modules/temelemtry-parser/telemetry-parser.module';
import { join } from 'path';
import { DatabaseModule } from './modules/database/database.module';
@Module({
  imports: [
    FailuresModule,
    AiModule,
    ValidatorModule,
    TelemetryParseModule,
    DatabaseModule,
    ConfigModule.forRoot({
      isGlobal: true,
      envFilePath: join(process.cwd(), '../../.env'),
      validationSchema: Joi.object({
        DATABASE_URL: Joi.string().required(),
        BACKEND_PORT: Joi.number().required(),
        FRONTEND_PORT: Joi.number().required(),
        FRONTEND_URL: Joi.string().required(),
        GOOGLE_AI_KEY: Joi.string().required(),
      }),
    }),
  ],
})
export class AppModule {}
