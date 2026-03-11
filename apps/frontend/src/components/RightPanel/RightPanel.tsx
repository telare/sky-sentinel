import { EventDiagnosticLog } from "./components";

export default function RightPanel() {
  return (
    <aside className="h-full w-full flex flex-col justify-center items-center gap-y-4">
      <EventDiagnosticLog />
    </aside>
  );
}
