import { AnimatePresence, motion } from "framer-motion";
import { ArrowUpRight, MessageCircle, Plus } from "lucide-react";
import { useState } from "react";
import { cn } from "../utils/cn";
import { Eyebrow, FadeIn } from "./ui";

const FAQS = [
  {
    q: "Does the Flux work with both iPhone and Android?",
    a: "Yes — full feature parity on iOS 15+ and Android 10+. Calls, messages, music control, contactless payments and health sync all work on both platforms, and your history follows you if you ever switch.",
  },
  {
    q: "Is the 14-day battery claim actually real?",
    a: "It’s our measured typical use: always-on display, 90 minutes of GPS workouts per week, and continuous health tracking. Heavy LTE use on Ultra shortens it to around 5 days; power-save mode stretches Pro past 21 days. We publish the full test methodology on our site.",
  },
  {
    q: "Can I really swim and surf with it?",
    a: "Flux Pro and Ultra are rated 5 ATM with a water-lock mode that locks the touch layer and expels water from the speaker afterwards. Pool, ocean, shower, storm — all fine. Just skip the sauna; heat and watch seals aren’t friends.",
  },
  {
    q: "Is there a subscription for the health features?",
    a: "Never. Every sensor insight, every sleep report, every future software update is included in the purchase price. We sell watches, not monthly rent on your own data.",
  },
  {
    q: "Do straps from other watches fit?",
    a: "Yes — the Flux uses standard quick-release 22 mm spring bars, so thousands of third-party straps fit. Every pre-order also includes two Meridian straps in the box.",
  },
  {
    q: "What if I don’t love it?",
    a: "Wear it for 30 days. If it’s not the best watch you’ve owned, send it back for a full refund — we cover return shipping and every Flux is covered by a 2-year international warranty with human support.",
  },
];

function Item({ q, a, open, onToggle, index }: { q: string; a: string; open: boolean; onToggle: () => void; index: number }) {
  return (
    <div className="hairline-light border-b">
      <button
        type="button"
        onClick={onToggle}
        aria-expanded={open}
        aria-controls={`faq-panel-${index}`}
        id={`faq-button-${index}`}
        className="group flex w-full items-center justify-between gap-6 py-6 text-left"
      >
        <span className="font-display text-lg font-medium tracking-tight text-black/85 transition-colors duration-300 group-hover:text-ink sm:text-xl">
          {q}
        </span>
        <span
          className={cn(
            "grid size-9 shrink-0 place-items-center rounded-full border transition-all duration-400",
            open
              ? "rotate-45 border-ember bg-ember text-white"
              : "border-black/15 text-black/50 group-hover:border-black/40 group-hover:text-ink"
          )}
        >
          <Plus size={16} strokeWidth={2.4} aria-hidden />
        </span>
      </button>
      <AnimatePresence initial={false}>
        {open && (
          <motion.div
            id={`faq-panel-${index}`}
            role="region"
            aria-labelledby={`faq-button-${index}`}
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.45, ease: [0.22, 1, 0.36, 1] }}
            className="overflow-hidden"
          >
            <p className="max-w-2xl pb-7 text-[15px] leading-relaxed text-black/55">{a}</p>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}

export default function FAQ() {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  return (
    <section id="faq" aria-label="Frequently asked questions" className="scroll-mt-24 border-t border-black/[0.06] bg-paper pb-24 pt-20 sm:pb-32 sm:pt-24">
      <div className="mx-auto max-w-6xl px-5 sm:px-6">
        <div className="grid gap-12 lg:grid-cols-12 lg:gap-16">
          <div className="lg:col-span-4">
            <div className="lg:sticky lg:top-28">
              <FadeIn>
                <Eyebrow theme="light">Questions</Eyebrow>
                <h2 className="mt-5 font-display text-4xl font-semibold leading-[1.05] tracking-[-0.03em] text-ink sm:text-5xl">
                  Asked,{" "}
                  <span className="font-serif font-normal italic text-black/60">answered.</span>
                </h2>
                <p className="mt-5 text-[15px] leading-relaxed text-black/55">
                  The honest details, up front. Anything else on your mind?
                </p>
              </FadeIn>
              <FadeIn delay={0.12}>
                <a
                  href="#preorder"
                  className="group mt-7 flex items-center gap-4 rounded-2xl border border-black/[0.08] bg-white p-5 shadow-[0_10px_30px_-14px_rgba(10,10,16,0.12)] transition-all duration-400 hover:-translate-y-1 hover:shadow-[0_24px_50px_-20px_rgba(10,10,16,0.2)]"
                >
                  <span className="grid size-11 shrink-0 place-items-center rounded-xl bg-gradient-to-br from-gold to-flare text-white">
                    <MessageCircle size={19} aria-hidden />
                  </span>
                  <span className="flex-1">
                    <span className="block font-display text-sm font-semibold text-ink">Chat with a human</span>
                    <span className="block text-xs text-black/45">Replies in under 2 minutes, usually</span>
                  </span>
                  <ArrowUpRight size={17} className="text-black/30 transition-all duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 group-hover:text-ember" aria-hidden />
                </a>
              </FadeIn>
            </div>
          </div>

          <FadeIn delay={0.1} className="lg:col-span-8">
            <div className="hairline-light border-t">
              {FAQS.map((f, i) => (
                <Item
                  key={f.q}
                  index={i}
                  q={f.q}
                  a={f.a}
                  open={openIndex === i}
                  onToggle={() => setOpenIndex(openIndex === i ? null : i)}
                />
              ))}
            </div>
          </FadeIn>
        </div>
      </div>
    </section>
  );
}
