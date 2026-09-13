import {
  motion,
  useReducedMotion,
  useScroll,
  useTransform,
} from "framer-motion";
import { ArrowRight, ChevronDown, Sparkles } from "lucide-react";
import { useRef } from "react";
import { CountUp, FadeIn, Stars } from "./ui";

const SPECS = [
  { label: "14-day battery", pos: "left-[2%] top-[22%]", delay: "0s" },
  { label: "Sapphire AMOLED", pos: "right-[0%] top-[38%]", delay: "1.4s" },
  { label: "5 ATM · 38 g", pos: "left-[6%] bottom-[16%]", delay: "2.6s" },
];

const STATS = [
  { value: 4.9, decimals: 1, suffix: "", label: "Avg. rating · 12k+ reviews" },
  { value: 14, decimals: 0, suffix: "", label: "Days of battery life" },
  { value: 1200, decimals: 0, suffix: "", label: "Nits, always-on display" },
  { value: 38, decimals: 0, suffix: "k+", label: "Owners and counting" },
];

export default function Hero() {
  const ref = useRef<HTMLElement>(null);
  const reduce = useReducedMotion();
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start start", "end start"],
  });

  const watchY = useTransform(scrollYProgress, [0, 1], [0, reduce ? 0 : 130]);
  const watchRotate = useTransform(scrollYProgress, [0, 1], [0, reduce ? 0 : 7]);
  const contentY = useTransform(scrollYProgress, [0, 1], [0, reduce ? 0 : -70]);
  const contentOpacity = useTransform(scrollYProgress, [0, 0.65], [1, 0]);

  return (
    <section
      ref={ref}
      id="top"
      aria-label="Introducing the Meridian Flux"
      className="relative overflow-hidden bg-ink"
    >
      {/* ambient canvas */}
      <div aria-hidden className="absolute inset-0">
        <div className="bg-grid absolute inset-0 [mask-image:radial-gradient(75%_60%_at_50%_35%,black,transparent)]" />
        <div className="absolute -left-40 top-[-10%] size-[34rem] rounded-full bg-ember/20 blur-[130px]" />
        <div className="absolute -right-40 top-[30%] size-[30rem] rounded-full bg-indigo-500/15 blur-[130px]" />
        <div className="absolute bottom-[-30%] left-1/3 size-[36rem] rounded-full bg-flare/10 blur-[150px]" />
        <div className="absolute inset-x-0 bottom-0 h-40 bg-gradient-to-t from-ink to-transparent" />
      </div>

      <div className="relative mx-auto max-w-6xl px-5 pb-16 pt-32 sm:px-6 sm:pt-40 lg:pb-24">
        <div className="grid items-center gap-16 lg:grid-cols-12 lg:gap-8">
          {/* copy */}
          <motion.div style={{ y: contentY, opacity: contentOpacity }} className="lg:col-span-6">
            <FadeIn delay={0.15}>
              <span className="chip glass-dark text-white/75">
                <Sparkles size={13} className="text-gold" aria-hidden />
                Flux Series 2 — pre-orders now open
              </span>
            </FadeIn>

            <FadeIn delay={0.25}>
              <h1 className="mt-7 font-display text-[2.9rem] font-semibold leading-[1.02] tracking-[-0.035em] text-white sm:text-6xl lg:text-[4.6rem]">
                Time moves fast.
                <br />
                <span className="font-serif font-normal italic tracking-[-0.01em] text-gradient">
                  Move faster.
                </span>
              </h1>
            </FadeIn>

            <FadeIn delay={0.38}>
              <p className="mt-6 max-w-xl text-base leading-relaxed text-white/60 sm:text-lg">
                Meet Meridian Flux — chronograph-grade precision, a 14-day
                battery and a sapphire AMOLED display, wrapped in 38 grams of
                grade-5 titanium. From first sip to last set, it keeps pace so
                you can set it.
              </p>
            </FadeIn>

            <FadeIn delay={0.5}>
              <div className="mt-9 flex flex-col gap-3.5 sm:flex-row sm:items-center">
                <a href="#preorder" className="btn-primary group">
                  Pre-order Flux — from $199
                  <ArrowRight
                    size={16}
                    strokeWidth={2.4}
                    className="transition-transform duration-300 group-hover:translate-x-1"
                    aria-hidden
                  />
                </a>
                <a
                  href="#features"
                  className="btn-ghost text-white/75 ring-1 ring-inset ring-white/15 hover:bg-white/5 hover:text-white"
                >
                  Explore features
                  <ChevronDown size={16} aria-hidden />
                </a>
              </div>
            </FadeIn>

            <FadeIn delay={0.62}>
              <div className="mt-9 flex flex-wrap items-center gap-x-6 gap-y-3 text-sm text-white/50">
                <span className="flex items-center gap-2">
                  <Stars /> 4.9 · 12,400+ reviews
                </span>
                <span aria-hidden className="hidden h-4 w-px bg-white/15 sm:block" />
                <span>Ships free worldwide · 30-day returns</span>
              </div>
            </FadeIn>
          </motion.div>

          {/* visual */}
          <motion.div style={{ y: watchY, rotate: watchRotate }} className="relative lg:col-span-6">
            <FadeIn delay={0.35} y={40} className="relative mx-auto max-w-[32rem]">
              {/* halo rings */}
              <div aria-hidden className="absolute inset-0 grid place-items-center">
                <div className="animate-spin-slower size-[105%] rounded-full bg-[conic-gradient(from_120deg,transparent_0deg,rgba(255,150,80,0.28)_70deg,transparent_140deg,rgba(110,120,255,0.22)_250deg,transparent_320deg)] blur-2xl" />
                <div className="absolute size-[88%] rounded-full border border-white/[0.07]" />
                <div className="animate-spin-slow absolute size-[104%] rounded-full border border-dashed border-white/[0.08]" />
              </div>

              <div className="animate-float relative">
                <img
                  src="/images/hero-watch.jpg"
                  alt="Meridian Flux smartwatch floating in dramatic studio light, matte black titanium case with a glowing minimal dial"
                  width={1024}
                  height={1024}
                  className="mask-radial relative w-full select-none"
                  draggable={false}
                  fetchPriority="high"
                />
              </div>

              {/* floating spec chips */}
              {SPECS.map((s) => (
                <div
                  key={s.label}
                  aria-hidden
                  className={`animate-float glass-dark absolute ${s.pos} hidden rounded-full px-3.5 py-1.5 text-xs font-medium text-white/80 shadow-[0_10px_30px_-10px_rgba(0,0,0,0.7)] sm:block`}
                  style={{ animationDelay: s.delay }}
                >
                  <span className="mr-1.5 inline-block size-1.5 rounded-full bg-gradient-to-r from-gold to-flare align-middle" />
                  {s.label}
                </div>
              ))}
            </FadeIn>
          </motion.div>
        </div>

        {/* stats */}
        <FadeIn delay={0.7} className="mt-20 lg:mt-24">
          <dl className="hairline-dark grid grid-cols-2 gap-y-10 border-t pt-10 sm:grid-cols-4">
            {STATS.map((s) => (
              <div key={s.label} className="flex flex-col items-center gap-1.5 text-center sm:items-start sm:text-left">
                <dt className="order-2 text-[13px] leading-snug text-white/45">{s.label}</dt>
                <dd className="order-1 font-display text-3xl font-semibold tracking-tight text-white sm:text-4xl">
                  <CountUp value={s.value} decimals={s.decimals ?? 0} suffix={s.suffix} />
                </dd>
              </div>
            ))}
          </dl>
        </FadeIn>
      </div>

      {/* scroll cue */}
      <div aria-hidden className="relative mb-8 flex flex-col items-center gap-2 text-white/30">
        <span className="text-[10px] font-medium uppercase tracking-[0.3em]">Scroll</span>
        <span className="animate-scroll-line block h-10 w-px bg-gradient-to-b from-gold/70 to-transparent" />
      </div>
    </section>
  );
}
