"use client";

import { useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { projects } from "@/data/projects";
import ProjectCard from "./ProjectCard";
import Reveal from "./Reveal";

const categories = [
  "All",
  "Privacy & Cryptography",
  "Payments & Financial Infra",
  "Apps & Systems",
] as const;

export default function Projects() {
  const [active, setActive] =
    useState<(typeof categories)[number]>("All");

  const filtered =
    active === "All"
      ? projects
      : projects.filter((project) => project.category === active);

  return (
    <section id="projects" className="border-b border-border/80 px-6 py-20">
      <div className="mx-auto max-w-6xl">
        <Reveal className="flex flex-col gap-6 sm:flex-row sm:items-end sm:justify-between">
          <h2 className="font-mono text-sm font-medium uppercase tracking-wider text-accent">
            Featured projects
          </h2>
          <div
            role="tablist"
            aria-label="Filter projects by category"
            className="flex flex-wrap gap-2"
          >
            {categories.map((category) => {
              const isActive = active === category;
              return (
                <button
                  key={category}
                  type="button"
                  role="tab"
                  aria-selected={isActive}
                  onClick={() => setActive(category)}
                  className="relative cursor-pointer rounded-full px-4 py-1.5 text-xs font-medium text-muted-foreground transition-colors hover:text-foreground"
                >
                  {isActive && (
                    <motion.span
                      layoutId="active-filter-pill"
                      className="absolute inset-0 rounded-full border border-accent bg-accent"
                      transition={{ duration: 0.3, ease: [0.16, 1, 0.3, 1] }}
                    />
                  )}
                  <span
                    className={`relative ${
                      isActive ? "text-accent-foreground" : ""
                    }`}
                  >
                    {category}
                  </span>
                </button>
              );
            })}
          </div>
        </Reveal>

        <ul className="mt-10 grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-3">
          <AnimatePresence mode="popLayout">
            {filtered.map((project, index) => (
              <motion.li layout key={project.name}>
                <ProjectCard project={project} index={index} />
              </motion.li>
            ))}
          </AnimatePresence>
        </ul>
      </div>
    </section>
  );
}
