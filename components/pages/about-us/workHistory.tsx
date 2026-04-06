import { useEffect, useState } from "react";
import ServicesHero from "@/assets/images/services_hero.png";
import Image, { type StaticImageData } from "next/image";
import { Reveal, Stagger, StaggerItem } from "@/components/animations/reveal";
import TurkiyeImage from "@/assets/images/turkiye.png";
import CacImage from "@/assets/images/cac.png";

type Award = {
  year: string;
  title: string;
  subtitle: string;
  image: StaticImageData;
};

const awards: Award[] = [
  {
    year: "2025",
    title: "Nigeria Turkiye Business Council",
    subtitle: "Click to view",
    image: TurkiyeImage,
  },
  {
    year: "2010",
    title: "Corporate Affairs Commission",
    subtitle: "Click to view",
    image: CacImage,
  },
];

const WorkHistory = () => {
  const [selectedAward, setSelectedAward] = useState<Award | null>(null);

  useEffect(() => {
    if (!selectedAward) return;

    const handleKeyDown = (event: KeyboardEvent) => {
      if (event.key === "Escape") {
        setSelectedAward(null);
      }
    };

    document.body.style.overflow = "hidden";
    window.addEventListener("keydown", handleKeyDown);

    return () => {
      document.body.style.overflow = "";
      window.removeEventListener("keydown", handleKeyDown);
    };
  }, [selectedAward]);

  return (
    <Reveal>
      <div className="bg-white p-10 space-y-10">
        <div className="relative">
          <h4
            className="font-dm-sans font-medium text-[50px] md:text-[100px] lg:text-[160px] uppercase bg-clip-text text-transparent bg-cover bg-center"
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
              <div className="grid grid-cols-1 space-y-5 px-5 md:grid-cols-[240px_1fr] py-8 items-start h-full">
                <span className="text-gray-400 text-2xl md:text-base font-satoshi h-full ">
                  {award.year}
                </span>

                <div className="flex flex-col gap-2">
                  <h3
                    className="text-[#181818] text-lg font-bold font-satoshi"
                    style={{}}
                  >
                    {award.title}
                  </h3>
                  <button
                    type="button"
                    onClick={() => setSelectedAward(award)}
                    className="w-fit text-[#EFBF04] font-satoshi capitalize text-lg font-medium text-left hover:underline"
                    style={{ letterSpacing: "-8%", lineHeight: "115%" }}
                  >
                    {award.subtitle}
                  </button>
                </div>
              </div>
            </StaggerItem>
          ))}
        </Stagger>
      </div>

      {selectedAward && (
        <div
          className="fixed inset-0 z-9999999999 flex items-center justify-center bg-black/80 p-4"
          onClick={() => setSelectedAward(null)}
        >
          <div
            className="relative z-10 w-full max-w-4xl overflow-hidden rounded-xl bg-white shadow-2xl"
            onClick={(event) => event.stopPropagation()}
          >
            <button
              type="button"
              aria-label="Close image"
              onClick={() => setSelectedAward(null)}
              className="absolute right-4 top-4 z-20 flex size-10 items-center justify-center rounded-full bg-black/70 text-white transition-colors hover:bg-black"
            >
              ✕
            </button>
            <div className="relative aspect-4/3 w-full bg-neutral-100">
              <Image
                src={selectedAward.image}
                alt={selectedAward.title}
                fill
                className="object-contain"
                sizes="(max-width: 768px) 100vw, 900px"
                priority
              />
            </div>
          </div>
        </div>
      )}
    </Reveal>
  );
};

export default WorkHistory;
