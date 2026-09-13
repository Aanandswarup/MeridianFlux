import { motion } from "framer-motion";
import { ArrowRight, Check, RotateCcw, ShieldCheck, Truck } from "lucide-react";
import { useState, type FormEvent } from "react";
import { Eyebrow, FadeIn } from "./ui";

const BADGES = [
  { icon: Truck, label: "Free shipping" },
  { icon: RotateCcw, label: "30-day returns" },
  { icon: ShieldCheck, label: "2-year warranty" },
];

export default function CTA() {
  const [email, setEmail] = useState("");
  const [done, setDone] = useState(false);

  const submit = (e: FormEvent) => {
    e.preventDefault();
    if (!email.trim()) return;
    setDone(true);
  };

  return (
    <section id="preorder" aria-label="Pre-order" className="relative scroll-mt-24 overflow-hidden bg-ink py-28 sm:py-36">
      {/* aurora */}
      <div aria-hidden className="absolute inset-0">
        <div className="absolute left-1/2 top-0 h-[36rem] w-[52rem] -translate-x-1/2 -translate-y-1/2 rounded-full bg-ember/[0.16] blur-[140px]" />
        <div className="absolute bottom-[-20%] left-[8%] size-[26rem] rounded-full bg-flare/[0.13] blur-[130px]" />
        <div className="absolute bottom-[-10%] right-[5%] size-[24rem] rounded-full bg-indigo-500/[0.14] blur-[130px]" />
        <div className="animate-spin-slower absolute left-1/2 top-1/2 size-[42rem] -translate-x-1/2 -translate-y-1/2 rounded-full border border-dashed border-white/[0.06]" />
        <div className="absolute left-1/2 top-1/2 size-[27rem] -translate-x-1/2 -translate-y-1/2 rounded-full border border-white/[0.05]" />
        <div className="bg-grid absolute inset-0 [mask-image:radial-gradient(60%_50%_at_50%_50%,black,transparent)]" />
      </div>

      <div className="relative mx-auto max-w-3xl px-5 text-center sm:px-6">
        <FadeIn>
          <Eyebrow>Pre-order window closes soon</Eyebrow>
        </FadeIn>

        <FadeIn delay={0.1}>
          <h2 className="mt-7 font-display text-5xl font-semibold leading-[1.02] tracking-[-0.035em] text-white sm:text-6xl lg:text-7xl">
            Your time starts{" "}
            <span className="font-serif font-normal italic text-gradient">now.</span>
          </h2>
        </FadeIn>

        <FadeIn delay={0.2}>
          <p className="mx-auto mt-6 max-w-xl text-base leading-relaxed text-white/60 sm:text-lg">
            Join 38,500+ people on the list. Lock in launch pricing, get a free
            extra strap, and we’ll email you the moment your Flux ships.
          </p>
        </FadeIn>

        <FadeIn delay={0.3}>
          {done ? (
            <motion.div
              initial={{ opacity: 0, scale: 0.94 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
              className="glass-dark mx-auto mt-10 flex max-w-md items-center justify-center gap-3 rounded-full px-6 py-4"
              role="status"
            >
              <span className="grid size-6 place-items-center rounded-full bg-emerald-500">
                <Check size={14} strokeWidth={3} className="text-white" aria-hidden />
              </span>
              <p className="text-sm font-medium text-white/85">
                You’re on the list — check your inbox for 10% off.
              </p>
            </motion.div>
          ) : (
            <form
              onSubmit={submit}
              className="glass-dark mx-auto mt-10 flex max-w-md flex-col gap-2 rounded-[1.6rem] p-2 sm:flex-row sm:rounded-full"
            >
              <label htmlFor="cta-email" className="sr-only">
                Email address
              </label>
              <input
                id="cta-email"
                type="email"
                required
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="you@fastmail.com"
                className="w-full flex-1 rounded-full bg-transparent px-5 py-3 text-sm text-white placeholder:text-white/35 focus:outline-none"
              />
              <button type="submit" className="btn-primary shrink-0 !py-3 text-sm">
                Reserve my Flux
                <ArrowRight size={15} strokeWidth={2.4} aria-hidden />
              </button>
            </form>
          )}
        </FadeIn>

        <FadeIn delay={0.4}>
          <div className="mt-10 flex flex-wrap items-center justify-center gap-x-7 gap-y-3 text-xs font-medium text-white/45">
            {BADGES.map((b) => (
              <span key={b.label} className="flex items-center gap-1.5">
                <b.icon size={14} className="text-gold" aria-hidden />
                {b.label}
              </span>
            ))}
          </div>
        </FadeIn>
      </div>
    </section>
  );
}
