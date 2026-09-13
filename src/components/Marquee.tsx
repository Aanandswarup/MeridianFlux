import { FadeIn } from "./ui";

const PRESS: { name: string; style: string }[] = [
  { name: "GQ", style: "font-serif text-xl tracking-[0.28em]" },
  { name: "WIRED", style: "font-display text-lg font-bold tracking-[0.3em]" },
  { name: "The Verge", style: "font-display text-lg font-semibold italic" },
  { name: "HODINKEE", style: "font-display text-lg font-medium tracking-[0.26em]" },
  { name: "Esquire", style: "font-serif text-xl tracking-[0.1em]" },
  { name: "Men's Health", style: "text-lg font-semibold tracking-[0.06em]" },
  { name: "TechCrunch", style: "font-display text-lg font-medium tracking-[0.02em]" },
  { name: "Highsnobiety", style: "font-display text-lg font-semibold tracking-[0.04em]" },
];

function Row({ hidden }: { hidden?: boolean }) {
  return (
    <div className="flex w-max shrink-0 items-center" aria-hidden={hidden}>
      {PRESS.map((p) => (
        <div key={p.name} className="flex items-center">
          <span className={`whitespace-nowrap px-10 text-white/35 transition-colors duration-300 hover:text-white/70 ${p.style}`}>
            {p.name}
          </span>
          <span className="size-1.5 rotate-45 bg-white/15" />
        </div>
      ))}
    </div>
  );
}

export default function Marquee() {
  return (
    <section aria-label="Press coverage" className="relative border-b border-white/[0.06] bg-ink py-14">
      <FadeIn>
        <p className="mb-9 text-center text-[11px] font-medium uppercase tracking-[0.34em] text-white/35">
          Reviewed. Rated. Worn everywhere.
        </p>
      </FadeIn>
      <FadeIn delay={0.1}>
        <div className="marquee-paused mask-fade-x overflow-hidden">
          <div className="animate-marquee flex w-max">
            <Row />
            <Row hidden />
          </div>
        </div>
      </FadeIn>
    </section>
  );
}
