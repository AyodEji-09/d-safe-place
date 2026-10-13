import * as React from "react";
import Image from "next/image";

const dailyLifeItems = [
  {
    title: "Shared meals",
    image: "/images/card1.jpg",
  },
  {
    title: "Tutoring hour",
    image: "/images/card2.png",
  },
  {
    title: "Garden mornings",
    image: "/images/card3.jpg",
  },
  {
    title: "Craft table",
    image: "/images/card4.jpg",
  },
];

export function DailyLifeSection() {
  return (
    <section
      className="py-20 sm:py-24 lg:py-28 bg-[#F5F8FB]"
      style={{ backgroundColor: "#F5F8FB" }}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="mb-10 sm:mb-12">
          <span className="text-sm font-medium text-slate-500 mb-2 block tracking-wide">
            Inside the house
          </span>
          <h2 className="font-fraunces text-3xl sm:text-4xl lg:text-[40px] font-normal text-[#192838] text-primary tracking-tight">
            A look at daily life
          </h2>
        </div>

        {/* 4 Photo Cards Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {dailyLifeItems.map((item) => (
            <div
              key={item.title}
              className="relative aspect-4/5 sm:aspect-square lg:aspect-4/5 overflow-hidden rounded-2xl bg-slate-100 group shadow-xs"
            >
              <Image
                src={item.image}
                alt={item.title}
                fill
                sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 25vw"
                className="object-cover transition-transform duration-500 group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/15 to-transparent flex items-end p-5">
                <span className="text-white text-sm font-medium tracking-wide drop-shadow-xs">
                  {item.title}
                </span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
