"use client";

import { motion, type Variants } from "framer-motion";
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

      {/* Project cards */}
      <motion.div
        variants={container}
        initial="hidden"
        animate="visible"
        className="mt-5 grid gap-4 sm:grid-cols-2"
      >
        {filtered.map((project, i) => (
          <ProjectCard key={project.name} project={project} index={i} />
        ))}
      </motion.div>
    </div>
  );
}
