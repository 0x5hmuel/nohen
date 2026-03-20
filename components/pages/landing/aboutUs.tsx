import GradientText from "@/components/gradientText"
import SectionTag from "@/components/sectionTag"
import { Button } from "@/components/ui/button"
import AboutImage from "@/assets/images/about_image.png"
import Image from "next/image"
import { ArrowRightIcon, PlusIcon } from "lucide-react"
import StatItem from "@/components/statView"

const info = [
  {
    count: 2010,
    title: "Establishment.",
    description: "Over a decade of transforming spaces & Business.",
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
    description: "People who love & Trusts our Works.",
    showIcon: true
  },
  {
    count: 10,
    title: "Ongoing Projects",
    description: "Homes to offices, we deliver excellence.",
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
          <Button className="rounded-full md:w-65.75 px-[14.9px] h-17.5 gap-10">

            KNOW MORE ABOUT US
            <ArrowRightIcon />
          </Button>
          <p className="text-[25px] text-right" style={{ color: "gray" }}>Good design is invisible. It supports life quietly, with clarity and purpose.</p>
        </div>
        <div>
          <div className="relative overflow-hidden">
            <Image src={AboutImage} alt="" width={621} height={400} />
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
