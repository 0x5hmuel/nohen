"use client"

import Image, { StaticImageData } from "next/image"
import Link from "next/link"
import { ArrowRight } from "lucide-react"
import { motion } from "motion/react"
import { useState } from "react"

interface Project {
  image: StaticImageData
  secondaryImage?: StaticImageData // for split-image card (bottom-left)
  title: string
  location?: string
  href?: string
}

interface ProjectGridProps {
  projects: Project[]
}

const ProjectItem = ({
  project,
  index,
  className = "",
}: {
  project: Project
  index: number
  className?: string
}) => {
  const [hovered, setHovered] = useState(false)

  return (
    <motion.div
      className={`flex flex-col ${className}`}
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
      initial={{ opacity: 0, y: 24 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-60px" }}
      transition={{
        duration: 0.6,
        delay: index * 0.09,
        ease: [0.22, 1, 0.36, 1],
      }}
    >
      <div className="group relative h-[240px] w-full overflow-hidden sm:h-[300px] md:h-[360px]">
        {project.secondaryImage ? (
          <div className="flex h-full w-full">
            <div className="relative w-1/2 h-full overflow-hidden">
              <Image
                src={project.image}
                alt={project.title}
                fill
                className="object-cover transition-transform duration-700 group-hover:scale-105"
                sizes="25vw"
              />
            </div>
            <div className="relative w-1/2 h-full overflow-hidden">
              <Image
                src={project.secondaryImage}
                alt={project.title}
                fill
                className="object-cover transition-transform duration-700 group-hover:scale-105"
                sizes="25vw"
              />
            </div>
          </div>
        ) : (
          <Image
            src={project.image}
            alt={project.title}
            fill
            className="object-cover transition-transform duration-700 group-hover:scale-105"
            sizes="(max-width: 768px) 100vw, 50vw"
          />
        )}
      </div>
      <Link
        href={project.href ?? "#"}
        className={`min-h-22 p-3 transition-colors duration-300 md:h-30 ${hovered ? 'bg-[#EFBF04]' : 'bg-[#F2F2F2]'}`}
      >
        <div className="group/link flex w-full items-center justify-between px-2 py-3 md:px-5 md:py-4">
          <span
            className="font-dm-sans text-[20px] font-medium uppercase tracking-[0.14em] text-[#181818] md:text-[25px]"
            style={{ letterSpacing: "-0.06em", lineHeight: "180%" }}
          >
            {project.title}
            {project.location && (
              <span className="text-gray-500"> – {project.location}</span>
            )}
          </span>
          <ArrowRight
            size={14}
            strokeWidth={2}
            className="text-[#181818] shrink-0 transition-transform duration-300 group-hover/link:translate-x-1"
          />
        </div>
        <hr className="border-t border-black/10" />
      </Link>    </motion.div>
  )
}

export default function ProjectGrid({ projects }: ProjectGridProps) {
  const pairs = [];

  for (let i = 0; i < projects.length; i += 2) {
    pairs.push(projects.slice(i, i + 2));
  }

  return (
    <section className="w-full space-y-5 bg-[#FAFAF7]">
      {pairs.map((pair, pairIndex) => {
        const isEven = pairIndex % 2 === 0;

        return (
          <div
            key={pairIndex}
            className={`grid grid-cols-1 gap-5 ${isEven ? "md:grid-cols-[3fr_2fr]" : "md:grid-cols-[2fr_3fr]"}`}
          >
            <ProjectItem project={pair[0]} index={pairIndex * 2} className="" />
            {pair[1] && (
              <ProjectItem project={pair[1]} index={pairIndex * 2 + 1} className="" />
            )}
          </div>
        );
      })}
    </section>
  );
}
