"use client"

import Image, { StaticImageData } from "next/image"
import { ArrowUpRightIcon } from "lucide-react"
import { useState } from "react"
import { motion } from "motion/react"
import Link from "next/link"

export interface ProjectCard {
  image: StaticImageData
  title: string
  description: string
  href?: string
}

interface ProjectCardsProps {
  cards: ProjectCard[]
}

export default function ProjectCards({ cards }: ProjectCardsProps) {
  const [activeIndex, setActiveIndex] = useState<number | null>(null)

  return (
    <div
      className="flex w-full h-[420px] md:h-[500px] bg-[#111111] overflow-hidden"
      onMouseLeave={() => setActiveIndex(null)}
    >
      {cards.map((card, i) => {
        const isActive = activeIndex === i
        const isInactive = activeIndex !== null && !isActive

        return (
          <motion.div
            key={i}
            className="relative overflow-hidden cursor-pointer shrink-0"
            animate={{
              flex: isActive ? 2.4 : isInactive ? 0.65 : 1,
            }}
            transition={{ duration: 0.55, ease: [0.32, 0.72, 0, 1] }}
            onMouseEnter={() => setActiveIndex(i)}
          >
            <Image
              src={card.image}
              alt={card.title}
              fill
              className="object-cover"
              sizes="(max-width: 768px) 100vw, 33vw"
            />
            <div className="bg-linear-to-b from-transparent to-black inset-0 h-full" />
            <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-black/10" />
            <div className="absolute top-4 right-4 z-10">
              <Link
                href={card.href ?? "#"}
                className="w-9 h-9 rounded-full bg-[#EFBF04] flex items-center justify-center transition-transform duration-300 hover:scale-110"
                onClick={(e) => e.stopPropagation()}
              >
                <ArrowUpRightIcon size={15} className="text-black" strokeWidth={2.5} />
              </Link>
            </div>
            <motion.div
              className="absolute bottom-0 left-0 right-0 z-10 p-5 md:p-6"
              animate={{
                opacity: isActive ? 1 : 0,
                y: isActive ? 0 : 20,
              }}
              transition={{ duration: 0.35, ease: [0.32, 0.72, 0, 1] }}
            >
              <p
                className="bg-linear-to-r font-dm-sans bg-clip-text text-[35px] from-[#EFBF04] to-white font-bold leading-tight mb-2 whitespace-nowrap overflow-hidden text-ellipsis"
                style={{
                  letterSpacing: "-0.02em",
                }}
              >
                {card.title}
              </p>

              <p className="text-white/60 font-dm-sans font-outfit text-[12px] md:text-[25px] leading-relaxed">
                {card.description}
              </p>
            </motion.div>
            <motion.div
              className="absolute left-0 top-0 bottom-0 w-[3px] bg-[#EFBF04]"
              animate={{ opacity: isActive ? 1 : 0 }}
              transition={{ duration: 0.3 }}
            />
          </motion.div>
        )
      })}
    </div>
  )
}
