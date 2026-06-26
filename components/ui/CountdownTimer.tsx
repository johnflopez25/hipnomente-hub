"use client";

import { useEffect, useState } from "react";

interface TimeLeft {
  days: number;
  hours: number;
  minutes: number;
  seconds: number;
}

const EVENT_DATE = new Date("2026-06-13T08:00:00-05:00");

function getTimeLeft(): TimeLeft {
  const now = new Date();
  const diff = EVENT_DATE.getTime() - now.getTime();

  if (diff <= 0) {
    return { days: 0, hours: 0, minutes: 0, seconds: 0 };
  }

  const days = Math.floor(diff / (1000 * 60 * 60 * 24));
  const hours = Math.floor((diff % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
  const minutes = Math.floor((diff % (1000 * 60 * 60)) / (1000 * 60));
  const seconds = Math.floor((diff % (1000 * 60)) / 1000);

  return { days, hours, minutes, seconds };
}

interface UnitProps {
  value: number;
  label: string;
}

function Unit({ value, label }: UnitProps) {
  return (
    <div className="flex flex-col items-center gap-1">
      <div className="card-glass glow-border rounded-xl px-3 py-2 min-w-[64px] text-center">
        <span className="text-3xl md:text-4xl font-bold text-white tabular-nums">
          {String(value).padStart(2, "0")}
        </span>
      </div>
      <span className="text-xs uppercase tracking-widest text-slate-400 font-medium">
        {label}
      </span>
    </div>
  );
}

export default function CountdownTimer() {
  const [timeLeft, setTimeLeft] = useState<TimeLeft>({
    days: 0,
    hours: 0,
    minutes: 0,
    seconds: 0,
  });
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
    setTimeLeft(getTimeLeft());

    const interval = setInterval(() => {
      setTimeLeft(getTimeLeft());
    }, 1000);

    return () => clearInterval(interval);
  }, []);

  if (!mounted) return null;

  return (
    <div className="flex items-center gap-3 md:gap-4">
      <Unit value={timeLeft.days} label="Días" />
      <span className="text-sky-400 text-2xl font-bold mb-5">:</span>
      <Unit value={timeLeft.hours} label="Horas" />
      <span className="text-sky-400 text-2xl font-bold mb-5">:</span>
      <Unit value={timeLeft.minutes} label="Min" />
      <span className="text-sky-400 text-2xl font-bold mb-5">:</span>
      <Unit value={timeLeft.seconds} label="Seg" />
    </div>
  );
}
