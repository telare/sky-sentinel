import { Module } from '@nestjs/common';
import { AiService } from './ai.service';
import { ConfigService } from '@nestjs/config';
import { AiController } from './ai.controller';
import { GoogleGenAI } from '@google/genai';

@Module({
  controllers: [AiController],
  providers: [
    AiService,
    {
      provide: 'AI_CLIENT',
      inject: [ConfigService],
      useFactory: (configService: ConfigService) => {
        const apikey = configService.get<string>('GOOGLE_AI_KEY');
        if (!apikey) {
          throw new Error('GOOGLE_AI_KEY is not defined');
        }
        return new GoogleGenAI({ apiKey: apikey });
      },
    },
  ],
})
export class AiModule {}
