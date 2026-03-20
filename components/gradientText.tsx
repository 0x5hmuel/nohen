import clsx from "clsx";

interface Props {
  className?: string;
  text: string;
}

const GradientText = ({ className, text }: Props) => {
  return (
    <p className={`${clsx('md:text-[50px] font-dm-sans bg-linear-to-r text-transparent from-[#181818] to-[#EFBF04] bg-clip-text', className)}`} style={{
      letterSpacing: "-8%"

    }}>{text}</p>
  )
}

export default GradientText
