"use client";

import { useEffect, useRef, useState } from "react";
import { usePathname } from "next/navigation";

/**
 * Thin top progress line that flashes on client-side route changes so
 * navigation feels responsive. Purely presentational (aria-hidden) and
 * skips the initial page load — no hydration impact.
 */
export function RouteProgress() {
  const pathname = usePathname();
  const [running, setRunning] = useState(false);
  const isFirstRender = useRef(true);

  useEffect(() => {
    if (isFirstRender.current) {
      isFirstRender.current = false;
      return;
    }
    setRunning(true);
    const timer = setTimeout(() => setRunning(false), 650);
    return () => clearTimeout(timer);
  }, [pathname]);

  return (
    <div
      aria-hidden="true"
      className={`route-progress${running ? " route-progress--run" : ""}`}
    />
  );
}
