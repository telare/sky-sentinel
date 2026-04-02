import type { UAVdata } from "@prisma/client";
import { ChartsHistoryContext } from "./charts-history.context";

export function ChartsHistoryProvider({
  value,
  children,
}: {
  value: UAVdata[];
  children: React.ReactNode;
}) {
  return <ChartsHistoryContext value={value}>{children}</ChartsHistoryContext>;
}
