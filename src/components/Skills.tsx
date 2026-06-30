import { skills } from "@/data/projects";
import Reveal from "./Reveal";

// Same three hues used by the hero illustration's orbiting nodes, so the
// page reads as one palette instead of an arbitrary rainbow of categories.
const palette = [
  { bg: "bg-emerald-600", fg: "text-emerald-50", chip: "bg-emerald-950/40" },
  { bg: "bg-indigo-600", fg: "text-indigo-50", chip: "bg-indigo-950/40" },
  { bg: "bg-violet-600", fg: "text-violet-50", chip: "bg-violet-950/40" },
];

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
        <div className="mt-8 grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {categories.map(([category, items], index) => {
            const colors = palette[index % palette.length];
            return (
              <Reveal key={category} delay={index * 0.08}>
                <div
                  className={`h-full rounded-2xl p-6 shadow-lg shadow-black/30 transition-transform duration-300 hover:-translate-y-1 ${colors.bg}`}
                >
                  <h3 className={`text-sm font-semibold ${colors.fg}`}>
                    {category}
                  </h3>
                  <ul className="mt-4 flex flex-wrap gap-2">
                    {items.map((item) => (
                      <li
                        key={item}
                        className={`rounded-full px-3 py-1 font-mono text-xs ${colors.fg} ${colors.chip}`}
                      >
                        {item}
                      </li>
                    ))}
                  </ul>
                </div>
              </Reveal>
            );
          })}
        </div>
      </div>
    </section>
  );
}
