"use client";

import ThemeToggle from "./ThemeToggle";
import { useSlides } from "./SlideContext";

const navLinks = [
  { label: "Home", slideIndex: 0, range: [0, 0] as [number, number] },
  { label: "Projects", slideIndex: 1, range: [1, 3] as [number, number] },
  { label: "Toolbox", slideIndex: 4, range: [4, 4] as [number, number] },
  { label: "Contact", slideIndex: 5, range: [5, 5] as [number, number] },
];

export default function Nav() {
  const { current, goTo } = useSlides();

  return (
    <header className="z-40 shrink-0 border-b border-border/80 bg-background/85 backdrop-blur supports-backdrop-filter:bg-background/70">
      <nav className="mx-auto flex max-w-6xl items-center justify-between gap-4 px-6 py-4">
        <button
          type="button"
          onClick={() => goTo(0)}
          className="font-mono text-sm font-medium tracking-tight text-foreground transition-colors hover:text-accent"
        >
          marvys<span className="text-accent">mind</span>
        </button>

        {/* Desktop nav */}
        <ul className="hidden items-center gap-1 rounded-full border border-border bg-card/60 p-1 sm:flex">
          {navLinks.map((link) => {
            const isActive = current >= link.range[0] && current <= link.range[1];
            return (
              <li key={link.label}>
                <button
                  type="button"
                  onClick={() => goTo(link.slideIndex)}
                  className={`relative rounded-full px-4 py-1.5 text-sm transition-colors ${
                    isActive
                      ? "bg-accent text-accent-foreground"
                      : "text-muted-foreground hover:text-foreground"
                  }`}
                >
                  {link.label}
                </button>
              </li>
            );
          })}
        </ul>

        <div className="flex items-center gap-2">
          <ThemeToggle />
          <button
            type="button"
            onClick={() => goTo(5)}
            className="hidden h-9 items-center justify-center rounded-full bg-accent px-5 text-sm font-medium text-accent-foreground transition-colors hover:bg-accent/90 sm:inline-flex"
          >
            Contact
          </button>
        </div>
      </nav>

      {/* Mobile nav — in normal flow, adds height on small screens */}
      <ul className="flex items-center gap-4 overflow-x-auto border-t border-border/80 px-6 py-2.5 sm:hidden">
        {navLinks.map((link) => (
          <li key={link.label}>
            <button
              type="button"
              onClick={() => goTo(link.slideIndex)}
              className={`whitespace-nowrap text-sm transition-colors ${
                current >= link.range[0] && current <= link.range[1]
                  ? "text-accent"
                  : "text-muted-foreground hover:text-foreground"
              }`}
            >
              {link.label}
            </button>
          </li>
        ))}
      </ul>
    </header>
  );
}
