"use client";
import { ArrowUpRightIcon } from "lucide-react";
import { motion, AnimatePresence } from "motion/react";
import { useState, useRef } from "react";

const socials = [
  { href: "https://www.tiktok.com/@nohenconstructiiltd", name: "TikTok" },
  { href: "#", name: "Twitter" },
  { href: "#", name: "LinkedIn" },
  {
    href: "https://www.instagram.com/nohenconstructiiltd?igsh=ZGd5Yjd5czJkcmky&utm_source=qr",
    name: "Instagram",
  },
];

const SocialLink = ({ href, name }: { href: string; name: string }) => {
  const [origin, setOrigin] = useState({ x: 0, y: 0 });
  const [hovered, setHovered] = useState(false);
  const ref = useRef<HTMLAnchorElement>(null);

  const handleMouseEnter = (e: React.MouseEvent) => {
    if (ref.current) {
      const rect = ref.current.getBoundingClientRect();
      setOrigin({
        x: e.clientX - rect.left,
        y: e.clientY - rect.top,
      });
      setHovered(true);
    }
  };

  const handleMouseMove = (e: React.MouseEvent) => {
    if (ref.current && hovered) {
      const rect = ref.current.getBoundingClientRect();
      setOrigin({
        x: e.clientX - rect.left,
        y: e.clientY - rect.top,
      });
    }
  };

  return (
    <a
      ref={ref}
      target="_blank"
      href={href}
      onMouseEnter={handleMouseEnter}
      onMouseMove={handleMouseMove}
      onMouseLeave={() => setHovered(false)}
      className="relative text-center border-[#DCDCDC]/50 justify-center overflow-hidden border inline-flex bg-white text-black items-center gap-x-5 p-5 py-10 group"
    >
      <AnimatePresence>
        {hovered && (
          <motion.span
            key="blob"
            className="pointer-events-none absolute rounded-full bg-[#EFBF04]"
            style={{
              left: origin.x,
              top: origin.y,
              translateX: "-50%",
              translateY: "-50%",
              width: 16,
              height: 16,
            }}
            initial={{ scale: 0, opacity: 1 }}
            animate={{ scale: 50 }}
            exit={{ scale: 0, opacity: 0 }}
            transition={{ duration: 1, ease: [0.25, 1, 0.5, 1] }}
          />
        )}
      </AnimatePresence>

      {/* Text & icon sit above the blob */}
      <p className="relative z-10 font-medium group-hover:text-black transition-colors duration-300">
        {name}
      </p>
      <ArrowUpRightIcon className="relative z-10 group-hover:text-black transition-colors duration-300" />
    </a>
  );
};

const SocialLinks = () => {
  return (
    <div className="grid grid-cols-2 lg:grid-cols-4 border bg-white overflow-x-hidden">
      {socials.map((link, i) => (
        <SocialLink key={i} href={link.href} name={link.name} />
      ))}
    </div>
  );
};

export default SocialLinks;
