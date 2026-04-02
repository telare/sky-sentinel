import type { UAVdata } from "@prisma/client";
import { createContext } from "react";

export const ChartsHistoryContext = createContext<UAVdata[]>([]);
