import { motion } from "framer-motion";
import { couple } from "../data";
import Countdown from "./Countdown";
import FallingFlowers from "./FallingFlowers";

export default function Hero() {
  return (
    <section className="relative min-h-[100svh] h-[100svh] flex flex-col items-center justify-center overflow-hidden text-cream">
      {/* Background photo */}
      <div
        className="absolute inset-0 bg-cover bg-no-repeat"
        style={{
          backgroundImage: "url('/hero-bg.jpg')",
          backgroundPosition: "center 15%",
        }}
      />

      {/* Dark overlay — makes text readable */}
      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          background:
            "linear-gradient(to bottom, rgba(20,8,12,0.55) 0%, rgba(20,8,12,0.45) 40%, rgba(20,8,12,0.75) 100%)",
        }}
      />

<FallingFlowers />

      <div className="relative z-10 px-6 text-center max-w-2xl mx-auto">
        <motion.p
          initial={{ opacity: 0, y: 12 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-xs uppercase tracking-[0.45em] text-gold-soft mb-6 drop-shadow-md"
        >
          We are getting married
        </motion.p>

        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="font-script text-5xl sm:text-6xl md:text-7xl leading-none text-white"
          style={{ textShadow: "0 2px 20px rgba(0,0,0,0.6)" }}
        >
          {couple.bride}
          <span className="mx-3 text-gold-soft text-3xl sm:text-4xl align-middle">✦</span>
          {couple.groom.split(" ")[0]}
        </motion.h1>

        <div className="ornament-line w-28 mx-auto my-7 opacity-80" />

        <p className="font-serif text-lg italic text-white/90 mb-2 drop-shadow-md">
          {couple.longDate}
        </p>
        <p className="text-xs uppercase tracking-[0.35em] text-gold-soft mb-10 drop-shadow-md">
          {couple.displayDate}
        </p>

        <Countdown />

        <div className="mt-10 flex flex-col items-center gap-3">
          <a
            href="#cards"
            className="inline-flex items-center rounded-full border-2 border-gold-soft/80 bg-gold/15 px-6 py-3 text-[10px] font-extrabold uppercase tracking-[0.28em] text-gold-soft shadow-[0_0_28px_rgba(232,212,139,0.18)] transition hover:bg-gold/25"
          >
            TAP TO EXPLORE INVITATION ↓
          </a>
          <p className="text-[10px] font-bold uppercase tracking-[0.25em] text-white/65">
            Scroll or use the menu above to explore
          </p>
        </div>
      </div>
    </section>
  );
}