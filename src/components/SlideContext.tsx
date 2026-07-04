"use client";

import { createContext, useCallback, useContext, useState } from "react";
import type { ReactNode } from "react";

type Direction = 1 | -1;

type SlideContextValue = {
  current: number;
  total: number;
  direction: Direction;
  goTo: (index: number) => void;
  next: () => void;
  prev: () => void;
};

export const SlideContext = createContext<SlideContextValue>({
  current: 0,
  total: 0,
  direction: 1,
  goTo: () => {},
  next: () => {},
  prev: () => {},
});

export function useSlides() {
  return useContext(SlideContext);
}

export function SlideProvider({ total, children }: { total: number; children: ReactNode }) {
  const [current, setCurrent] = useState(0);
  const [direction, setDirection] = useState<Direction>(1);

  const goTo = useCallback(
    (index: number) => {
      setCurrent((prev) => {
        const clamped = Math.max(0, Math.min(total - 1, index));
        setDirection(clamped >= prev ? 1 : -1);
        return clamped;
      });
    },
    [total]
  );

  const next = useCallback(() => {
    setCurrent((prev) => {
      const n = Math.min(total - 1, prev + 1);
      if (n !== prev) setDirection(1);
      return n;
    });
  }, [total]);

  const prev = useCallback(() => {
    setCurrent((prev) => {
      const n = Math.max(0, prev - 1);
      if (n !== prev) setDirection(-1);
      return n;
    });
  }, []);

  return (
    <SlideContext.Provider value={{ current, total, direction, goTo, next, prev }}>
      {children}
    </SlideContext.Provider>
  );
}
