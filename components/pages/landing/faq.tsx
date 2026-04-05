import { Button } from "@/components/ui/button";
import { ChevronRightIcon } from "lucide-react";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { Card, CardContent } from "@/components/ui/card";
import GradientText from "@/components/gradientText";
import { Reveal, Stagger, StaggerItem } from "@/components/animations/reveal";
import Link from "next/link";

const questions = [
  {
    question: "What is Nohen Constructii?",
    answer:
      "Lorem ipsum dolor sit amet consectetur sagittis facilisis neque lectus eget amet morbi tristique metus dolor nulla amet vulputate ullamcorper dui nibh odio.",
    value: "nohen",
  },
  {
    question: "What types of architecture projects do they specialize in?",
    answer: "",
    value: "types",
  },
  {
    question: "Do you work on projects outside your city or region?",
    answer: "",
    value: "outside",
  },
  {
    question: "Where are your offices located?",
    answer: "",
    value: "offices",
  },
];

const Faq = () => {
  return (
    <Reveal>
      <section
        id="faq"
        className="relative bg-white px-5 py-12 md:px-10 lg:h-216.5 lg:max-h-164 lg:px-17.5 lg:py-0"
      >
        <div className="flex w-full flex-col gap-8 py-24 lg:flex-row lg:justify-between lg:gap-x-10">
          <div className="w-full space-y-3 lg:flex lg:flex-col lg:justify-center">
            <GradientText text="You ask, We answer!" />
            <div className="w-full text-black md:w-4/6">
              <p className="font-semibold">
                Still got any questions?{" "}
                <span className="font-light">
                  Contact our Team via support@nohenconstruct.com
                </span>
              </p>
            </div>
            <Button
              asChild
              className="w-full gap-5 gap-x-3 rounded-full bg-black px-5 py-5 text-white sm:w-fit"
            >
              <Link href="/contact#workHours">
                Get In Touch
                <ChevronRightIcon />
              </Link>
            </Button>
          </div>
          <Card className="w-full border text-black shadow-none ring-1 ring-gray-300">
            <CardContent>
              <Stagger>
                <Accordion type="single" className="space-y-3">
                  {questions.map(({ question, answer, value }) => (
                    <StaggerItem key={value}>
                      <AccordionItem
                        value={value}
                        className="flex flex-col justify-center gap-2.5 rounded-[24px] bg-[#F6F4F0] px-5 py-5 md:rounded-[30px] md:px-7.5"
                      >
                        <AccordionTrigger className="font-dm-sans text-left font-semibold">
                          {question}
                        </AccordionTrigger>
                        <AccordionContent
                          className="font-satoshi text-base"
                          style={{ color: "gray" }}
                        >
                          {answer}
                        </AccordionContent>
                      </AccordionItem>
                    </StaggerItem>
                  ))}
                </Accordion>
              </Stagger>
            </CardContent>
          </Card>
        </div>
      </section>
    </Reveal>
  );
};

export default Faq;
