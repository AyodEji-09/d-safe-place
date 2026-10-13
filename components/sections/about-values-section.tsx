import * as React from "react";

const values = [
  {
    title: "Children's Welfare",
    description:
      "Every child who comes through our door is fed, tutored, and seen — regardless of how they arrived.",
  },
  {
    title: "Dignity for Displaced Women",
    description:
      "We meet women in crisis with privacy, patience, and a real plan for what comes next.",
  },
  {
    title: "Hospitality",
    description:
      "A full table and an open chair. No one is asked to prove they belong here.",
  },
  {
    title: "Strong Families",
    description:
      "We support marriages and households through mediation, not judgment.",
  },
];

function SparkleIcon({ className }: { className?: string }) {
  return (
    <svg
      viewBox="0 0 24 24"
      fill="currentColor"
      className={className || "size-3.5 text-white"}
      aria-hidden="true"
    >
      <path d="M12 3C12 7.97 7.97 12 3 12C7.97 12 12 16.03 12 21C12 16.03 16.03 12 21 12C16.03 12 12 7.97 12 3Z" />
    </svg>
  );
}

export function AboutValuesSection() {
  return (
    <section
      className="bg-[#192838] py-20 text-white sm:py-24 lg:py-28"
      style={{ backgroundColor: "#192838" }}
    >
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="mb-10 sm:mb-12">
          <span className="mb-2 block text-sm font-medium tracking-wide text-slate-400">
            What guides us
          </span>
          <h2 className="font-fraunces text-3xl font-normal tracking-tight text-white sm:text-4xl lg:text-[40px]">
            Our core values
          </h2>
        </div>

        {/* 2x2 Grid */}
        <div className="grid grid-cols-1 gap-6 sm:gap-8 md:grid-cols-2">
          {values.map((item) => (
            <div
              key={item.title}
              className="flex flex-col items-start gap-4 rounded-2xl border border-[#FFFFFF26] bg-[#FFFFFF0F] p-7 shadow-xs transition-colors sm:p-8"
            >
              <div className="bg-primary flex size-10 shrink-0 items-center justify-center rounded-full bg-[#192838]">
                <SparkleIcon className="size-4 text-white" />
              </div>
              <div>
                <h3 className="font-fraunces mb-2 text-xl font-bold text-white">
                  {item.title}
                </h3>
                <p className="text-sm leading-relaxed text-slate-300 sm:text-base">
                  {item.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
