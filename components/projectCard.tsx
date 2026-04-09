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
    <>
      <div className="flex flex-col gap-3 md:hidden">
        {cards.map((card, i) => (
          <div key={i} className="relative h-72 w-full overflow-hidden">
            <Image
              src={card.image}
              alt={card.title}
              fill
              className="object-cover"
              sizes="100vw"
            />
            <div className="absolute inset-0 bg-gradient-to-b from-black/20 via-black/20 to-black/70" />
            <div className="absolute right-4 top-4 z-10">
              <Link
                href={card.href ?? "#"}
                className="flex h-9 w-9 items-center justify-center rounded-full bg-[#EFBF04]"
              >
                <ArrowUpRightIcon size={15} className="text-black" strokeWidth={2.5} />
              </Link>
            </div>
            <div className="absolute bottom-0 left-0 right-0 z-10 p-5">
              <p
                className="mb-2 bg-linear-to-r from-[#EFBF04] to-white bg-clip-text font-dm-sans text-[24px] font-bold leading-tight text-transparent"
                style={{ letterSpacing: "-0.02em" }}
              >
                {card.title}
              </p>
              <p className="font-outfit text-[15px] leading-relaxed text-white/70">
                {card.description}
              </p>
            </div>
          </div>
        ))}
      </div>

      <div
        className="hidden h-[420px] w-full overflow-hidden bg-[#111111] md:flex md:h-[500px]"
        onMouseLeave={() => setActiveIndex(null)}
      >
        {cards.map((card, i) => {
          const isActive = activeIndex === i
          const isInactive = activeIndex !== null && !isActive

          return (
            <motion.div
              key={i}
              className="relative shrink-0 cursor-pointer overflow-hidden"
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
                sizes="33vw"
              />
              <div className="inset-0 h-full bg-linear-to-b from-transparent to-black" />
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-black/10" />
              <div className="absolute top-4 right-4 z-10">
                <Link
                  href={card.href ?? "#"}
                  className="flex h-9 w-9 items-center justify-center rounded-full bg-[#EFBF04] transition-transform duration-300 hover:scale-110"
                  onClick={(e) => e.stopPropagation()}
                >
                  <ArrowUpRightIcon size={15} className="text-black" strokeWidth={2.5} />
                </Link>
              </div>
              <motion.div
                className="absolute bottom-0 left-0 right-0 z-10 p-6"
                animate={{
                  opacity: isActive ? 1 : 0,
                  y: isActive ? 0 : 20,
                }}
                transition={{ duration: 0.35, ease: [0.32, 0.72, 0, 1] }}
              >
                <p
                  className="mb-2 overflow-hidden text-ellipsis whitespace-nowrap bg-linear-to-r from-[#EFBF04] to-white bg-clip-text font-dm-sans text-[35px] font-bold leading-tight text-transparent"
                  style={{
                    letterSpacing: "-0.02em",
                  }}
                >
                  {card.title}
                </p>

                <p className="font-outfit text-[25px] leading-relaxed text-white/60">
                  {card.description}
                </p>
              </motion.div>
              <motion.div
                className="absolute top-0 bottom-0 left-0 w-[3px] bg-[#EFBF04]"
                animate={{ opacity: isActive ? 1 : 0 }}
                transition={{ duration: 0.3 }}
              />
            </motion.div>
          )
        })}
      </div>
    </>
  )
}
