import { ArrowRight, BadgeCheck, Check, GraduationCap, RotateCcw, ShieldCheck, Truck } from "lucide-react";
import { cn } from "../utils/cn";
import { FadeIn, SectionHeading, Stagger, StaggerItem } from "./ui";

const PLANS = [
  {
    name: "Flux Core",
    price: 199,
    blurb: "The essentials, distilled. Perfect first serious watch.",
    cta: "Pre-order Core",
    features: [
      "Aerospace aluminium case, 34 g",
      "AMOLED always-on display",
      "7-day battery life",
      "Heart rate + sleep tracking",
      "3 ATM water resistance",
      "100+ watch faces",
    ],
    featured: false,
  },
  {
    name: "Flux Pro",
    price: 299,
    blurb: "The one most people buy. Full titanium, full sensor suite.",
    cta: "Pre-order Pro",
    badge: "Most popular",
    features: [
      "Grade-5 titanium case, 38 g",
      "Sapphire AMOLED, 1200 nits",
      "14-day battery life",
      "Full health suite: HR, SpO₂, stress, sleep stages",
      "5 ATM + water-lock mode",
      "Dual-band GPS for runs & rides",
      "Two quick-release straps included",
    ],
    featured: true,
  },
  {
    name: "Flux Ultra",
    price: 399,
    blurb: "Everything Pro does — plus freedom from your phone.",
    cta: "Pre-order Ultra",
    features: [
      "Everything in Flux Pro",
      "LTE calls, texts & streaming",
      "Hand-stitched leather strap set",
      "Exclusive Ultra dial collection",
      "Extended 3-year warranty",
      "Priority concierge support",
    ],
    featured: false,
  },
];

const TRUST = [
  { icon: Truck, label: "Free worldwide shipping" },
  { icon: RotateCcw, label: "30-day free returns" },
  { icon: ShieldCheck, label: "2-year warranty" },
  { icon: BadgeCheck, label: "No subscription. Ever." },
];

export default function Pricing() {
  return (
    <section id="pricing" aria-label="Pricing" className="scroll-mt-24 bg-paper py-24 sm:py-32">
      <div className="mx-auto max-w-6xl px-5 sm:px-6">
        <SectionHeading
          theme="light"
          eyebrow="Simple pricing"
          title={
            <>
              Pay once.{" "}
              <span className="font-serif font-normal italic text-black/60">Wear for years.</span>
            </>
          }
          sub="Every tier ships free with two straps and our 30-day love-it-or-return-it promise. No monthly fees hiding anywhere."
        />

        <Stagger className="mt-16 grid items-stretch gap-5 lg:grid-cols-3">
          {PLANS.map((p) => (
            <StaggerItem key={p.name} className="h-full">
              <div
                className={cn(
                  "h-full",
                  p.featured &&
                    "rounded-[26px] bg-gradient-to-b from-gold via-ember to-flare p-[1.5px] shadow-[0_30px_70px_-25px_rgba(255,106,61,0.55)]"
                )}
              >
                <article
                  className={cn(
                    "relative flex h-full flex-col rounded-3xl p-8 transition-transform duration-500 hover:-translate-y-1.5",
                    p.featured
                      ? "rounded-[25px] bg-ink text-white"
                      : "border border-black/[0.08] bg-white text-ink shadow-[0_1px_2px_rgba(10,10,16,0.04),0_14px_40px_-18px_rgba(10,10,16,0.12)]"
                  )}
                >
                  {p.badge && (
                    <span className="absolute -top-3.5 left-1/2 -translate-x-1/2 whitespace-nowrap rounded-full bg-gradient-to-r from-gold to-flare px-4 py-1.5 text-[11px] font-bold uppercase tracking-[0.14em] text-white shadow-lg">
                      {p.badge}
                    </span>
                  )}

                  <h3 className="font-display text-lg font-semibold tracking-tight">{p.name}</h3>
                  <p className={cn("mt-1.5 text-sm leading-relaxed", p.featured ? "text-white/50" : "text-black/50")}>
                    {p.blurb}
                  </p>

                  <p className="mt-6 flex items-baseline gap-2">
                    <span className={cn("text-sm", p.featured ? "text-white/45" : "text-black/45")}>from</span>
                    <span className="font-display text-5xl font-semibold tracking-[-0.04em]">${p.price}</span>
                    <span className={cn("text-sm", p.featured ? "text-white/45" : "text-black/45")}>one-time</span>
                  </p>

                  <ul className="mt-7 flex flex-1 flex-col gap-3">
                    {p.features.map((f) => (
                      <li key={f} className="flex items-start gap-3 text-sm leading-snug">
                        <span
                          className={cn(
                            "mt-0.5 grid size-5 shrink-0 place-items-center rounded-full",
                            p.featured ? "bg-white/10 text-gold" : "bg-orange-100 text-ember"
                          )}
                        >
                          <Check size={12} strokeWidth={3} aria-hidden />
                        </span>
                        <span className={p.featured ? "text-white/75" : "text-black/65"}>{f}</span>
                      </li>
                    ))}
                  </ul>

                  <a
                    href="#preorder"
                    className={cn(
                      "group mt-8",
                      p.featured
                        ? "btn-primary w-full"
                        : "btn-ghost w-full text-ink ring-1 ring-inset ring-black/15 hover:bg-ink hover:text-white"
                    )}
                  >
                    {p.cta}
                    <ArrowRight size={15} className="transition-transform duration-300 group-hover:translate-x-1" aria-hidden />
                  </a>
                </article>
              </div>
            </StaggerItem>
          ))}
        </Stagger>

        <FadeIn delay={0.15} className="mt-12">
          <div className="flex flex-wrap items-center justify-center gap-x-8 gap-y-4">
            {TRUST.map((t) => (
              <span key={t.label} className="flex items-center gap-2 text-sm font-medium text-black/55">
                <t.icon size={16} className="text-ember" aria-hidden />
                {t.label}
              </span>
            ))}
          </div>
        </FadeIn>

        <FadeIn delay={0.2} className="mt-8">
          <div className="mx-auto flex max-w-xl items-center justify-center gap-3 rounded-2xl border border-dashed border-orange-300 bg-orange-50 px-5 py-3.5 text-center">
            <GraduationCap size={18} className="shrink-0 text-ember" aria-hidden />
            <p className="text-sm text-black/65">
              <strong className="font-semibold text-ink">Students save 15%</strong> — verify with any school email at checkout.
            </p>
          </div>
        </FadeIn>
      </div>
    </section>
  );
}
