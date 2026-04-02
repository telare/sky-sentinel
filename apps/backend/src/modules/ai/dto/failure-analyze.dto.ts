import { FailureType, Severity } from '@prisma/client';
import {
  IsBoolean,
  IsDateString,
  IsEnum,
  IsOptional,
  IsString,
} from 'class-validator';
import { Type } from 'class-transformer';
export class FailureAnalyzeDto {
  @IsEnum(Severity)
  severity: Severity;

  @IsString()
  id: string;

  @IsDateString()
  @Type(() => Date)
  timestamp: Date;

  @IsEnum(FailureType)
  type: FailureType;

  @IsOptional()
  @IsString()
  description: string | null;

  @IsBoolean()
  isResolved: boolean;

  @IsString()
  uavDataId: string;

  @IsString()
  responseLanguage: string;
}
