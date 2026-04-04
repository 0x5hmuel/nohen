import Hero from "@/components/hero";
import SocialLinks from "@/ui/components/socialLinks";
import HeroImage from "@/assets/images/hero.png";
import Services from "@/components/pages/landing/services";
import Faq from "@/components/pages/landing/faq";
import FeaturedProjects from "@/components/pages/landing/featuredProjects";
import Network from "@/components/pages/landing/network";
import AboutUs from "@/components/pages/landing/aboutUs";
import Process from "@/components/pages/landing/process";
import Testimonials from "@/components/pages/landing/testimonials";
import PageFade from "@/components/animations/pageFade";

export default function Home() {
  return (
    <PageFade>
      <main className="w-screen relative">
        <Hero
          image={HeroImage}
          alt=""
          title="Complexity, Resolved. Excellence, Delivered"
          metaText={<></>}
          description="Nohen Constructii is steady transforming challenging ideas, constrained sites, and complex designs into exceptional built environments."
          buttonLink="/about"
          isLink={true}
          buttonText="Start a project"
        />
        <Network />
        <AboutUs />
        <Services />
        <Process />
        <FeaturedProjects />
        <Testimonials />
        <Faq />
      </main>
    </PageFade>
  );
}
