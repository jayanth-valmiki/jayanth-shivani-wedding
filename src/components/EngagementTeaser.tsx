import { motion } from "framer-motion";
import { ArrowRight, Camera } from "lucide-react";

export default function EngagementTeaser() {
  const galleryUrl = `${import.meta.env.BASE_URL}engagement-gallery.html`;

  return (
    <section id="gallery" className="section-pad relative overflow-hidden bg-cream-dark">
      <div className="mx-auto max-w-4xl">
        <div className="text-center mb-10">
          <p className="mb-3 text-[10px] font-bold uppercase tracking-[0.4em] text-gold">A glimpse before forever</p>
          <h2 className="font-serif text-4xl sm:text-5xl text-maroon">Engagement Gallery</h2>
          <div className="ornament-line mx-auto mt-5 w-20" />
        </div>

        <motion.a
          href={galleryUrl}
          whileHover={{ y: -4 }}
          whileTap={{ scale: 0.99 }}
          className="group relative block overflow-hidden rounded-[2rem] border border-gold/35 bg-maroon-deep p-2 shadow-xl"
        >
          <div className="relative grid min-h-[280px] grid-cols-3 gap-2 overflow-hidden rounded-[1.5rem]">
            {[
              "/our-story-1.jpg",
              "/our-story-2.jpg",
              "/our-story-3.jpg",
            ].map((src, index) => (
              <div key={src} className="relative overflow-hidden">
                <img src={src} alt={`Engagement memory ${index + 1}`} className="h-full w-full object-cover transition duration-700 group-hover:scale-105" />
              </div>
            ))}
            <div className="absolute inset-2 flex items-end justify-center rounded-[1.5rem] bg-gradient-to-t from-maroon-deep/90 via-maroon-deep/20 to-transparent p-6 text-center">
              <div>
                <Camera className="mx-auto mb-3 h-6 w-6 text-gold-soft" />
                <p className="font-serif text-3xl text-cream">Explore Our Engagement</p>
                <span className="mt-3 inline-flex items-center gap-2 rounded-full border-2 border-gold-soft/70 bg-gold/15 px-5 py-2 text-[10px] font-extrabold uppercase tracking-[0.25em] text-gold-soft">
                  TAP TO VIEW GALLERY <ArrowRight className="h-3.5 w-3.5" />
                </span>
              </div>
            </div>
          </div>
        </motion.a>
        <p className="mt-4 text-center text-xs text-ink/55">Tap the gallery card to open the full engagement photo page.</p>
      </div>
    </section>
  );
}
