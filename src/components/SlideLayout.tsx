"use client";

import { Children, useCallback, useEffect, useRef } from "react";
import type { ReactNode } from "react";
import { useSlides } from "./SlideContext";

export default function SlideLayout({
  children,
  labels,
}: {
  children: ReactNode;
  labels: string[];
}) {
  const { current, goTo, total } = useSlides();
  const containerRef = useRef<HTMLDivElement>(null);
  const sectionRefs = useRef<(HTMLDivElement | null)[]>([]);
  const slides = Children.toArray(children);
  const skipObserver = useRef(false);

  const scrollTo = useCallback(
    (index: number) => {
      const clamped = Math.max(0, Math.min(total - 1, index));
      const section = sectionRefs.current[clamped];
      if (!section) return;
      skipObserver.current = true;
      goTo(clamped);
      section.scrollIntoView({ behavior: "smooth" });
      setTimeout(() => {
        skipObserver.current = false;
      }, 800);
    },
    [goTo, total]
  );

  // Keep dots / nav in sync while the user scrolls freely
  useEffect(() => {
    const container = containerRef.current;
    if (!container) return;

    const observer = new IntersectionObserver(
      (entries) => {
        if (skipObserver.current) return;
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            const index = sectionRefs.current.indexOf(
              entry.target as HTMLDivElement
            );
            if (index !== -1) goTo(index);
          }
        });
      },
      { root: container, rootMargin: "-40% 0px -40% 0px", threshold: 0 }
    );

    const refs = sectionRefs.current;
    refs.forEach((s) => s && observer.observe(s));
    return () => observer.disconnect();
  }, [goTo]);

  // Keyboard navigation
  useEffect(() => {
    const handler = (e: KeyboardEvent) => {
      if (e.key === "ArrowDown" || e.key === "ArrowRight")
        scrollTo(current + 1);
      if (e.key === "ArrowUp" || e.key === "ArrowLeft")
        scrollTo(current - 1);
    };
    window.addEventListener("keydown", handler);
    return () => window.removeEventListener("keydown", handler);
  }, [current, scrollTo]);

  return (
    <div ref={containerRef} className="h-full overflow-y-auto">
      {slides.map((slide, i) => (
        <div
          key={i}
          ref={(el) => {
            sectionRefs.current[i] = el;
          }}
          className="min-h-full"
        >
          {slide}
        </div>
      ))}

      {/* Prev arrow — left side */}
      {current > 0 && (
        <button
          type="button"
          onClick={() => scrollTo(current - 1)}
          aria-label="Previous section"
          className="fixed left-3 top-1/2 z-30 flex h-11 w-11 -translate-y-1/2 items-center justify-center rounded-full border border-border bg-card/80 text-foreground shadow-md backdrop-blur-sm transition-colors hover:border-accent hover:text-accent sm:left-5"
        >
          <span className="select-none text-xl leading-none">‹</span>
        </button>
      )}

      {/* Next arrow — right side */}
      {current < total - 1 && (
        <button
          type="button"
          onClick={() => scrollTo(current + 1)}
          aria-label="Next section"
          className="fixed right-3 top-1/2 z-30 flex h-11 w-11 -translate-y-1/2 items-center justify-center rounded-full border border-border bg-card/80 text-foreground shadow-md backdrop-blur-sm transition-colors hover:border-accent hover:text-accent sm:right-5"
        >
          <span className="select-none text-xl leading-none">›</span>
        </button>
      )}

      {/* Dot indicators */}
      <div className="fixed bottom-5 left-1/2 z-30 flex -translate-x-1/2 items-center gap-1.5">
        {labels.map((label, i) => (
          <button
            key={label}
            type="button"
            onClick={() => scrollTo(i)}
            aria-label={`Go to ${label}`}
            className={`h-1.5 rounded-full transition-all duration-300 ${
              i === current
                ? "w-6 bg-accent"
                : "w-1.5 bg-muted-foreground/30 hover:bg-muted-foreground/60"
            }`}
          />
        ))}
      </div>
    </div>
  );
}
