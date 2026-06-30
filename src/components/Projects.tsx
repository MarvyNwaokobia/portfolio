"use client";

import { useState } from "react";
import { projects, type Project } from "@/data/projects";

const categories = [
  "All",
  "Privacy & Cryptography",
  "Payments & Financial Infra",
  "Apps & Systems",
] as const;

export default function Projects() {
  const [active, setActive] =
    useState<(typeof categories)[number]>("All");

  const filtered: Project[] =
    active === "All"
      ? projects
      : projects.filter((project) => project.category === active);

  return (
    <section id="projects" className="border-b border-border/80 px-6 py-20">
      <div className="mx-auto max-w-6xl">
        <div className="flex flex-col gap-6 sm:flex-row sm:items-end sm:justify-between">
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
                  className={`cursor-pointer rounded-full border px-4 py-1.5 text-xs font-medium transition-colors ${
                    isActive
                      ? "border-accent bg-accent text-accent-foreground"
                      : "border-border text-muted-foreground hover:border-accent hover:text-foreground"
                  }`}
                >
                  {category}
                </button>
              );
            })}
          </div>
        </div>

        <ul className="mt-10 grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {filtered.map((project) => (
            <li key={project.name}>
              <a
                href={project.href}
                target="_blank"
                rel="noreferrer noopener"
                className="group flex h-full flex-col rounded-lg border border-border bg-card p-6 transition-colors hover:border-accent"
              >
                <div className="flex items-start justify-between gap-3">
                  <h3 className="font-semibold text-foreground group-hover:text-accent transition-colors">
                    {project.name}
                  </h3>
                  <span
                    aria-hidden
                    className="text-muted-foreground transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5 group-hover:text-accent"
                  >
                    ↗
                  </span>
                </div>
                <p className="mt-3 flex-1 text-sm leading-relaxed text-muted-foreground">
                  {project.description}
                </p>
                <ul className="mt-5 flex flex-wrap gap-2">
                  {project.tags.map((tag) => (
                    <li
                      key={tag}
                      className="rounded-full bg-muted px-2.5 py-1 font-mono text-[11px] text-muted-foreground"
                    >
                      {tag}
                    </li>
                  ))}
                </ul>
              </a>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
