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

import SkylineImage from "@/assets/images/construction.png";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import { ArrowRightIcon } from "lucide-react";

const Cases = () => {
  return (
    <div>
      <div className="p-17.5 bg-white space-y-5">
        <div className="space-y-4">
          <SectionTag text="Proven Results" className="text-black" />
          <GradientText text="Here are some of our successful projects that showcase how we help our clients achieve their dream plans." />
        </div>
        <div>
          <ProjectGrid
            projects={[
              {
                image: NoLocation,
                title: "No location",
                location: "",
                href: "#",
              },
              {
                image: EstaazHotel,
                title: "Estaaz Hotel",
                location: "OWERRI",
                href: "#",
              },
              {
                image: MultiStorey,
                title: "Multi Storey...",
                location: "Gudu Abuja",
                href: "#",
              },
              {
                image: EzialaImage,
                title: "Eziala Town Hall",
                location: "Mbise",
                href: "#",
              },
              {
                image: HillTop,
                title: "HillTop residence",
                location: "Abuja",
                href: "",
              },
              {
                image: CountyImage,
                title: "County Home...",
                location: "Abia State",
                href: "#",
              },
            ]}
          />
        </div>
      </div>
      <div
        className="gap-10 relative h-100 w-screen flex flex-col items-center justify-center"
        style={{ backgroundImage: "url(/cta_banner.png)" }}
      >
        <div className="text-center space-y-4">
          <h6
            className="font-dm-sans w-4/6 mx-auto text-[50px]"
            style={{ letterSpacing: "-8%", lineHeight: "115%" }}
          >
            Got a project? Let’s Build SomethingThat Lasts for you!
          </h6>
          <Button
            asChild
            className="bg-[#EFBF04] hover:bg-[#EFBF04]/90 text-black px-4"
          >
            <Link href="">
              Start Building with us today <ArrowRightIcon />
            </Link>
          </Button>
        </div>
        <div className="absolute bottom-0">
          <ArtBuildingIcon />
        </div>
      </div>
    </div>
  );
};

export default Cases;
