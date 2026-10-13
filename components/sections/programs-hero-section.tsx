import * as React from "react";

export function ProgramsHeroSection() {
  return (
    <section className="bg-[#F5F8FB] pt-12 pb-8 sm:pt-16 sm:pb-10 lg:pt-20 lg:pb-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-3xl">
          <span className="text-sm font-medium text-slate-500 mb-3 block tracking-wide">
            Programs
          </span>

          <h1 className="font-fraunces text-4xl sm:text-5xl lg:text-[54px] font-normal text-[#192838] leading-[1.15] tracking-tight mb-4">
            Every program starts with an open door
          </h1>

          <p className="text-base sm:text-lg text-slate-600 leading-relaxed max-w-2xl">
            Three houses under one roof, each built around a different kind of
            need.
          </p>
        </div>
      </div>
    </section>
  );
}
