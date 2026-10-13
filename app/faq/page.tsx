import type { Metadata } from "next";
import { FaqSection } from "@/components/sections/faq-section";

export const metadata: Metadata = {
  title: "FAQ | D Safe Place",
  description:
    "Questions we hear often about our shelter, counseling, appointments, confidentiality, and services at D Safe Place.",
};

export default function FaqPage() {
  return (
    <main className="min-h-[calc(100vh-80px)] bg-[#F5F8FB]">
      <FaqSection />
    </main>
  );
}
