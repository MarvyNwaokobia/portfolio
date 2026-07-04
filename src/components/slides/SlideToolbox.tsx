"use client";

import { motion, type Variants } from "framer-motion";
import { skills } from "@/data/projects";

const cardColors: Record<keyof typeof skills, { bg: string; border: string; title: string; chip: string }> = {
  Languages: {
    bg: "bg-amber-400/10 dark:bg-amber-400/8",
    border: "border-amber-400/30",
    title: "text-amber-600 dark:text-amber-400",
    chip: "bg-amber-400/15 text-amber-700 dark:text-amber-300 border-amber-400/20",
  },
  Frontend: {
    bg: "bg-pink-500/10 dark:bg-pink-500/8",
    border: "border-pink-500/30",
    title: "text-pink-600 dark:text-pink-400",
    chip: "bg-pink-500/15 text-pink-700 dark:text-pink-300 border-pink-500/20",
  },
  Backend: {
    bg: "bg-teal-500/10 dark:bg-teal-500/8",
    border: "border-teal-500/30",
    title: "text-teal-600 dark:text-teal-400",
    chip: "bg-teal-500/15 text-teal-700 dark:text-teal-300 border-teal-500/20",
  },
  "Web3 & Protocols": {
    bg: "bg-violet-500/10 dark:bg-violet-500/8",
    border: "border-violet-500/30",
    title: "text-violet-600 dark:text-violet-400",
    chip: "bg-violet-500/15 text-violet-700 dark:text-violet-300 border-violet-500/20",
  },
  Cryptography: {
    bg: "bg-indigo-500/10 dark:bg-indigo-500/8",
    border: "border-indigo-500/30",
    title: "text-indigo-600 dark:text-indigo-400",
    chip: "bg-indigo-500/15 text-indigo-700 dark:text-indigo-300 border-indigo-500/20",
  },
  Tooling: {
    bg: "bg-slate-500/10 dark:bg-slate-500/8",
    border: "border-slate-400/30",
    title: "text-slate-600 dark:text-slate-400",
    chip: "bg-slate-400/15 text-slate-600 dark:text-slate-300 border-slate-400/20",
  },
};

const container: Variants = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.07, delayChildren: 0.15 } },
};

const cardVariant: Variants = {
  hidden: { opacity: 0, y: 20, filter: "blur(8px)" },
  visible: {
    opacity: 1,
    y: 0,
    filter: "blur(0px)",
    transition: { duration: 0.55, ease: [0.16, 1, 0.3, 1] },
  },
};

export default function SlideToolbox() {
  const categories = Object.entries(skills) as [keyof typeof skills, string[]][];

  return (
    <div className="px-10 pb-16 pt-6 sm:px-16 lg:px-20">
      <motion.p
        initial={{ opacity: 0, y: -10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="text-center font-mono text-xs uppercase tracking-[0.3em] text-accent/70"
      >
        05 — Toolbox
      </motion.p>

      <motion.h2
        initial={{ opacity: 0, y: -8 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.55, delay: 0.05 }}
        className="mt-1 text-center font-display text-3xl font-semibold tracking-tight text-foreground sm:text-4xl"
      >
        My Tech Stack
      </motion.h2>

      <motion.p
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.5, delay: 0.1 }}
        className="mt-2 text-center text-sm text-muted-foreground"
      >
        Tools and technologies I reach for regularly.
      </motion.p>

      <motion.div
        variants={container}
        initial="hidden"
        animate="visible"
        className="mt-6 grid gap-3 sm:grid-cols-2 lg:grid-cols-3"
      >
        {categories.map(([category, items]) => {
          const colors = cardColors[category];
          return (
            <motion.div
              key={category}
              variants={cardVariant}
              className={`flex flex-col rounded-xl border p-4 ${colors.bg} ${colors.border}`}
            >
              <h3 className={`font-mono text-xs font-semibold uppercase tracking-[0.18em] ${colors.title}`}>
                {category}
              </h3>
              <ul className="mt-3 flex flex-wrap gap-1.5">
                {items.map((skill) => (
                  <li
                    key={skill}
                    className={`rounded-full border px-2.5 py-0.5 text-[10px] font-medium ${colors.chip}`}
                  >
                    {skill}
                  </li>
                ))}
              </ul>
            </motion.div>
          );
        })}
      </motion.div>
    </div>
  );
}
