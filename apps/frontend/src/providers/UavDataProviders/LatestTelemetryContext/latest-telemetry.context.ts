import type { UAVdata } from "@prisma/client";
import { createContext } from "react";

export const LatestTelemetryContext = createContext<UAVdata | null>(null);
