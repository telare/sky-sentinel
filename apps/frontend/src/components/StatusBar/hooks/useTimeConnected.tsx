import { useEffect, useState } from "react";

export function useTimeConnected(isConnected: boolean) {
  const [timeConnected, setTimeConnected] = useState(0);
  useEffect(() => {
    const interval = setInterval(() => {
      if (isConnected) {
        setTimeConnected(prev => prev + 1);
      }
      else {
        setTimeConnected(0);
      }
    }, 1000);

    return () => clearInterval(interval);
  }, [isConnected]);
  return { timeConnected };
}
