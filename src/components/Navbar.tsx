import { AnimatePresence, motion } from "framer-motion";
import { ArrowRight, Menu, X } from "lucide-react";
import { useEffect, useState } from "react";
import { cn } from "../utils/cn";

const LINKS = [
  { label: "Features", href: "#features" },
  { label: "Collection", href: "#collection" },
  { label: "Reviews", href: "#reviews" },
  { label: "Pricing", href: "#pricing" },
  { label: "FAQ", href: "#faq" },
];

export function Logo({ compact = false }: { compact?: boolean }) {
  return (
    <a href="#top" className="flex items-center gap-2.5" aria-label="Meridian home">
      <span className="grid size-8 place-items-center rounded-xl bg-gradient-to-br from-gold via-ember to-flare shadow-[0_6px_20px_-6px_rgba(255,106,61,0.7)]">
        <svg width="16" height="16" viewBox="0 0 24 24" fill="none" aria-hidden>
          <circle cx="12" cy="12" r="8" stroke="#fff" strokeWidth="1.8" />
          <path
            d="M12 7.5V12l3.2 2.2"
            stroke="#fff"
            strokeWidth="1.8"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
        </svg>
      </span>
      {!compact && (
        <span className="font-display text-[15px] font-semibold tracking-[0.18em] text-white">
          MERIDIAN
        </span>
      )}
    </a>
  );
}

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [open]);

  return (
    <motion.header
      initial={{ y: -80, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.9, ease: [0.22, 1, 0.36, 1], delay: 0.2 }}
      className="fixed inset-x-0 top-0 z-50"
    >
      <div className="mx-auto max-w-6xl px-4 sm:px-6">
        <div
          className={cn(
            "mt-3 flex items-center justify-between rounded-2xl px-4 transition-all duration-500 sm:px-5",
            scrolled
              ? "glass-dark h-[60px] shadow-[0_16px_40px_-18px_rgba(0,0,0,0.8)]"
              : "h-16 border border-transparent bg-transparent"
          )}
        >
          <Logo />

          <nav aria-label="Primary" className="hidden items-center gap-1 md:flex">
            {LINKS.map((l) => (
              <a
                key={l.href}
                href={l.href}
                className="group relative rounded-full px-4 py-2 text-sm font-medium text-white/60 transition-colors duration-300 hover:text-white"
              >
                {l.label}
                <span
                  aria-hidden
                  className="absolute inset-x-4 -bottom-px h-px origin-left scale-x-0 bg-gradient-to-r from-gold to-flare transition-transform duration-300 group-hover:scale-x-100"
                />
              </a>
            ))}
          </nav>

          <div className="flex items-center gap-2.5">
            <a
              href="#preorder"
              className="btn-primary hidden !px-5 !py-2.5 text-sm sm:inline-flex"
            >
              Pre-order
              <ArrowRight size={15} strokeWidth={2.4} aria-hidden />
            </a>
            <button
              type="button"
              onClick={() => setOpen((v) => !v)}
              aria-expanded={open}
              aria-label={open ? "Close menu" : "Open menu"}
              className="glass-dark grid size-10 place-items-center rounded-xl text-white md:hidden"
            >
              {open ? <X size={18} aria-hidden /> : <Menu size={18} aria-hidden />}
            </button>
          </div>
        </div>
      </div>

      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ opacity: 0, y: -12, filter: "blur(6px)" }}
            animate={{ opacity: 1, y: 0, filter: "blur(0px)" }}
            exit={{ opacity: 0, y: -12, filter: "blur(6px)" }}
            transition={{ duration: 0.35, ease: [0.22, 1, 0.36, 1] }}
            className="mx-4 mt-2 md:hidden"
          >
            <div className="glass-dark rounded-2xl p-3 shadow-[0_30px_60px_-20px_rgba(0,0,0,0.9)]">
              <nav aria-label="Mobile" className="flex flex-col">
                {LINKS.map((l, i) => (
                  <motion.a
                    key={l.href}
                    href={l.href}
                    onClick={() => setOpen(false)}
                    initial={{ opacity: 0, x: -14 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: 0.06 + i * 0.05, duration: 0.4 }}
                    className="flex items-center justify-between rounded-xl px-4 py-3.5 font-display text-lg font-medium text-white/80 transition-colors hover:bg-white/5 hover:text-white"
                  >
                    {l.label}
                    <ArrowRight size={16} className="text-white/30" aria-hidden />
                  </motion.a>
                ))}
                <motion.a
                  href="#preorder"
                  onClick={() => setOpen(false)}
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.32, duration: 0.4 }}
                  className="btn-primary mt-2 w-full"
                >
                  Pre-order Flux — from $199
                  <ArrowRight size={16} aria-hidden />
                </motion.a>
              </nav>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.header>
  );
}
