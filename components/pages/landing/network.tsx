import GradientText from "@/components/gradientText";
import SectionTag from "@/components/sectionTag";
import { Button } from "@/components/ui/button";
import { ArrowRightIcon } from "lucide-react";
import Syncell from "@/assets/svgs/syncell.svg";
import Vireon from "@/assets/svgs/vireon.svg";
import Sisyphus from "@/assets/svgs/sisyphus.svg";
import Bridgr from "@/assets/svgs/bridgr.svg";
import Converra from "@/assets/svgs/converra.svg";
import Nietzsche from "@/assets/svgs/nietzsche.svg";
import Layers from "@/assets/svgs/layers.svg";
import Nexora from "@/assets/svgs/nexora.svg";
import Link from "next/link";
import { Reveal } from "@/components/animations/reveal";

const Network = () => {
  const row1 = [Sisyphus, Nietzsche, Nexora, Bridgr];

  const row2 = [Layers, Syncell, Vireon, Converra];

  return (
    <Reveal>
      <section
        id="network"
        className="p-17.5 bg-white space-y-12 overflow-hidden"
      >
        <SectionTag text="GLobal Network" className="text-black" />
        <div className="flex items-end justify-between">
          <GradientText
            text="Partnering with leading enterprises around the world."
            className="md:w-3/6"
          />
          <Button
            className="rounded-full min-h-17.5 gap-5 md:w-65.75 uppercase px-[9.9px] py-[14.15px]"
            asChild
          >
            <Link href="/contact/#contactForm">
              Partner With Us
              <ArrowRightIcon />
            </Link>
          </Button>
        </div>

        <div id="supportedBrands" className="relative space-y-8">
          <div className="absolute left-0 top-0 bottom-0 w-32 bg-linear-to-r from-white to-transparent z-10" />
          <div className="absolute right-0 top-0 bottom-0 w-32 bg-linear-to-l from-white to-transparent z-10" />
          <div className="flex w-max animate-marquee gap-16 items-center">
            {[...row1, ...row1, ...row1, ...row1].map((Brand, index) => (
              <div
                key={index}
                className="shrink-0 grayscale opacity-70 hover:grayscale-0 hover:opacity-100 transition-all duration-300"
              >
                <Brand className="h-16 w-auto md:h-16 text-black" />
              </div>
            ))}
          </div>

          <div className="flex w-max animate-marquee-reverse gap-16 items-center">
            {[...row2, ...row2, ...row2, ...row2].map((Brand, index) => (
              <div
                key={index}
                className="shrink-0 grayscale opacity-70 hover:grayscale-0 hover:opacity-100 transition-all duration-300"
              >
                <Brand className="h-8 w-auto md:h-16 text-black" />
              </div>
            ))}
          </div>
        </div>
      </section>
    </Reveal>
  );
};

export default Network;
