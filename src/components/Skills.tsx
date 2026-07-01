import { skills } from "@/data/projects";
import Reveal from "./Reveal";

const palette = [
  { bg: "bg-pink-500", fg: "text-pink-50", chip: "bg-pink-950/35" },
  { bg: "bg-rose-500", fg: "text-rose-50", chip: "bg-rose-950/35" },
  { bg: "bg-fuchsia-500", fg: "text-fuchsia-50", chip: "bg-fuchsia-950/35" },
  { bg: "bg-purple-500", fg: "text-purple-50", chip: "bg-purple-950/35" },
  { bg: "bg-violet-500", fg: "text-violet-50", chip: "bg-violet-950/35" },
  { bg: "bg-indigo-500", fg: "text-indigo-50", chip: "bg-indigo-950/35" },
];

export default function Skills() {
  const categories = Object.entries(skills);

  return (
    <section id="skills" className="relative px-6 py-24 before:pointer-events-none before:absolute before:inset-x-0 before:top-0 before:h-24 before:bg-linear-to-b before:from-background before:to-transparent">
      <div className="mx-auto max-w-6xl">
        <Reveal direction="left">
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
