import { HeroSection } from "@/components/sections/hero-section";
import { ProgramsSection } from "@/components/sections/programs-section";
import { StoriesSection } from "@/components/sections/stories-section";
import { DailyLifeSection } from "@/components/sections/daily-life-section";

export default function Home() {
  return (
    <div className="flex flex-col">
      <HeroSection />
      <ProgramsSection />
      <StoriesSection />
      <DailyLifeSection />
    </div>
  );
}
