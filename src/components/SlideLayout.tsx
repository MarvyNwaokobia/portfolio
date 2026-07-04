"use client";

import { AnimatePresence, motion } from "framer-motion";
import { Children, useEffect } from "react";
import type { ReactNode } from "react";
import { useSlides } from "./SlideContext";

type Bez = [number, number, number, number];

const variants = {
  enter: (dir: number) => ({
    x: dir > 0 ? "100%" : "-100%",
    opacity: 0,
  }),
  center: {
    x: 0,
    opacity: 1,
    transition: { duration: 0.52, ease: [0.16, 1, 0.3, 1] as Bez },
  },
  exit: (dir: number) => ({
    x: dir > 0 ? "-22%" : "22%",
    opacity: 0,
    transition: { duration: 0.38, ease: [0.4, 0, 0.6, 1] as Bez },
  }),
};

export default function SlideLayout({
  children,
  labels,
}: {
  children: ReactNode;
  labels: string[];
}) {
  const { current, direction, goTo, next, prev, total } = useSlides();
  const slides = Children.toArray(children);

  useEffect(() => {
    const handler = (e: KeyboardEvent) => {
      if (e.key === "ArrowRight") next();
      if (e.key === "ArrowLeft") prev();
    };
    window.addEventListener("keydown", handler);
    return () => window.removeEventListener("keydown", handler);
  }, [next, prev]);

  return (
    <div className="relative h-full w-full overflow-hidden">
      <AnimatePresence mode="wait" initial={false} custom={direction}>
        <motion.div
          key={current}
          custom={direction}
          variants={variants}
          initial="enter"
          animate="center"
          exit="exit"
          className="absolute inset-0 overflow-y-auto"
        >
          {slides[current]}
        </motion.div>
      </AnimatePresence>

      {/* Left arrow */}
      {current > 0 && (
        <button
          type="button"
          onClick={prev}
          aria-label="Previous slide"
          className="absolute left-3 top-1/2 z-30 flex h-11 w-11 -translate-y-1/2 items-center justify-center rounded-full border border-border bg-card/80 text-foreground shadow-md backdrop-blur-sm transition-colors hover:border-accent hover:text-accent sm:left-5"
        >
          <span className="text-xl leading-none select-none">‹</span>
        </button>
      )}

      {/* Right arrow */}
      {current < total - 1 && (
        <button
          type="button"
          onClick={next}
          aria-label="Next slide"
          className="absolute right-3 top-1/2 z-30 flex h-11 w-11 -translate-y-1/2 items-center justify-center rounded-full border border-border bg-card/80 text-foreground shadow-md backdrop-blur-sm transition-colors hover:border-accent hover:text-accent sm:right-5"
        >
          <span className="text-xl leading-none select-none">›</span>
        </button>
      )}

      {/* Dot indicators */}
      <div className="absolute bottom-5 left-1/2 z-30 flex -translate-x-1/2 items-center gap-1.5">
        {labels.map((label, i) => (
          <button
            key={label}
            type="button"
            onClick={() => goTo(i)}
            aria-label={`Go to ${label}`}
            className={`h-1.5 rounded-full transition-all duration-300 ${
              i === current
                ? "w-6 bg-accent"
                : "w-1.5 bg-muted-foreground/30 hover:bg-muted-foreground/60"
            }`}
          />
        ))}
      </div>

      {/* Keyboard hint — fades in on first load */}
      <motion.p
        initial={{ opacity: 0.6 }}
        animate={{ opacity: 0 }}
        transition={{ delay: 3, duration: 1.5 }}
        className="pointer-events-none absolute bottom-5 right-6 hidden text-[11px] text-muted-foreground/50 lg:block"
      >
        ← → arrow keys to navigate
      </motion.p>
    </div>
  );
}
