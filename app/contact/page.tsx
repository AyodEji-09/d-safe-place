import type { Metadata } from "next";
import { ContactSection } from "@/components/sections/contact-section";

export const metadata: Metadata = {
  title: "Contact Us | D Safe Place",
  description:
    "Whether you need help, want to volunteer, or would like to give, our door is always open. Reach out confidentially to our team at D Safe Place.",
};

export default function ContactPage() {
  return (
    <main className="min-h-[calc(100vh-80px)] bg-[#F5F8FB]">
      <ContactSection />
    </main>
  );
}
