import {
  Activity,
  BatteryFull,
  Droplets,
  Feather,
  Gem,
  Smartphone,
} from "lucide-react";
import { FadeIn, SectionHeading, SpotlightCard, Stagger, StaggerItem } from "./ui";

function IconBadge({ children }: { children: React.ReactNode }) {
  return (
    <span className="grid size-11 shrink-0 place-items-center rounded-2xl bg-gradient-to-br from-amber-100 to-orange-100 text-ember ring-1 ring-orange-200/60 transition-transform duration-500 group-hover:scale-110 group-hover:-rotate-6">
      {children}
    </span>
  );
}

const CARD =
  "group rounded-3xl border border-black/[0.07] bg-white p-7 shadow-[0_1px_2px_rgba(10,10,16,0.04),0_10px_30px_-12px_rgba(10,10,16,0.08)] transition-all duration-500 hover:-translate-y-1.5 hover:shadow-[0_30px_60px_-20px_rgba(10,10,16,0.18)] sm:p-8";

export default function Features() {
  return (
    <section id="features" aria-label="Key features" className="scroll-mt-24 bg-paper py-24 sm:py-32">
      <div className="mx-auto max-w-6xl px-5 sm:px-6">
        <SectionHeading
          theme="light"
          eyebrow="Engineered, not decorated"
          title={
            <>
              Everything that matters.{" "}
              <span className="font-serif font-normal italic text-black/70">Nothing that doesn’t.</span>
            </>
          }
          sub="We stripped away the gimmicks and obsessed over the four things a watch should never fail at: timekeeping, toughness, battery and looking absurdly good."
        />

        <Stagger className="mt-16 grid grid-cols-1 gap-4 sm:gap-5 md:grid-cols-6">
          {/* hero card with macro image */}
          <StaggerItem className="md:col-span-4">
            <SpotlightCard tone="light" className={`${CARD} h-full`}>
              <div className="flex h-full flex-col gap-7 md:flex-row md:items-center">
                <div className="flex-1">
                  <IconBadge><Gem size={20} strokeWidth={1.9} /></IconBadge>
                  <h3 className="mt-5 font-display text-2xl font-semibold tracking-tight text-ink">
                    Chronograph heart, smartwatch brain
                  </h3>
                  <p className="mt-3 max-w-sm text-[15px] leading-relaxed text-black/55">
                    A hybrid calibre accurate to ±0.5 s/day with 32 onboard
                    sensors. Sapphire crystal over a 1200-nit AMOLED keeps
                    everything legible in direct sun — and invisible when you
                    don’t need it.
                  </p>
                  <div className="mt-5 flex flex-wrap gap-2">
                    {["Grade-5 titanium", "Sapphire crystal", "±0.5 s/day"].map((t) => (
                      <span key={t} className="chip bg-black/[0.05] text-black/60 ring-1 ring-black/[0.07]">{t}</span>
                    ))}
                  </div>
                </div>
                <div className="relative md:w-[46%]">
                  <img
                    src="images/macro-dial.jpg"
                    alt="Extreme macro of the Flux dial showing guilloche texture and sapphire crystal reflections"
                    loading="lazy"
                    className="aspect-[4/3] w-full rounded-2xl object-cover transition-transform duration-700 group-hover:scale-[1.03]"
                  />
                  <div aria-hidden className="pointer-events-none absolute inset-0 rounded-2xl ring-1 ring-inset ring-white/10" />
                </div>
              </div>
            </SpotlightCard>
          </StaggerItem>

          {/* battery */}
          <StaggerItem className="md:col-span-2">
            <SpotlightCard tone="light" className={`${CARD} flex h-full flex-col`}>
              <IconBadge><BatteryFull size={20} strokeWidth={1.9} /></IconBadge>
              <p className="mt-6 font-display text-6xl font-semibold tracking-[-0.04em] text-ink">
                14<span className="text-2xl font-medium text-black/40"> days</span>
              </p>
              <p className="mt-3 text-[15px] leading-relaxed text-black/55">
                One charge, two weeks. Exams, festivals, red-eyes — no nightly
                charging ritual.
              </p>
            </SpotlightCard>
          </StaggerItem>

          {/* water */}
          <StaggerItem className="md:col-span-2">
            <SpotlightCard tone="light" className={`${CARD} flex h-full flex-col`}>
              <IconBadge><Droplets size={20} strokeWidth={1.9} /></IconBadge>
              <h3 className="mt-5 font-display text-xl font-semibold tracking-tight text-ink">5 ATM, worry-free</h3>
              <p className="mt-3 text-[15px] leading-relaxed text-black/55">
                Pool laps, surf sessions, surprise rain. Water-lock mode clears
                the speaker automatically.
              </p>
            </SpotlightCard>
          </StaggerItem>

          {/* health */}
          <StaggerItem className="md:col-span-2">
            <SpotlightCard tone="light" className={`${CARD} flex h-full flex-col`}>
              <IconBadge><Activity size={20} strokeWidth={1.9} /></IconBadge>
              <h3 className="mt-5 font-display text-xl font-semibold tracking-tight text-ink">Health, 24/7</h3>
              <p className="mt-3 text-[15px] leading-relaxed text-black/55">
                Heart rate, SpO₂, sleep stages and stress — tracked quietly,
                explained plainly. Your data stays yours.
              </p>
            </SpotlightCard>
          </StaggerItem>

          {/* weight */}
          <StaggerItem className="md:col-span-2">
            <SpotlightCard tone="light" className={`${CARD} flex h-full flex-col`}>
              <IconBadge><Feather size={20} strokeWidth={1.9} /></IconBadge>
              <h3 className="mt-5 font-display text-xl font-semibold tracking-tight text-ink">38 grams, titanium</h3>
              <p className="mt-3 text-[15px] leading-relaxed text-black/55">
                Aerospace-grade case that disappears on your wrist — until
                someone asks about it.
              </p>
            </SpotlightCard>
          </StaggerItem>

          {/* ecosystem */}
          <StaggerItem className="md:col-span-6">
            <SpotlightCard tone="light" className={`${CARD} !p-7 sm:!p-8`}>
              <div className="flex flex-col items-start gap-5 sm:flex-row sm:items-center">
                <IconBadge><Smartphone size={20} strokeWidth={1.9} /></IconBadge>
                <div className="flex-1">
                  <h3 className="font-display text-xl font-semibold tracking-tight text-ink">
                    Plays well with everything
                  </h3>
                  <p className="mt-1.5 max-w-2xl text-[15px] leading-relaxed text-black/55">
                    iOS and Android, 100+ watch faces, quick-release 22 mm
                    straps and encrypted sync. Switch phones, keep your history.
                  </p>
                </div>
                <a
                  href="#collection"
                  className="btn-ghost shrink-0 text-sm font-semibold text-ink ring-1 ring-inset ring-black/15 hover:bg-black hover:text-white"
                >
                  See the collection
                </a>
              </div>
            </SpotlightCard>
          </StaggerItem>
        </Stagger>

        <FadeIn delay={0.15} className="mt-12">
          <p className="text-center text-sm text-black/40">
            No subscriptions. No ads on your wrist. No compromises.
          </p>
        </FadeIn>
      </div>
    </section>
  );
}
