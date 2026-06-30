"use client";

import { motion, useReducedMotion } from "framer-motion";

type Node = {
  id: string;
  angle: number;
  radius: number;
  size: number;
  color: string;
  delay: number;
};

const nodes: Node[] = [
  { id: "n1", angle: -35, radius: 132, size: 9, color: "var(--accent)", delay: 0 },
  { id: "n2", angle: 70, radius: 150, size: 7, color: "#818cf8", delay: 0.6 },
  { id: "n3", angle: 165, radius: 118, size: 8, color: "#c084fc", delay: 1.2 },
  { id: "n4", angle: 235, radius: 150, size: 6, color: "var(--accent)", delay: 1.8 },
];

function point(angle: number, radius: number) {
  const rad = (angle * Math.PI) / 180;
  return { x: 200 + radius * Math.cos(rad), y: 200 + radius * Math.sin(rad) };
}

export default function HeroVisual() {
  const shouldReduceMotion = useReducedMotion();

  return (
    <div className="relative mx-auto aspect-square w-full max-w-[420px]">
      <motion.div
        aria-hidden
        className="absolute inset-[12%] rounded-full bg-accent/15 blur-[60px]"
        animate={
          shouldReduceMotion
            ? undefined
            : { opacity: [0.5, 0.85, 0.5], scale: [0.96, 1.04, 0.96] }
        }
        transition={{ duration: 5, repeat: Infinity, ease: "easeInOut" }}
      />

      <motion.svg
        viewBox="0 0 400 400"
        className="relative h-full w-full"
        animate={shouldReduceMotion ? undefined : { rotate: 360 }}
        transition={{ duration: 60, repeat: Infinity, ease: "linear" }}
      >
        <circle
          cx="200"
          cy="200"
          r="150"
          className="fill-none stroke-border"
          strokeWidth="1"
          strokeDasharray="2 6"
        />

        {nodes.map((node) => {
          const p = point(node.angle, node.radius);
          return (
            <line
              key={`line-${node.id}`}
              x1="200"
              y1="200"
              x2={p.x}
              y2={p.y}
              stroke={node.color}
              strokeOpacity="0.25"
              strokeWidth="1"
            />
          );
        })}

        {nodes.map((node) => {
          const p = point(node.angle, node.radius);
          return (
            <motion.circle
              key={node.id}
              cx={p.x}
              cy={p.y}
              r={node.size}
              fill={node.color}
              animate={
                shouldReduceMotion
                  ? undefined
                  : { opacity: [0.5, 1, 0.5], scale: [0.9, 1.1, 0.9] }
              }
              transition={{
                duration: 3,
                repeat: Infinity,
                ease: "easeInOut",
                delay: node.delay,
              }}
            />
          );
        })}

        {nodes.map((node) => {
          const p = point(node.angle, node.radius);
          return (
            <motion.circle
              key={`packet-${node.id}`}
              r="3"
              fill={node.color}
              animate={
                shouldReduceMotion
                  ? undefined
                  : {
                      cx: [200, p.x, 200],
                      cy: [200, p.y, 200],
                      opacity: [0, 1, 0],
                    }
              }
              transition={{
                duration: 2.6,
                repeat: Infinity,
                ease: "easeInOut",
                delay: node.delay,
              }}
            />
          );
        })}
      </motion.svg>

      <motion.div
        aria-hidden
        className="absolute inset-0 flex items-center justify-center"
        animate={shouldReduceMotion ? undefined : { rotate: -360 }}
        transition={{ duration: 60, repeat: Infinity, ease: "linear" }}
      >
        <div className="flex h-24 w-24 items-center justify-center rounded-3xl border border-border bg-card/80 shadow-[0_0_40px_-8px_var(--accent)] backdrop-blur">
          <svg viewBox="0 0 24 24" className="h-9 w-9 text-accent" fill="none">
            <path
              d="M12 2 4 5v6c0 5 3.4 8.7 8 11 4.6-2.3 8-6 8-11V5l-8-3Z"
              stroke="currentColor"
              strokeWidth="1.5"
              strokeLinejoin="round"
            />
            <path
              d="M9 12.2 11.2 14.4 15.5 10"
              stroke="currentColor"
              strokeWidth="1.5"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          </svg>
        </div>
      </motion.div>
    </div>
  );
}
