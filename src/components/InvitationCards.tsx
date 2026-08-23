import { useEffect, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { BookOpen, X } from "lucide-react";

type Side = "bride" | "groom";

const cardCopy = {
  bride: {
    eyebrow: "From the Bride's Side",
    name: "Shivani",
    image: "/wedding-cards/bride-card.jpg",
    alt: "Shivani's complete wedding invitation card",
  },
  groom: {
    eyebrow: "From the Groom's Side",
    name: "Jayanth",
    image: "/wedding-cards/groom-card.jpg",
    alt: "Jayanth's complete wedding invitation card",
  },
} as const;

function WeddingCard({ side, onOpen }: { side: Side; onOpen: (side: Side) => void }) {
  const copy = cardCopy[side];

  return (
    <motion.button
      type="button"
      onClick={() => onOpen(side)}
      whileHover={{ y: -6 }}
      whileTap={{ scale: 0.985 }}
      className="group relative min-h-[390px] w-full overflow-hidden rounded-[2rem] border border-gold/45 bg-[#2a0711] text-left shadow-[0_20px_60px_rgba(0,0,0,.3)] focus:outline-none focus-visible:ring-2 focus-visible:ring-gold-soft"
      aria-label={`Open ${copy.name}'s wedding card`}
    >
      {/* Closed card only — the actual invitation is deliberately hidden until TAP TO OPEN. */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_18%,rgba(218,183,72,.16),transparent_28%),radial-gradient(circle_at_20%_90%,rgba(132,42,58,.28),transparent_38%),radial-gradient(circle_at_85%_85%,rgba(218,183,72,.10),transparent_30%)]" />
      <div className="absolute inset-4 rounded-[1.5rem] border border-gold/25" />

      <div className="relative flex h-full min-h-[390px] flex-col items-center justify-center px-8 py-12 text-center">
        <div className="mb-7 flex h-16 w-16 items-center justify-center rounded-full border border-gold/45 bg-maroon-deep/80 shadow-[0_8px_30px_rgba(0,0,0,.22)]">
          <BookOpen className="h-7 w-7 text-gold-soft" strokeWidth={1.4} />
        </div>

        <p className="text-[9px] font-extrabold uppercase tracking-[0.34em] text-gold-soft">{copy.eyebrow}</p>
        <p className="mt-5 font-script text-6xl leading-none text-cream sm:text-7xl">{copy.name}</p>
        <div className="ornament-line mx-auto my-6 w-24 opacity-70" />
        <p className="font-serif text-xl text-cream/90">Wedding Invitation</p>
        <p className="mt-2 text-xs tracking-wide text-cream/55">27 August 2026 · 09:30 AM</p>

        <span className="mt-9 inline-flex items-center gap-2 rounded-full border border-gold-soft bg-[#3b111b] px-6 py-3 text-[10px] font-extrabold uppercase tracking-[0.2em] text-gold-soft shadow-lg transition group-hover:bg-gold-soft group-hover:text-maroon-deep">
          <BookOpen className="h-3.5 w-3.5" /> Tap to Open Full Card
        </span>

        <p className="mt-5 text-[9px] uppercase tracking-[0.18em] text-cream/35">The complete original card opens after tapping</p>
      </div>
    </motion.button>
  );
}

function CardModal({ side, onClose }: { side: Side; onClose: () => void }) {
  const copy = cardCopy[side];

  useEffect(() => {
    const previous = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    return () => {
      document.body.style.overflow = previous;
    };
  }, []);

  return (
    <motion.div
      className="fixed inset-0 z-[100] flex items-center justify-center bg-black/90 p-2 sm:p-5"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      onClick={onClose}
    >
      <motion.div
        className="relative flex h-full max-h-[98vh] w-full max-w-5xl flex-col overflow-hidden rounded-xl border border-gold/45 bg-black shadow-[0_30px_100px_rgba(0,0,0,.65)]"
        initial={{ opacity: 0, scale: 0.96, y: 12 }}
        animate={{ opacity: 1, scale: 1, y: 0 }}
        exit={{ opacity: 0, scale: 0.97 }}
        transition={{ duration: 0.2 }}
        onClick={(e) => e.stopPropagation()}
      >
        <div className="absolute left-3 top-3 z-20 rounded-full bg-black/65 px-3 py-2 text-[9px] font-bold uppercase tracking-[0.22em] text-gold-soft backdrop-blur-sm sm:left-5 sm:top-5">
          {copy.eyebrow}
        </div>

        <button
          type="button"
          onClick={onClose}
          className="absolute right-3 top-3 z-20 flex h-10 w-10 items-center justify-center rounded-full border border-gold/40 bg-cream text-maroon-deep shadow-xl transition hover:scale-105 sm:right-5 sm:top-5"
          aria-label="Close full wedding card"
        >
          <X className="h-5 w-5" />
        </button>

        {/* Only the complete original invitation is revealed here. */}
        <div className="min-h-0 flex-1 overflow-auto bg-[#0b0b0b] p-1 sm:p-3">
          <img
            src={copy.image}
            alt={copy.alt}
            className="mx-auto block h-auto w-auto max-w-full select-none object-contain"
          />
        </div>
      </motion.div>
    </motion.div>
  );
}

export default function InvitationCards() {
  const [active, setActive] = useState<Side | null>(null);

  return (
    <section id="cards" className="section-pad relative overflow-hidden bg-maroon-deep text-cream">
      <div className="pointer-events-none absolute inset-0 opacity-30 bg-[radial-gradient(circle_at_10%_20%,#c9a227,transparent_30%),radial-gradient(circle_at_90%_80%,#6b2433,transparent_35%)]" />
      <div className="relative z-10 mx-auto max-w-6xl">
        <div className="mb-10 text-center sm:mb-12">
          <p className="mb-3 text-[10px] font-bold uppercase tracking-[0.4em] text-gold-soft">Two families · One celebration</p>
          <h2 className="font-serif text-4xl sm:text-5xl">Wedding Cards</h2>
          <div className="ornament-line mx-auto mt-5 w-20 opacity-70" />
          <p className="mx-auto mt-5 max-w-xl text-sm leading-relaxed text-cream/65">
            The cards are kept hidden until you tap. Open either one to reveal the complete original invitation.
          </p>
        </div>

        <div className="grid gap-7 md:grid-cols-2">
          <WeddingCard side="bride" onOpen={setActive} />
          <WeddingCard side="groom" onOpen={setActive} />
        </div>
      </div>

      <AnimatePresence>{active && <CardModal side={active} onClose={() => setActive(null)} />}</AnimatePresence>
    </section>
  );
}
