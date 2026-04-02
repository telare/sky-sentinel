import * as FAILURE_CONSTANTS from "@sky-sentinel/shared/failure-constants.ts";
import { Activity, Wifi, AlertTriangle } from "lucide-react";
import { use } from "react";
import { useTranslation } from "react-i18next";
import { LatestTelemetryContext } from "@/providers/UavDataProviders/LatestTelemetryContext";
import StatusBarItem from "./components/StatusBarItem";
import { useTimeConnected } from "./hooks";

export function StatusBar({ isConnected }: { isConnected: boolean }) {
  const { t } = useTranslation();
  const lastUavData = use(LatestTelemetryContext);
  const { timeConnected } = useTimeConnected(isConnected);

  if (!lastUavData)
    return null;

  const isMasterCaution
    = lastUavData.battRem < FAILURE_CONSTANTS.BATT_CRITICAL_PCT
      || lastUavData.temperature > FAILURE_CONSTANTS.TEMP_CRIT
      || lastUavData.rssi < FAILURE_CONSTANTS.RSSI_CRIT;

  return (
    <header className="flex w-full flex-wrap items-center gap-2 py-2">
      <StatusBarItem
        variant={isConnected ? "success" : "critical"}
        isAlerting={true}
        icon={<Wifi className="size-6 fill-current" />}
        value={
          isConnected
            ? t("statusBar.connectionActive")
            : t("statusBar.connectionInactive")
        }
      />

      {/* 2. Master Caution */}
      {isMasterCaution && (
        <StatusBarItem
          variant="critical"
          isAlerting={true}
          icon={<AlertTriangle className="size-6" />}
          value="MASTER CAUTION"
        />
      )}

      {/* 3. System Heartbeat */}
      <StatusBarItem
        label={t("statusBar.systemHeartbeat")}
        value={`${timeConnected}s`}
        icon={(
          <Activity
            className={`size-6 ${isConnected ? "text-green-500" : "text-red-500"}`}
          />
        )}
      />
    </header>
  );
}
