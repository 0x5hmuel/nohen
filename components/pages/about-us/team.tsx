import GradientText from "@/components/gradientText";
import SectionTag from "@/components/sectionTag";
import { StaticImageData } from "next/image";
import Image from "next/image";
import UserOne from "@/assets/images/user_one.png";
import UserTwo from "@/assets/images/user_two.png";
import { Reveal, Stagger, StaggerItem } from "@/components/animations/reveal";

const teamMembers = [
  {
    image: UserOne,
    name: "H.O Amaije-Ufomba (M.CIPMN)",
    role: "MD, Founder of Nohen Constructii Ltd",
  },
  { image: UserTwo, name: "John Smith", role: "Structural Engineer" },
  { image: UserOne, name: "Amaka Obi", role: "Interior Designer" },
];

const Team = () => {
  return (
    <Reveal>
      <section id="ourTeam" className="bg-white p-8 md:p-10.5 ">
        <div className="space-y-10">
          <SectionTag text="our team" className="text-black" />
          <div className="flex items-center text-[25px] md:flex-row flex-col">
            <GradientText text="Meet the brilliant team powering our architectural innovations." className="text-[30px]! md:text-[50px]! lg:text-[50px]!" />
            <div className="space-y-5">
              <p
                className="font-outfit text-left md:text-right font-light text-[20px] md:text-base"
                style={{ color: "gray" }}
              >
                Our dedicated team members are here to serve you with excellence
                and professionalism.
              </p>
            </div>
          </div>
          <Stagger className="grid md:grid-cols-2 grid-cols-1 lg:grid-cols-3 gap-6">
            {teamMembers.map((team, index: number) => (
              <StaggerItem key={index}>
                <TeamImages
                  image={team.image}
                  alt={team.name}
                  name={team.name}
                  role={team.role}
                />
              </StaggerItem>
            ))}
          </Stagger>
        </div>
      </section>
    </Reveal>
  );
};

export default Team;

export const TeamImages = ({
  image,
  alt,
  name,
  role,
}: {
  alt: string;
  image: StaticImageData;
  name: string;
  role: string;
}) => {
  return (
    <div className="relative overflow-hidden group cursor-pointer">
      <Image
        src={image}
        alt={alt}
        className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
      />
      <div className="absolute inset-0 flex flex-col justify-end bg-black/60 p-5 opacity-0 transition-opacity duration-300 group-hover:opacity-100">
        <p
          className="font-dm-sans text-white text-[18px] font-semibold translate-y-3 opacity-0 transition-all duration-300 delay-75 group-hover:translate-y-0 group-hover:opacity-100"
          style={{ letterSpacing: "-0.02em" }}
        >
          {name}
        </p>
        <p className="font-outfit text-[#EFBF04] text-[13px] font-light translate-y-3 opacity-0 transition-all duration-300 delay-100 group-hover:translate-y-0 group-hover:opacity-100">
          {role}
        </p>
      </div>
    </div>
  );
};
