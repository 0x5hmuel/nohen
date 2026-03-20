import Image from "next/image"
import ServicesImage from "@/assets/images/architectural_service.png"
import { Button } from "@/components/ui/button"
import ArrowIcon from "@/assets/svgs/arrow.svg"
import Link from "next/link"
import SectionTag from "@/components/sectionTag"

export type Service = {
  id: string
  title: string
  description: string
}

export const services: Service[] = [
  {
    id: "architectural-design",
    title: "Architectural Design",
    description:
      "Crafting purposeful architectural designs that combine creativity, functionality, and lasting structural value.",
  },
  {
    id: "interior-design",
    title: "Perfect Interior Designs",
    description:
      "Building a better future with sustainable materials, energy-efficient designs.",
  },
  {
    id: "eco-construction",
    title: "Eco-Friendly Construction",
    description:
      "Our team optimizes layouts to make every corner of your space purposeful and visually balanced.",
  },
  {
    id: "project-management",
    title: "Project Management",
    description:
      "Coordinating people, processes, and resources to deliver projects efficiently.",
  },
  {
    id: "renovation",
    title: "Interior Renovation",
    description:
      "Upgrading and refreshing spaces with quality renovations that enhance both beauty and performance.",
  },
  {
    id: "eco-architecture",
    title: "Eco-Conscious Architecture",
    description:
      "Blending innovative design with environmental responsibility to create structures.",
  },
]

const Services = () => {
  return (
    <section id="services" className="relative max-h-237 py-16 flex items-center p-17.5">
      <div className="absolute inset-0">
        <Image src={ServicesImage} className="" alt="nohen contrustii services" />
      </div>
      <div className="z-9999 relative flex flex-col justify-center space-y-10">
        <SectionTag className="" text="Our Services" />
        <div>
          <ul className="grid grid-cols-2 font-dm-sans py-5">
            {services.map(({ title, id, description }, index) => (
              <li
                key={id}
                className={`
        p-5
        border-gray-200/10
        border-sidebar-border
        border-dashed

        ${index % 2 === 0 ? "border-r border-r-gray-200/40" : ""}   /* left column only */
        ${index < services.length - 2 ? "border-b border-gray-100" : ""} /* not last row */
      `}
              >
                <h4
                  className="text-[38px] uppercase font-medium"
                  style={{ letterSpacing: "-4%", lineHeight: "115.5%" }}
                >
                  {title}
                </h4>
                <p className="font-outfit text-justify text-[20px] font-light" style={{
                  color: "gray",
                  lineHeight: "-4%"
                }}>{description}</p>
              </li>
            ))}
          </ul>

          <div className="w-full flex items-center justify-center">
            <Link href="/services" className="mx-auto w-fit">
              <Button className=" ml-auto gap-5 rounded-full md:w-69.25 px-[14.15px] py-[9.9px] text-black uppercase font-semibold h-17.5" style={{ backgroundColor: "#EFBF04" }}>
                <p className="text-sm! font-dm-sans">More of our services</p>
                <ArrowIcon />
              </Button>
            </Link>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Services
