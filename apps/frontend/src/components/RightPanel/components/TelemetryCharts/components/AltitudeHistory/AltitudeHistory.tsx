import { TelemetryMiniChart } from "@/components/TelemetryMiniChart";
import { UavDataContext } from "@/providers";
import { useContext } from "react";

export default function AltitudeHistory() {
  const uavData = useContext(UavDataContext);

  const data = uavData?.data.map((entry) => ({
    x: new Date(entry.timestamp).getTime(),
    y: entry.altitude,
  }));

  return <TelemetryMiniChart title="Altitude History (m)" data={data} />;
}
