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
      "Nohen Constructii took on the construction of my 5-bedroom duplex on a very challenging slope in Maitama. Many contractors declined the job, but they delivered an outstanding building ahead of schedule. Their attention to detail is unmatched. Highly recommended!",
    name: "Mr. Chinedu Okoro",
    location: "Abuja",
  },
  {
    quote:
      "We needed a modern commercial plaza in Kano with a unique architectural concept. Nohen Constructii handled the entire design and build process flawlessly. The quality of work and finishing exceeded our expectations. Thank you!",
    name: "Mrs. Aisha Bello",
    location: "Kano",
  },
  {
    quote:
      "As a developer, I have worked with many firms, but Nohen Constructii stands out for taking on difficult projects others run away from. They completed our residential estate in Lekki without any major issues. Excellent team!",
    name: "Engr. Olusegun Adebayo",
    location: "Lagos",
  },
  {
    quote:
      "From the initial design consultation to the final interior finishing, Nohen Constructii made the whole process smooth. They built our family home exactly as we envisioned it. We are extremely satisfied.",
    name: "Dr. Fatima Yusuf",
    location: "Abuja",
  },
  {
    quote:
      "They constructed our hotel on a difficult terrain in Enugu. The structural work and creativity they brought to the project were impressive. Timely delivery and professional conduct throughout. God bless Nohen Constructii!",
    name: "Mr. Emeka Nwosu",
    location: "Enugu",
  },
  {
    quote:
      "We gave them a very complex commercial building with unusual features that other companies avoided. They delivered beyond expectations. If you have a challenging project, these are the people to call.",
    name: "Anonymous Client",
    location: "Port Harcourt",
  },
  {
    quote:
      "Nohen Constructii handled a government-backed community project for us. Their ability to manage logistics across states and maintain high quality standards is remarkable. We will definitely work with them again.",
    name: "Hon. Ibrahim Mohammed",
    location: "Gombe",
  },
  {
    quote:
      "The interior design and build of our home in Asaba was handled perfectly. They listened to every detail and brought our vision to life. The finishing is top-notch. Very professional company!",
    name: "Mrs. Ngozi Eze",
    location: "Asaba",
  },
  {
    quote:
      "We approached them for a tricky renovation and extension project on an old commercial building. They turned it into a modern masterpiece. Their experience since 2014 really shows in their work.",
    name: "Mr. Tunde Balogun",
    location: "Ibadan",
  },
  {
    quote:
      "Nohen Constructii managed the full design and construction of our office complex. Even with some changes during the project, they remained flexible and professional. Great value for money.",
    name: "Engr. Blessing Akpan",
    location: "Calabar",
  },
  {
    quote:
      "Building on rocky terrain in the outskirts of Abuja was no small task, but Nohen Constructii made it look easy. The quality of materials and workmanship is excellent. We are proud of our new home.",
    name: "Mr. David Akintola",
    location: "Abuja",
  },
  {
    quote:
      "After several disappointments with other contractors, we finally found Nohen Constructii. They took our difficult concept and delivered a beautiful residential building on time and within budget. Truly reliable.",
    name: "Anonymous Client",
    location: "Kaduna",
  },
  {
    quote:
      "We are grateful for the commercial warehouse they built for us. Despite the logistical challenges, they delivered exceptional work. Their nationwide experience is evident. Highly professional!",
    name: "Alhaji Sani Abubakar",
    location: "Maiduguri",
  },
  {
    quote:
      "The architectural design and interior they did for our boutique hotel was outstanding. Nohen Constructii does not just build - they create beautiful, functional spaces. We highly recommend them.",
    name: "Ms. Chioma Okafor",
    location: "Owerri",
  },
  {
    quote:
      "Working with Nohen Constructii on our family mansion was one of the best decisions we made. They handled every challenge with expertise and kept us informed throughout. The result speaks for itself after many years in business.",
    name: "Mr. Rotimi Williams",
    location: "Benin City",
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
        className="bg-[#F6F4F0] px-5 py-12 md:px-10 md:py-14 lg:h-260 lg:px-10.5 lg:py-17.5 overflow-hidden"
      >
        <div className="grid gap-8 lg:grid-cols-[1.15fr_0.45fr] lg:items-stretch lg:gap-12">
          <div className="grid gap-4 sm:grid-cols-2 lg:max-w-196.5">
            <div className="relative h-[420px] overflow-hidden sm:h-full">
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

            <div className="relative hidden h-[420px] overflow-hidden sm:block sm:h-full">
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
            className="flex h-full flex-col gap-8 pt-2 lg:justify-self-end lg:border-l lg:border-t-0 lg:pl-10 lg:pt-0"
            id="testimonialHeading"
          >
            <div className="space-y-4">
              <SectionTag text="Testimonials" className="text-black" />
              <GradientText
                text="Globally reputed for client satisfaction."
                className="text-[32px] leading-tight md:text-[50px]"
              />
              <p className="max-w-md font-satoshi text-black/60">
                What our happy clients are saying about our quality of execution
                and on-site professionalism.
              </p>
              <Button
                className="h-14 w-full rounded-full bg-black px-6 uppercase hover:bg-black/90 sm:w-fit"
                asChild
              >
                <Link href="/contact/#contactForm" className="gap-3">
                  Start a project
                  <ArrowRightIcon className="size-4" />
                </Link>
              </Button>
            </div>
            <ArtIcon className="w-full max-w-[260px] hidden md:block lg:max-w-full" />
          </div>
        </div>
      </section>
    </Reveal>
  );
};

export default Testimonials;
