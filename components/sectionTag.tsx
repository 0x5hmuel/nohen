import ArrowEight from "@/assets/svgs/arrow_8.svg"
import { clsx } from "clsx"

interface SectionTagProps {
  text: string
  className: string
}

const SectionTag = ({ text, className }: SectionTagProps) => {
  return (
    <div className={clsx("flex items-center gap-x-3", className)}>
      <ArrowEight className="" />
      <p className={`${clsx('font-satoshi text-[20px] uppercase font-medium', className)}`}>{text}</p>
    </div>
  )
}

export default SectionTag
