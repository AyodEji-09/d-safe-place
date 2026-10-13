import * as React from "react";
import { Card, CardHeader, CardTitle, CardDescription } from "@/components/ui/card";

const programs = [
  {
    title: "Children's Haven",
    description:
      "Safe daytime care, meals, tutoring, and play for children of all ages while their families find stable ground.",
  },
  {
    title: "Women's Refuge",
    description:
      "Shelter, counseling, and job-readiness support for displaced and distressed women rebuilding their lives.",
  },
  {
    title: "Hospitality House",
    description:
      "Family and marriage support, mediation, and a warm table for anyone who needs one — no appointment required.",
  },
];

function SparkleIcon({ className }: { className?: string }) {
  return (
    <svg
      viewBox="0 0 24 24"
      fill="currentColor"
      className={className || "size-4 text-white"}
      aria-hidden="true"
    >
      <path d="M12 3C12 7.97 7.97 12 3 12C7.97 12 12 16.03 12 21C12 16.03 16.03 12 21 12C16.03 12 12 7.97 12 3Z" />
    </svg>
  );
}

export function ProgramsSection() {
  return (
    <section
      id="programs"
      className="py-16 sm:py-20 lg:py-24 bg-[#F5F8FB]"
      style={{ backgroundColor: "#F5F8FB" }}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="mb-10 sm:mb-12">
          <span className="text-sm font-medium text-slate-500 mb-2 block tracking-wide">
            What we do
          </span>
          <h2 className="font-fraunces text-3xl sm:text-4xl lg:text-[40px] font-normal text-[#192838] text-primary tracking-tight">
            Three doors, one welcome
          </h2>
        </div>

        {/* Programs Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 sm:gap-8">
          {programs.map((program) => (
            <Card
              key={program.title}
              className="border border-slate-200/90 rounded-2xl bg-white shadow-xs hover:shadow-md transition-shadow duration-200"
            >
              <CardHeader className="p-7 sm:p-8 flex flex-col items-start gap-4">
                <div className="size-10 rounded-full bg-[#192838] bg-primary flex items-center justify-center shrink-0">
                  <SparkleIcon className="size-4 text-white" />
                </div>
                <CardTitle className="font-sans text-xl font-bold text-[#192838] text-primary mt-1">
                  {program.title}
                </CardTitle>
                <CardDescription className="text-sm text-foreground/85 leading-relaxed">
                  {program.description}
                </CardDescription>
              </CardHeader>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}
