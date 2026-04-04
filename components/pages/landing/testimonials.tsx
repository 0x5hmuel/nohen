import GradientText from "@/components/gradientText";
import SectionTag from "@/components/sectionTag";
import { Button } from "@/components/ui/button";
import ArtIcon from "@/assets/svgs/688a71fb40e5592f8f5f6e5b_we-start-creating-archipro-webflow-template 2.svg";
import Link from "next/link";
import { ArrowRightIcon } from "lucide-react";
import { Reveal } from "@/components/animations/reveal";

const reviews = [
  {
    quote:
      "Nohen Constructii fixed all major construction delays and quality issues. They delivered exactly as promised.",
    name: "Mrs. Aisha Bello",
    location: "Kano",
  },
  {
    quote:
      "The foundation work and structural detailing were excellent. We are already discussing our second project with them.",
    name: "Dr. Fatima Yusuf",
    location: "Abuja",
  },
  {
    quote:
      "Communication was clear from kickoff to closeout. Every interim milestone was hit on schedule.",
    name: "Mr. Chinedu Okoro",
    location: "Abia",
  },
  {
    quote:
      "Nohen Constructii handled our community-backed development with professionalism and care.",
    name: "Mr. Emeka Nwosu",
    location: "Enugu",
  },
  {
    quote:
      "As a developer, I need teams I can trust. Nohen delivered quality that speaks for itself.",
    name: "Engr. Olusegun Adebayo",
    location: "Lagos",
  },
];

const honorifics = ["mr", "mrs", "ms", "dr", "engr", "prof", "chief", "hon"];

const getInitial = (fullName: string) => {
  const cleanParts = fullName.replace(/[.,]/g, "").split(" ").filter(Boolean);

  const firstName = cleanParts.find(
    (part) => !honorifics.includes(part.toLowerCase()),
  );

  return (firstName?.charAt(0) ?? "N").toUpperCase();
};

const Testimonials = () => {
  const firstColumn = reviews.slice(0, 3);
  const secondColumn = reviews.slice(2);

  return (
    <Reveal>
      <section
        id="testimonials"
        className="h-260 bg-[#F6F4F0] px-6 py-14 md:px-17.5 md:py-17.5"
      >
        <div className="grid gap-10 lg:grid-cols-[1.15fr_0.45fr] lg:items-stretch lg:gap-12">
          <div className="grid gap-5 sm:grid-cols-2 lg:max-w-196.5">
            <div className="relative h-full overflow-hidden">
              <div className="flex h-max w-full animate-marquee-vertical flex-col gap-5">
                {[...firstColumn, ...firstColumn, ...firstColumn].map(
                  ({ quote, name, location }, index) => (
                    <article
                      key={`first-${index}`}
                      className="rounded-sm bg-gray-300/20 p-4 text-black"
                    >
                      <p className="font-satoshi text-[16px] italic leading-6 text-black/20 text-center">
                        &quot;{quote}&quot;
                      </p>
                      <div className="mt-4 flex items-center gap-3">
                        <span className="inline-flex size-9 shrink-0 items-center justify-center rounded-full border border-black/10 bg-white text-sm font-semibold text-black/80">
                          {getInitial(name)}
                        </span>
                        <p className="font-dm-sans text-lg font-semibold">
                          {name}
                        </p>
                      </div>
                      <p className="pl-12 font-satoshi text-sm text-black/50">
                        {location}
                      </p>
                    </article>
                  ),
                )}
              </div>
            </div>

            <div className="relative h-full overflow-hidden">
              <div className="flex h-full w-full animate-marquee-vertical-reverse flex-col gap-5">
                {[...secondColumn, ...secondColumn, ...secondColumn].map(
                  ({ quote, name, location }, index) => (
                    <article
                      key={`second-${index}`}
                      className="rounded-sm bg-gray-300/20 p-4 text-black"
                    >
                      <p className="font-satoshi leading-6 text-[16px] italic text-black/20 text-center">
                        &quot;{quote}&quot;
                      </p>
                      <div className="mt-4 flex items-center gap-3">
                        <span className="inline-flex size-9 shrink-0 items-center justify-center rounded-full border border-black/10 bg-white text-sm font-semibold text-black/80">
                          {getInitial(name)}
                        </span>
                        <p className="font-dm-sans text-md font-semibold">
                          {name}
                        </p>
                      </div>
                      <p className="pl-12 font-satoshi text-sm text-black/50">
                        {location}
                      </p>
                    </article>
                  ),
                )}
              </div>
            </div>
          </div>

          <div
            className="flex h-full flex-col  gap-8 pt-8 lg:justify-self-end lg:border-l lg:border-t-0 lg:pl-10 lg:pt-0"
            id="testimonialHeading"
          >
            <div className="space-y-4">
              <SectionTag text="Testimonials" className="text-black" />
              <GradientText
                text="Globally reputed for client satisfaction."
                className="text-[38px] leading-tight md:text-[50px]"
              />
              <p className="max-w-md font-satoshi text-black/60">
                What our happy clients are saying about our quality of execution
                and on-site professionalism.
              </p>
              <Button
                className="h-14 w-fit rounded-full bg-black px-6 uppercase hover:bg-black/90"
                asChild
              >
                <Link href="/contact/#contactForm" className="gap-3">
                  Start a project
                  <ArrowRightIcon className="size-4" />
                </Link>
              </Button>
            </div>
            <ArtIcon />
          </div>
        </div>
      </section>
    </Reveal>
  );
};

export default Testimonials;
