"use client"

import Hero from "@/components/hero"
import AboutUsHero from "@/assets/images/about_us_hero.png"
import Story from "@/components/pages/about-us/story"
import Difference from "@/components/pages/about-us/difference"
import GradientText from "@/components/gradientText"

const Page = () => {
  return (
    <div className="space-y-5">
      <Hero image={AboutUsHero} metaText={""} title="Experience That Builds Confidence." description="Experience That Builds Confidence.
With a strong focus on clarity and purpose, we transform complex ideas and architectural concepts into meaningful spaces that connect people to place — both today and for years to come." isLink={false} buttonLink="" alt="" buttonText="Browse Portfolio" />
      <Story />
      <Difference />
      <div className="p-17.5 text-center">
        <GradientText text="Our strength lies in our ability to analyse, simplify, and resolve complex design and construction problems without compromising functionality, aesthetics, or structural integrity. We bring resilience, creativity, and precision to every stage of the process, ensuring that even the most challenging visions are delivered with excellence. Clients trust us not only to design and build, but to overcome,  transforming difficulty into distinction." className="text-[35px]! text-left! font-satoshi! from-white/60" />
      </div>
    </div>
  )
}

export default Page
