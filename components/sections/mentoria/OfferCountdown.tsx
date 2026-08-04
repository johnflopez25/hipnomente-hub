"use client";

import { useEffect, useState } from "react";
import CountdownTimer from "@/components/ui/CountdownTimer";
import { OFFER_DEADLINE } from "./config";

/**
 * Envuelve el contador compartido con la fecha límite de la oferta y — a
 * diferencia de <CountdownTimer /> suelto — desaparece cuando la fecha ya pasó,
 * en lugar de quedarse mostrando 00:00:00:00 y matar la credibilidad de la
 * página si nadie actualiza OFFER_DEADLINE a tiempo.
 */
export default function OfferCountdown({
  label = "El precio de lanzamiento termina en",
  accentClassName = "text-violet-300",
  className = "",
}: {
  label?: string;
  accentClassName?: string;
  className?: string;
}) {
  const [expired, setExpired] = useState(false);

  useEffect(() => {
    const check = () => setExpired(OFFER_DEADLINE.getTime() - Date.now() <= 0);
    check();
    const interval = setInterval(check, 1000);
    return () => clearInterval(interval);
  }, []);

  if (expired) return null;

  return (
    <div className={`flex flex-col items-center gap-3 ${className}`}>
      <p className="text-xs uppercase tracking-widest text-[#8fe6da]/80 font-semibold text-center">
        {label}
      </p>
      <CountdownTimer
        targetDate={OFFER_DEADLINE}
        accentClassName={accentClassName}
      />
    </div>
  );
}
