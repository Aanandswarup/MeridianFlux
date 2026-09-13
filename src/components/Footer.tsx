import { Logo } from "./Navbar";

function InstagramIcon() {
  return (
    <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" aria-hidden>
      <rect x="2.5" y="2.5" width="19" height="19" rx="5.5" />
      <circle cx="12" cy="12" r="4.2" />
      <circle cx="17.4" cy="6.6" r="0.9" fill="currentColor" stroke="none" />
    </svg>
  );
}

function XIcon() {
  return (
    <svg width="15" height="15" viewBox="0 0 24 24" fill="currentColor" aria-hidden>
      <path d="M17.9 3H21l-6.9 7.9L22.3 21h-6.4l-5-6-5 6H2.7l7.4-8.5L2 3h6.6l4.5 5.4L17.9 3zm-1.1 16.1h1.7L7.4 4.8H5.6l11.2 14.3z" />
    </svg>
  );
}

function YoutubeIcon() {
  return (
    <svg width="17" height="17" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" aria-hidden>
      <path d="M2.7 8.2a3 3 0 0 1 3-2.7c3.2-.3 9.4-.3 12.6 0a3 3 0 0 1 3 2.7c.25 2.5.25 5.1 0 7.6a3 3 0 0 1-3 2.7c-3.2.3-9.4.3-12.6 0a3 3 0 0 1-3-2.7 22 22 0 0 1 0-7.6z" />
      <path d="m10.2 9.3 4.8 2.7-4.8 2.7z" fill="currentColor" stroke="none" />
    </svg>
  );
}

const COLS = [
  {
    title: "Product",
    links: ["Flux Core", "Flux Pro", "Flux Ultra", "Straps & faces", "Compare models"],
  },
  {
    title: "Company",
    links: ["Our story", "Journal", "Sustainability", "Careers", "Press kit"],
  },
  {
    title: "Support",
    links: ["Help center", "Warranty", "Repairs", "Order status", "Contact"],
  },
  {
    title: "Legal",
    links: ["Privacy", "Terms", "Cookie policy"],
  },
];

const SOCIALS = [
  { icon: InstagramIcon, label: "Meridian on Instagram" },
  { icon: XIcon, label: "Meridian on X" },
  { icon: YoutubeIcon, label: "Meridian on YouTube" },
];

export default function Footer() {
  return (
    <footer className="border-t border-white/[0.07] bg-[#050507] pb-10 pt-16">
      <div className="mx-auto max-w-6xl px-5 sm:px-6">
        <div className="grid gap-12 md:grid-cols-12">
          <div className="md:col-span-4">
            <Logo />
            <p className="mt-5 max-w-xs text-sm leading-relaxed text-white/45">
              Chronograph-grade instruments for people who move fast. Designed
              in Copenhagen, worn everywhere.
            </p>
            <div className="mt-6 flex gap-2.5">
              {SOCIALS.map((s) => (
                <a
                  key={s.label}
                  href="#top"
                  aria-label={s.label}
                  className="grid size-10 place-items-center rounded-full border border-white/10 text-white/50 transition-all duration-300 hover:-translate-y-0.5 hover:border-white/25 hover:text-white"
                >
                  <s.icon />
                </a>
              ))}
            </div>
          </div>

          <nav className="grid grid-cols-2 gap-10 sm:grid-cols-4 md:col-span-8" aria-label="Footer">
            {COLS.map((c) => (
              <div key={c.title}>
                <h3 className="text-xs font-semibold uppercase tracking-[0.2em] text-white/35">{c.title}</h3>
                <ul className="mt-5 flex flex-col gap-3">
                  {c.links.map((l) => (
                    <li key={l}>
                      <a
                        href="#top"
                        className="text-sm text-white/55 transition-colors duration-300 hover:text-white"
                      >
                        {l}
                      </a>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </nav>
        </div>

        <div className="mt-14 flex flex-col items-center justify-between gap-4 border-t border-white/[0.07] pt-8 sm:flex-row">
          <p className="text-xs text-white/35">
            © {new Date().getFullYear()} Meridian Watch Co. All rights reserved.
          </p>
          <p className="flex items-center gap-1.5 text-xs text-white/35">
            <span aria-hidden className="inline-block size-1.5 rounded-full bg-gradient-to-r from-gold to-flare" />
            Time, re-imagined.
          </p>
        </div>
      </div>
    </footer>
  );
}
