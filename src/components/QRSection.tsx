import { Copy, QrCode, Share2 } from "lucide-react";
import { useMemo, useState } from "react";
import { couple } from "../data";

export default function QRSection() {
  const [copied, setCopied] = useState(false);
  const inviteUrl = typeof window !== "undefined" ? window.location.href : "";
  const qrUrl = useMemo(() => {
    if (!inviteUrl) return "";
    return `https://api.qrserver.com/v1/create-qr-code/?size=500x500&margin=12&data=${encodeURIComponent(inviteUrl)}`;
  }, [inviteUrl]);

  const copyLink = async () => {
    if (!inviteUrl) return;
    try {
      await navigator.clipboard.writeText(inviteUrl);
      setCopied(true);
      window.setTimeout(() => setCopied(false), 1800);
    } catch {
      setCopied(false);
    }
  };

  const share = async () => {
    if (navigator.share) {
      await navigator.share({ title: `${couple.fullNames} — Wedding Invitation`, url: inviteUrl }).catch(() => undefined);
    } else {
      await copyLink();
    }
  };

  return (
    <section id="qr" className="section-pad bg-cream-dark">
      <div className="mx-auto max-w-4xl">
        <div className="relative overflow-hidden rounded-[2.5rem] border border-gold/30 bg-maroon-deep p-7 text-center text-cream shadow-2xl sm:p-10">
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_20%_20%,rgba(232,212,139,0.18),transparent_28%),radial-gradient(circle_at_85%_80%,rgba(107,36,51,0.65),transparent_32%)]" />
          <div className="relative z-10 grid items-center gap-8 md:grid-cols-[220px_1fr] md:text-left">
            <div className="mx-auto rounded-3xl bg-white p-4 shadow-2xl">
              {qrUrl ? <img src={qrUrl} alt="QR code to open the wedding invitation" className="h-44 w-44 object-contain" /> : <div className="grid h-44 w-44 place-items-center text-maroon"><QrCode className="h-20 w-20" /></div>}
            </div>
            <div>
              <p className="text-[10px] font-bold uppercase tracking-[0.4em] text-gold-soft">Share it the traditional way</p>
              <h2 className="mt-3 font-serif text-3xl sm:text-4xl">Scan to Open Our Invitation</h2>
              <p className="mt-3 max-w-xl text-sm leading-relaxed text-cream/70">Scan this to open {couple.fullNames}'s digital invitation.</p>
              <div className="mt-6 flex flex-wrap justify-center gap-3 md:justify-start">
                <button type="button" onClick={share} className="inline-flex items-center gap-2 rounded-full bg-gold px-5 py-3 text-[10px] font-extrabold uppercase tracking-[0.2em] text-maroon-deep"><Share2 className="h-4 w-4" /> Share QR Link</button>
                <button type="button" onClick={copyLink} className="inline-flex items-center gap-2 rounded-full border border-gold-soft/40 bg-white/5 px-5 py-3 text-[10px] font-extrabold uppercase tracking-[0.2em] text-cream"><Copy className="h-4 w-4" /> {copied ? "Copied!" : "Copy Link"}</button>
              </div>
              
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
