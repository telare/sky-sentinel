-- CreateEnum
CREATE TYPE "FailureType" AS ENUM ('HARDWARE', 'SOFTWARE', 'NETWORK', 'OTHER');

-- CreateEnum
CREATE TYPE "Severity" AS ENUM ('CRITICAL', 'WARNING', 'INFO');

-- CreateTable
CREATE TABLE "FailureLog" (
    "id" SERIAL NOT NULL,
    "timestamp" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "type" "FailureType" NOT NULL,
    "severity" "Severity" NOT NULL,
    "description" TEXT,
    "isResolved" BOOLEAN NOT NULL DEFAULT false,

    CONSTRAINT "FailureLog_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "UAVdata" (
    "id" SERIAL NOT NULL,
    "timestamp" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "latitude" DOUBLE PRECISION NOT NULL,
    "longitude" DOUBLE PRECISION NOT NULL,
    "altitude" DOUBLE PRECISION NOT NULL,
    "airspeed" DOUBLE PRECISION NOT NULL,
    "pitch" DOUBLE PRECISION NOT NULL,
    "roll" DOUBLE PRECISION NOT NULL,
    "gear_status" INTEGER NOT NULL,
    "battery_level" DOUBLE PRECISION NOT NULL,

    CONSTRAINT "UAVdata_pkey" PRIMARY KEY ("id")
);
