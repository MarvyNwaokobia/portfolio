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

export default function Hero() {
  return (
    <section
      id="top"
      className="relative overflow-hidden border-b border-border/80 px-6 py-24 sm:py-32"
    >
      <div aria-hidden className="pointer-events-none absolute inset-0 -z-10 overflow-hidden">
        <div className="animate-aurora absolute left-1/2 top-[-10%] h-105 w-140 -translate-x-[60%] rounded-full bg-accent/25 blur-[110px]" />
        <div className="animate-aurora-slow absolute right-[10%] top-[10%] h-90 w-110 rounded-full bg-accent-2/20 blur-[110px]" />
        <div className="animate-aurora absolute bottom-[-15%] left-[20%] h-80 w-105 rounded-full bg-accent-3/15 blur-[110px]" />
      </div>

      <motion.div
        className="mx-auto max-w-3xl text-center"
        initial="hidden"
        animate="visible"
        variants={container}
      >
        <motion.p variants={item} className="font-mono text-sm text-accent">
          Hi, I&apos;m Marvy
        </motion.p>
        <motion.h1
          variants={item}
          className="mt-4 text-4xl font-semibold tracking-tight text-foreground sm:text-5xl"
        >
          Full-stack &amp; protocol engineer.
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
            className="inline-flex h-11 items-center justify-center rounded-md bg-accent px-6 text-sm font-medium text-accent-foreground shadow-[0_0_24px_-6px_var(--accent)] transition-colors hover:bg-accent/90"
          >
            View projects
          </MagneticButton>
          <MagneticButton
            href="#contact"
            className="inline-flex h-11 items-center justify-center rounded-md border border-border px-6 text-sm font-medium text-foreground transition-colors hover:border-accent hover:text-accent"
          >
            Get in touch
          </MagneticButton>
        </motion.div>
      </motion.div>
    </section>
  );
}
