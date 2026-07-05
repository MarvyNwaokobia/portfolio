"use client";

import { useState } from "react";
import { AnimatePresence, motion, type Variants } from "framer-motion";
import { projects, type Project } from "@/data/projects";
import ProjectCard from "@/components/ProjectCard";

const container: Variants = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.08, delayChildren: 0.1 } },
};

type Props = {
  category: Project["category"];
  subtitle: string;
  description: string;
  slideNumber: string;
};

export default function SlideProjects({ category, subtitle, description, slideNumber }: Props) {
  const [revealed, setRevealed] = useState(false);
  const filtered = projects.filter((p) => p.category === category);

  return (
    <div className="px-10 pb-16 pt-6 sm:px-16 lg:px-20">
      {/* Category label */}
      <motion.p
        initial={{ opacity: 0, y: -12 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, ease: [0.16, 1, 0.3, 1] }}
        className="text-center font-mono text-xs uppercase tracking-[0.3em] text-accent/70"
      >
        {slideNumber} — Projects
      </motion.p>

      <motion.h2
        initial={{ opacity: 0, y: -10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.55, ease: [0.16, 1, 0.3, 1], delay: 0.05 }}
        className="mt-1 text-center font-display text-3xl font-semibold tracking-tight text-foreground sm:text-4xl"
      >
        {category}
      </motion.h2>

      {/* Subtitle + description */}
      <div className="mt-4 border-l-2 border-accent/40 pl-4">
        <motion.p
          initial={{ opacity: 0, x: -10 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.5, ease: [0.16, 1, 0.3, 1], delay: 0.12 }}
          className="font-mono text-sm font-medium uppercase tracking-wider text-accent"
        >
          {subtitle}
        </motion.p>
        <motion.p
          initial={{ opacity: 0, x: -10 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.5, ease: [0.16, 1, 0.3, 1], delay: 0.18 }}
          className="mt-1 text-sm leading-relaxed text-muted-foreground"
        >
          {description}
        </motion.p>
      </div>

      {/* Reveal gate / project cards */}
      <AnimatePresence mode="wait">
        {!revealed ? (
          <motion.div
            key="gate"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0, scale: 0.92, filter: "blur(6px)" }}
            transition={{ duration: 0.4, ease: [0.16, 1, 0.3, 1] }}
            className="mt-10 flex flex-col items-center gap-4 py-10"
          >
            <p className="font-mono text-xs uppercase tracking-[0.25em] text-muted-foreground/60">
              {filtered.length} project{filtered.length === 1 ? "" : "s"} — see them come together
            </p>
            <motion.button
              type="button"
              onClick={() => setRevealed(true)}
              animate={{ scale: [1, 1.05, 1] }}
              transition={{ scale: { repeat: Infinity, duration: 2.2, ease: "easeInOut" } }}
              whileHover={{ scale: 1.08 }}
              whileTap={{ scale: 0.94 }}
              className="inline-flex h-14 items-center justify-center gap-2 rounded-full bg-accent px-8 text-sm font-medium text-accent-foreground shadow-[0_0_32px_-6px_var(--accent)] transition-colors hover:bg-accent/90"
            >
              <span aria-hidden className="text-lg leading-none">
                ✦
              </span>
              Reveal the work
            </motion.button>
          </motion.div>
        ) : (
          <motion.div
            key="grid"
            variants={container}
            initial="hidden"
            animate="visible"
            className="mt-5 grid gap-4 sm:grid-cols-2"
          >
            {filtered.map((project, i) => (
              <ProjectCard key={project.name} project={project} index={i} />
            ))}
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}
