import { io } from "socket.io-client";
import { useEffect, useState } from "react";
import type { UAVdata } from "@sky-sentinel/typescript/types";

export const useSocketConnection = () => {
  const URL =
    process.env.NODE_ENV === "production" ? undefined : "http://localhost:3003";

  const socket = io(URL);
  const [isConnected, setIsConnected] = useState<boolean>(socket.connected);
  const [telemetryEvents, setTelemetryEvents] = useState<UAVdata[]>([]);

  useEffect(() => {
    function onConnect() {
      setIsConnected(true);
    }

    function onDisconnect() {
      setIsConnected(false);
    }

    function onTelemetryEvent(value: UAVdata) {
      setTelemetryEvents((previous) => [...previous, value]);
    }

    socket.on("connect", onConnect);
    socket.on("disconnect", onDisconnect);
    socket.on("receive_ui_data", onTelemetryEvent);

    return () => {
      socket.off("connect", onConnect);
      socket.off("disconnect", onDisconnect);
      socket.off("receive_ui_data", onTelemetryEvent);
    };
  }, []);

  return { isConnected, telemetryEvents };
};
