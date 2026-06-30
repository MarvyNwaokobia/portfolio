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

const TILT_RANGE = 8;

export default function ProjectCard({ project }: { project: Project }) {
  const shouldReduceMotion = useReducedMotion();
  const rotateX = useMotionValue(0);
  const rotateY = useMotionValue(0);
  const springRotateX = useSpring(rotateX, { stiffness: 220, damping: 20 });
  const springRotateY = useSpring(rotateY, { stiffness: 220, damping: 20 });

  const glowX = useMotionValue(50);
  const glowY = useMotionValue(50);
  const glowBackground = useMotionTemplate`radial-gradient(280px circle at ${glowX}% ${glowY}%, color-mix(in oklab, var(--accent) 18%, transparent), transparent 70%)`;

  function handleMouseMove(event: MouseEvent<HTMLAnchorElement>) {
    const rect = event.currentTarget.getBoundingClientRect();
    const px = (event.clientX - rect.left) / rect.width;
    const py = (event.clientY - rect.top) / rect.height;

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
      initial={{ opacity: 0, y: 16 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: -8 }}
      transition={{ duration: 0.35, ease: [0.16, 1, 0.3, 1] }}
      className="group relative h-full"
    >
      <div
        aria-hidden
        className="pointer-events-none absolute inset-0 -z-10 rounded-lg border border-border bg-card/40 transition-transform duration-300 ease-out group-hover:translate-x-2 group-hover:translate-y-2 group-hover:-rotate-1"
      />
      <div
        aria-hidden
        className="pointer-events-none absolute inset-0 -z-20 rounded-lg border border-border bg-card/20 transition-transform duration-300 ease-out group-hover:translate-x-4 group-hover:translate-y-4 group-hover:-rotate-2"
      />
      <motion.a
        href={project.href}
        target="_blank"
        rel="noreferrer noopener"
        onMouseMove={handleMouseMove}
        onMouseLeave={handleMouseLeave}
        style={{
          rotateX: springRotateX,
          rotateY: springRotateY,
          transformPerspective: 800,
        }}
        className="glass relative flex h-full flex-col overflow-hidden rounded-lg p-6 transition-colors hover:border-accent/60"
      >
        <motion.div
          aria-hidden
          className="pointer-events-none absolute inset-0 opacity-0 transition-opacity duration-300 group-hover:opacity-100"
          style={{ background: glowBackground }}
        />
        <div className="flex items-start justify-between gap-3">
          <h3 className="font-semibold text-foreground transition-colors group-hover:text-accent">
            {project.name}
          </h3>
          <span
            aria-hidden
            className="text-muted-foreground transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5 group-hover:text-accent"
          >
            ↗
          </span>
        </div>
        <p className="relative mt-3 flex-1 text-sm leading-relaxed text-muted-foreground">
          {project.description}
        </p>
        <ul className="relative mt-5 flex flex-wrap gap-2">
          {project.tags.map((tag) => (
            <li
              key={tag}
              className="rounded-full bg-muted px-2.5 py-1 font-mono text-[11px] text-muted-foreground"
            >
              {tag}
            </li>
          ))}
        </ul>
      </motion.a>
    </motion.div>
  );
}
