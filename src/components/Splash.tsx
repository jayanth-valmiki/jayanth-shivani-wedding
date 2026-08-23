import { useEffect, useRef } from "react";
import { motion } from "framer-motion";
import { couple } from "../data";


type Props = {
  onOpen: () => void;
};

export default function Splash({ onOpen }: Props) {
  const r = 90;
  const c = 2 * Math.PI * r;

  const audioRef = useRef<HTMLAudioElement | null>(null);

  // Try to start splash music when the page loads.
  // Some browsers may block autoplay until the user interacts.
  useEffect(() => {
    const audio = audioRef.current;

    if (!audio) return;

    audio.volume = 0.5;

    audio.play().catch(() => {
      console.log("Splash music waiting for user interaction.");
    });
  }, []);

  const handleOpen = () => {
    const audio = audioRef.current;

    // Start splash music if browser blocked autoplay.
    if (audio) {
      audio.volume = 0.5;

      audio.play().catch(() => {
        console.log("Could not start splash music.");
      });
    }

    onOpen();
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center overflow-hidden bg-maroon-deep text-cream">

      {/* Splash music */}
      <audio
        ref={audioRef}
        src="/opening.mp3"
        loop
        preload="auto"
      />

      <div
        className="pointer-events-none absolute inset-0"
        style={{
          background:
            "radial-gradient(ellipse 70% 55% at 50% 45%, rgba(201,162,39,0.18), transparent 70%)",
        }}
      />

      <div className="relative z-10 flex flex-col items-center px-4">

        <div
          className="relative w-[min(88vw,340px)] h-[min(88vw,340px)] sm:w-[380px] sm:h-[380px]"
          style={{ borderRadius: "50%" }}
        >

          {/* Gold ring */}
          <svg
            className="absolute inset-0 w-full h-full -rotate-90 z-30 pointer-events-none"
            viewBox="0 0 200 200"
          >
            <circle
              cx="100"
              cy="100"
              r={r}
              fill="none"
              stroke="rgba(201,162,39,0.25)"
              strokeWidth="1.2"
            />

            <motion.circle
              cx="100"
              cy="100"
              r={r}
              fill="none"
              stroke="rgba(232,212,139,0.95)"
              strokeWidth="1.6"
              strokeLinecap="round"
              strokeDasharray={c}
              initial={{ strokeDashoffset: c }}
              animate={{ strokeDashoffset: 0 }}
              transition={{
                duration: 2.2,
                ease: "easeInOut",
                delay: 0.2,
              }}
            />
          </svg>

          {/* Circular disc */}
          <div
            className="absolute inset-[6%] overflow-hidden"
            style={{
              borderRadius: "50%",
              clipPath: "circle(50% at 50% 50%)",
              background: "#2e0c14",
            }}
          >

            {/* Ganesha */}
            <motion.img
              src="/ganesha.png"
              alt=""
              className="absolute inset-0 w-full h-full object-cover object-center pointer-events-none"
              style={{
                opacity: 0.2,
                borderRadius: "50%",
              }}
              animate={{
                y: [0, -4, 0],
              }}
              transition={{
                duration: 5,
                repeat: Infinity,
                ease: "easeInOut",
              }}
            />

            {/* Dark veil */}
            <div
              className="absolute inset-0 pointer-events-none"
              style={{
                background:
                  "radial-gradient(circle at 50% 45%, rgba(20,8,12,0.35) 0%, rgba(20,8,12,0.65) 100%)",
              }}
            />

            {/* TEXT */}
            <div
              className="absolute inset-0 z-20 flex flex-col items-center justify-center text-center px-5 sm:px-7"
              style={{
                textShadow: "0 2px 12px rgba(0,0,0,0.8)",
              }}
            >

              <p className="text-[9px] sm:text-[10px] uppercase tracking-[0.35em] text-gold-soft mb-2">
                ॐ श्री गणेशाय नमः
              </p>

              <p className="text-[8px] uppercase tracking-[0.28em] text-white/70 mb-3">
                With divine blessings, the Boya family invites you
              </p>

              <h1 className="font-script text-3xl sm:text-4xl leading-none text-white">
                {couple.bride}
              </h1>

              <p className="my-1.5 text-gold-soft text-lg">
                ✦
              </p>

              <h1 className="font-script text-3xl sm:text-4xl leading-none text-white">
                {couple.groom.split(" ")[0]}
              </h1>

              <div className="ornament-line w-12 mx-auto my-3 opacity-80" />

              <p className="text-[11px] sm:text-xs text-white/90">
                {couple.displayDate}
              </p>

              <p className="text-[9px] uppercase tracking-wider text-gold-soft mt-1">
                9:00 AM
              </p>

            </div>
          </div>
        </div>

        {/* Open Invitation */}
        <button
          type="button"
          onClick={handleOpen}
          className="mt-10 px-9 py-4 rounded-full border-2 border-gold-soft/80 bg-gold/15 text-cream text-[11px] font-extrabold uppercase tracking-[0.3em] shadow-[0_0_30px_rgba(232,212,139,0.18)] hover:bg-gold/25 transition-all"
        >
          Open Invitation →
        </button>

        <p className="mt-4 text-[10px] font-bold uppercase tracking-[0.22em] text-gold-soft/80">
          Tap the button above to open
        </p>
        <p className="mt-4 text-[10px] text-cream/40">
          Venue: Sri Krishnaveni Reddy Kalyana Mandapam, Srisailam
        </p>

      </div>
    </div>
  );
}