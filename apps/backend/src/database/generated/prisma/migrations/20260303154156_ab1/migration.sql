/*
  Warnings:

  - You are about to drop the column `failsafeState` on the `UAVdata` table. All the data in the column will be lost.

*/
-- AlterTable
ALTER TABLE "UAVdata" DROP COLUMN "failsafeState";

-- DropEnum
DROP TYPE "SailsafeState";
