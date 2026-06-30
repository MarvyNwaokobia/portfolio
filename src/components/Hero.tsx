"use client";

import { motion, type Variants } from "framer-motion";
import MagneticButton from "./MagneticButton";

const container: Variants = {
  hidden: {},
  visible: {
    transition: { staggerChildren: 0.12, delayChildren: 0.1 },
  },
};

const item: Variants = {
  hidden: { opacity: 0, y: 18 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, ease: [0.16, 1, 0.3, 1] },
  },
};

const stack = ["Solidity", "Rust", "Circom", "Soroban", "FHEVM", "Cairo"];

export default function Hero() {
  return (
    <section
      id="top"
      className="relative overflow-hidden border-b border-border/80 px-6 py-24 sm:py-32"
    >
      <div aria-hidden className="pointer-events-none absolute inset-0 -z-10 overflow-hidden">
        <div className="animate-aurora absolute left-1/2 top-[-15%] h-105 w-140 -translate-x-1/2 rounded-full bg-accent/12 blur-[130px]" />
      </div>

      <div
        aria-hidden
        className="absolute right-6 top-6 hidden h-24 w-24 sm:block lg:right-10 lg:top-10"
      >
        <svg viewBox="0 0 100 100" className="animate-spin-slow h-full w-full text-accent">
          <defs>
            <path
              id="badge-circle"
              d="M 50, 50 m -38, 0 a 38,38 0 1,1 76,0 a 38,38 0 1,1 -76,0"
            />
          </defs>
          <text fontSize="8.2" letterSpacing="2" className="fill-current font-mono uppercase">
            <textPath href="#badge-circle">
              Open to work · Open to work ·
            </textPath>
          </text>
        </svg>
        <span className="absolute inset-0 m-auto flex h-9 w-9 items-center justify-center rounded-full bg-accent text-accent-foreground">
          <span aria-hidden className="text-base leading-none">↗</span>
        </span>
      </div>

      <motion.div
        className="mx-auto max-w-3xl text-center"
        initial="hidden"
        animate="visible"
        variants={container}
      >
        <motion.p
          variants={item}
          className="font-mono text-sm uppercase tracking-[0.2em] text-accent"
        >
          Hi, I&apos;m Marvy
        </motion.p>
        <motion.h1
          variants={item}
          className="mt-5 font-display text-4xl font-semibold tracking-tight text-foreground sm:text-6xl"
        >
          Full-stack engineer,
          <br />
          <span className="text-accent">building secure protocols.</span>
        </motion.h1>
        <motion.p
          variants={item}
          className="mt-6 text-balance text-lg leading-relaxed text-muted-foreground"
        >
          I build secure systems end-to-end — smart contracts, cryptography,
          backends, and the apps on top of them. Most of my work sits at the
          intersection of applied cryptography and financial infrastructure:
          zero-knowledge proofs, fully homomorphic encryption, and the
          payments and protocol rails built on top of them.
        </motion.p>
        <motion.div
          variants={item}
          className="mt-10 flex flex-wrap items-center justify-center gap-4"
        >
          <MagneticButton
            href="#projects"
            className="inline-flex h-11 items-center justify-center rounded-full bg-accent px-6 text-sm font-medium text-accent-foreground shadow-[0_0_24px_-6px_var(--accent)] transition-colors hover:bg-accent/90"
          >
            View projects
          </MagneticButton>
          <MagneticButton
            href="#contact"
            className="inline-flex h-11 items-center justify-center rounded-full border border-border px-6 text-sm font-medium text-foreground transition-colors hover:border-accent hover:text-accent"
          >
            Get in touch
          </MagneticButton>
        </motion.div>
        <motion.ul
          variants={item}
          className="mt-8 flex flex-wrap items-center justify-center gap-2"
        >
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
    </section>
  );
}
