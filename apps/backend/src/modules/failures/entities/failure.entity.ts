import { FailureType, Severity } from 'src/database/generated/prisma/enums';

export class Failure {
  id: number;
  timestamp: Date;
  type: FailureType;
  severity: Severity;
  description: string;
  isResolved: boolean;
}
