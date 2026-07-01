"use client";

import {
  motion,
  useMotionTemplate,
  useMotionValue,
  useReducedMotion,
  useSpring,
} from "framer-motion";
import type { MouseEvent } from "react";
import type { Project } from "@/data/projects";

const TILT_RANGE = 6;

const categoryStyle: Record<
  Project["category"],
  { dot: string; text: string; glow: string }
> = {
  "Privacy & Cryptography": {
    dot: "bg-emerald-500",
    text: "text-emerald-400",
    glow: "rgba(34,197,94,0.14)",
  },
  "Payments & Financial Infra": {
    dot: "bg-indigo-500",
    text: "text-indigo-400",
    glow: "rgba(129,140,248,0.14)",
  },
  "Apps & Systems": {
    dot: "bg-violet-500",
    text: "text-violet-400",
    glow: "rgba(192,132,252,0.14)",
  },
};

export default function ProjectCard({
  project,
  index = 0,
}: {
  project: Project;
  index?: number;
}) {
  const shouldReduceMotion = useReducedMotion();
  const rotateX = useMotionValue(0);
  const rotateY = useMotionValue(0);
  const springRotateX = useSpring(rotateX, { stiffness: 200, damping: 22 });
  const springRotateY = useSpring(rotateY, { stiffness: 200, damping: 22 });
  const glowX = useMotionValue(50);
  const glowY = useMotionValue(50);

  const style = categoryStyle[project.category];
  const glowBg = useMotionTemplate`radial-gradient(260px circle at ${glowX}% ${glowY}%, ${style.glow}, transparent 70%)`;
  const num = String(index + 1).padStart(2, "0");

  function handleMouseMove(e: MouseEvent<HTMLAnchorElement>) {
    const rect = e.currentTarget.getBoundingClientRect();
    const px = (e.clientX - rect.left) / rect.width;
    const py = (e.clientY - rect.top) / rect.height;
    glowX.set(px * 100);
    glowY.set(py * 100);
    if (shouldReduceMotion) return;
    rotateY.set((px - 0.5) * TILT_RANGE * 2);
    rotateX.set(-(py - 0.5) * TILT_RANGE * 2);
  }

  function handleMouseLeave() {
    rotateX.set(0);
    rotateY.set(0);
  }

  return (
    <motion.div
      layout
      initial={{ opacity: 0, y: 22, filter: "blur(8px)" }}
      animate={{ opacity: 1, y: 0, filter: "blur(0px)" }}
      exit={{ opacity: 0, y: -10, filter: "blur(8px)" }}
      transition={{
        duration: 0.48,
        ease: [0.16, 1, 0.3, 1],
        delay: Math.min(index, 8) * 0.07,
      }}
      className="group relative h-full"
    >
      <motion.a
        href={project.href}
        target="_blank"
        rel="noreferrer noopener"
        onMouseMove={handleMouseMove}
        onMouseLeave={handleMouseLeave}
        style={{
          rotateX: springRotateX,
          rotateY: springRotateY,
          transformPerspective: 900,
        }}
        className="relative flex h-full flex-col overflow-hidden rounded-xl border border-border/50 bg-card/40 p-6 backdrop-blur-sm transition-[border-color,box-shadow] duration-300 hover:border-accent/35 hover:shadow-[0_0_48px_-14px_var(--accent)]"
      >
        {/* Cursor-tracking glow */}
        <motion.div
          aria-hidden
          className="pointer-events-none absolute inset-0 opacity-0 transition-opacity duration-300 group-hover:opacity-100"
          style={{ background: glowBg }}
        />

        {/* Faded background number */}
        <span
          aria-hidden
          className="pointer-events-none absolute -right-1 top-1 select-none font-mono text-8xl font-bold leading-none text-border/15 transition-colors duration-300 group-hover:text-accent/8"
        >
          {num}
        </span>

        {/* Category + arrow row */}
        <div className="relative flex items-center justify-between gap-2">
          <div className="flex items-center gap-1.5">
            <span className={`h-1.5 w-1.5 shrink-0 rounded-full ${style.dot}`} />
            <span className={`font-mono text-[10px] uppercase tracking-[0.18em] ${style.text}`}>
              {project.category}
            </span>
          </div>
          <span
            aria-hidden
            className="text-sm text-muted-foreground/40 transition-all duration-200 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 group-hover:text-accent"
          >
            ↗
          </span>
        </div>

        {/* Title */}
        <h3 className="relative mt-4 text-lg font-semibold leading-snug text-foreground transition-colors duration-200 group-hover:text-accent">
          {project.name}
        </h3>

        {/* Description */}
        <p className="relative mt-3 flex-1 text-sm leading-relaxed text-muted-foreground">
          {project.description}
        </p>

        {/* Tags */}
        <ul className="relative mt-5 flex flex-wrap gap-1.5">
          {project.tags.map((tag) => (
            <li
              key={tag}
              className="rounded-full border border-border/50 bg-muted/30 px-2.5 py-0.5 font-mono text-[10px] text-muted-foreground"
            >
              {tag}
            </li>
          ))}
        </ul>
      </motion.a>
    </motion.div>
  );
}
