import GradientText from "@/components/gradientText";
import SectionTag from "@/components/sectionTag";
import clsx from "clsx";
import { StaticImageData } from "next/image";
import Image from "next/image";

import ProcessOne from "@/assets/images/process_one.png";
import ProcessTwo from "@/assets/images/process_two.png";
import ProcessThree from "@/assets/images/process_three.png";

import Headphones from "@/assets/svgs/68a86a578e49483eab8042f4.svg";
import Lightbulb from "@/assets/svgs/68a86a586cca92a29a6fad93.svg";
import Squares from "@/assets/svgs/68a86a57dada35a644eb369d.svg";
import Crest from "@/assets/svgs/68a86a57d931f21d85cb996f.svg";
import { Reveal, Stagger, StaggerItem } from "@/components/animations/reveal";

const Process = () => {
  return (
    <Reveal>
      <section id="ourProcess" className="relative bg-white p-17.5 space-y-10">
        <SectionTag text="Our Process" className="text-black" />
        <div className="flex items-center gap-x-10">
          <GradientText
            text="We guide you every step of the way, from blueprint to building."
            className="font-dm-sans md:text-[40px]!"
          />
          <p
            className="text-right text-[25px] font-light font-outfit"
            style={{ color: "gray", letterSpacing: "-4%" }}
          >
            From design to construction, from foundation to execution, we build
            structures that brings your dream to reality.
          </p>
        </div>
        <Stagger className="space-y-1">
          <StaggerItem>
            <InfoView
              title="Consultation & Discovery."
              description="We start by understanding your needs, style, preferences and goals through an in-depth discovery meeting."
              image={ProcessOne}
              className=""
              icon={Headphones}
              titleClassName=""
              descriptionClassName=""
            />
          </StaggerItem>
          <StaggerItem>
            <InfoView
              title="Concept & Planning."
              description="Our team creates case studies, layouts, and conceptual designs tailored to your vision."
              image={ProcessTwo}
              className=""
              icon={Lightbulb}
              titleClassName="text-white/50"
              descriptionClassName=""
            />
          </StaggerItem>
          <StaggerItem>
            <InfoView
              title="Design & Development."
              description="From 2D plans to detailed 3D visualizations, we perfect the plans, review designs with clients, and get government approval."
              className="bg-[#EFBF04] text-black"
              icon={Crest}
              titleClassName=""
              descriptionClassName=""
              background="#EFBF04"
            />
          </StaggerItem>
          <StaggerItem>
            <InfoView
              title="Design & Development."
              description="From 2D plans to detailed 3D visualizations, we perfect the plans, review designs with clients, and get government approval."
              className="text-white"
              icon={Squares}
              titleClassName=""
              descriptionClassName=""
              image={ProcessThree}
            />
          </StaggerItem>
        </Stagger>
      </section>
    </Reveal>
  );
};

export default Process;

interface InfoProps {
  title: string;
  description: string;
  image?: StaticImageData;
  className: string;
  icon: React.ComponentType<React.SVGProps<SVGSVGElement>>;
  titleClassName: string;
  descriptionClassName: string;
  background?: string;
}

export const InfoView = ({
  background,
  title,
  description,
  image,
  className,
  icon: Icon,
  titleClassName,
  descriptionClassName,
}: InfoProps) => {
  return (
    <div
      className={`${clsx("relative w-full overflow-hidden flex items-center py-5 p-0 rounded-none ")}`}
      style={{ backgroundColor: background }}
    >
      {image && (
        <div className="absolute inset-0">
          <Image src={image} alt="" className="inset-0 object-cover" />
        </div>
      )}
      <div
        className={`${clsx("flex justify-between gap-x-5 w-full z-999 px-15 items-center", className)}`}
      >
        <p
          className={`${clsx("font-dm-sans w-72.5 font-medium text-[40px]", titleClassName)}`}
        >
          {title}
        </p>
        <p
          className={`${clsx("font-outfit text-[20px] max-w-133.5 font-extralight", descriptionClassName)}`}
          style={{ letterSpacing: "-4%" }}
        >
          {description}
        </p>
        <div>
          <Icon className="w-fit ml-auto" />
        </div>
      </div>
    </div>
  );
};
