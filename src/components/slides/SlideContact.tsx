"use client";

import { motion, type Variants } from "framer-motion";

const container: Variants = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.1, delayChildren: 0.1 } },
};

const item: Variants = {
  hidden: { opacity: 0, y: 16, filter: "blur(6px)" },
  visible: {
    opacity: 1,
    y: 0,
    filter: "blur(0px)",
    transition: { duration: 0.6, ease: [0.16, 1, 0.3, 1] },
  },
};

const links = [
  {
    label: "Email",
    href: "mailto:marvynwaokobia@gmail.com",
    value: "marvynwaokobia@gmail.com",
    icon: "✉",
  },
  {
    label: "GitHub",
    href: "https://github.com/MarvyNwaokobia",
    value: "github.com/MarvyNwaokobia",
    icon: "⌨",
  },
  {
    label: "Twitter / X",
    href: "https://x.com/marvysmind",
    value: "@marvysmind",
    icon: "◈",
  },
];

export default function SlideContact() {
  return (
    <div className="flex flex-1 items-center justify-center px-8 py-10 sm:px-14 lg:px-20">
      {/* Ambient glow */}
      <div aria-hidden className="pointer-events-none absolute inset-0 -z-10 overflow-hidden">
        <div className="absolute left-1/2 top-1/2 h-120 w-120 -translate-x-1/2 -translate-y-1/2 rounded-full bg-accent/8 blur-[120px]" />
      </div>

      <div className="mx-auto w-full max-w-3xl">
        <motion.div
          variants={container}
          initial="hidden"
          animate="visible"
          className="text-center"
        >
          <motion.p
            variants={item}
            className="font-mono text-xs uppercase tracking-[0.3em] text-accent/70"
          >
            06 — Contact
          </motion.p>

          <motion.h2
            variants={item}
            className="mt-3 font-display text-4xl font-semibold tracking-tight text-foreground sm:text-5xl"
          >
            Let&apos;s Build{" "}
            <span className="text-accent">Together.</span>
          </motion.h2>

          <motion.p
            variants={item}
            className="mx-auto mt-4 max-w-lg text-balance text-base leading-relaxed text-muted-foreground"
          >
            Whether it&apos;s a full-stack product, a DeFi protocol, or something
            that spans both — I&apos;m interested. Let&apos;s talk.
          </motion.p>
        </motion.div>

        {/* Contact card */}
        <motion.div
          initial={{ opacity: 0, y: 24, scale: 0.97 }}
          animate={{ opacity: 1, y: 0, scale: 1 }}
          transition={{ duration: 0.65, ease: [0.16, 1, 0.3, 1], delay: 0.35 }}
          className="relative mt-10 overflow-hidden rounded-2xl border border-border p-1"
          style={{
            background:
              "linear-gradient(135deg, color-mix(in srgb, var(--accent) 12%, transparent), color-mix(in srgb, #818cf8 10%, transparent))",
          }}
        >
          <div className="rounded-xl bg-card/90 p-7 backdrop-blur-sm">
            <ul className="space-y-4">
              {links.map((link) => (
                <li key={link.label}>
                  <a
                    href={link.href}
                    target={link.href.startsWith("mailto") ? undefined : "_blank"}
                    rel="noreferrer noopener"
                    className="group flex items-center gap-4 rounded-xl border border-border/60 bg-background/60 px-5 py-4 transition-colors hover:border-accent/60 hover:bg-muted/40"
                  >
                    <span
                      aria-hidden
                      className="flex h-9 w-9 shrink-0 items-center justify-center rounded-lg bg-accent/10 font-mono text-base text-accent transition-colors group-hover:bg-accent/20"
                    >
                      {link.icon}
                    </span>
                    <div className="min-w-0">
                      <p className="font-mono text-[10px] uppercase tracking-widest text-muted-foreground">
                        {link.label}
                      </p>
                      <p className="mt-0.5 truncate text-sm font-medium text-foreground transition-colors group-hover:text-accent">
                        {link.value}
                      </p>
                    </div>
                    <span
                      aria-hidden
                      className="ml-auto shrink-0 text-muted-foreground/40 transition-all group-hover:translate-x-0.5 group-hover:-translate-y-0.5 group-hover:text-accent"
                    >
                      ↗
                    </span>
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </motion.div>

        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.9, duration: 0.5 }}
          className="mt-6 text-center font-mono text-[11px] text-muted-foreground/50"
        >
          marvys<span className="text-accent/70">mind</span> — built with Next.js &amp; Framer Motion
        </motion.p>
      </div>
    </div>
  );
}
