import { FileText, MoreHorizontal } from "lucide-react";
import {
  Card,
  CardHeader,
  CardTitle,
  CardAction,
  CardContent,
} from "@/components/ui/card";
import { cn } from "@/lib/utils";
import { Severity } from "@prisma/client";
import { useGetFailureLogs } from "./hooks";
import { Virtualizer } from "@/components/Virtualizer";

export function EventDiagnosticLog() {
  const { failureLogs } = useGetFailureLogs();

  return (
    <Card className="h-full max-h-80 w-full">
      <CardHeader>
        <CardTitle>Event & Diagnostic Log</CardTitle>
        <CardAction>
          <MoreHorizontal size={14} />
        </CardAction>
      </CardHeader>
      <CardContent className="flex h-full overflow-y-auto flex-col gap-0 px-0">
        {failureLogs.length === 0 && (
          <div className="flex items-center justify-center h-32 text-slate-500">
            No log entries available.
          </div>
        )}
        {failureLogs && (
          <Virtualizer>
            {failureLogs.map((entry, i) => (
              <div
                key={i}
                className="flex items-center gap-4 px-4 py-3 border-b border-slate-900 last:border-0 hover:bg-slate-900/40 transition-colors"
              >
                {/* Status Indicator Dot */}
                <div
                  className={cn(
                    "h-5 w-5 shrink-0 rounded-full flex items-center justify-center",
                    entry.severity === Severity.CRITICAL &&
                      "bg-red-500 shadow-[0_0_10px_rgba(239,68,68,0.5)]",
                    entry.severity === Severity.WARNING && "bg-yellow-500",
                    entry.severity === Severity.INFO && "bg-green-500",
                  )}
                />

                {/* Text Content */}
                <div className="flex flex-col flex-1 gap-0.5">
                  <div className="flex items-center gap-2 text-[11px] font-mono text-slate-400">
                    <span>
                      {new Date(entry.timestamp).toLocaleString("uk-UA")}
                    </span>
                    <span className="opacity-30">|</span>
                    <span className="font-bold text-slate-200">
                      {entry.description}
                    </span>
                  </div>
                  <span
                    className={cn(
                      "text-[10px] font-black uppercase tracking-wider",
                      entry.severity === Severity.CRITICAL && "text-red-500",
                      entry.severity === Severity.WARNING && "text-yellow-500",
                      entry.severity === Severity.INFO && "text-green-500",
                    )}
                  >
                    {entry.isResolved ? "RESOLVED" : "ACTIVE"}
                  </span>
                </div>

                {/* Action Icon */}
                <div className="text-slate-600 cursor-pointer hover:text-slate-300 transition-colors">
                  <FileText size={16} />
                </div>
              </div>
            ))}
          </Virtualizer>
        )}
      </CardContent>
    </Card>
  );
}
