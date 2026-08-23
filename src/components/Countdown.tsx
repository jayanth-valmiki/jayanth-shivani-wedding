import { useEffect, useState } from "react";
import { couple } from "../data";

type TimeLeft = { days: number; hours: number; minutes: number; seconds: number };

function calc(): TimeLeft {
  const diff = couple.weddingDate.getTime() - Date.now();
  if (diff <= 0) return { days: 0, hours: 0, minutes: 0, seconds: 0 };
  return {
    days: Math.floor(diff / 86400000),
    hours: Math.floor((diff % 86400000) / 3600000),
    minutes: Math.floor((diff % 3600000) / 60000),
    seconds: Math.floor((diff % 60000) / 1000),
  };
}

export default function Countdown() {
  const [t, setT] = useState<TimeLeft>(calc);

  useEffect(() => {
    const id = setInterval(() => setT(calc()), 1000);
    return () => clearInterval(id);
  }, []);

  const items = [
    { label: "Days", value: t.days },
    { label: "Hours", value: t.hours },
    { label: "Minutes", value: t.minutes },
    { label: "Seconds", value: t.seconds },
  ];

  if (t.days === 0 && t.hours === 0 && t.minutes === 0 && t.seconds === 0) {
    return (
      <div className="mx-auto max-w-sm rounded-2xl border border-gold/40 bg-black/40 px-7 py-5 text-center backdrop-blur-md">
        <p className="text-[10px] uppercase tracking-[0.35em] text-gold-soft">Today is our forever</p>
        <p className="mt-2 font-script text-4xl text-white">The Wedding Day ✦</p>
      </div>
    );
  }

  return (
    <div className="flex justify-center gap-3 sm:gap-5 flex-wrap">
      {items.map((item) => (
        <div
          key={item.label}
          className="min-w-[70px] sm:min-w-[88px] rounded-xl border border-white/30 bg-black/45 backdrop-blur-md px-3 py-3 text-center shadow-lg"
        >
          <div className="font-serif text-2xl sm:text-3xl text-gold-soft tabular-nums">
            {String(item.value).padStart(2, "0")}
          </div>
          <div className="mt-1 text-[10px] uppercase tracking-[0.25em] text-cream/70">
            {item.label}
          </div>
        </div>
      ))}
    </div>
  );
}
