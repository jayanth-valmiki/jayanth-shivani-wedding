import { Heart, MessageCircle, Sparkles } from "lucide-react";
import { couple } from "../data";

export default function Blessings() {
  const message = `Sending our blessings to ${couple.fullNames}! Wishing you both a lifetime of love, happiness and togetherness. ❤️`;
  return (
    <section className="relative overflow-hidden bg-maroon-deep text-cream">
      <div
        className="absolute inset-0 bg-cover bg-center"
        style={{ backgroundImage: "url('/events-bg.jpg')" }}
      />
      <div className="absolute inset-0 bg-gradient-to-b from-[#2e0c14]/80 via-[#2e0c14]/70 to-[#2e0c14]/95" />
      <div className="relative section-pad">
        <div className="mx-auto max-w-4xl text-center">
          <Sparkles className="mx-auto h-6 w-6 text-gold-soft" />
          <p className="mt-4 text-[10px] uppercase tracking-[0.4em] text-gold-soft">A final blessing for our forever</p>
          <h2 className="mt-3 font-serif text-4xl sm:text-5xl">Send Your Blessings</h2>
          <div className="ornament-line mx-auto mt-5 w-24 opacity-70" />
          <p className="mx-auto mt-4 max-w-xl text-sm leading-relaxed text-cream/75">Your presence is our greatest gift. Send us a heartfelt message and let your blessings become part of our new beginning.</p>

          <div className="mx-auto mt-10 max-w-3xl rounded-[2.5rem] border border-gold-soft/30 bg-[#2e0c14]/50 px-6 py-10 shadow-2xl backdrop-blur-sm sm:px-12">
            <Heart className="mx-auto h-5 w-5 fill-gold-soft/15 text-gold-soft" />
            <p className="mt-4 font-script text-6xl leading-none text-gold-soft sm:text-7xl">{couple.bride}</p>
            <p className="font-serif text-2xl text-cream/80">&amp;</p>
            <p className="font-script text-6xl leading-none text-gold-soft sm:text-7xl">{couple.groom.split(" ")[0]}</p>
            <p className="mt-5 text-[10px] font-bold uppercase tracking-[0.35em] text-cream/60">Two hearts · One forever</p>
          </div>

          <a href={`https://wa.me/?text=${encodeURIComponent(message)}`} target="_blank" rel="noreferrer" className="mt-8 inline-flex items-center gap-2 rounded-full border-2 border-gold-soft/80 bg-gold/15 px-7 py-3.5 text-[10px] font-extrabold uppercase tracking-[0.23em] text-cream shadow-[0_0_35px_rgba(232,212,139,0.15)] hover:bg-gold/25">
            <MessageCircle className="h-4 w-4" /> Send a Blessing →
          </a>
        </div>
      </div>
    </section>
  );
}
