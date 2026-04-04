import SectionTag from "@/components/sectionTag";
import { Reveal } from "@/components/animations/reveal";

const Mission = () => {
  return (
    <Reveal>
      <section
        id="mission"
        className="p-17.5 grid md:grid-cols-2 gap-x-24 bg-black"
      >
        <div className="space-y-5 flex flex-col justify-between">
          <SectionTag text="Our Vision" className="text-white" />
          <p>
            To become a leading architecture and construction firm known for
            transforming complex challenges into remarkable built environments
            that redefine possibility.
          </p>
        </div>
        <div className="space-y-5 flex flex-col justify-between">
          <SectionTag text="Our Mission" className="text-white" />
          <p>
            To design and deliver technically sophisticated, resilient, and
            aesthetically refined buildings by embracing complexity, applying
            deep expertise, and executing every project with precision,
            integrity, and innovation.
          </p>
        </div>
      </section>
    </Reveal>
  );
};

export default Mission;
