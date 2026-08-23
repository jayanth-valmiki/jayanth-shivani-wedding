import { motion } from "framer-motion";
import { MapPin } from "lucide-react";
import { venue } from "../data";

export default function Venue() {
  return (
    <section id="venue" className="section-pad bg-cream-dark">
      <div className="max-w-4xl mx-auto">
        <div className="text-center mb-10">
          <p className="text-[10px] uppercase tracking-[0.4em] text-gold mb-3">
            Where we celebrate
          </p>
          <h2 className="font-serif text-4xl sm:text-5xl text-maroon">Venue</h2>
          <div className="ornament-line w-20 mx-auto mt-5" />
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="rounded-2xl overflow-hidden border border-gold/30 bg-white shadow-sm"
        >
          <div className="aspect-[16/9] sm:aspect-[21/9] bg-maroon/5">
            <iframe
              title="Wedding venue map"
              src={venue.embedUrl}
              className="w-full h-full border-0"
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              allowFullScreen
            />
          </div>
          <div className="p-6 sm:p-8 flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4">
            <div>
              <h3 className="font-serif text-2xl text-maroon">{venue.name}</h3>
              <p className="mt-1 text-sm text-ink/70 flex items-center gap-1.5">
                <MapPin className="w-3.5 h-3.5 text-gold" />
                {venue.address}
              </p>
            </div>
            <a
              href={`https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(
                venue.name + " " + venue.address
              )}`}
              target="_blank"
              rel="noreferrer"
              className="inline-flex items-center justify-center gap-2 px-5 py-2.5 rounded-full bg-maroon text-cream text-xs uppercase tracking-wider hover:bg-maroon-soft transition-colors shrink-0"
            >
              Open in Maps
            </a>
          </div>
        </motion.div>

        <p className="text-center mt-6 text-sm text-ink/60">
          Tap the map for directions — we can’t wait to see you there.
        </p>
      </div>
    </section>
  );
}
