import { useMemo } from "react";

const PETALS = ["🌸", "💮", "🏵️", "🌼", "🌺"];

export default function FallingFlowers() {
  const petals = useMemo(() => {
    return Array.from({ length: 28 }, (_, i) => ({
      id: i,
      left: `${Math.random() * 100}%`,
      delay: `${Math.random() * 8}s`,
      duration: `${7 + Math.random() * 8}s`,
      size: `${14 + Math.random() * 16}px`,
      emoji: PETALS[i % PETALS.length],
      sway: `${20 + Math.random() * 40}px`,
    }));
  }, []);

  return (
    <div className="pointer-events-none absolute inset-0 overflow-hidden z-[5]" aria-hidden>
      {petals.map((p) => (
        <span
          key={p.id}
          className="petal absolute top-0"
          style={{
            left: p.left,
            fontSize: p.size,
            animationDelay: p.delay,
            animationDuration: p.duration,
            ["--sway" as string]: p.sway,
          }}
        >
          {p.emoji}
        </span>
      ))}
    </div>
  );
}