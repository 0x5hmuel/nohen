import GradientText from "@/components/gradientText";
import { motion } from "motion/react";
import SectionTag from "@/components/sectionTag";
import { StaticImageData } from "next/image";
import Image from "next/image";
import UserOne from "@/assets/images/user_one.png";
import UserTwo from "@/assets/images/user_two.png";
import { Reveal, Stagger, StaggerItem } from "@/components/animations/reveal";

const teamMembers = [
  { image: UserOne, name: "Jane Doe", role: "Lead Architect" },
  { image: UserTwo, name: "John Smith", role: "Structural Engineer" },
  { image: UserOne, name: "Amaka Obi", role: "Interior Designer" },
  { image: UserTwo, name: "Emeka Nwosu", role: "Project Manager" },
  { image: UserOne, name: "Sara Ali", role: "Urban Planner" },
  { image: UserTwo, name: "David Eze", role: "Site Supervisor" },
];

const Team = () => {
  return (
    <Reveal>
      <section id="ourTeam" className="bg-white p-8 md:p-17.5 ">
        <div className="space-y-10">
          <SectionTag text="our team" className="text-black" />
          <div className="flex items-center text-[25px] md:flex-row flex-col">
            <GradientText text="Meet the brilliant team powering our architectural innovations." />
            <div className="space-y-5">
              <p
                className="font-outfit text-left md:text-right font-light"
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
      <motion.div
        className="absolute inset-0 bg-black/60 flex flex-col justify-end p-5"
        initial={{ opacity: 0 }}
        whileHover={{ opacity: 1 }}
        transition={{ duration: 0.3 }}
      >
        <motion.p
          className="font-dm-sans text-white text-[18px] font-semibold"
          style={{ letterSpacing: "-0.02em" }}
          initial={{ y: 12, opacity: 0 }}
          whileHover={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.3, delay: 0.05 }}
        >
          {name}
        </motion.p>
        <motion.p
          className="font-outfit text-[#EFBF04] text-[13px] font-light"
          initial={{ y: 12, opacity: 0 }}
          whileHover={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.3, delay: 0.1 }}
        >
          {role}
        </motion.p>
      </motion.div>
    </div>
  );
};
