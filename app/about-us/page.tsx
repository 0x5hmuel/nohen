"use client";

import Hero from "@/components/hero";
import AboutUsHero from "@/assets/images/about_us_hero.png";
import Story from "@/components/pages/about-us/story";
import Difference from "@/components/pages/about-us/difference";
import GradientText from "@/components/gradientText";
import Mission from "@/components/pages/about-us/mission";
import Identity from "@/components/pages/about-us/identity";
import Team from "@/components/pages/about-us/team";
import Locations from "@/components/pages/about-us/locations";
import CoreValues from "@/components/pages/about-us/coreValues";
import WorkHistory from "@/components/pages/about-us/workHistory";
import PageFade from "@/components/animations/pageFade";

const Page = () => {
  return (
    <PageFade>
      <div className="relative">
        <Hero
          image={AboutUsHero}
          metaText={""}
          title="Proven Expertise in Complex Project Delivery."
          description="Experience That Builds Confidence.
With a strong focus on clarity and purpose, we transform complex ideas and architectural concepts into meaningful spaces that connect people to place — both today and for years to come."
          isLink={true}
          buttonLink="/case-studies#projects"
          alt=""
          buttonText="Browse Portfolio"
        />
        <Story />
        <Difference />
        <div className="p-8 md:p-10.5 relative text-center">
          <GradientText
            text="Our strength lies in our ability to analyse, simplify, and resolve complex design and construction problems without compromising functionality, aesthetics, or structural integrity. We bring resilience, creativity, and precision to every stage of the process, ensuring that even the most challenging visions are delivered with excellence. Clients trust us not only to design and build, but to overcome, transforming difficulty into distinction."
            className="lg:text-[35px]! text-left! font-satoshi! from-white/60"
          />
        </div>
        <Identity />
        <Mission />
        <CoreValues />
        <WorkHistory />
        <Team />
        <Locations />
      </div>
    </PageFade>
  );
};

export default Page;
