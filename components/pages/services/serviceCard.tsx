"use client"

import Image, { StaticImageData } from "next/image"
import GradientText from "@/components/gradientText"
import { motion, AnimatePresence } from "motion/react"
import { Button } from "@/components/ui/button"
import { useState } from "react"

interface ServiceCardProps {
  index: number
  image: StaticImageData
  id: string
  gradientText: string
  reverse?: boolean
  title: string
  content: string
  onInView?: (id: string) => void
}

export default function ServiceCard({
  index,
  image,
  id,
  gradientText,
  reverse = false,
  title,
  content,
  onInView,
}: ServiceCardProps) {
  const [expanded, setExpanded] = useState(false)

  const preview = content.slice(0, 500) + "..."
  const hasMore = content.length > 500

  return (
    <motion.div
      id={id}
      className={`w-full border-y-[#EFBF04] border-y-8 flex bg-white ${reverse ? "flex-row-reverse" : "flex-row"} items-center gap-10 border-b border-black/10 md:px-10 lg:px-17.5`}
      initial={{ opacity: 0, y: 24 }}
      whileInView={{ opacity: 1, y: 0 }}
      onViewportEnter={() => onInView?.(id)}
      viewport={{ once: false, margin: "-50%" }}
      transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
    >
      <div className="flex-1 space-y-6">
        <div className="w-14.5 h-14.5 p-3 bg-gray-100 rounded-full flex items-center justify-center">
          <span
            className="text-[30px] text-black font-light font-dm-sans"
            style={{ letterSpacing: "-0.02em" }}
          >
            {index}
          </span>
        </div>
        <GradientText text={gradientText} className="!text-[50px]" />
        <div className="font-outfit font-light text-[14px] md:text-[15px] text-black/60 max-w-[420px] leading-relaxed">
          <AnimatePresence initial={false} mode="wait">
            {expanded ? (
              <motion.p
                key="full"
                initial={{ opacity: 0, height: 0 }}
                animate={{ opacity: 1, height: "auto" }}
                exit={{ opacity: 0, height: 0 }}
                transition={{ duration: 0.4, ease: [0.22, 1, 0.36, 1] }}
                className="text-justify text-[25px] text-light"
                style={{ letterSpacing: "-4%", lineHeight: "108%" }}
              >
                {content}
              </motion.p>
            ) : (
              <motion.p
                key="preview"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                transition={{ duration: 0.3 }}
                className="line-clamp-5 text-[25px] text-light"
                style={{ letterSpacing: "-4%", lineHeight: "108%" }}
              >
                {hasMore ? preview : content}
              </motion.p>
            )}
          </AnimatePresence>
        </div>

        {hasMore && (
          <Button
            variant="link"
            onClick={() => setExpanded((v) => !v)}
            className="p-0 font-medium h-auto text-[#EFBF04] font-outfit text-[14px]  hover:underline underline-offset-2 underline transition-all duration-200"
          >
            {expanded ? "Read Less..." : "Read More..."}
          </Button>
        )}
      </div>

      <div className="flex-1 relative w-165 h-152.5  hidden sm:block">
        <Image
          src={image}
          alt={title}
          fill
          className="object-cover"
          sizes="(min-width: 660px) 50vw, 100vw"
        />
      </div>
    </motion.div>
  )
}
