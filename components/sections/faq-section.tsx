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
          href="/#contact"
          className="font-medium underline underline-offset-2 transition-colors hover:text-[#192838]"
        >
          contact page
        </Link>{" "}
        or call our intake line. All conversations are confidential, and
        there&apos;s no cost to reach out.
      </>
    ),
  },
  {
    id: "item-1",
    question: "Is there a cost to stay or receive services?",
    answer: (
      <>
        No. All of our shelter, meals, counseling, and supportive services are
        provided completely free of charge to individuals and families in need.
      </>
    ),
  },
  {
    id: "item-2",
    question: "How do I book an appointment?",
    answer: (
      <>
        You can book an appointment by filling out the appointment form on our{" "}
        <Link
          href="/programs#book-appointment"
          className="font-medium underline underline-offset-2 transition-colors hover:text-[#192838]"
        >
          Programs page
        </Link>
        , sending us a message through our contact page, or calling us directly.
      </>
    ),
  },
  {
    id: "item-3",
    question: "Will my information stay private?",
    answer: (
      <>
        Yes, strictly confidential. We prioritize your privacy and physical
        safety above all else. Your personal details will never be shared without
        your explicit consent.
      </>
    ),
  },
  {
    id: "item-4",
    question: "How can I volunteer or donate?",
    answer: (
      <>
        We welcome community support! You can sign up to volunteer, donate
        essential supplies, or make a monetary donation through our{" "}
        <Link
          href="/#get-involved"
          className="font-medium underline underline-offset-2 transition-colors hover:text-[#192838]"
        >
          Get Involved
        </Link>{" "}
        section or by contacting our team.
      </>
    ),
  },
  {
    id: "item-5",
    question: "Do you offer marriage or family counseling?",
    answer: (
      <>
        Yes, our licensed counselors provide compassionate individual, couples,
        and family therapy sessions tailored to your healing journey.
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
            Questions we hear often
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
