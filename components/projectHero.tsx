
import Image, { StaticImageData } from "next/image"
import GradientText from "./gradientText"
import SectionTag from "./sectionTag";

interface ProjectHeroProps {
  image: StaticImageData;
  text: string,
  alt: string
}


const ProjectHero = ({ image, text, alt }: ProjectHeroProps) => {
  return (
    <div className="w-full relative h-[560px] md:h-[800px] z-50 flex items-end md:items-center">
      <div className="inset-0 absolute">
      <Image src={image} alt={alt} fill className="object-cover" />
    </div>
      <div className="z-9999999 relative mb-12 ml-5 md:mb-0 md:ml-24">
        <SectionTag text="PROJECT" className="text-white" />
        <GradientText text={text} className="text-[46px]! sm:text-[60px]! md:text-[100px]! from-[#EFBF04]/80" />
      </div>
    </div>
  )
}

export default ProjectHero
