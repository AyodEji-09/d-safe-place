import * as React from "react";

export function AboutHeroSection() {
  return (
    <section className="bg-[#F5F8FB] pt-12 pb-16 sm:pt-16 sm:pb-20 lg:pt-20 lg:pb-24">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="max-w-3xl">
          <span className="mb-3 block text-sm font-medium tracking-wide text-slate-500">
            Our story
          </span>

          <h1 className="font-fraunces text-primary mb-8 text-4xl leading-[1.15] font-normal tracking-tight text-[#192838] sm:text-5xl lg:text-[54px]">
            Started in her memory, carried forward by her table
          </h1>

          <div className="flex max-w-2xl flex-col gap-6 text-base leading-relaxed text-slate-600 sm:text-lg">
            <p>
              D Safe Place began as one woman&apos;s habit of opening her door
              to whoever needed it — a displaced neighbor, a frightened child, a
              couple who needed somewhere quiet to talk things through. She
              never built a logo or wrote a mission statement. She just kept the
              door open. After her passing, the people she helped, and the
              family she raised, decided her door should stay open for good.
            </p>
            <p>
              Today D Safe Place is a small, dedicated house of welcome, built
              around three simple convictions: children deserve to feel safe,
              women deserve somewhere to land, and hospitality is not a program
              — it&apos;s a posture.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
