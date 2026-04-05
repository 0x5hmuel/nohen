import GradientText from "@/components/gradientText";
import SectionTag from "@/components/sectionTag";
import ProjectGrid from "./works";

import NoLocation from "@/assets/images/no_location.png";
import EstaazHotel from "@/assets/images/estaaz.png";
import MultiStorey from "@/assets/images/multi_storey.png";
import EzialaImage from "@/assets/images/eziala_town_hall.png";
import HillTop from "@/assets/images/hilltop_residence.png";
import CountyImage from "@/assets/images/county_residence.png";

import ArtBuildingIcon from "@/assets/svgs/67936b860d8d5785d46f8cca_building 1.svg";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import { ArrowRightIcon } from "lucide-react";
import { Reveal, Stagger, StaggerItem } from "@/components/animations/reveal";

const Cases = () => {
  return (
    <Reveal>
      <div>
        <div className="bg-white space-y-5 px-5 py-10 md:p-17.5">
          <div className="space-y-4">
            <SectionTag text="Proven Results" className="text-black" />
            <GradientText text="Here are some of our successful projects that showcase how we help our clients achieve their dream plans." />
          </div>
          <Stagger>
            <ProjectGrid
              projects={[
                {
                  image: NoLocation,
                  title: "No location",
                  location: "",
                  href: "/project-detail/no-location",
                },
                {
                  image: EstaazHotel,
                  title: "Estaaz Hotel",
                  location: "OWERRI",
                  href: "/project-detail/estaaz-hotel-owerri",
                },
                {
                  image: MultiStorey,
                  title: "Multi Storey...",
                  location: "Gudu Abuja",
                  href: "/project-detail/multi-storey-gudu-abuja",
                },
                {
                  image: EzialaImage,
                  title: "Eziala Town Hall",
                  location: "Mbise",
                  href: "/project-detail/eziala-town-hall-mbise",
                },
                {
                  image: HillTop,
                  title: "HillTop residence",
                  location: "Abuja",
                  href: "/project-detail/hilltop-residence-abuja",
                },
                {
                  image: CountyImage,
                  title: "County Home...",
                  location: "Abia State",
                  href: "/project-detail/county-home-abia-state",
                },
              ]}
            />
          </Stagger>
        </div>
        <StaggerItem>
          <div
            className="relative flex w-full flex-col items-center justify-center gap-10 bg-cover bg-center px-5 py-14 md:h-100 md:w-screen md:px-0 md:py-0"
            style={{ backgroundImage: "url(/cta_banner.png)" }}
          >
            <div className="text-center space-y-4 z-30">
              <h6
                className="mx-auto w-full font-dm-sans text-[30px] md:w-4/6 md:text-[50px]"
                style={{ letterSpacing: "-8%", lineHeight: "115%" }}
              >
                Got a project? Let’s Build SomethingThat Lasts for you!
              </h6>
              <Button
                asChild
                className="bg-[#EFBF04] px-4 text-black hover:bg-[#EFBF04]/90"
              >
                <Link href="/contact#workHours">
                  Start Building with us today <ArrowRightIcon />
                </Link>
              </Button>
            </div>
            <div className="absolute bottom-0 hidden md:block">
              <ArtBuildingIcon />
            </div>
          </div>
        </StaggerItem>
      </div>
    </Reveal>
  );
};

export default Cases;
