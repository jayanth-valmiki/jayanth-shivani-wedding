import { couple, contact, site } from "../data";

export default function Footer() {
  return (
    <footer className="bg-maroon-deep text-cream section-pad pt-16 pb-12">
      <div className="max-w-xl mx-auto text-center">
        <p className="font-script text-4xl sm:text-5xl mb-2">
          {couple.bride} & {couple.groom}
        </p>
        <div className="ornament-line w-24 mx-auto my-6 opacity-60" />
        <p className="uppercase tracking-[0.4em] text-xs opacity-80 mb-8">
          {couple.displayDate}
        </p>

        <p className="text-xs uppercase tracking-[0.3em] text-gold-soft/90 mb-2">
          Contact
        </p>
        <p className="text-base text-cream mb-1">{contact.name}</p>
        <a
          href={`tel:${contact.phone.replace(/\s/g, "")}`}
          className="inline-block text-base tracking-wider text-cream hover:text-gold-soft transition-colors"
        >
          {contact.phone}
        </a>
        <div className="mt-8 border-t border-gold/15 pt-6">
          <p className="text-[10px] uppercase tracking-[0.32em] text-gold-soft/80">Digital Invitation</p>
          <p className="mt-2 text-sm text-cream/75">Coded by <span className="font-semibold text-gold-soft">Jayanth Valmiki</span></p>
          {site.repositoryUrl.startsWith("http") ? (
            <a href={site.repositoryUrl} target="_blank" rel="noreferrer" className="mt-2 inline-block text-xs text-cream/45 underline decoration-gold/40 underline-offset-4 hover:text-gold-soft">View Git Repository ↗</a>
          ) : (
            <p className="mt-2 text-[10px] uppercase tracking-[0.18em] text-cream/35">Fork &amp; use this project</p>
          )}
          <p className="mt-5 text-xs text-cream/35">Made with love · Share this invitation with family &amp; friends</p>
        </div>
      </div>
    </footer>
  );
}
