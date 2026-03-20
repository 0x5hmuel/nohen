import SectionTag from "@/components/sectionTag"

const texts = ["Nohen Constructii Ltd is an architectural and construction practice dedicated to delivering thoughtful, enduring, and well-executed built environments. For nearly a decade, the firm has built a reputation for translating ideas into functional, elegant structures that respond to both human needs and environmental context. Our work reflects a commitment to clarity, precision, and timeless design.", "Since stablishment, the company has successfully contributed to a diverse range of projects, approaching each one with a balance of creativity and technical expertise. We believe that architecture is more than building, it is the creation of spaces that inspire, serve, and endure. Our process is guided by collaboration, attention to detail, and a deep understanding of our clients’ vision.","At Nohen Constructii Ltd, we remain committed to excellence, innovation, and integrity in every phase of design and construction, continually shaping environments that stand as lasting expressions of quality and purpose."]

const Story = () => {
  return (
       <div className="grid grid-cols-[1fr_3fr] bg-black p-17.5">
      <div>
        <SectionTag text="Our story" className="text-white" />
      </div>
      <div className="space-y-5">
        {texts.map((text, index: number) => (
          <p key={index} className="font-outfit text-transparent text-left font-light md:text-[35px] bg-linear-to-r bg-clip-text from-gray-200 to-[#eFBF04]" style={{
            letterSpacing: "-4%",
            lineHeight: "120%"
          }}>{text}</p>

        ))}

      </div>

    </div>
  )
}

export default Story
