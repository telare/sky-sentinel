import { TelemetryMiniChart } from "@/components/TelemetryMiniChart";
import { UavDataContext } from "@/providers";
import { useContext } from "react";
import { useTranslation } from "react-i18next";

export default function BatteryLevelHistory() {
  const { t } = useTranslation();
  const uavData = useContext(UavDataContext);
  const data = uavData?.data.map((entry) => ({
    x: new Date(entry.timestamp).getTime(),
    y: entry.battery_level,
  }));
  return (
    <TelemetryMiniChart
      title={t("telemetryCharts.batteryLevelHistory")}
      data={data}
    />
  );
}
