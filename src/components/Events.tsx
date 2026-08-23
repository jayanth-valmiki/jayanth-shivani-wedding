import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { MapPin, Clock, X } from "lucide-react";
import ScratchReveal from "./ScratchReveal";
import { events, type EventItem } from "../data";

function EventCard({
  event,
  onOpen,
}: {
  event: EventItem;
  onOpen: (e: EventItem) => void;
}) {
  return (
    <motion.button
      type="button"
      onClick={() => onOpen(event)}
      whileHover={{ y: -4 }}
      className="group relative w-full text-left rounded-2xl overflow-hidden border border-gold/35 bg-maroon-deep shadow-xl hover:shadow-2xl transition-shadow"
    >
      <div
        className="absolute inset-0 bg-cover bg-center opacity-95 transition-transform duration-700 group-hover:scale-105"
        style={{
          backgroundImage: "url('/events-bg.jpg')",
          backgroundPosition: event.key === "haldi" ? "left center" : event.key === "wedding" ? "center center" : "right center",
        }}
      />
      <div className="absolute inset-0 bg-gradient-to-b from-[#2e0c14]/25 via-[#2e0c14]/60 to-[#2e0c14]/95" />
      <div
        className="relative h-2 w-full"
        style={{ background: `linear-gradient(90deg, ${event.accent}, #e8d48b, #c9a227)` }}
      />
      <div className="relative p-6 sm:p-7">
        <p className="text-[10px] font-bold uppercase tracking-[0.35em] text-gold-soft mb-2">
          Ceremony · Family Celebration
        </p>
        <h3 className="font-serif text-3xl text-cream mb-3 drop-shadow-md">{event.name}</h3>
        <div className="space-y-1.5 text-sm text-cream/90">
          <p className="flex items-center gap-2">
            <Clock className="w-3.5 h-3.5 text-gold" />
            {event.date} · {event.time}
          </p>
          <p className="flex items-center gap-2">
            <MapPin className="w-3.5 h-3.5 text-gold" />
            {event.venue}
          </p>
        </div>
        <p className="mt-4 font-serif italic text-gold-soft/95 text-sm">
          “{event.quote}”
        </p>
        <p className="mt-5 inline-block rounded-full border-2 border-gold-soft/80 bg-maroon-deep/75 px-4 py-2 text-[10px] font-extrabold uppercase tracking-[0.22em] text-gold-soft group-hover:bg-maroon/90 transition-colors shadow-lg">
          TAP FOR DETAILS →
        </p>
      </div>
    </motion.button>
  );
}

function EventModal({
  event,
  onClose,
}: {
  event: EventItem;
  onClose: () => void;
}) {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      className="fixed inset-0 z-50 flex items-center justify-center p-4"
      style={{ background: "rgba(30, 10, 15, 0.75)", backdropFilter: "blur(8px)" }}
      onClick={onClose}
    >
      <motion.div
        initial={{ scale: 0.9, opacity: 0, y: 16 }}
        animate={{ scale: 1, opacity: 1, y: 0 }}
        exit={{ scale: 0.95, opacity: 0 }}
        transition={{ type: "spring", damping: 24, stiffness: 280 }}
        onClick={(e) => e.stopPropagation()}
        className="relative w-full max-w-sm rounded-2xl bg-cream border border-gold/40 shadow-2xl overflow-hidden"
      >
        <button
          onClick={onClose}
          className="absolute top-3 right-3 z-10 w-9 h-9 rounded-full bg-cream border border-gold/40 flex items-center justify-center text-maroon shadow"
          aria-label="Close"
        >
          <X className="w-4 h-4" />
        </button>
        <div
          className="relative h-32 flex items-end px-6 pb-4 bg-cover bg-center overflow-hidden"
          style={{ backgroundImage: "url('/events-bg.jpg')" }}
        >
          <div className="absolute inset-0 bg-gradient-to-r from-[#2e0c14]/90 via-[#2e0c14]/55 to-[#2e0c14]/85" />
          <div className="relative z-10">
          <h3 className="font-script text-4xl text-cream">{event.name}</h3>
          </div>
        </div>
        <div className="relative min-h-[280px] overflow-hidden rounded-b-2xl bg-cream">
          <div className="relative z-10 p-6 space-y-4">
            <p className="font-serif italic text-maroon/80">“{event.quote}”</p>
            <div className="space-y-2 text-sm">
              <p>
                <span className="text-[10px] uppercase tracking-widest text-gold block mb-0.5">
                  Date & Time
                </span>
                {event.date}
                <br />
                {event.time}
              </p>
              <p>
                <span className="text-[10px] uppercase tracking-widest text-gold block mb-0.5">
                  Venue
                </span>
                {event.venue}
              </p>
            </div>
            <a
              href={event.mapUrl}
              target="_blank"
              rel="noreferrer"
              className="inline-flex items-center gap-2 mt-2 px-4 py-2.5 rounded-full bg-maroon text-cream text-xs uppercase tracking-wider hover:bg-maroon-soft transition-colors"
            >
              <MapPin className="w-3.5 h-3.5" />
              Get directions
            </a>
          </div>
          <ScratchReveal />
        </div>
      </motion.div>
    </motion.div>
  );
}

export default function Events() {
  const [active, setActive] = useState<EventItem | null>(null);

  return (
  <section
    id="events"
    className="section-pad relative overflow-hidden"
    style={{
      backgroundImage: "url('/events-bg.jpg')",
      backgroundSize: "cover",
      backgroundPosition: "center",
    }}
  >
    <div className="absolute inset-0 bg-cream/85 pointer-events-none" />
    <div className="relative z-10 max-w-5xl mx-auto">
      <div className="max-w-5xl mx-auto">
        <div className="text-center mb-12">
          <p className="text-[10px] uppercase tracking-[0.4em] text-gold mb-3">
            The celebrations
          </p>
          <h2 className="font-serif text-4xl sm:text-5xl text-maroon">
            Events
          </h2>
          <div className="ornament-line w-20 mx-auto mt-5" />
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-5 max-w-5xl mx-auto justify-items-center">
          {events.map((ev, i) => (
            <motion.div
              key={ev.key}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-40px" }}
              transition={{ delay: i * 0.1 }}
            >
              <EventCard event={ev} onOpen={setActive} />
            </motion.div>
          ))}
        </div>
      </div>
      <AnimatePresence>
        {active && <EventModal event={active} onClose={() => setActive(null)} />}
      </AnimatePresence>
    </div>
    </section>
  );
}
