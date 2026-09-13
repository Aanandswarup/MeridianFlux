import { SectionHeading, SpotlightCard, Stars, Stagger, StaggerItem } from "./ui";

const GRADS = [
  "from-amber-400 to-rose-500",
  "from-sky-400 to-indigo-500",
  "from-emerald-400 to-teal-600",
  "from-fuchsia-400 to-purple-600",
  "from-orange-400 to-red-500",
  "from-cyan-400 to-blue-600",
];

const QUOTES = [
  {
    quote: "Survived my entire exam week — six days, zero charges, and the focus timer kept me honest. My phone stays in my bag now.",
    name: "Maya R.",
    meta: "17 · High-school senior",
  },
  {
    quote: "It’s the one object on my desk that makes everything else look badly designed. And I’m a designer.",
    name: "Jordan K.",
    meta: "24 · Product designer",
  },
  {
    quote: "Twelve-hour shifts, endless hand-washing, two drops onto tile. Still perfect. The stress tracking actually changed how I breathe between patients.",
    name: "Priya S.",
    meta: "28 · Resident nurse",
  },
  {
    quote: "Tracked my first half marathon start to finish with 61% battery left. Then I wore the same watch to dinner. Nobody clocked it was a sports watch.",
    name: "Leo M.",
    meta: "19 · Distance runner",
  },
  {
    quote: "Board meeting at nine, surf at six. I own three straps and it genuinely feels like three different watches.",
    name: "Sofia T.",
    meta: "31 · Startup founder",
  },
  {
    quote: "I’ve owned mechanical pieces that cost ten times more. The Flux earns its wrist time on pure feel — and the dial at night is unreal.",
    name: "Marcus B.",
    meta: "38 · Photographer",
  },
];

export default function Testimonials() {
  return (
    <section id="reviews" aria-label="Customer reviews" className="scroll-mt-24 bg-ink py-24 sm:py-32">
      <div className="mx-auto max-w-6xl px-5 sm:px-6">
        <SectionHeading
          eyebrow="38,500+ wrists and counting"
          title={
            <>
              Worn daily.{" "}
              <span className="font-serif font-normal italic text-gradient">Loved loudly.</span>
            </>
          }
          sub=""
        />
        <div className="-mt-6 flex justify-center pb-2">
          <p className="flex items-center gap-2.5 text-sm text-white/50">
            <Stars size={15} />
            <span>
              <strong className="font-semibold text-white">4.9 / 5</strong> from 12,400+ verified reviews
            </span>
          </p>
        </div>

        <Stagger className="mt-14 grid grid-cols-1 gap-4 sm:gap-5 md:grid-cols-2 lg:grid-cols-3">
          {QUOTES.map((q, i) => (
            <StaggerItem key={q.name}>
              <SpotlightCard className="glass-dark h-full rounded-3xl p-7 transition-all duration-500 hover:-translate-y-1.5 hover:border-white/20">
                <Stars size={13} />
                <blockquote className="mt-4 text-[15px] leading-relaxed text-white/80">
                  “{q.quote}”
                </blockquote>
                <figcaption className="mt-6 flex items-center gap-3.5">
                  <span
                    aria-hidden
                    className={`grid size-11 shrink-0 place-items-center rounded-full bg-gradient-to-br font-display text-sm font-semibold text-white ${GRADS[i]}`}
                  >
                    {q.name.split(" ").map((w) => w[0]).join("")}
                  </span>
                  <span>
                    <span className="block text-sm font-semibold text-white">{q.name}</span>
                    <span className="block text-xs text-white/45">{q.meta}</span>
                  </span>
                </figcaption>
              </SpotlightCard>
            </StaggerItem>
          ))}
        </Stagger>
      </div>
    </section>
  );
}
