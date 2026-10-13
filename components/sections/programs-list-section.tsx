import * as React from "react";
import Image from "next/image";

const programCards = [
  {
    title: "Children's Haven",
    description:
      "A supervised, joyful space for children of all ages: hot meals, homework help, reading circles, and play. Parents can drop children off for a few hours or arrange ongoing care while they attend appointments, work, or counseling.",
    image: "/images/programs1.jpg",
    alt: "Children smiling together",
  },
  {
    title: "Women's Refuge",
    description:
      "Confidential shelter, trauma-informed counseling, and practical job-readiness training for displaced and distressed women. We help with everything from a first night's stay to a long-term plan.",
    image: "/images/programs2.jpg",
    alt: "Women gathered together smiling",
  },
  {
    title: "Hospitality House & Family Support",
    description:
      "Marriage and family mediation, weekly community meals, and a standing welcome for anyone passing through who needs a warm meal and a quiet room to talk.",
    image: "/images/programs3.jpg",
    alt: "Happy family together",
  },
];

export function ProgramsListSection() {
  return (
    <section className="bg-[#F5F8FB] pb-16 sm:pb-20 lg:pb-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col gap-8">
          {programCards.map((card) => (
            <div
              key={card.title}
              className="rounded-2xl border border-slate-200/90 bg-white p-6 sm:p-8 shadow-xs transition-shadow duration-200 hover:shadow-md"
            >
              <div className="grid grid-cols-1 md:grid-cols-12 gap-6 lg:gap-10 items-center">
                {/* Photo */}
                <div className="md:col-span-5 lg:col-span-4 relative aspect-16/10 w-full overflow-hidden rounded-xl bg-slate-100">
                  <Image
                    src={card.image}
                    alt={card.alt}
                    fill
                    sizes="(max-width: 768px) 100vw, (max-width: 1200px) 40vw, 360px"
                    className="object-cover"
                  />
                </div>

                {/* Content */}
                <div className="md:col-span-7 lg:col-span-8 flex flex-col justify-center gap-3">
                  <h2 className="font-fraunces text-2xl sm:text-3xl font-bold text-[#192838]">
                    {card.title}
                  </h2>
                  <p className="text-sm sm:text-base text-slate-600 leading-relaxed max-w-2xl">
                    {card.description}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
