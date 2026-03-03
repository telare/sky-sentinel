-- CreateEnum
CREATE TYPE "FailureType" AS ENUM ('HARDWARE', 'SOFTWARE', 'NETWORK', 'AERODYNAMIC', 'FLIGHT_DYNAMICS', 'OTHER');

-- CreateEnum
CREATE TYPE "Severity" AS ENUM ('CRITICAL', 'WARNING', 'INFO');

-- CreateEnum
CREATE TYPE "SailsafeState" AS ENUM ('GLIDING', 'RTH', 'LANDING', 'NORMAL');

-- CreateTable
CREATE TABLE "FailureLog" (
    "id" UUID NOT NULL DEFAULT gen_random_uuid(),
    "timestamp" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "type" "FailureType" NOT NULL,
    "severity" "Severity" NOT NULL,
    "description" TEXT,
    "isResolved" BOOLEAN NOT NULL DEFAULT false,
    "uavDataId" UUID NOT NULL,

    CONSTRAINT "FailureLog_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "UAVdata" (
    "id" UUID NOT NULL DEFAULT gen_random_uuid(),
    "timestamp" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "latitude" DOUBLE PRECISION NOT NULL,
    "longitude" DOUBLE PRECISION NOT NULL,
    "altitude" DOUBLE PRECISION NOT NULL,
    "verticalSpeed" DOUBLE PRECISION NOT NULL,
    "airspeed" DOUBLE PRECISION NOT NULL,
    "pitch" DOUBLE PRECISION NOT NULL,
    "roll" DOUBLE PRECISION NOT NULL,
    "gear_status" INTEGER NOT NULL,
    "battery_level" DOUBLE PRECISION NOT NULL,
    "temperature" DOUBLE PRECISION NOT NULL,
    "rssi" DOUBLE PRECISION,
    "latency" DOUBLE PRECISION,
    "groundSpeed" DOUBLE PRECISION NOT NULL,
    "throttle" DOUBLE PRECISION NOT NULL,
    "servoCurrent" DOUBLE PRECISION NOT NULL,
    "failsafeState" "SailsafeState" NOT NULL,

    CONSTRAINT "UAVdata_pkey" PRIMARY KEY ("id")
);

-- CreateIndex
CREATE INDEX "UAVdata_timestamp_idx" ON "UAVdata"("timestamp");

-- AddForeignKey
ALTER TABLE "FailureLog" ADD CONSTRAINT "FailureLog_uavDataId_fkey" FOREIGN KEY ("uavDataId") REFERENCES "UAVdata"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
