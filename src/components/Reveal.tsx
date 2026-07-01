"use client";

import { motion, type Variants } from "framer-motion";
import type { ReactNode } from "react";

type RevealProps = {
  children: ReactNode;
  delay?: number;
  className?: string;
  as?: "div" | "li";
  direction?: "up" | "left";
};

const upVariants: Variants = {
  hidden: {
    opacity: 0,
    y: 36,
    filter: "blur(10px)",
  },
  visible: ({ delay }: { delay: number }) => ({
    opacity: 1,
    y: 0,
    filter: "blur(0px)",
    transition: {
      duration: 0.75,
      delay,
      ease: [0.16, 1, 0.3, 1],
    },
  }),
};

const leftVariants: Variants = {
  hidden: {
    opacity: 0,
    x: -28,
    filter: "blur(8px)",
  },
  visible: ({ delay }: { delay: number }) => ({
    opacity: 1,
    x: 0,
    filter: "blur(0px)",
    transition: {
      duration: 0.7,
      delay,
      ease: [0.16, 1, 0.3, 1],
    },
  }),
};

export default function Reveal({
  children,
  delay = 0,
  className,
  as = "div",
  direction = "up",
}: RevealProps) {
  const MotionTag = as === "li" ? motion.li : motion.div;
  const variants = direction === "left" ? leftVariants : upVariants;

  return (
    <MotionTag
      className={className}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, margin: "-60px" }}
      custom={{ delay }}
      variants={variants}
    >
      {children}
    </MotionTag>
  );
}
