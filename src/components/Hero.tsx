"use client";

import { motion, useReducedMotion, useScroll, useTransform, type Variants } from "framer-motion";
import { useRef } from "react";
import MagneticButton from "./MagneticButton";
import HeroVisual from "./HeroVisual";

const container: Variants = {
  hidden: {},
  visible: {
    transition: { staggerChildren: 0.12, delayChildren: 0.1 },
  },
};

const item: Variants = {
  hidden: { opacity: 0, y: 18, filter: "blur(6px)" },
  visible: {
    opacity: 1,
    y: 0,
    filter: "blur(0px)",
    transition: { duration: 0.7, ease: [0.16, 1, 0.3, 1] },
  },
};

const stack = ["Solidity", "Rust", "Circom", "Soroban", "FHEVM", "Cairo"];

export default function Hero() {
  const shouldReduceMotion = useReducedMotion();
  const sectionRef = useRef<HTMLElement>(null);
  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start start", "end start"],
  });
  const visualY = useTransform(scrollYProgress, [0, 1], [0, shouldReduceMotion ? 0 : 80]);
  const visualOpacity = useTransform(scrollYProgress, [0, 0.8], [1, 0]);

  return (
    <section
      id="top"
      ref={sectionRef}
      className="relative min-h-[90svh] overflow-hidden px-6 py-24 sm:py-32 flex items-center after:pointer-events-none after:absolute after:inset-x-0 after:bottom-0 after:h-32 after:bg-linear-to-t after:from-background after:to-transparent"
    >
      <div aria-hidden className="pointer-events-none absolute inset-0 -z-10 overflow-hidden">
        <div className="animate-aurora absolute left-1/2 top-[-15%] h-105 w-140 -translate-x-1/2 rounded-full bg-accent/12 blur-[130px]" />
      </div>

      <div
        aria-hidden
        className="absolute right-6 top-6 hidden h-20 w-20 sm:block lg:right-10 lg:top-10"
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

      <div className="mx-auto grid max-w-6xl items-center gap-16 lg:grid-cols-[1.1fr_0.9fr]">
        <motion.div initial="hidden" animate="visible" variants={container}>
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
            className="mt-6 max-w-xl text-balance text-lg leading-relaxed text-muted-foreground"
          >
            I build secure systems end-to-end — smart contracts, cryptography,
            backends, and the apps on top of them. Most of my work sits at the
            intersection of applied cryptography and financial infrastructure:
            zero-knowledge proofs, fully homomorphic encryption, and the
            payments and protocol rails built on top of them.
          </motion.p>
          <motion.div variants={item} className="mt-10 flex flex-wrap items-center gap-4">
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
          <motion.ul variants={item} className="mt-8 flex flex-wrap items-center gap-2">
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
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.9, ease: [0.16, 1, 0.3, 1], delay: 0.2 }}
          className="hidden lg:block"
        >
          <motion.div style={{ y: visualY, opacity: visualOpacity }}>
            <HeroVisual />
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
