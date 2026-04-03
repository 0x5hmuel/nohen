import GradientText from "@/components/gradientText"
import SectionTag from "@/components/sectionTag"
import { Button } from "@/components/ui/button"
import AboutImage from "@/assets/images/Rectangle 24774.png"
import Image from "next/image"
import { ArrowRightIcon } from "lucide-react"
import Link from "next/link"
import StatItem from "@/components/statView"

const info = [
  {
    count: 2010,
    title: "Establishment.",
    description: "From residential owners to Government officials and we are coming to you too.",
    showIcon: false
  },
  {
    count: 400,
    title: "Projects finished.",
    description: "Homes to offices, we deliver excellence.",
    showIcon: true
  },
  {
    count: 200,
    title: "Happy Clients",
    description: "From residential owners to Government officials and we are coming to you too.",
    showIcon: true
  },
  {
    count: 9,
    title: "Ongoing Projects",
    description: "7+ Residential Construction Projects and 2 Commercial Projects are currently in progress across different states in nigeria.",
    showIcon: true
  }
]

const AboutUs = () => {
  return (
    <section id="about" className="bg-white flex p-17.5 space-x-10">
      <div className="space-y-5 md:w-1/2">
        <SectionTag text="About Us" className="text-black" />
        <GradientText text="From homes to offices, we bring your vision to life. Our results speak for themselves." />
        <div className="flex items-center gap-x-5 justify-between w-full">
          <Button className="rounded-full md:w-65.75 px-[14.9px] h-17.5 gap-10" asChild>
            <Link href="/about-us#ourStory">
              KNOW MORE ABOUT US
              <ArrowRightIcon />
            </Link>
          </Button>
          <p className="text-[25px] text-right" style={{ color: "gray" }}>Good design is invisible. It supports life quietly, with clarity and purpose.</p>
        </div>
        <div className="h-full">
          <div className="relative overflow-hidden h-full flex items-start bg-red-500">
            <Image src={AboutImage} alt="" width={621} height={700} className="object-cover w-full" />
          </div>
        </div>
      </div>
      <div className="md:w-1/2 min-h-full">
        <ul className="grid grid-cols-2 font-dm-sans py-5">
          {info.map(({ title, description, showIcon, count }, index) => (
            <StatItem
              key={index}
              index={index}
              total={info.length}
              title={title}
              description={description}
              showIcon={showIcon}
              count={count}
              className={index === 3 ? "bg-[#EFBF04]/40" : ""}
            />
          ))}
        </ul>
      </div>
    </section >
  )
}

export default AboutUs
