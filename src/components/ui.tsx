import {
  motion,
  useInView,
  useReducedMotion,
  type Variants,
} from "framer-motion";
import {
  useEffect,
  useRef,
  type HTMLAttributes,
  type ReactNode,
} from "react";
import { cn } from "../utils/cn";

/* ------------------------------- FadeIn ---------------------------------- */

const EASE: [number, number, number, number] = [0.22, 1, 0.36, 1];

export function FadeIn({
  children,
  className,
  delay = 0,
  y = 28,
  once = true,
  ...rest
}: {
  children: ReactNode;
  className?: string;
  delay?: number;
  y?: number;
  once?: boolean;
} & HTMLAttributes<HTMLDivElement>) {
  const reduce = useReducedMotion();
  return (
    <motion.div
      className={className}
      initial={{ opacity: 0, y: reduce ? 0 : y, filter: "blur(6px)" }}
      whileInView={{ opacity: 1, y: 0, filter: "blur(0px)" }}
      viewport={{ once, margin: "-70px" }}
      transition={{ duration: 0.9, delay, ease: EASE }}
      {...(rest as object)}
    >
      {children}
    </motion.div>
  );
}

/* ------------------------------- Stagger --------------------------------- */

const container: Variants = {
  hidden: {},
  show: { transition: { staggerChildren: 0.09, delayChildren: 0.08 } },
};

const item: Variants = {
  hidden: { opacity: 0, y: 26, filter: "blur(6px)" },
  show: {
    opacity: 1,
    y: 0,
    filter: "blur(0px)",
    transition: { duration: 0.85, ease: EASE },
  },
};

export function Stagger({
  children,
  className,
}: {
  children: ReactNode;
  className?: string;
}) {
  return (
    <motion.div
      className={className}
      variants={container}
      initial="hidden"
      whileInView="show"
      viewport={{ once: true, margin: "-60px" }}
    >
      {children}
    </motion.div>
  );
}

export function StaggerItem({
  children,
  className,
}: {
  children: ReactNode;
  className?: string;
}) {
  return (
    <motion.div className={className} variants={item}>
      {children}
    </motion.div>
  );
}

/* ------------------------------ Section bits ------------------------------ */

export function Eyebrow({
  children,
  theme = "dark",
  className,
}: {
  children: ReactNode;
  theme?: "dark" | "light";
  className?: string;
}) {
  return (
    <span
      className={cn(
        "chip uppercase tracking-[0.22em]",
        theme === "dark"
          ? "bg-white/[0.06] text-white/70 ring-1 ring-white/10"
          : "bg-black/[0.05] text-black/60 ring-1 ring-black/10",
        className
      )}
    >
      <span className="animate-pulse-dot inline-block size-1.5 rounded-full bg-gradient-to-r from-gold to-flare" />
      {children}
    </span>
  );
}

export function SectionHeading({
  eyebrow,
  title,
  sub,
  theme = "dark",
  align = "center",
  className,
}: {
  eyebrow: string;
  title: ReactNode;
  sub?: string;
  theme?: "dark" | "light";
  align?: "center" | "left";
  className?: string;
}) {
  return (
    <div
      className={cn(
        "flex flex-col gap-5",
        align === "center" ? "items-center text-center" : "items-start text-left",
        className
      )}
    >
      <FadeIn>
        <Eyebrow theme={theme}>{eyebrow}</Eyebrow>
      </FadeIn>
      <FadeIn delay={0.08}>
        <h2
          className={cn(
            "font-display text-4xl font-semibold leading-[1.04] tracking-[-0.03em] sm:text-5xl lg:text-[3.4rem]",
            theme === "dark" ? "text-white" : "text-ink",
            align === "center" ? "max-w-3xl" : "max-w-2xl"
          )}
        >
          {title}
        </h2>
      </FadeIn>
      {sub && (
        <FadeIn delay={0.16}>
          <p
            className={cn(
              "max-w-xl text-base leading-relaxed sm:text-lg",
              theme === "dark" ? "text-white/55" : "text-black/55"
            )}
          >
            {sub}
          </p>
        </FadeIn>
      )}
    </div>
  );
}

/* ---------------------------- Spotlight card ------------------------------ */

export function SpotlightCard({
  children,
  className,
  tone = "dark",
}: {
  children: ReactNode;
  className?: string;
  tone?: "dark" | "light";
}) {
  const ref = useRef<HTMLDivElement>(null);

  return (
    <div
      ref={ref}
      onPointerMove={(e) => {
        const el = ref.current;
        if (!el) return;
        const r = el.getBoundingClientRect();
        el.style.setProperty("--mx", `${e.clientX - r.left}px`);
        el.style.setProperty("--my", `${e.clientY - r.top}px`);
      }}
      className={cn("group relative overflow-hidden", className)}
    >
      <div
        aria-hidden
        className="pointer-events-none absolute inset-0 rounded-[inherit] opacity-0 transition-opacity duration-500 group-hover:opacity-100"
        style={{
          background:
            tone === "dark"
              ? "radial-gradient(340px circle at var(--mx, 50%) var(--my, 50%), rgba(255,255,255,0.09), transparent 65%)"
              : "radial-gradient(340px circle at var(--mx, 50%) var(--my, 50%), rgba(255,138,76,0.1), transparent 65%)",
        }}
      />
      {children}
    </div>
  );
}

/* ------------------------------- Count up --------------------------------- */

function formatNum(n: number, decimals: number) {
  return n.toLocaleString("en-US", {
    minimumFractionDigits: decimals,
    maximumFractionDigits: decimals,
  });
}

export function CountUp({
  value,
  decimals = 0,
  suffix = "",
  duration = 1700,
  className,
}: {
  value: number;
  decimals?: number;
  suffix?: string;
  duration?: number;
  className?: string;
}) {
  const ref = useRef<HTMLSpanElement>(null);
  const inView = useInView(ref, { once: true, margin: "-40px" });
  const reduce = useReducedMotion();

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    if (reduce) {
      el.textContent = formatNum(value, decimals) + suffix;
      return;
    }
    if (!inView) return;
    let raf = 0;
    const start = performance.now();
    const tick = (now: number) => {
      const t = Math.min((now - start) / duration, 1);
      const eased = 1 - Math.pow(1 - t, 3);
      el.textContent = formatNum(value * eased, decimals) + suffix;
      if (t < 1) raf = requestAnimationFrame(tick);
    };
    raf = requestAnimationFrame(tick);
    return () => cancelAnimationFrame(raf);
  }, [inView, value, decimals, suffix, duration, reduce]);

  return (
    <span ref={ref} className={className}>
      {formatNum(0, decimals)}
      {suffix}
    </span>
  );
}

/* ------------------------------ Star rating ------------------------------- */

export function Stars({ className, size = 14 }: { className?: string; size?: number }) {
  return (
    <span className={cn("inline-flex items-center gap-0.5", className)} aria-label="Rated 4.9 out of 5 stars">
      {Array.from({ length: 5 }).map((_, i) => (
        <svg
          key={i}
          width={size}
          height={size}
          viewBox="0 0 24 24"
          fill="currentColor"
          className="text-gold"
          aria-hidden
        >
          <path d="M12 2.5l2.9 6.2 6.6.8-4.9 4.6 1.3 6.6L12 17.4l-5.9 3.3 1.3-6.6-4.9-4.6 6.6-.8L12 2.5z" />
        </svg>
      ))}
    </span>
  );
}
