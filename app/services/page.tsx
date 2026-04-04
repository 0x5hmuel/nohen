"use client";

import Hero from "@/components/hero";
import ServicesHero from "@/assets/images/services_hero.png";
import ServiceCard from "@/components/pages/services/serviceCard";
import ProjectManagement from "@/assets/images/68a687ca482b9536e4542097_service-icon-2 1.png";

import BoxesImage from "@/assets/images/boxes.png";
import Construction from "@/assets/images/construction.png";
import Design from "@/assets/images/interior_design.png";
import SectionTag from "@/components/sectionTag";
import ArchitecturalDesign from "@/assets/images/68a687ca482b9536e4542097_service-icon-2 1(1).png";
import { useState } from "react";
import PageFade from "@/components/animations/pageFade";

const services = [
  { name: "Architectural Design", id: "architecturalDesign" },
  { name: "Construction", id: "constructionDevelopment" },
  { name: "Interior Design", id: "interiorDesign" },
  { name: "Consultancy", id: "consultancy" },
];

const Page = () => {
  const [activeService, setActiveService] = useState<string | null>(null);

  return (
    <PageFade>
      <section id="services">
        <Hero
          title="Technical Expertise for Demanding Projects."
          description="Our mission is simple, to provide unparalleled expertise, guidance, and support to our clients across their real estate journey."
          buttonText="Call Us Today"
          alt=""
          image={ServicesHero}
          buttonLink=""
          metaText=""
          isLink={true}
          key={"services"}
        />
        <div className="bg-white">
          <div className="p-17.5 flex items-center justify-between">
            <SectionTag text="our services" className={"text-black"} />
            <ul className="flex items-center gap-x-10">
              {services.map((service, index) => {
                const isActive = activeService === service.id;
                const scrollToService = () => {
                  document
                    .getElementById(service.id)
                    ?.scrollIntoView({ behavior: "smooth" });
                };
                return (
                  <li
                    key={index}
                    onClick={scrollToService}
                    className={`text-[25px] font-dm-sans transition-all duration-300 cursor-pointer ${
                      isActive
                        ? "bg-linear-to-r from-[#181818] to-[#EFBF04] bg-clip-text text-transparent border-b-2 border-[#EFBF04]"
                        : "text-black"
                    }`}
                  >
                    <p>{service.name}</p>
                  </li>
                );
              })}
            </ul>
          </div>
          <ServiceCard
            image={BoxesImage}
            id="architecturalDesign"
            index={1}
            title="Architectural Design"
            onInView={setActiveService}
            content="As a leading architectural firm in Abuja, Nohen Construct II Ltd provides comprehensive architectural design services for residential, commercial, institutional, and specialized projects. Our work is driven by a commitment to creating buildings that are functional, timeless, and responsive to their environment. Our architects in Abuja, Nigeria begin each project by carefully studying the client's vision, site conditions, and regulatory requirements. We translate these factors into clear, innovative design solutions supported by detailed technical drawings and documentation suitable for approval and construction. Every design is developed with careful attention to spatial efficiency, structural feasibility, sustainability, and long-term performance. We are particularly recognized for handling complex and technically demanding projects, including constrained sites and unconventional design challenges. Clients trust our architectural design services in Abuja to deliver buildings that are not only visually compelling but also practical, buildable, and enduring. We continue to serve individuals and organizations seeking reliable architectural expertise in Abuja and across Nigeria."
            gradientText="Arcitecture Design"
          />
          <ServiceCard
            image={ArchitecturalDesign}
            id="constructionDevelopment"
            index={2}
            title="Construction Development"
            onInView={setActiveService}
            content="Nohen Constructii Ltd is a trusted construction company in Abuja, delivering high-quality building construction services for a wide range of project types. We transform architectural concepts into durable, well-executed physical structures that meet design specifications, safety standards, and client expectations. Our building construction services in Abuja cover every phase of the construction process, including site preparation, structural works, finishing, and project delivery. We work with experienced engineers, skilled craftsmen, and reliable suppliers to ensure precision, quality, and consistency throughout the construction lifecycle. Known for our ability to execute complex and challenging projects, we approach every construction assignment with professionalism, technical expertise, and attention to detail. Clients seeking dependable building construction in Abuja and throughout Nigeria rely on us to deliver projects that stand the test of time."
            gradientText="Construction Development"
            reverse={true}
          />
          <ServiceCard
            image={ProjectManagement}
            id="projectManagement"
            index={3}
            title="Project Management"
            onInView={setActiveService}
            content="We provide professional project management services in Abuja, ensuring that architectural and construction projects are executed efficiently, on schedule, and within budget. Our project management approach focuses on coordination, planning, supervision, and quality assurance from project inception to completion. As an experienced architecture and construction company in Nigeria, we act on behalf of our clients to manage contractors, consultants, timelines, and resources. We ensure that every stage of the project aligns with the approved design, financial plan, and construction standards. Our project management services are especially valuable for complex developments requiring careful oversight and technical coordination. Clients across Abuja trust our structured and transparent management process to deliver successful outcomes while minimizing risks and delays."
            gradientText="Project Management"
            reverse={false}
          />
          <ServiceCard
            image={Design}
            id="interiorDesign"
            gradientText="Interior Design & Decor"
            index={4}
            title="Interior Design & Decor"
            onInView={setActiveService}
            content="Nohen Construct II Ltd offers refined and functional interior design services in Abuja, creating interior environments that complement the architectural vision and enhance the user experience. We design residential, commercial, and office interiors that balance aesthetics, comfort, and practicality. Our interior design process includes space planning, material selection, lighting design, color coordination, and furniture integration. We ensure that every interior element works together to create cohesive, elegant, and functional spaces. Clients seeking professional interior design services in Abuja trust our ability to create interiors that reflect their identity while maintaining timeless appeal. Our work integrates seamlessly with our architectural and construction services, providing a complete design-to-completion solution."
            reverse={true}
          />
          <ServiceCard
            image={ProjectManagement}
            id="consultancy"
            gradientText="Consultancy"
            index={5}
            title="Consultancy"
            onInView={setActiveService}
            content="As an experienced architecture and construction company in Nigeria, Nohen Construct II Ltd provides expert consultancy services to guide clients through the technical and strategic aspects of their projects. Our consultancy services support clients in making informed decisions before and during design and construction. We provide architectural advisory services in Abuja, including feasibility studies, site analysis, project planning, and construction consultation. Our team helps identify potential challenges early and recommends practical, cost-effective solutions. Our consultancy services are particularly valuable for complex or high-value projects where professional guidance is essential. Clients rely on our expertise to ensure their projects in Abuja and across Nigeria are well-planned, efficient, and successfully executed."
            reverse={false}
          />
        </div>
        <div className="bg-[#EFBF04] h-108"></div>
      </section>
    </PageFade>
  );
};

export default Page;
