import * as React from "react";
import {
  Card,
  CardHeader,
  CardTitle,
  CardDescription,
} from "@/components/ui/card";

const communityGroups = [
  {
    title: "Children, All Ages",
    description:
      "From toddlers to teenagers, children need care, encouragement, and a steady place to be children. Our Children’s Haven programme is designed around meals, tutoring, reading, and supervised play.",
  },
  {
    title: "Women in Distress",
    description:
      "We seek to support women who are displaced, unhoused, or fleeing crisis by offering a compassionate point of contact and a path towards appropriate support and next steps.",
  },
  {
    title: "Couples & Families",
    description:
      "We welcome households working through hardship who may benefit from mediation, conversation, and support as they seek to strengthen relationships and navigate challenges.",
  },
];

export function AboutCommunitySection() {
  return (
    <section
      className="bg-[#F5F8FB] py-20 sm:py-24 lg:py-28"
      style={{ backgroundColor: "#F5F8FB" }}
    >
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="mb-10 sm:mb-12">
          <span className="mb-2 block text-sm font-medium tracking-wide text-slate-500">
            Who We Serve
          </span>
          <h2 className="font-fraunces text-primary text-3xl font-normal tracking-tight text-[#192838] sm:text-4xl lg:text-[40px]">
            Our Community
          </h2>
        </div>

        {/* 3-column Grid */}
        <div className="grid grid-cols-1 gap-6 sm:gap-8 md:grid-cols-3">
          {communityGroups.map((group) => (
            <Card
              key={group.title}
              className="rounded-2xl border border-slate-200/90 bg-white shadow-xs transition-shadow duration-200 hover:shadow-md"
            >
              <CardHeader className="flex flex-col gap-3 p-7 sm:p-8">
                <CardTitle className="font-fraunces text-primary text-xl font-bold text-[#192838]">
                  {group.title}
                </CardTitle>
                <CardDescription className="text-foreground/85 text-sm leading-relaxed sm:text-base">
                  {group.description}
                </CardDescription>
              </CardHeader>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}
