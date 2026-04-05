"use client"

import { motion } from "motion/react"
import { StaticImageData } from "next/image"
import { ReactNode } from "react"
import Image from "next/image"
import { Button } from "./ui/button"
import { ArrowRightIcon } from "lucide-react"
import Link from "next/link"

interface HeroProps {
  image: StaticImageData
  alt: string
  title: string
  description: string
  metaText: ReactNode
  buttonText: string;
  buttonLink: string;
  isLink: boolean
}

const Hero = ({ image, alt, title, description, metaText, buttonLink, buttonText, isLink }: HeroProps) => {
  return (
    <div className="relative w-screen min-h-screen overflow-x-hidden z-50 p-8">
      <div className="inset-0 absolute h-full">
        <Image src={image} alt={alt} fill className="object-cover" />
      </div>
      <div className="absolute top-32 md:top-16  pl-5 flex flex-col uppercase">
        <p
          className="text-[120px] md:text-[300px] lg:text-[437.79px] bg-gradient-to-r  relative to-[#EFBF04]/5 from-[#ffffff]/5 bg-clip-text text-transparent"
          style={{ lineHeight: "94%", letterSpacing: "-0.08em" }}
        >
          Nohen
        </p>
        <p
          className="text-[70px] md:text-[95px] lg:text-[230px] bg-gradient-to-r relative to-[#EFBF04]/5 from-[#ffffff]/5 bg-clip-text text-transparent"
          style={{ lineHeight: "94%", letterSpacing: "-0.08em" }}
        >
          Constructii.
        </p>
      </div>
      <div className="w-full md:w-325 font-extrabold z-999999 space-y-5 relative -bottom-72 lg:-bottom-80 -right-0 lg:-right-10 px-2 text-wrap">
        <p className="bg-gradient-to-b tracking-tight via-[#ffffff]/80 via-1% absolute uppercase to-[#EFBF04] bg-clip-text text-transparent relative z-[9999] text-[55px] md:text-[80px] lg:text-[100px] font-dm-sans sm:whitespace-normal w-full lg:min-w-full sm:max-w-[90%]"
          style={{ letterSpacing: "-11%", lineHeight: "95%" }}
        >
          {title}
        </p>
        <p className="md:w-4/6 font-normal text-white font-satoshi text-[15px] wrap-break-word sm:text-[20px] text-wrap wrap-anywhere lg:text-[25px] w-full" style={{
          letterSpacing: "-6%",
          lineHeight: "108%",
        }}>{description}</p>
        <Button className="bg-[#EFBF04] hover:bg-[#EFBF04]/80 py-4 h-17.5 px-6 rounded-full text-black uppercase" asChild={isLink && true}>
          {isLink ? <Link href={buttonLink}>
            {buttonText}
            <ArrowRightIcon />
          </Link> : <>{buttonText} <ArrowRightIcon /></>
          }
        </Button>
      </div>
    </div>
  )
}

export default Hero
