import type { Metadata } from "next";
import {
  Geist,
  Geist_Mono,
  Inter,
  Barlow_Condensed,
  DM_Sans,
  Outfit,
} from "next/font/google";
import localFont from "next/font/local";
import "./globals.css";
import { cn } from "@/lib/utils";
import Navbar from "@/components/navbar";
import Footer from "@/components/footer";
import SocialLinks from "@/ui/components/socialLinks";
import RoutePreloader from "@/components/animations/routePreloader";

const inter = Inter({ subsets: ["latin"], variable: "--font-inter" });

const dmSans = DM_Sans({
  subsets: ["latin"],
  variable: "--font-dm-sans",
});

const outfit = Outfit({
  subsets: ["latin"],
  variable: "--font-outfit",
});

const barlowCondensed = Barlow_Condensed({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  variable: "--font-barlow-condensed",
});

const satoshi = localFont({
  src: "../assets/fonts/Satoshi-Variable.ttf",
  variable: "--font-satoshi",
});

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Nohen Constructii",
  description: "Built for Complexity. Designed for Excellence.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={cn(
        "h-full",
        "antialiased",
        geistSans.variable,
        geistMono.variable,
        inter.variable,
        dmSans.variable,
        barlowCondensed.variable,
        satoshi.variable,
        outfit.variable,
      )}
    >
      <body className="min-h-full flex flex-col w-screen">
        <RoutePreloader />
        <Navbar />
        <main>
          {children}
          <SocialLinks />
        </main>
        <Footer />
      </body>
    </html>
  );
}
