import {
  AnimatePresence,
  motion,
  useMotionValue,
  useReducedMotion,
  useSpring,
} from "framer-motion";
import { ArrowUpRight, Check, RotateCw, ShoppingBag } from "lucide-react";
import { useState } from "react";
import { cn } from "../utils/cn";
import { FadeIn, SectionHeading } from "./ui";

type Colorway = {
  id: string;
  name: string;
  tag: string;
  desc: string;
  price: number;
  img: string;
  swatch: string;
  glow: string;
  alt: string;
};

const COLORWAYS: Colorway[] = [
  {
    id: "midnight",
    name: "Midnight",
    tag: "Stealth, everything.",
    desc: "Black titanium with an obsidian sport band. Goes with every fit — including the ones after midnight.",
    price: 299,
    img: "images/watch-midnight.jpg",
    swatch: "linear-gradient(135deg,#4a5060,#0a0b0e)",
    glow: "rgba(108,120,255,0.30)",
    alt: "Meridian Flux in Midnight — matte black titanium with black sport band",
  },
  {
    id: "arctic",
    name: "Arctic",
    tag: "Clean. Cold. Classic.",
    desc: "Silver titanium with a cloud-white band. Minimal enough for the studio, sharp enough for the stage.",
    price: 299,
    img: "images/watch-arctic.jpg",
    swatch: "linear-gradient(135deg,#f8fafc,#aab4c4)",
    glow: "rgba(150,200,255,0.30)",
    alt: "Meridian Flux in Arctic — silver titanium with white sport band",
  },
  {
    id: "ember",
    name: "Ember",
    tag: "Warm light, late nights.",
    desc: "Copper titanium with a sunset band and sunrise dial. A limited Series-2 run — once it’s gone, it’s gone.",
    price: 329,
    img: "images/watch-ember.jpg",
    swatch: "linear-gradient(135deg,#ffb079,#9c4a24)",
    glow: "rgba(255,122,61,0.38)",
    alt: "Meridian Flux in Ember — copper titanium with burnt-orange sport band",
  },
];

const SIZES = ["41 mm", "45 mm"];

