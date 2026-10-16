import * as React from "react";

const values = [
  {
    title: "Children's Welfare",
    description:
      "Every child who comes through our door deserves to be fed, supported, and seen, regardless of the circumstances that brought them here. We aim to provide a supervised, welcoming environment where children can learn, play, and experience the consistency and care every child deserves.",
  },
  {
    title: "Dignity for Displaced Women",
    description:
      "We meet women facing displacement or crisis with privacy, patience, and respect. We recognise that each woman’s circumstances are different, and we seek to help her consider practical next steps in an environment that protects her dignity.",
  },
  {
    title: "Hospitality",
    description:
      "A full table and an open chair can communicate something powerful: you are welcome here. We believe hospitality means receiving people with thoughtfulness and kindness, without asking them to prove that they belong.",
  },
  {
    title: "Strong Families",
    description:
      "Families may face difficult seasons that require patience, communication, and support. We seek to support couples and households through mediation and respectful conversation, without judgement, with the aim of helping families find constructive ways forward.",
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
            What Guides Us
          </span>
          <h2 className="font-fraunces text-3xl font-normal tracking-tight text-white sm:text-4xl lg:text-[40px]">
            Our Core Values
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
