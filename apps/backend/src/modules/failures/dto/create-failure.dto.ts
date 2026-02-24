import { FailureType, Severity } from 'src/database/generated/prisma/enums';
import { IsString, IsEnum, IsNumber } from 'class-validator';
export class CreateFailureDto {
  @IsEnum(FailureType)
  type: FailureType;

  @IsEnum(Severity)
  severity: Severity;

  @IsString()
  description: string;

  @IsNumber()
  uavDataId: number;
}
