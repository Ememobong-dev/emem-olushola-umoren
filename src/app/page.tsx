"use client";
import { Experience } from "@/src/components/Experience";
import { HeroSection } from "../components/home-sections/hero-section";
import { SkillSection } from "../components/home-sections/skill-section";
import { PortfolioSection } from "../components/home-sections/portfolio-section";
import { AboutSection } from "../components/home-sections/about-section";

export default function Home() {


  return (
    <div>
      <HeroSection />
      <div className="px-8 lg:px-14 3xl:px-28 py-28 flex flex-col gap-36 lg:gap-56 ">
        {/* Second Section */}
        <AboutSection />
        {/* THIRD SECTION */}
        <SkillSection />
        {/* EXPERIENCE SECTION */}
        <Experience />
        {/* FOURTH SECTION */}
        <PortfolioSection />
      </div>
    </div>
  );
}
