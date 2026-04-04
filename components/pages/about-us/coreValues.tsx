import Image from "next/image";
import ServicesHero from "@/assets/images/Frame 2121453806.png";
import SectionTag from "@/components/sectionTag";
import { Reveal, Stagger, StaggerItem } from "@/components/animations/reveal";

const coreValues = [
  {
    number: "1",
    title: "Excellence",
    description:
      "We pursue the highest standards in design, engineering, and construction, ensuring every project reflects exceptional quality and durability.",
  },
  {
    number: "2",
    title: "Innovation",
    description:
      "We approach every challenge with creativity and technical insight, developing solutions that transform constraints into opportunities.",
  },
  {
    number: "3",
    title: "Precision",
    description:
      "We believe great projects are built on careful analysis, meticulous planning, and disciplined execution.",
  },
  {
    number: "4",
    title: "Integrity",
    description:
      "We build trust through transparency, accountability, and consistent delivery on our commitments.",
  },
  {
    number: "5",
    title: "Resilience",
    description:
      "We embrace complex and demanding projects with confidence, determination, and problem-solving expertise.",
  },
  {
    number: "6",
    title: "Client Partnership",
    description:
      "We work closely with our clients to understand their vision and deliver solutions that exceed expectations.",
  },
];

const leftValues = coreValues.slice(0, 3);
const rightValues = coreValues.slice(3, 6);

export default function CoreValues() {
  return (
    <Reveal>
      <section className="bg-black text-white py-16 px-6 sm:px-12 border-t border-white/10">
        <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-[1fr_auto_1fr] gap-10 items-center">
          <Stagger className="flex flex-col gap-0">
            {leftValues.map((value) => (
              <StaggerItem key={value.number}>
                <ValueCard {...value} />
              </StaggerItem>
            ))}
          </Stagger>

          <div className="relative w-[220px] lg:w-[260px] shrink-0 mx-auto lg:mx-0 aspect-[9/16] rounded-none overflow-hidden">
            <div className="bg-black/20">
              <Image
                src={ServicesHero}
                alt="Our Core Values"
                fill
                className="object-cover"
              />
            </div>

            <div className="absolute inset-0 flex flex-col items-center justify-center gap-3 px-4">
              <div className="flex items-center w-full justify-center relative">
                <SectionTag text="" className="rotate-180 top-10!" />
                <SectionTag text="" className="" />
              </div>

              <p
                className="text-center text-[#FAFAFA] text-[40px] font-black font-dm-sans leading-tight mix-blend-soft-light tracking-wide uppercase"
                style={{ letterSpacing: "-8%", lineHeight: "94%" }}
              >
                OUR CORE
                <br />
                VALUES
              </p>
            </div>
          </div>

          {/* Right Column — Values 4–6 */}
          <Stagger className="flex flex-col gap-0">
            {rightValues.map((value) => (
              <StaggerItem key={value.number}>
                <ValueCard {...value} />
              </StaggerItem>
            ))}
          </Stagger>
        </div>
      </section>
    </Reveal>
  );
}

function ValueCard({
  number,
  title,
  description,
}: {
  number: string;
  title: string;
  description: string;
}) {
  return (
    <div className="flex flex-col gap-2 border-l-4 pl-3 p-3 border-l-[#EFBF04]">
      <h3
        className="text-base font-bold text-white font-dm-sans text-[25px]"
        style={{ letterSpacing: "-8%", lineHeight: "115.5%" }}
      >
        <span className="text-[#EFBF04]">{number}.</span> {title}
      </h3>
      <p
        className="text-sm text-gray-300 text-[20px] leading-relaxed font-satoshi"
        style={{ letterSpacing: "-4%", lineHeight: "120%" }}
      >
        {description}
      </p>
    </div>
  );
}
