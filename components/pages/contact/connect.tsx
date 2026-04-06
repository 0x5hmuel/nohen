import GradientText from "@/components/gradientText";
import SectionTag from "@/components/sectionTag";
import { Button } from "@/components/ui/button";
import { ChevronRightIcon } from "lucide-react";
import ContactImage from "@/assets/images/Frame 2121453828.png";
import Image from "next/image";
import { Reveal } from "@/components/animations/reveal";

const Connect = () => {
  return (
    <Reveal>
      <div className="bg-white pb-10" id="contactForm">
        <div className="hidden border-b border-b-black/20 h-20 md:block">
          <div className="w-113.75 border-r border-r-black/20 h-full"></div>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-[1fr_2fr] items-start">
          <div className="border-r border-r-gray-400/0 md:border-r-gray-400 h-full">
            <div
              className="p-5 h-full min-h-[320px] relative"
              style={{
                backgroundImage: "url(/assets/images/Frame 2121453828.png)",
              }}
            >
              <Image
                src={ContactImage}
                fill
                alt="Contact"
                className="object-cover absolute inset-0"
              />
              <div className="z-99999999 relative h-full flex mt-5 flex-col justify-between items-center">
                <SectionTag
                  text="Let's Connect"
                  className="text-white z-999999"
                />
                <p
                  className="w-full max-w-60 text-center mt-auto mb-auto block h-fit font-satoshi text-[34px] md:text-[50px] font-medium"
                  style={{ lineHeight: "84%", letterSpacing: "-6%" }}
                >
                  Interior Decoration
                </p>
              </div>
            </div>
          </div>
          <div className="p-5 w-full space-y-5 md:px-10">
            <GradientText
              text="Reach Out Today, Let’s Build Tomorrow."
              className="text-[34px]! md:text-[50px]! font-dm-sans"
            />
            <form className="text-black [&_input]:w-full [&_input]:p-3 [&_input]:border-black/5 [&_input]:border [&_input]:h-10 [&_input]:rounded-lg flex flex-col gap-5">
              <div className="flex flex-col md:flex-row gap-3">
                <input type="text" placeholder="Fullname*" />
                <input type="text" placeholder="Phone Number" />
              </div>
              <div className="flex flex-col md:flex-row gap-3">
                <input type="email" placeholder="Email Address*" />
                <select
                  className="w-full p-3 border-black/5 border h-10 rounded-lg text-black/50"
                  defaultValue=""
                >
                  <option value="" disabled className="text-[10px]">
                    Service of interest*
                  </option>
                  <option value="architectural-design">
                    Architectural Design
                  </option>
                  <option value="construction-delivery">
                    Construction Delivery
                  </option>
                  <option value="interior-designs">Interior Designs</option>
                  <option value="consultancy">Consultancy</option>
                </select>
              </div>
              <div>
                <textarea
                  placeholder="Type your message*"
                  rows={8}
                  className="rounded-lg w-full border-black/5 border p-3 resize-none"
                />
              </div>
              <Button
                type="submit"
                className="w-full sm:w-fit px-5 h-14 md:h-17.5 bg-black text-white font-semibold uppercase rounded-full"
              >
                Send Us A message <ChevronRightIcon />
              </Button>
            </form>
          </div>
        </div>
      </div>
    </Reveal>
  );
};

export default Connect;
