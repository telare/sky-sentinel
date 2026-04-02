import type { FlightPathPoint } from "./flight-history.context";
import {
  FlightHistoryContext,

} from "./flight-history.context";

export function FlightHistoryProvider({
  value,
  children,
}: {
  value: FlightPathPoint[];
  children: React.ReactNode;
}) {
  return <FlightHistoryContext value={value}>{children}</FlightHistoryContext>;
}
