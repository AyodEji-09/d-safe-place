import type { Metadata } from "next";
import { ProgramsHeroSection } from "@/components/sections/programs-hero-section";
import { ProgramsListSection } from "@/components/sections/programs-list-section";
import { ProgramsBookingSection } from "@/components/sections/programs-booking-section";

export const metadata: Metadata = {
  title: "Programs | D Safe Place",
  description:
    "Every program starts with an open door. Three houses under one roof: Children's Haven, Women's Refuge, and Hospitality House & Family Support.",
};

export default function ProgramsPage() {
  return (
    <div className="flex flex-col">
      <ProgramsHeroSection />
      <ProgramsListSection />
      <ProgramsBookingSection />
      {/* Space between schedule appointment section and footer */}
      <div
        className="h-16 sm:h-20 lg:h-24 w-full bg-[#F5F8FB]"
        style={{ backgroundColor: "#F5F8FB" }}
        aria-hidden="true"
      />
    </div>
  );
}
