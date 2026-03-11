import { Activity, Wifi } from "lucide-react";
import StatusBarItem from "./components/StatusBarItem";
import { useTimeConnected } from "./hooks";
import { useTranslation } from "react-i18next";

export function StatusBar({ isConnected }: { isConnected: boolean }) {
  const { t } = useTranslation();
  const { timeConnected } = useTimeConnected(isConnected);

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

      <StatusBarItem
        label={t("statusBar.systemHeartbeat")}
        value={`${timeConnected}s`}
        icon={
          <Activity
            className={`size-6 ${isConnected ? "text-green-500" : "text-red-500"}`}
          />
        }
      />
    </header>
  );
}
