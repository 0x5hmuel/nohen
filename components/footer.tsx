"use client";

import Image from "next/image";
import { NohenLogo } from "./nohenLogo";
import { motion } from "motion/react";
import bgImage from "@/assets/images/footer.png";
import HorizontalImages from "@/assets/images/horizontal_lines.png";
import { ArrowUp } from "lucide-react";

export default function Footer() {
  return (
    <footer className="relative w-full font-dm-sans text-white overflow-hidden h-208.5">
      {/* Background Image */}
      <div className="absolute inset-0">
        <Image
          src={bgImage}
          alt="footer background"
          fill
          className="object-cover"
          priority
        />
        <div className="absolute inset-0 bg-black/80" />
        <Image src={HorizontalImages} className="absolute" alt="" />
      </div>
      <div className="relative text-lg max-w-7xl mx-auto px-6 py-16 md:py-20 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-10">
        <div className="space-y-5">
          <NohenLogo />
          <p className="text-lg text-gray-300 leading-relaxed max-w-xs">
            Gearing your company through an innovative strategy.
          </p>
        </div>
        <div>
          <h4 className="text-lg font-semibold mb-4 text-gray-400">
            Quick Links
          </h4>
          <ul className="space-y-2 text-lg text-gray-300">
            <li className="hover:text-white transition">Home</li>
            <li className="hover:text-white transition">About Us</li>
            <li className="hover:text-white transition">Case Studies</li>
            <li className="hover:text-white transition">Services</li>
            <li className="hover:text-white transition">Contact Us</li>
          </ul>
        </div>
        <div>
          <h4 className="text-lg font-semibold mb-4 text-gray-400">Supports</h4>
          <div className="space-y-3 text-lg text-gray-400">
            <p>
              Call us directly? <br />
              <span className="underline text-white -tracking-widest font-dm-sans">
                (123) 567 8901
              </span>
            </p>
            <p>
              Need support? <br />
              <span className="text-white underline font-dm-sans text-xl -tracking-widest">
                help@nohenconstructii.com
              </span>
            </p>
          </div>
        </div>
        <div>
          <h4 className="text-lg font-semibold mb-4 text-gray-400">
            Stay in the Loop.
          </h4>
          <p className="text-lg text-gray-300 leading-relaxed max-w-xs">
            Get design insights and project updates straight in your inbox
          </p>
        </div>
      </div>
      <div className="absolute -bottom-10 pl-5 flex flex-col uppercase  mix-blend-luminosity">
        <p
          className="text-[437.79px] bg-linear-to-b mix-blend-luminosity relative -bottom-40 to-[#EFBF04]/5 from-[#181818]/5 bg-clip-text text-transparent"
          style={{ lineHeight: "94%", letterSpacing: "-0.08em" }}
        >
          Nohen
        </p>
        <p
          className="text-[230px] relative -bottom-10 w-full bg-linear-to-b mix-blend-luminosity from-[#EFBF04]/5 to-[#181818]/5 bg-clip-text text-transparent"
          style={{ lineHeight: "94%", letterSpacing: "-0.08em" }}
        >
          Constructii
        </p>
      </div>
      <motion.button
        className="absolute right-24 top-64 md:right-24 md:top-64 w-14 h-14 rounded-full bg-yellow-400 text-black flex items-center justify-center text-xl shadow-lg hover:scale-105 transition"
        onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
      >
        <ArrowUp />
      </motion.button>
    </footer>
  );
}
