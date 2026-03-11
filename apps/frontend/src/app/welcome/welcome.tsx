import { StatusBar } from "@/components";
import MissionMapCard from "@/components/cards/MissionMapCard";
import Header from "@/components/Header/Header";
import LeftPanel from "@/components/LeftPanel/LeftPanel";
import { EventDiagnosticLog, TelemetryCharts } from "@/components/RightPanel/components";

export default function Welcome() {
  return (
    <div className="w-full px-10 py-5 flex flex-col justify-start items-center h-full min-h-screen flex-wrap">
      <Header />
      <StatusBar />
      <main className="w-full h-full flex flex-col gap-5">
        <div className="grid grid-cols-1 xl:grid-cols-3 gap-5">
          <LeftPanel />
          <MissionMapCard />
          <EventDiagnosticLog />
        </div>
        
        <div className="w-full">
           <TelemetryCharts />
        </div>
      </main>
    </div>
  );
}
