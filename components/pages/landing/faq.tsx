import { Button } from "@/components/ui/button"
import { ChevronRightIcon } from "lucide-react"
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion"
import { Card, CardContent } from "@/components/ui/card"
import GradientText from "@/components/gradientText"


const questions = [
  {
    question: "What is Nohen Constructii?",
    answer: "Lorem ipsum dolor sit amet consectetur sagittis facilisis neque lectus eget amet morbi tristique metus dolor nulla amet vulputate ullamcorper dui nibh odio.",
    value: "nohen"
  },
  {
    question: "What types of architecture projects do they specialize in?",
    answer: "",
    value: "types"
  },
  {
    question: "Do you work on projects outside your city or region?",
    answer: "",
    value: "outside"
  },
  {
    question: "Where are your offices located?",
    answer: "",
    value: "offices"

  }
]


const Faq = () => {
  return (
    <section id="faq" className="h-216.5 flex items-center max-h-[656px] relative bg-white px-17.5">
      <div className="flex w-full justify-between gap-x-10">
        <div className="w-full space-y-3">
          <GradientText text="You ask, We answer!" />
          <div className="w-4/6 text-black">
            <p className="font-semibold">Still got any questions? <span className="font-light">Contact our Team via support@nohenconstruct.com</span></p>
          </div>
          <Button className="rounded-full py-5 gap-5 gap-x-3 px-5 text-white bg-black">
            Get In Touch
            <ChevronRightIcon />
          </Button>
        </div>
        <Card className="shadow-none text-black border ring-1 ring-gray-300 w-full">
          <CardContent>
            <Accordion type="single" className="space-y-3">
              {questions.map(({ question, answer, value }, index: number) => (
                <AccordionItem key={index} value={value} className="bg-[#F6F4F0] flex flex-col justify-center gap-2.5 px-7.5 py-5 rounded-[30px]">
                  <AccordionTrigger className="font-semibold font-dm-sans">
                    {question}
                  </AccordionTrigger>
                  <AccordionContent className="font-satoshi text-base" style={{ color: "gray" }}>
                    {answer}
                  </AccordionContent>
                </AccordionItem>
              ))}
            </Accordion>
          </CardContent>
        </Card>
      </div>
    </section>
  )
}

export default Faq
