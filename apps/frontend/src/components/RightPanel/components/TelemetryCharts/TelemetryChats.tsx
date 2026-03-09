import { Card, CardTitle } from "@/components/ui";
import AltitudeHistory from "./components/AltitudeHistory/AltitudeHistory";
import BatteryLevelHistory from "./components/BatteryLevelHistory/BatteryLevelHistory";
import { useTranslation } from "react-i18next";

export default function TelemetryChats() {
  const { t } = useTranslation();

  return (
    <Card className="w-full p-4">
      <CardTitle>{t("telemetryCharts.title")}</CardTitle>
      <BatteryLevelHistory />
      <AltitudeHistory />
    </Card>
  );
}
