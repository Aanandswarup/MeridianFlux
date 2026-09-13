import { motion, useReducedMotion, useScroll, useTransform } from "framer-motion";
import { BatteryCharging, HeartPulse, ShieldCheck, Sparkles } from "lucide-react";
import { useRef } from "react";
import { Eyebrow, FadeIn } from "./ui";

const BENEFITS = [
  {
    icon: BatteryCharging,
    num: "01",
    title: "Charge on Sunday. Forget until next month.",
    text: "Fourteen real days of battery — double in power-save. Your charger becomes a stranger, and low-battery anxiety becomes a memory.",
  },
  {
    icon: Sparkles,
    num: "02",
    title: "Dresses up, dresses down, never off-duty.",
    text: "Lecture at 9, gym at 5, dinner at 8. Quick-release straps and adaptive faces restyle the Flux in three seconds flat.",
  },
  {
    icon: HeartPulse,
    num: "03",
    title: "Health data that actually respects you.",
    text: "Clinical-grade sensors, on-device processing, zero ads and no paywalled insights. Your heart rate shouldn’t be someone’s business model.",
  },
  {
    icon: ShieldCheck,
    num: "04",
    title: "Built to outlast your next four phones.",
    text: "Sapphire crystal, grade-5 titanium, 5 ATM sealing and a 2-year warranty with real humans on the other end.",
  },
];

export default function Benefits() {
  const ref = useRef<HTMLDivElement>(null);
  const reduce = useReducedMotion();
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "end start"],
  });
  const imgY = useTransform(scrollYProgress, [0, 1], [reduce ? 0 : -46, reduce ? 0 : 46]);

  return (
    <section aria-label="Why Flux" className="bg-paper py-24 sm:py-32">
      <div className="mx-auto max-w-6xl px-5 sm:px-6">
        <div className="grid gap-14 lg:grid-cols-12 lg:gap-16">
          {/* sticky visual */}
          <div ref={ref} className="lg:col-span-5">
            <div className="lg:sticky lg:top-28">
              <FadeIn>
                <Eyebrow theme="light">Why Flux</Eyebrow>
                <h2 className="mt-5 font-display text-4xl font-semibold leading-[1.05] tracking-[-0.03em] text-ink sm:text-5xl">
                  Made for real life.{" "}
                  <span className="font-serif font-normal italic text-black/60">All of it.</span>
                </h2>
              </FadeIn>

              <FadeIn delay={0.15} className="mt-9">
                <div className="relative overflow-hidden rounded-[2rem] shadow-[0_40px_80px_-30px_rgba(10,10,16,0.45)]">
                  <motion.img
                    src="images/lifestyle-wrist.jpg"
                    alt="A young person wearing the Meridian Flux at night, city lights bokeh in the background"
                    loading="lazy"
                    style={{ y: imgY }}
                    className="aspect-[4/5] w-full scale-[1.15] object-cover"
                  />
                  <div aria-hidden className="absolute inset-0 bg-gradient-to-t from-black/55 via-transparent to-transparent" />
                  <figure className="glass-dark absolute inset-x-4 bottom-4 rounded-2xl p-4 sm:inset-x-5 sm:bottom-5">
                    <blockquote className="text-sm leading-relaxed text-white/90">
                      “Three weeks in and I’ve stopped thinking about it — which
                      is exactly the point.”
                    </blockquote>
                    <figcaption className="mt-2 text-xs font-medium text-white/50">
                      — DAZED, Gear of the Year shortlist
                    </figcaption>
                  </figure>
                </div>
              </FadeIn>
            </div>
          </div>

          {/* list */}
          <div className="lg:col-span-7">
            <div className="flex flex-col">
              {BENEFITS.map((b, i) => (
                <FadeIn key={b.num} delay={i * 0.06}>
                  <div className="group hairline-light flex gap-6 border-t py-9 transition-colors duration-500 first:border-t-0 first:pt-2 hover:bg-black/[0.025] sm:gap-9 sm:px-5">
                    <span className="font-display text-sm font-semibold tracking-widest text-ember">
                      {b.num}
                    </span>
                    <div>
                      <div className="flex items-center gap-3">
                        <b.icon size={19} strokeWidth={1.9} className="text-black/35 transition-colors duration-300 group-hover:text-ember" aria-hidden />
                        <h3 className="font-display text-xl font-semibold tracking-tight text-ink sm:text-2xl">
                          {b.title}
                        </h3>
                      </div>
                      <p className="mt-3 max-w-lg text-[15px] leading-relaxed text-black/55">
                        {b.text}
                      </p>
                    </div>
                  </div>
                </FadeIn>
              ))}

              <FadeIn delay={0.1}>
                <div className="hairline-light border-t px-1 pt-9 sm:px-5">
                  <p className="max-w-lg text-sm leading-relaxed text-black/45">
                    Every Flux includes a 2-year international warranty, free
                    battery service at year three, and packaging that’s 100%
                    recycled — because forever-products shouldn’t cost the planet.
                  </p>
                </div>
              </FadeIn>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
