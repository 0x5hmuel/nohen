"use client"

import Image from "next/image"
import { motion } from "motion/react"
import { useRef } from "react"
import { useInView } from "motion/react"
import IdentityImage from "@/assets/images/Rectangle 24787(1).png"

const floatingWords = [
  { text: "Challenging", className: "right-[5%] sm:right-28 top-[60%] sm:top-72" },
  { text: "Impossible", className: "right-[5%] sm:right-28 top-[20%] sm:top-32" },
  { text: "Hard", className: "left-[30%] sm:left-96 top-[8%]  sm:top-16" },
  { text: "Complex", className: "left-[2%]  sm:left-10 top-[35%] sm:top-48" },
  { text: "Difficult", className: "left-[5%]  sm:left-28 bottom-[30%] sm:bottom-48" },
]

export default function Identity() {
  const ref = useRef<HTMLElement>(null)
  const isInView = useInView(ref, { once: true, margin: "-100px" })

  return (
    <section ref={ref} className="relative h-[500px] sm:h-[650px] lg:h-187.75 overflow-hidden">

      {/* Background image */}
      <Image
        src={IdentityImage}
        height={751}
        priority
        alt="who we are"
        className="h-full w-full object-cover"
      />

      {/* Floating blend words */}
      {floatingWords.map(({ text, className }, i) => (
        <motion.p
          key={text}
          className={`absolute text-[#181818] mix-blend-color-dodge font-dm-sans text-[28px] sm:text-[40px] lg:text-[50px] ${className}`}
          style={{
            letterSpacing: "-0.08em",
            filter: "drop-shadow(0px 4px 24px rgba(0,0,0,0.4))",
          }}
          initial={{ opacity: 0, scale: 0.75 }}
          animate={isInView ? { opacity: 1, scale: 1 } : {}}
          transition={{
            delay: 0.1 + i * 0.12,
            duration: 0.6,
            ease: [0.22, 1, 0.36, 1],
          }}
        >
          {text}
        </motion.p>
      ))}

      {/* Bottom large text */}
      <motion.p
        className="font-dm-sans mix-blend-overlay w-full absolute -bottom-10 text-black/80 capitalize whitespace-nowrap"
        style={{
          fontSize: "clamp(60px, 12vw, 180px)",
          lineHeight: "100%",
          letterSpacing: "-0.08em",
          WebkitTextStroke: "1px #000000",
          filter: "drop-shadow(0px 4px 24px rgba(0,0,0,0.4))",
        }}
        initial={{ opacity: 0 }}
        animate={isInView ? { opacity: 1 } : {}}
        transition={{ delay: 0.1 + floatingWords.length * 0.12, duration: 0.9, ease: "easeOut" }}
      >
        That&apos;s Who We Are.
      </motion.p>

    </section>
  )
}
