"use client"

import { motion } from "motion/react"
import { StaticImageData } from "next/image"
import { ReactNode } from "react"
import Image from "next/image"
import { Button } from "./ui/button"

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
    <div className="w-full relative h-screen z-50">
      <div className="inset-0 absolute">
        <Image src={image} alt={alt} fill className="object-cover" />
      </div>
      <div className="absolute top-16 pl-5 flex flex-col uppercase">
        <p
          className="text-[290.79px] bg-gradient-to-r  relative to-[#EFBF04]/5 from-[#ffffff]/5 bg-clip-text text-transparent"
          style={{ lineHeight: "94%", letterSpacing: "-0.08em" }}
        >
          Nohen
        </p>
        <p
          className="text-[230px] bg-gradient-to-r relative to-[#EFBF04]/5 from-[#ffffff]/5 bg-clip-text text-transparent"
          style={{ lineHeight: "94%", letterSpacing: "-0.08em" }}
        >
          Constructii.
        </p>
      </div>
      <div className="md:w-325 font-extrabold z-999999 space-y-5 relative -bottom-80 -right-15">
        <p className="bg-gradient-to-b tracking-tight via-[#ffffff]/80 via-1%  absolute uppercase to-[#EFBF04] bg-clip-text text-transparent relative z-[9999] text-[100px] font-dm-sans" style={{ letterSpacing: "-11%", lineHeight: "95%" }}>
          {title}
        </p>
        <p className="md:w-3/6 font-normal text-white font-satoshi font-[30px]" style={{
          letterSpacing: "-6%",
          lineHeight: "108%"
        }}>{description}</p>
        <Button className="bg-[#EFBF04] py-4 h-17.5 px-6 rounded-full text-black uppercase">
          {buttonText}
        </Button>
      </div>
    </div>
  )
}

export default Hero
