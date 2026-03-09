import { TelemetryMiniChart } from "@/components/TelemetryMiniChart";
import { UavDataContext } from "@/providers";
import { useContext } from "react";
import { useTranslation } from "react-i18next";

export default function AltitudeHistory() {
  const { t } = useTranslation();
  const uavData = useContext(UavDataContext);

  const data = uavData?.data.map((entry) => ({
    x: new Date(entry.timestamp).getTime(),
    y: entry.altitude,
  }));

  return (
    <TelemetryMiniChart title={t("telemetryCharts.altitudeHistory")} data={data} />
  );
}