export default function Showcase() {
  const [active, setActive] = useState(COLORWAYS[0]);
  const [size, setSize] = useState(SIZES[0]);
  const [added, setAdded] = useState(false);
  const reduce = useReducedMotion();

  const mx = useMotionValue(0);
  const my = useMotionValue(0);
  const rotateX = useSpring(my, { stiffness: 160, damping: 18 });
  const rotateY = useSpring(mx, { stiffness: 160, damping: 18 });

  const handleAdd = () => {
    setAdded(true);
    window.setTimeout(() => setAdded(false), 1900);
  };

  return (
    <section
      id="collection"
      aria-label="The Flux collection"
      className="relative scroll-mt-24 overflow-hidden bg-ink-2 py-24 sm:py-32"
    >
      <div aria-hidden className="absolute inset-0">
        <div className="absolute left-1/2 top-1/2 size-[46rem] -translate-x-1/2 -translate-y-1/2 rounded-full bg-white/[0.025] blur-3xl" />
      </div>

      <div className="relative mx-auto max-w-6xl px-5 sm:px-6">
        <SectionHeading
          eyebrow="The Flux collection"
          title={
            <>
              One watch.{" "}
              <span className="font-serif font-normal italic text-gradient">Three moods.</span>
            </>
          }
          sub="Same calibre, same sapphire, same 14 days — finished three ways. Pick the one that feels like you, then switch straps whenever you don’t."
        />

        <div className="mt-16 grid items-center gap-14 lg:grid-cols-12 lg:gap-10">
          {/* visual */}
          <FadeIn className="lg:col-span-7">
            <div
              className="relative mx-auto max-w-[30rem]"
              onPointerMove={(e) => {
                if (reduce) return;
                const r = e.currentTarget.getBoundingClientRect();
                mx.set(((e.clientX - r.left) / r.width - 0.5) * 12);
                my.set(-((e.clientY - r.top) / r.height - 0.5) * 9);
              }}
              onPointerLeave={() => {
                mx.set(0);
                my.set(0);
              }}
            >
              <motion.div
                aria-hidden
                className="absolute inset-6 rounded-full blur-[70px]"
                animate={{ backgroundColor: active.glow }}
                transition={{ duration: 0.7, ease: "easeOut" }}
              />
              <div
                aria-hidden
                className="animate-spin-slow absolute inset-0 rounded-full border border-dashed border-white/10"
              />
              <motion.div style={{ rotateX, rotateY, transformPerspective: 900 }}>
                <AnimatePresence mode="wait">
                  <motion.img
                    key={active.id}
                    src={active.img}
                    alt={active.alt}
                    width={1024}
                    height={1024}
                    loading="lazy"
                    draggable={false}
                    className="mask-radial relative w-full select-none"
                    initial={{ opacity: 0, scale: 0.94, filter: "blur(10px)" }}
                    animate={{ opacity: 1, scale: 1, filter: "blur(0px)" }}
                    exit={{ opacity: 0, scale: 1.04, filter: "blur(10px)" }}
                    transition={{ duration: 0.55, ease: [0.22, 1, 0.36, 1] }}
                  />
                </AnimatePresence>
              </motion.div>

              <div className="glass-dark absolute bottom-6 left-1/2 flex -translate-x-1/2 items-center gap-2 rounded-full px-4 py-2 text-xs font-medium text-white/80">
                <RotateCw size={13} className="text-gold" aria-hidden />
                360° studio render — drag your cursor over it
              </div>
            </div>
          </FadeIn>

          {/* panel */}
          <FadeIn delay={0.12} className="lg:col-span-5">
            <div className="glass-dark rounded-[2rem] p-7 sm:p-9">
              <AnimatePresence mode="wait">
                <motion.div
                  key={active.id}
                  initial={{ opacity: 0, y: 14 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -14 }}
                  transition={{ duration: 0.4, ease: [0.22, 1, 0.36, 1] }}
                >
                  <p className="text-[11px] font-medium uppercase tracking-[0.3em] text-gold">
                    Flux Pro · {active.tag}
                  </p>
                  <h3 className="mt-3 font-display text-4xl font-semibold tracking-tight text-white">
                    {active.name}
                  </h3>
                  <p className="mt-3 text-[15px] leading-relaxed text-white/55">{active.desc}</p>
                  <p className="mt-5 font-display text-3xl font-semibold text-white">
                    ${active.price}
                    <span className="ml-2 align-middle text-sm font-normal text-white/40">
                      one-time · free shipping
                    </span>
                  </p>
                </motion.div>
              </AnimatePresence>

              {/* selector */}
              <div className="mt-7" role="group" aria-label="Choose a finish">
                <p className="mb-3 text-xs font-medium uppercase tracking-[0.2em] text-white/40">Finish</p>
                <div className="flex gap-3">
                  {COLORWAYS.map((c) => (
                    <button
                      key={c.id}
                      type="button"
                      onClick={() => setActive(c)}
                      aria-pressed={active.id === c.id}
                      aria-label={`Select ${c.name} finish, $${c.price}`}
                      className={cn(
                        "group relative grid size-12 place-items-center rounded-full transition-transform duration-300 hover:scale-110",
                        active.id === c.id && "scale-110"
                      )}
                    >
                      <span
                        className="size-10 rounded-full shadow-inner"
                        style={{ background: c.swatch }}
                      />
                      {active.id === c.id && (
                        <motion.span
                          layoutId="swatch-ring"
                          className="absolute inset-0 rounded-full border-2 border-white"
                          transition={{ type: "spring", stiffness: 400, damping: 30 }}
                        />
                      )}
                    </button>
                  ))}
                </div>
              </div>

              {/* size */}
              <div className="mt-6" role="group" aria-label="Choose a case size">
                <p className="mb-3 text-xs font-medium uppercase tracking-[0.2em] text-white/40">Case size</p>
                <div className="inline-flex rounded-full bg-white/[0.06] p-1 ring-1 ring-white/10">
                  {SIZES.map((s) => (
                    <button
                      key={s}
                      type="button"
                      onClick={() => setSize(s)}
                      aria-pressed={size === s}
                      className={cn(
                        "relative rounded-full px-5 py-2 text-sm font-medium transition-colors",
                        size === s ? "text-ink" : "text-white/55 hover:text-white"
                      )}
                    >
                      {size === s && (
                        <motion.span
                          layoutId="size-pill"
                          className="absolute inset-0 rounded-full bg-white"
                          transition={{ type: "spring", stiffness: 420, damping: 32 }}
                        />
                      )}
                      <span className="relative">{s}</span>
                    </button>
                  ))}
                </div>
              </div>

              {/* actions */}
              <div className="mt-8 flex flex-col gap-3 sm:flex-row sm:items-center">
                <button
                  type="button"
                  onClick={handleAdd}
                  aria-live="polite"
                  className={cn(
                    "btn-primary flex-1",
                    added &&
                      "!bg-none !bg-emerald-500 shadow-[0_10px_34px_-10px_rgba(16,185,129,0.55)]"
                  )}
                >
                  <AnimatePresence mode="wait" initial={false}>
                    {added ? (
                      <motion.span
                        key="added"
                        initial={{ opacity: 0, y: 8 }}
                        animate={{ opacity: 1, y: 0 }}
                        exit={{ opacity: 0, y: -8 }}
                        transition={{ duration: 0.22 }}
                        className="flex items-center gap-2"
                      >
                        <Check size={17} strokeWidth={3} aria-hidden />
                        Added to bag
                      </motion.span>
                    ) : (
                      <motion.span
                        key="add"
                        initial={{ opacity: 0, y: 8 }}
                        animate={{ opacity: 1, y: 0 }}
                        exit={{ opacity: 0, y: -8 }}
                        transition={{ duration: 0.22 }}
                        className="flex items-center gap-2"
                      >
                        <ShoppingBag size={16} aria-hidden />
                        Add to bag — {active.name}
                      </motion.span>
                    )}
                  </AnimatePresence>
                </button>
                <a
                  href="#pricing"
                  className="btn-ghost justify-center text-sm text-white/65 ring-1 ring-inset ring-white/15 hover:bg-white/5 hover:text-white"
                >
                  Compare models
                  <ArrowUpRight size={15} aria-hidden />
                </a>
              </div>

              <p className="mt-5 text-center text-xs text-white/35 sm:text-left">
                Ships March · 30-day returns · includes two quick-release straps
              </p>
            </div>
          </FadeIn>
        </div>
      </div>
    </section>
  );
}
