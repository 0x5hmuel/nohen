"use client";

import HillTop from "@/assets/images/hilltop_residence.png"
import { useRef, useState, useCallback } from "react";
import ProjectHero from "@/components/projectHero";

const PROJECT_IMAGES = [
  { id: 1, label: "Front Elevation" },
  { id: 2, label: "Side View" },
  { id: 3, label: "Main Entrance" },
  { id: 4, label: "Garden Wing" },
  { id: 5, label: "Rear Facade" },
  { id: 6, label: "Rooftop Deck" },
];

const SOCIAL_LINKS = [
  { label: "Facebook", href: "#" },
  { label: "Twitter", href: "#", highlighted: true },
  { label: "LinkedIn", href: "#" },
  { label: "Instagram", href: "#" },
];

export default function ProjectDetail() {
  const scrollRef = useRef<HTMLDivElement>(null);
  const [activeIndex, setActiveIndex] = useState(1);

  const scrollToIndex = useCallback((index: number) => {
    const container = scrollRef.current;
    if (!container) return;
    const clamped = Math.max(0, Math.min(index, PROJECT_IMAGES.length - 1));
    setActiveIndex(clamped);
    const card = container.children[clamped] as HTMLElement;
    if (card) {
      const offset =
        card.offsetLeft - container.clientWidth / 2 + card.clientWidth / 2;
      container.scrollTo({ left: offset, behavior: "smooth" });
    }
  }, []);

  const handlePrev = () => scrollToIndex(activeIndex - 1);
  const handleNext = () => scrollToIndex(activeIndex + 1);

  return (
    <div
      className="min-h-screen bg-white text-black"
      style={{ fontFamily: "'DM Sans', sans-serif" }}
    >
      <ProjectHero image={HillTop} text="Hilltop Residence Abuja" alt="" />
      <section className="max-w-8xl mx-auto grid grid-cols-1 gap-8 border-b-2 border-b-gray-400/20 px-5 pt-0 pb-0 md:grid-cols-[500px_1fr] md:gap-12 md:px-8">
        <div className="md:border-r-2 md:border-r-gray-400/20 border-b border-b-gray-400/20 md:border-b-0">
          <div className="py-8 md:py-10">
            <h2 className="text-3xl md:text-5xl font-medium leading-tight mb-3" style={{ letterSpacing: "-8%", lineHeight: "115.5%" }}>
              Details about
              <br />
              the project
            </h2>
            <p className="text-base sm:text-lg md:text-2xl font-satoshi text-black/50 mb-8 leading-relaxed" style={{ lineHeight: "120%" }}>
              Unleashing the energy of innovation through intelligent,
              performance-driven design.
            </p>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-y-6 gap-x-4">
              <div>
                <p className="text-base font-satoshi uppercase tracking-widest text-gray-400 mb-1" style={{ letterSpacing: "-4%", lineHeight: "118%" }}>
                  Client
                </p>
                <p className="text-xl md:text-2xl font-medium" style={{ letterSpacing: "-8%", lineHeight: "115.5%" }}>Sarah Collins</p>
              </div>
              <div>
                <p className="text-base font-satoshi uppercase tracking-widest text-gray-400 mb-1" style={{ letterSpacing: "-4%", lineHeight: "118%" }}>
                  Location
                </p>
                <p className="text-xl md:text-2xl font-medium" style={{ letterSpacing: "-8%", lineHeight: "115.5%" }}>Nijmegen, NED</p>
              </div>
              <div>
                <p className="text-base font-satoshi uppercase tracking-widest text-gray-400 mb-1" style={{ letterSpacing: "-4%", lineHeight: "118%" }}>
                  Total Area
                </p>
                <p className="text-xl md:text-2xl font-medium" style={{ letterSpacing: "-8%", lineHeight: "115.5%" }}>1209 sqm</p>
              </div>
              <div>
                <p className="text-base font-satoshi uppercase tracking-widest text-gray-400 mb-1" style={{ letterSpacing: "-4%", lineHeight: "118%" }}>
                  Timeline
                </p>
                <p className="text-xl md:text-2xl font-medium" style={{ letterSpacing: "-8%", lineHeight: "115.5%" }}>2014</p>
              </div>
            </div>
          </div>
        </div>
        <div>
          <div className="py-8 md:py-10">
            <h1 className="text-3xl md:text-5xl font-medium leading-tight mb-6" style={{ letterSpacing: "-8%", lineHeight: "115.5%" }}>
              Hilltop Residence represents the intersection of energy and design
            </h1>
            <div className="space-y-4 text-base sm:text-lg md:text-2xl font-satoshi text-gray-400 leading-relaxed" style={{ letterSpacing: "-4%", lineHeight: "120%" }}>
              <p>
                Nohen Constructii Ltd is an architectural and construction
                practice dedicated to delivering thoughtful, enduring, and
                well-executed built environments. For nearly a decade, the firm
                has built a reputation for translating ideas into functional,
                elegant structures that respond to both human needs and
                environmental context. Our work reflects a commitment to clarity,
                precision, and timeless design.
              </p>
              <p>
                Since its establishment, the company has successfully contributed
                to a diverse range of projects, approaching each one with a
                balance of creativity and technical expertise. We believe that
                architecture is more than building; it is the creation of spaces
                that inspire, serve, and endure. Our process is guided by
                collaboration, attention to detail, and a deep understanding of
                our clients&apos; vision.
              </p>
              <p>
                At Nohen Constructii Ltd, we remain committed to excellence,
                innovation, and integrity in every phase of design and
                construction, continually shaping environments that stand as
                lasting expressions of quality and purpose.
              </p>
            </div>
          </div>
        </div>
      </section>
      <section className="py-10 md:py-12">
        <div className="max-w-6xl mx-auto px-5 md:px-8 mb-8 text-center">
          <h2 className="text-3xl font-dm-sans md:text-5xl font-medium mb-2" style={{ letterSpacing: "-8%", lineHeight: "115.5%" }}>
            Different view of the project
          </h2>
          <p className="text-base md:text-2xl font-satoshi text-gray-400" style={{ letterSpacing: "-4%", lineHeight: "120%" }}>
            Good design is invisible. It supports life quietly,
            <br className="hidden md:block" />
            with clarity and purpose.
          </p>
        </div>

        {/* Scrollable Strip */}
        <div
          ref={scrollRef}
          className="flex gap-3 overflow-x-auto px-5 md:px-8 scroll-smooth"
          style={{ scrollbarWidth: "none", msOverflowStyle: "none" }}
        >
          {PROJECT_IMAGES.map((img, i) => {
            const isActive = i === activeIndex;
            return (
              <div
                key={img.id}
                onClick={() => scrollToIndex(i)}
                className="relative flex-shrink-0 cursor-pointer overflow-hidden transition-all duration-500"
                style={{
                  width: isActive ? "min(75vw, 340px)" : "min(42vw, 160px)",
                  height: isActive ? "min(55vw, 260px)" : "min(48vw, 200px)",
                  alignSelf: "center",
                  borderRadius: 4,
                }}
              >
                {/* Placeholder block */}
                <div
                  className="absolute inset-0"
                  style={{
                    background: isActive
                      ? "linear-gradient(135deg, #2a2a2a 0%, #3a3a3a 50%, #222 100%)"
                      : "linear-gradient(135deg, #222 0%, #2e2e2e 100%)",
                    transition: "background 0.4s ease",
                  }}
                >
                  {/* subtle grid texture */}
                  <div
                    className="absolute inset-0 opacity-10"
                    style={{
                      backgroundImage:
                        "repeating-linear-gradient(0deg, transparent, transparent 20px, #fff 20px, #fff 21px), repeating-linear-gradient(90deg, transparent, transparent 20px, #fff 20px, #fff 21px)",
                    }}
                  />
                </div>
                {isActive && (
                  <div className="absolute inset-0 flex flex-col items-center justify-center gap-2">
                    <div className="bg-[#EFBF04]/90 text-[#181818] text-[10px] font-bold uppercase tracking-widest px-3 py-2 rounded-sm md:px-4">
                      Click to expand
                    </div>
                    <p className="text-black text-xs mt-1">{img.label}</p>
                  </div>
                )}
                {!isActive && (
                  <div className="absolute inset-0 bg-black/40 flex items-end p-2">
                    <p className="text-black text-[10px] uppercase tracking-wide">
                      {img.label}
                    </p>
                  </div>
                )}
              </div>
            );
          })}
        </div>

        {/* Navigation Arrows */}
        <div className="flex justify-center gap-4 mt-8">
          <button
            onClick={handlePrev}
            disabled={activeIndex === 0}
            className="w-10 h-10 rounded-full border border-white/20 flex items-center justify-center text-black hover:border-white/50 hover:text-white disabled:opacity-20 transition-all duration-200"
          >
            ←
          </button>
          <button
            onClick={handleNext}
            disabled={activeIndex === PROJECT_IMAGES.length - 1}
            className="w-10 h-10 rounded-full bg-[#EFBF04] flex items-center justify-center text-[#181818] font-bold hover:bg-[#d4ab00] disabled:opacity-20 transition-all duration-200"
          >
            →
          </button>
        </div>
      </section>
    </div>
  );
}
