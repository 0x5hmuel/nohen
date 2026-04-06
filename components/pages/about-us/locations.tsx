import GradientText from "@/components/gradientText";
import SectionTag from "@/components/sectionTag";
import AboutImage from "@/assets/images/Rectangle 24795.png";
import Image from "next/image";
import { Reveal } from "@/components/animations/reveal";

const locations = [
  {
    title: "Head Office",
    location: "116 road 6th Avenue, Gwarimpa estate, FCT, Abuja",
  },
];

const Locations = () => {
  return (
    <Reveal>
      <section className="p-8 md:p-10.5 bg-white grid md:grid-cols-2 relative md:min-h-129.25 items-center">
        <div className="space-y-8">
          <SectionTag text="our locations" className="text-black" />
          <GradientText
            text="Tour our Office Spaces"
            className="text-[50px]!"
          />
          <div className="text-black space-y-3">
            {locations.map(({ title, location }, index: number) => (
              <div className="bg-gray-100 p-4" key={index}>
                <p className="font-dm-sans text-[30px] md:text-[50px]">{title}</p>
                <p className="text-gray-400 font-light font-outfit">
                  {location}
                </p>
              </div>
            ))}
          </div>
        </div>
        <div className="relative h-full min-h-[500px]">
          <Image
            src={AboutImage}
            fill
            alt="Office location"
            className="object-cover"
            sizes="(min-width: 768px) 657px, 100vw"
          />
        </div>
      </section>
    </Reveal>
  );
};

export default Locations;
