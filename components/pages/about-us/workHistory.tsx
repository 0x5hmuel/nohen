import ServicesHero from "@/assets/images/services_hero.png";
import { Reveal, Stagger, StaggerItem } from "@/components/animations/reveal";

type Award = {
  year: string;
  title: string;
  href: string;
};

const awards: Award[] = [
  {
    year: "2025",
    title: "Nigeria Turkiye Business Council",
    href: "#",
  },
  {
    year: "2010",
    title: "Corporate Affairs Commission",
    href: "#",
  },
];

const WorkHistory = () => {
  return (
    <Reveal>
      <div className="bg-white p-10 space-y-10">
        <div className="relative">
          <h4
            className="font-dm-sans font-medium text-[160px] uppercase bg-clip-text text-transparent bg-cover bg-center"
            style={{
              letterSpacing: "-8%",
              lineHeight: "88%",
              backgroundImage: `url(${ServicesHero.src})`,
            }}
          >
            Defined by the Challenges We Overcome
          </h4>
        </div>
        <Stagger className="w-full mx-auto border-2 divide-y border-black/2 rounded-sm divide-gray-200">
          {awards.map((award) => (
            <StaggerItem key={award.year}>
              <div className="grid grid-cols-[240px_1fr] py-8 items-start h-full">
                <span className="text-gray-400 text-base font-dm-sans h-full">
                  {award.year}
                </span>

                <div className="flex flex-col gap-2">
                  <h3
                    className="text-[#181818] text-lg font-bold font-satoshi"
                    style={{}}
                  >
                    {award.title}
                  </h3>
                  <a
                    href={award.href}
                    className="text-[#EFBF04] text-sm font-medium hover:underline w-fit"
                    style={{ fontFamily: "'DM Sans', sans-serif" }}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    Click to view
                  </a>
                </div>
              </div>
            </StaggerItem>
          ))}
        </Stagger>
      </div>
    </Reveal>
  );
};

export default WorkHistory;
