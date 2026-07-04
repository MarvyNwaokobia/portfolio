"use client";

import { motion, useReducedMotion, type Variants } from "framer-motion";
import HeroVisual from "@/components/HeroVisual";
import { useSlides } from "@/components/SlideContext";

const container: Variants = {
  hidden: {},
  visible: {
    transition: { staggerChildren: 0.1, delayChildren: 0.05 },
  },
};

const item: Variants = {
  hidden: { opacity: 0, y: 18, filter: "blur(6px)" },
  visible: {
    opacity: 1,
    y: 0,
    filter: "blur(0px)",
    transition: { duration: 0.65, ease: [0.16, 1, 0.3, 1] },
  },
};

const stack = ["TypeScript", "React", "Next.js", "Node.js", "Rust", "Solidity"];

export default function SlideHome() {
  const { next, goTo } = useSlides();
  const shouldReduceMotion = useReducedMotion();

  return (
    <section className="relative flex h-full w-full items-center overflow-hidden px-6 py-10">
      {/* Ambient glow */}
      <div aria-hidden className="pointer-events-none absolute inset-0 -z-10 overflow-hidden">
        <div className="animate-aurora absolute left-1/2 top-[-15%] h-105 w-140 -translate-x-1/2 rounded-full bg-accent/12 blur-[130px]" />
      </div>

      {/* Open to work badge */}
      <div
        aria-hidden
        className="absolute right-16 top-6 hidden h-20 w-20 sm:block lg:right-20 lg:top-10"
      >
        <svg viewBox="0 0 100 100" className="animate-spin-slow h-full w-full text-accent">
          <defs>
            <path
              id="badge-circle-home"
              d="M 50, 50 m -38, 0 a 38,38 0 1,1 76,0 a 38,38 0 1,1 -76,0"
            />
          </defs>
          <text fontSize="8.2" letterSpacing="2" className="fill-current font-mono uppercase">
            <textPath href="#badge-circle-home">Open to work · Open to work ·</textPath>
          </text>
        </svg>
        <span className="absolute inset-0 m-auto flex h-9 w-9 items-center justify-center rounded-full bg-accent text-accent-foreground">
          <span aria-hidden className="text-base leading-none">↗</span>
        </span>
      </div>

      <div className="mx-auto grid w-full max-w-6xl items-center gap-14 lg:grid-cols-[1.1fr_0.9fr]">
        <motion.div initial="hidden" animate="visible" variants={container}>
          <motion.p variants={item} className="font-mono text-sm uppercase tracking-[0.2em] text-accent">
            Hi, I&apos;m Marvy
          </motion.p>

          <motion.h1
            variants={item}
            className="mt-5 font-display text-4xl font-semibold tracking-tight text-foreground sm:text-5xl xl:text-6xl"
          >
            Full-stack developer,
            <br />
            <span className="text-accent">Web2 and Web3.</span>
          </motion.h1>

          <motion.p
            variants={item}
            className="mt-6 max-w-xl text-balance text-lg leading-relaxed text-muted-foreground"
          >
            I build full-stack applications and on-chain protocols — React
            frontends, Node.js backends, REST APIs, and when the problem calls
            for it, smart contracts, ZK proofs, and cryptographic systems.
          </motion.p>

          <motion.div variants={item} className="mt-8 flex flex-wrap items-center gap-3">
            <button
              type="button"
              onClick={() => goTo(1)}
              className="inline-flex h-11 items-center justify-center rounded-full bg-accent px-6 text-sm font-medium text-accent-foreground shadow-[0_0_24px_-6px_var(--accent)] transition-colors hover:bg-accent/90"
            >
              View projects
            </button>
            <button
              type="button"
              onClick={() => goTo(5)}
              className="inline-flex h-11 items-center justify-center rounded-full border border-border px-6 text-sm font-medium text-foreground transition-colors hover:border-accent hover:text-accent"
            >
              Get in touch
            </button>
          </motion.div>

          <motion.ul variants={item} className="mt-7 flex flex-wrap items-center gap-2">
            {stack.map((tech) => (
              <li
                key={tech}
                className="rounded-full border border-border bg-card/60 px-3 py-1 font-mono text-[11px] text-muted-foreground"
              >
                {tech}
              </li>
            ))}
          </motion.ul>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, scale: shouldReduceMotion ? 1 : 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.9, ease: [0.16, 1, 0.3, 1], delay: 0.15 }}
          className="hidden lg:flex lg:justify-center"
        >
          <HeroVisual />
        </motion.div>
      </div>

      {/* Scroll hint */}
      <motion.button
        type="button"
        onClick={next}
        aria-label="Next slide"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.4, duration: 0.6 }}
        className="absolute bottom-14 left-1/2 -translate-x-1/2 flex flex-col items-center gap-1 text-muted-foreground/50 transition-colors hover:text-accent lg:bottom-10"
      >
        <motion.span
          animate={{ y: [0, 4, 0] }}
          transition={{ repeat: Infinity, duration: 1.6, ease: "easeInOut" }}
          className="text-base leading-none"
        >
          ↓
        </motion.span>
      </motion.button>
    </section>
  );
}
