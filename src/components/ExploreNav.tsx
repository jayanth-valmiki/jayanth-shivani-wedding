import { CalendarDays, Camera, Heart, MapPin, QrCode, ScrollText } from "lucide-react";

const links = [
  { href: "#events", label: "Events", icon: CalendarDays },
  { href: "#cards", label: "Cards", icon: ScrollText },
  { href: "#gallery", label: "Gallery", icon: Camera },
  { href: "#story", label: "Story", icon: Heart },
  { href: "#venue", label: "Venue", icon: MapPin },
  { href: "#qr", label: "QR", icon: QrCode },
];

export default function ExploreNav() {
  return (
    <div className="sticky top-0 z-40 border-b border-gold/20 bg-maroon-deep/90 px-2 py-2 text-cream shadow-lg backdrop-blur-xl">
      <div className="mx-auto flex max-w-4xl items-center justify-center gap-1 overflow-x-auto sm:gap-2">
        {links.map(({ href, label, icon: Icon }) => (
          <a
            key={href}
            href={href}
            className="flex shrink-0 items-center gap-1.5 rounded-full border border-gold/20 px-3 py-2 text-[9px] font-extrabold uppercase tracking-[0.15em] text-cream/75 transition hover:border-gold/60 hover:bg-gold/10 hover:text-gold-soft"
          >
            <Icon className="h-3.5 w-3.5" />
            {label}
          </a>
        ))}
      </div>
    </div>
  );
}
