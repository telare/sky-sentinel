import { use } from "react";
import { useTranslation } from "react-i18next";
import { TelemetryMiniChart } from "@/components/TelemetryMiniChart";
import { ChartsHistoryContext } from "@/providers/UavDataProviders/ChartsHistoryContext";

export default function BatteryLevelHistory() {
  const { t } = useTranslation();
  const chartsHistory = use(ChartsHistoryContext);
  const data = chartsHistory.map(entry => ({
    x: new Date(entry.timestamp).getTime(),
    y: entry.battRem,
  }));
  return (
    <TelemetryMiniChart
      title={t("telemetryCharts.batteryLevelHistory")}
      data={data}
    />
  );
}
