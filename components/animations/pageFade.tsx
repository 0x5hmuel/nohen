"use client";

import { motion } from "motion/react";
import { ReactNode } from "react";

type PageFadeProps = {
  children: ReactNode;
  className?: string;
};

export default function PageFade({ children, className }: PageFadeProps) {
  return (
    <motion.div
      className={className}
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.45, ease: [0.22, 1, 0.36, 1] }}
    >
      {children}
    </motion.div>
  );
}
