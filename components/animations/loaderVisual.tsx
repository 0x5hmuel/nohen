"use client";

import { motion } from "motion/react";
import Image from "next/image";
import Icon from "@/app/icon.png";

type LoaderVisualProps = {
  className?: string;
};

export default function LoaderVisual({ className = "" }: LoaderVisualProps) {
  return (
    <div
      className={`min-h-screen w-full bg-black flex items-center justify-center overflow-hidden ${className}`}
    >
      <div className="relative flex flex-col items-center gap-8">
        <motion.div
          initial={{ opacity: 0, scale: 0.94 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.45 }}
        >
          <Image src={Icon} alt="Nohen icon" className="size-20" priority />
        </motion.div>

        <motion.div
          className="h-1.5 w-44 bg-white/15 overflow-hidden"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.2, duration: 0.4 }}
        >
          <motion.div
            className="h-full bg-[#EFBF04]"
            initial={{ x: "-100%" }}
            animate={{ x: "100%" }}
            transition={{ duration: 1.1, repeat: Infinity, ease: "easeInOut" }}
          />
        </motion.div>
      </div>
    </div>
  );
}
