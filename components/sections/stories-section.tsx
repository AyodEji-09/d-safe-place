import * as React from "react";

const stories = [
  {
    quote:
      '"I walked in with my two children and nowhere to sleep. I walked out, months later, with a job and a plan."',
    author: "— Program graduate, 2025",
  },
  {
    quote:
      '"They didn\'t just give us a bed. They gave us back our sense of family."',
    author: "— Sheltered guest",
  },
  {
    quote:
      '"The tutoring kept my daughter in school when everything else was falling apart."',
    author: "— Parent, Children\'s Haven",
  },
];

export function StoriesSection() {
  return (
    <section
      className="py-20 sm:py-24 lg:py-28 bg-[#192838] bg-primary text-white"
      style={{ backgroundColor: "#192838" }}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="mb-12 sm:mb-14">
          <span className="text-sm font-medium text-[#4e81bc] text-secondary mb-2 block tracking-wide">
            In their words
          </span>
          <h2 className="font-fraunces text-3xl sm:text-4xl lg:text-[40px] font-normal text-white tracking-tight">
            Stories from our house
          </h2>
        </div>

        {/* Stories Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 sm:gap-8">
          {stories.map((story, index) => (
            <div
              key={index}
              className="bg-[#F5F8FB] rounded-2xl p-7 sm:p-8 flex flex-col justify-between shadow-xs transition-transform duration-200 hover:-translate-y-0.5"
              style={{ backgroundColor: "#F5F8FB" }}
            >
              <blockquote className="font-fraunces italic text-slate-800 text-lg sm:text-[19px] leading-relaxed mb-6 font-normal">
                {story.quote}
              </blockquote>
              <cite className="not-italic text-xs sm:text-sm text-slate-500 font-sans">
                {story.author}
              </cite>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
