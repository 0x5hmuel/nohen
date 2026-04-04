import GradientText from "@/components/gradientText";
import Image from "next/image";

import ReasonOne from "@/assets/images/reason_one.png";
import ReasonTwo from "@/assets/images/reason_two.png";
import ReasonThree from "@/assets/images/reason_three.png";
import ReasonFour from "@/assets/images/reason_four.png";
import { Reveal, Stagger, StaggerItem } from "@/components/animations/reveal";

const Difference = () => {
  return (
    <Reveal>
      <div className="p-17.5 space-y-8">
        <div className="w-4/6">
          <GradientText
            text="What sets Nohen Constructii Ltd apart is our deliberate pursuit of complexity."
            className="from-white/60"
          />
        </div>
        <DifferenceCards />
      </div>
    </Reveal>
  );
};

export default Difference;

const differenceCardInfo = [
  {
    title:
      "We specialize in tackling the most demanding architectural and construction challenges",
    image: ReasonOne,
  },
  {
    title:
      "The projects others consider too difficult, too constrained, or too unconventional.",
    image: ReasonTwo,
  },
  {
    title: "Where limitations exist, we see possibilities.",
    image: ReasonThree,
  },
  {
    title:
      "Where others hesitate, we engage with clarity, confidence, and technical depth.",
    image: ReasonFour,
  },
];

export const DifferenceCards = () => {
  return (
    <Stagger className="grid md:grid-cols-2">
      {differenceCardInfo.map(({ title, image }, index: number) => (
        <StaggerItem key={index}>
          <div className="p-8 gap-10 relative h-full  flex items-center">
            <p className="text-white font-satoshi text-[25px]">{title}</p>
            <Image alt={title} src={image} className="absolute object-cover h-full inset-0" fill />
          </div>
        </StaggerItem>
      ))}
    </Stagger>
  );
};
