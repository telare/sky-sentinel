import { FailureType, Severity } from '@prisma/client';
import { IsString, IsEnum } from 'class-validator';
export class CreateFailureDto {
  @IsEnum(FailureType)
  type: FailureType;

  @IsEnum(Severity)
  severity: Severity;

  @IsString()
  description: string;

  @IsString()
  uavDataId: string;
}
