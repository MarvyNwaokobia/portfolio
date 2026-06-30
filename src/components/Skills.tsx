import { skills } from "@/data/projects";

export default function Skills() {
  const categories = Object.entries(skills);

  return (
    <section id="skills" className="border-b border-border/80 px-6 py-20">
      <div className="mx-auto max-w-6xl">
        <h2 className="font-mono text-sm font-medium uppercase tracking-wider text-accent">
          What I work with
        </h2>
        <div className="mt-8 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {categories.map(([category, items]) => (
            <div
              key={category}
              className="rounded-lg border border-border bg-card p-6"
            >
              <h3 className="text-sm font-semibold text-foreground">
                {category}
              </h3>
              <ul className="mt-4 flex flex-wrap gap-2">
                {items.map((item) => (
                  <li
                    key={item}
                    className="rounded-full border border-border bg-muted px-3 py-1 font-mono text-xs text-muted-foreground"
                  >
                    {item}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
