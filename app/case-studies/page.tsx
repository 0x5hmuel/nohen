import Hero from "@/components/hero";
import CaseStudies from "@/assets/images/case_studies.png";
import Cases from "@/components/pages/caseStudies/cases";
import PageFade from "@/components/animations/pageFade";

const Page = () => {
  return (
    <PageFade>
      <section id="caseStudies">
        <Hero
          title="OUR PORTFOLIO  OF INNOVATIVE CREATIONS."
          description="Discover our collection of modern architectural solutions for beautiful home. interiors with exceptional craftsmanship."
          buttonLink="/contact-us"
          buttonText="Book a consultation"
          alt=""
          image={CaseStudies}
          isLink={true}
          metaText=""
        />
        <Cases />
      </section>
    </PageFade>
  );
};

export default Page;
