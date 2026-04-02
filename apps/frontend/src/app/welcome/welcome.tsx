import { StatusBar } from "@/components";
import MissionMapCard from "@/components/cards/MissionMapCard";
import Header from "@/components/Header/Header";
import LeftPanel from "@/components/LeftPanel/LeftPanel";
import {
  EventDiagnosticLog,
  TelemetryCharts,
} from "@/components/RightPanel/components";
import { useSocketConnection } from "@/hooks/useSocketConnection";
import { ChartsHistoryProvider } from "@/providers/UavDataProviders/ChartsHistoryContext/ChartsHistoryProvider";
import { FlightHistoryProvider } from "@/providers/UavDataProviders/FlightHistoryContext";
import { LatestTelemetryProvider } from "@/providers/UavDataProviders/LatestTelemetryContext";

export default function Welcome() {
  const { latestTelemetry, flightHistory, chartsHistory, isConnected }
    = useSocketConnection();

  return (
    <div className="w-full px-10 py-5 flex flex-col justify-start items-center h-full min-h-screen flex-wrap">
      <Header />

      <LatestTelemetryProvider value={latestTelemetry}>
        <StatusBar isConnected={isConnected} />
      </LatestTelemetryProvider>

      <main className="w-full h-full flex flex-col gap-5">
        <div className="grid grid-cols-1 xl:grid-cols-3 gap-5">
          <LatestTelemetryProvider value={latestTelemetry}>
            <LeftPanel />
          </LatestTelemetryProvider>

          <FlightHistoryProvider value={flightHistory}>
            <MissionMapCard />
          </FlightHistoryProvider>

          <EventDiagnosticLog />
        </div>

        <div className="w-full">
          <ChartsHistoryProvider value={chartsHistory}>
            <TelemetryCharts />
          </ChartsHistoryProvider>
        </div>
      </main>
    </div>
  );
}
