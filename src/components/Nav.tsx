"use client";

import { useEffect, useState } from "react";

const links = [
  { href: "#skills", label: "Skills", id: "skills" },
  { href: "#projects", label: "Projects", id: "projects" },
  { href: "#about", label: "About", id: "about" },
  { href: "#contact", label: "Contact", id: "contact" },
];

export default function Nav() {
  const [active, setActive] = useState<string | null>(null);

  useEffect(() => {
    const sections = links
      .map((link) => document.getElementById(link.id))
      .filter((el): el is HTMLElement => el !== null);

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setActive(entry.target.id);
          }
        });
      },
      { rootMargin: "-40% 0px -50% 0px", threshold: 0 }
    );

    sections.forEach((section) => observer.observe(section));
    return () => observer.disconnect();
  }, []);

  return (
    <header className="sticky top-0 z-40 border-b border-border/80 bg-background/85 backdrop-blur supports-backdrop-filter:bg-background/70">
      <nav className="mx-auto flex max-w-6xl items-center justify-between gap-4 px-6 py-4">
        <a
          href="#top"
          className="font-mono text-sm font-medium tracking-tight text-foreground hover:text-accent transition-colors"
        >
          marvy<span className="text-accent">.</span>dev
        </a>
        <ul className="hidden items-center gap-1 rounded-full border border-border bg-card/60 p-1 sm:flex">
          {links.map((link) => {
            const isActive = active === link.id;
            return (
              <li key={link.href}>
                <a
                  href={link.href}
                  className={`relative rounded-full px-4 py-1.5 text-sm transition-colors ${
                    isActive
                      ? "bg-accent text-accent-foreground"
                      : "text-muted-foreground hover:text-foreground"
                  }`}
                >
                  {link.label}
                </a>
              </li>
            );
          })}
        </ul>
        <a
          href="#contact"
          className="inline-flex h-9 items-center justify-center rounded-full bg-accent px-5 text-sm font-medium text-accent-foreground transition-colors hover:bg-accent/90"
        >
          Contact
        </a>
      </nav>
      <ul className="flex items-center gap-4 overflow-x-auto border-t border-border/80 px-6 py-2.5 sm:hidden">
        {links.map((link) => (
          <li key={link.href}>
            <a
              href={link.href}
              className={`whitespace-nowrap text-sm transition-colors ${
                active === link.id
                  ? "text-accent"
                  : "text-muted-foreground hover:text-foreground"
              }`}
            >
              {link.label}
            </a>
          </li>
        ))}
      </ul>
    </header>
  );
}
