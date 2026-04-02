import { createContext } from "react";

export interface FlightPathPoint {
  lat: number;
  lng: number;
}

export const FlightHistoryContext = createContext<FlightPathPoint[]>([]);
