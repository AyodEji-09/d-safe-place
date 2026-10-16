"use client";

import * as React from "react";
import Link from "next/link";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

interface FaqItem {
  id: string;
  question: string;
  answer: React.ReactNode;
}

const faqs: FaqItem[] = [
  {
    id: "item-0",
    question: "How do I get help for myself or my children?",
    answer: (
      <>
        Reach out through our{" "}
        <Link
          href="/contact#contact-form"
          className="font-medium underline underline-offset-2 transition-colors hover:text-[#192838]"
        >
          Contact page
        </Link>{" "}
        or call our intake line. Our team will listen to your enquiry and help
        explain the next steps. There is no cost to contact us.
      </>
    ),
  },
  {
    id: "item-1",
    question: "Is there a cost to stay or receive services?",
    answer: (
      <>
        No. D Safe Place’s services are provided free of charge. The work is
        supported through community support, donations, and partnerships so that
        cost is not a barrier to seeking safety or care.
      </>
    ),
  },
  {
    id: "item-2",
    question: "How do I book an appointment?",
    answer: (
      <>
        You can request an appointment using the form on our{" "}
        <Link
          href="/programs#book-appointment"
          className="font-medium underline underline-offset-2 transition-colors hover:text-[#192838]"
        >
          Programs page
        </Link>{" "}
        or contact us directly through the{" "}
        <Link
          href="/contact#contact-form"
          className="font-medium underline underline-offset-2 transition-colors hover:text-[#192838]"
        >
          Contact page.
        </Link>{" "}
        Our Intake team will follow up to confirm a time.
      </>
    ),
  },
  {
    id: "item-3",
    question: "Will my information stay private?",
    answer: (
      <>
        We treat conversations and personal information with care and
        confidentiality. Information is shared only with your consent or when
        disclosure is required by law to protect safety.
      </>
    ),
  },
  {
    id: "item-4",
    question: "How can I volunteer or donate?",
    answer: (
      <>
        We welcome people who would like to support the work of D Safe Place.
        Visit the{" "}
        <Link
          href="/contact#contact-form"
          className="font-medium underline underline-offset-2 transition-colors hover:text-[#192838]"
        >
          Get Involved
        </Link>{" "}
        section or use the{" "}
        <Link
          href="/contact#contact-form"
          className="font-medium underline underline-offset-2 transition-colors hover:text-[#192838]"
        >
          Contact form
        </Link>{" "}
        and select “Volunteer” or “Donate” to let us know how you would like to
        help. Contributions of time and resources can help us continue to keep
        the door open.
      </>
    ),
  },
  {
    id: "item-5",
    question: "Do you offer marriage or family counseling?",
    answer: (
      <>
        Through Hospitality House & Family Support, we offer mediation and
        counselling focused on strengthening marriages and households. These
        conversations are approached with respect and without judgement.
      </>
    ),
  },
];

export function FaqSection() {
  return (
    <section className="w-full bg-[#F5F8FB] pt-14 pb-24 md:pt-20 md:pb-32">
      <div className="mx-auto max-w-3xl px-4 sm:px-6 lg:px-8">
        {/* Section Heading */}
        <div className="mb-12 text-center md:mb-16">
          <p className="text-sm font-normal text-[#5b5b52] sm:text-base">
            Frequently asked
          </p>
          <h1 className="font-fraunces mt-2 text-3xl font-normal tracking-tight text-[#192838] sm:text-4xl md:text-[44px] md:leading-tight">
            Questions We Hear Often
          </h1>
        </div>

        {/* Accordion Component */}
        <Accordion
          type="single"
          collapsible
          defaultValue="item-0"
          className="w-full divide-y-0"
        >
          {faqs.map((faq) => (
            <AccordionItem key={faq.id} value={faq.id}>
              <AccordionTrigger>{faq.question}</AccordionTrigger>
              <AccordionContent>{faq.answer}</AccordionContent>
            </AccordionItem>
          ))}
        </Accordion>
      </div>
    </section>
  );
}
