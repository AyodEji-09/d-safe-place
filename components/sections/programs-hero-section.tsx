import * as React from "react";

export function ProgramsHeroSection() {
  return (
    <section className="bg-[#F5F8FB] pt-12 pb-8 sm:pt-16 sm:pb-10 lg:pt-20 lg:pb-12">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="max-w-3xl">
          <span className="mb-3 block text-sm font-medium tracking-wide text-slate-500">
            Programs
          </span>

          <h1 className="font-fraunces mb-4 text-4xl leading-[1.15] font-normal tracking-tight text-[#192838] sm:text-5xl lg:text-[54px]">
            Every program starts with an open door
          </h1>

          <p className="max-w-2xl text-base leading-relaxed text-slate-600 sm:text-lg">
            Three houses under one roof, each built around a different kind of
            need. At D Safe Place, we believe that practical care begins with a
            welcome and continues through thoughtful support. Our programmes
            focus on children’s welfare, support for displaced and distressed
            women, and hospitality and family support.
          </p>
        </div>
      </div>
    </section>
  );
}
