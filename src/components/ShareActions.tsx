import { CalendarPlus, MessageCircle, Share2 } from "lucide-react";
import { couple } from "../data";

const shareText = `You are warmly invited to the wedding of ${couple.fullNames} on ${couple.displayDate}. ❤️`;

export default function ShareActions() {
  const share = async () => {
    if (navigator.share) {
      await navigator.share({ title: `${couple.fullNames} — Wedding Invitation`, text: shareText, url: window.location.href }).catch(() => undefined);
      return;
    }
    window.open(`https://wa.me/?text=${encodeURIComponent(`${shareText} ${window.location.href}`)}`, "_blank", "noopener,noreferrer");
  };

  const googleCalendar = `https://calendar.google.com/calendar/render?action=TEMPLATE&text=${encodeURIComponent(`${couple.fullNames} — Wedding`)}&dates=20260827T040000Z/20260827T080000Z&details=${encodeURIComponent(shareText)}&location=${encodeURIComponent("Sri Krishnaveni Reddy Kalyana Mandapam, Sundipenta, Srisailam Project - AP")}`;

  return (
    <section className="section-pad bg-cream">
      <div className="mx-auto max-w-3xl rounded-[2rem] border border-gold/25 bg-white/70 p-7 text-center shadow-xl shadow-maroon/5 sm:p-10">
        <p className="text-[10px] uppercase tracking-[0.4em] text-gold">Keep this invitation close</p>
        <h2 className="mt-3 font-serif text-3xl text-maroon sm:text-4xl">Save · Share · Celebrate</h2>
        <p className="mx-auto mt-3 max-w-xl text-sm leading-relaxed text-ink/60">Save the date, share our invitation with family, and help us make the celebration even more special.</p>
        <div className="mt-7 flex flex-col justify-center gap-3 sm:flex-row">
          <button type="button" onClick={share} className="inline-flex items-center justify-center gap-2 rounded-full bg-maroon px-6 py-3 text-[10px] font-semibold uppercase tracking-[0.22em] text-cream"><Share2 className="h-4 w-4" /> Share Invitation</button>
          <a href={googleCalendar} target="_blank" rel="noreferrer" className="inline-flex items-center justify-center gap-2 rounded-full border border-gold/50 bg-cream px-6 py-3 text-[10px] font-semibold uppercase tracking-[0.22em] text-maroon"><CalendarPlus className="h-4 w-4" /> Add to Calendar</a>
          <a href={`https://wa.me/?text=${encodeURIComponent(shareText)}`} target="_blank" rel="noreferrer" className="inline-flex items-center justify-center gap-2 rounded-full border border-maroon/20 px-6 py-3 text-[10px] font-semibold uppercase tracking-[0.22em] text-maroon"><MessageCircle className="h-4 w-4" /> WhatsApp</a>
        </div>
      </div>
    </section>
  );
}
