import GradientText from "@/components/gradientText"
import SectionTag from "@/components/sectionTag"
import { Button } from "@/components/ui/button"
import { ChevronRightIcon } from "lucide-react"

const Connect = () => {
  return (
    <div className="bg-white py-20">
      <div className="grid border-t grid-cols-[1fr_2fr] items-start px-10">
        <div className="p-5 h-full">
          <SectionTag text="Let's Connect" className="text-black" />
        </div>
        <div className="p-3 w-full">
          <GradientText text="Reach Out Today, Let’s Build Tomorrow." className="text-[50px]! font-dm-sans" />
          <form className="text-black [&_input]:w-full [&_input]:p-3 [&_input]:border-black/5 [&_input]:border [&_input]:h-10 [&_input]:rounded-lg flex flex-col gap-5">
            <div className="flex gap-3">
              <input type="text" placeholder="Fullname*" />
              <input type="text" placeholder="Phone Number" />
            </div>
            <div className="flex gap-3">
              <input type="email" placeholder="Email Address*" />
              <input type="text" placeholder="Service of interest*" />
            </div>
            <div>
              <textarea placeholder="Type your message*" rows={8} className="rounded-lg w-full border-black/5 border p-3" />
            </div>
            <Button type="submit" className="w-fit px-5 h-17.5 bg-black text-white font-semibold uppercase rounded-full">Send Us A message <ChevronRightIcon /></Button>
          </form>
        </div>
      </div>
    </div>
  )
}

export default Connect
