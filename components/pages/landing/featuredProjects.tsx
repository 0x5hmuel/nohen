import SectionTag from "@/components/sectionTag";
import { Button } from "@/components/ui/button";
import ArrowIcon from "@/assets/svgs/arrow.svg";
import ProjectCards, { ProjectCard } from "@/components/projectCard";
import ImageFive from "@/assets/images/hilltop_residence.png";
import ImageSix from "@/assets/images/county_home.png";
import CorporateOffice from "@/assets/images/eziala_town_hall.png";
import Link from "next/link";
import { Reveal } from "@/components/animations/reveal";

const projectCard: ProjectCard[] = [
  {
    title: "Hiltop Residence - Abuja",
    description:
      "A complete interior and structural renovation that transformed an outdated apartment.",
    image: ImageFive,
    href: "/project-detail/hilltop-residence-abuja",
  },
  {
    title: "County Home - Abia",
    description:
      "Contemporary residential project designed with clean architectural lines, spacious interiors.",
    image: ImageSix,
    href: "/project-detail/county-home-abia",
  },
  {
    title: "Eziala Town Hall - Mbise",
    description:
      "A well-planned commercial office development featuring modern design, efficient workspace.",
    image: CorporateOffice,
    href: "/project-detail/eziala-town-hall-mbise",
  },
];

const FeaturedProjects = () => {
  return (
    <Reveal>
      <section
        id="featuredProjects"
        className="relative space-y-5 p-6 md:p-10.5"
      >
        <SectionTag text="Featured Projects" className="" />
        <div className="flex w-full flex-col items-start justify-between gap-6 md:flex-row md:items-end">
          <p
            className="w-full text-[34px] font-dm-sans text-[#FAFAFA]/10 md:w-1/2 md:text-[62px]"
            style={{ letterSpacing: "-8%" }}
          >
            A peek into brilliant works we have done.
          </p>
          <Button
            className="h-14 w-full gap-4.25 rounded-full bg-[#EFBF04] py-[14.15px] text-black hover:bg-[#EFBF04]/90 sm:w-fit md:h-17.5 md:min-w-66.25"
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
