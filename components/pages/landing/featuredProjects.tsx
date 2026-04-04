import SectionTag from "@/components/sectionTag";
import { Button } from "@/components/ui/button";
import ArrowIcon from "@/assets/svgs/arrow.svg";
import ProjectCards, { ProjectCard } from "@/components/projectCard";
import ImageFive from "@/assets/images/hilltop_residence.png";
import ImageSix from "@/assets/images/extaaz_hotel.png";
import CorporateOffice from "@/assets/images/avm_residential.png";
import Link from "next/link";
import { Reveal } from "@/components/animations/reveal";

const projectCard: ProjectCard[] = [
  {
    title: "Hiltop Residence - Abuja",
    description:
      "A complete interior and structural renovation that transformed an outdated apartment.",
    image: ImageFive,
    href: "#",
  },
  {
    title: "Estaaz Hotel - Owerri",
    description:
      "Contemporary residential project designed with clean architectural lines, spacious interiors.",
    image: ImageSix,
    href: "#",
  },
  {
    title: "AVM Residential Apartments - Enugu",
    description:
      "A well-planned commercial office development featuring modern design, efficient workspace.",
    image: CorporateOffice,
    href: "#",
  },
];

const FeaturedProjects = () => {
  return (
    <Reveal>
      <section id="featuredProjects" className="p-17.5 relative space-y-5">
        <SectionTag text="Featured Projects" className="" />
        <div className="flex items-end w-full justify-between">
          <p
            className="text-[#FAFAFA]/10 text-[62px] w-1/2 font-dm-sans"
            style={{ letterSpacing: "-8%" }}
          >
            A peek into brilliant works we have done.
          </p>
          <Button
            className="gap-4.25 py-[14.15px] rounded-full bg-[#EFBF04] text-black h-17.5 min-w-66.25 hover:bg-[#EFBF04]/90"
            asChild
          >
            <Link href="/case-studies">
              See more of our works
              <ArrowIcon />
            </Link>
          </Button>
        </div>
        <ProjectCards cards={projectCard} />
      </section>
    </Reveal>
  );
};

export default FeaturedProjects;
