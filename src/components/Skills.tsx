import { skills } from "@/data/projects";
import Reveal from "./Reveal";

export default function Skills() {
  const categories = Object.entries(skills);

  return (
    <section id="skills" className="border-b border-border/80 px-6 py-20">
      <div className="mx-auto max-w-6xl">
        <Reveal>
          <h2 className="font-mono text-sm font-medium uppercase tracking-wider text-accent">
            What I work with
          </h2>
        </Reveal>
        <div className="mt-8 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {categories.map(([category, items], index) => (
            <Reveal key={category} delay={index * 0.08}>
              <div className="group glass relative h-full overflow-hidden rounded-lg p-6 transition-colors hover:border-accent/60">
                <div
                  aria-hidden
                  className="pointer-events-none absolute -right-10 -top-10 h-32 w-32 rounded-full bg-accent/0 blur-2xl transition-colors duration-300 group-hover:bg-accent/20"
                />
                <h3 className="text-sm font-semibold text-foreground">
                  {category}
                </h3>
                <ul className="mt-4 flex flex-wrap gap-2">
                  {items.map((item) => (
                    <li
                      key={item}
                      className="rounded-full border border-border bg-muted px-3 py-1 font-mono text-xs text-muted-foreground transition-colors group-hover:border-accent/40"
                    >
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
