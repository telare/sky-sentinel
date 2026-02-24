/*
  Warnings:

  - Added the required column `uavDataId` to the `FailureLog` table without a default value. This is not possible if the table is not empty.
  - Added the required column `temperature` to the `UAVdata` table without a default value. This is not possible if the table is not empty.
  - Added the required column `verticalSpeed` to the `UAVdata` table without a default value. This is not possible if the table is not empty.

*/
-- AlterEnum
-- This migration adds more than one value to an enum.
-- With PostgreSQL versions 11 and earlier, this is not possible
-- in a single migration. This can be worked around by creating
-- multiple migrations, each migration adding only one value to
-- the enum.


ALTER TYPE "FailureType" ADD VALUE 'AERODYNAMIC';
ALTER TYPE "FailureType" ADD VALUE 'FLIGHT_DYNAMICS';

-- AlterTable
ALTER TABLE "FailureLog" ADD COLUMN     "uavDataId" INTEGER NOT NULL;

-- AlterTable
ALTER TABLE "UAVdata" ADD COLUMN     "latency" DOUBLE PRECISION,
ADD COLUMN     "rssi" DOUBLE PRECISION,
ADD COLUMN     "temperature" DOUBLE PRECISION NOT NULL,
ADD COLUMN     "verticalSpeed" DOUBLE PRECISION NOT NULL;

-- AddForeignKey
ALTER TABLE "FailureLog" ADD CONSTRAINT "FailureLog_uavDataId_fkey" FOREIGN KEY ("uavDataId") REFERENCES "UAVdata"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
