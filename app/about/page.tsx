import type { Metadata } from "next";
import { AboutHeroSection } from "@/components/sections/about-hero-section";
import { AboutValuesSection } from "@/components/sections/about-values-section";
import { AboutCommunitySection } from "@/components/sections/about-community-section";

export const metadata: Metadata = {
  title: "About Us | D Safe Place",
  description:
    "Started in her memory, carried forward by her table. Learn about our core values and the community we serve at D Safe Place.",
};

export default function AboutPage() {
  return (
    <div className="flex flex-col">
      <AboutHeroSection />
      <AboutValuesSection />
      <AboutCommunitySection />
    </div>
  );
}
