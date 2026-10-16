import * as React from "react";

export function AboutHeroSection() {
  return (
    <section className="bg-[#F5F8FB] pt-12 pb-16 sm:pt-16 sm:pb-20 lg:pt-20 lg:pb-24">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="max-w-3xl">
          <span className="mb-3 block text-sm font-medium tracking-wide text-slate-500">
            Our Story
          </span>

          <h1 className="font-fraunces text-primary mb-8 text-4xl leading-[1.15] font-normal tracking-tight text-[#192838] sm:text-5xl lg:text-[54px]">
            Started in her memory, carried forward by her table
          </h1>

          <div className="flex max-w-2xl flex-col gap-6 text-base leading-relaxed text-slate-600 sm:text-lg">
            <p>
              D Safe Place began with one woman’s habit of opening her door to
              whoever needed it, a displaced neighbour, a frightened child, or a
              couple who needed somewhere quiet to talk things through. She did
              not begin with a logo or a mission statement. She simply kept the
              door open.
            </p>
            <p>
              After her passing, the people she helped and the family she raised
              chose to carry that spirit forward, so that her welcome could
              continue to reach others.
            </p>
            <p>
              Today, D Safe Place is a dedicated house of welcome, built around
              three simple convictions: children deserve to feel safe, women
              deserve somewhere to turn in times of crisis, and hospitality is
              not merely a programme, it is a way of receiving and caring for
              people.
            </p>
            <p>
              Inspired by the life and writing of God’s Delight Ebenezer, we
              believe that care is often expressed through everyday acts: a room
              prepared with thought, a meal served with dignity, and the
              patience to listen without judgement. These acts may seem small,
              but they can help people feel seen, valued, and welcome.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
