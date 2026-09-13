import { AnimatePresence, motion, useMotionValueEvent, useScroll } from "framer-motion";
import { ArrowRight } from "lucide-react";
import { useState } from "react";

export default function StickyCTA() {
  const { scrollY } = useScroll();
  const [show, setShow] = useState(false);

  useMotionValueEvent(scrollY, "change", (v) => setShow(v > 680));

  return (
    <AnimatePresence>
      {show && (
        <motion.div
          initial={{ y: 90, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          exit={{ y: 90, opacity: 0 }}
          transition={{ duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
          className="fixed inset-x-4 bottom-4 z-40 flex justify-center sm:inset-x-auto sm:right-6"
        >
          <div className="glass-dark flex w-full max-w-md items-center justify-between gap-4 rounded-2xl py-3 pl-5 pr-3 shadow-[0_24px_60px_-16px_rgba(0,0,0,0.85)] sm:w-auto sm:rounded-full">
            <div className="min-w-0">
              <p className="truncate font-display text-sm font-semibold text-white">
                Flux Pro — from $299
              </p>
              <p className="text-xs text-white/45">Free strap at launch</p>
            </div>
            <a href="#preorder" className="btn-primary shrink-0 !px-5 !py-2.5 text-sm">
              Pre-order
              <ArrowRight size={14} strokeWidth={2.5} aria-hidden />
            </a>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
