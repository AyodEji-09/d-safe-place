import * as React from "react";
import Image from "next/image";

const programCards = [
  {
    title: "Children's Haven",
    description:
      "A supervised, welcoming space for children of all ages, Children’s Haven brings together hot meals, homework help, reading circles, and play. It is designed to give children a place where they can learn, enjoy themselves, and feel cared for. <br/> Parents may arrange for children to attend for a few hours or discuss ongoing care while they attend appointments, work, or counselling. Please contact the team to ask about availability and arrangements.",
    image: "/images/programs1.jpg",
    alt: "Children smiling together",
  },
  {
    title: "Women's Refuge",
    description:
      "Women’s Refuge offers a compassionate point of support for displaced and distressed women. The programme is designed around confidential shelter, trauma-informed counselling, and practical job-readiness training, with support that may range from help with an immediate stay to planning for longer-term stability. <br /> Every woman’s circumstances are different. Our approach is guided by privacy, patience, and respect for each person’s dignity.",
    image: "/images/programs2.jpg",
    alt: "Women gathered together smiling",
  },
  {
    title: "Hospitality House & Family Support",
    description:
      "Hospitality House & Family Support brings together marriage and family mediation, weekly community meals, and a standing welcome for people passing through who need a warm meal or a quiet room to talk. <br /> Inspired by the belief that hospitality is more than a service, this programme makes room for people to be received with dignity, heard with patience, and treated without judgement.",
    image: "/images/programs3.jpg",
    alt: "Happy family together",
  },
];

export function ProgramsListSection() {
  return (
    <section className="bg-[#F5F8FB] pb-16 sm:pb-20 lg:pb-24">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col gap-8">
          {programCards.map((card) => (
            <div
              key={card.title}
              className="rounded-2xl border border-slate-200/90 bg-white p-6 shadow-xs transition-shadow duration-200 hover:shadow-md sm:p-8"
            >
              <div className="grid grid-cols-1 items-center gap-6 md:grid-cols-12 lg:gap-10">
                {/* Photo */}
                <div className="relative aspect-16/10 w-full overflow-hidden rounded-xl bg-slate-100 md:col-span-5 lg:col-span-4">
                  <Image
                    src={card.image}
                    alt={card.alt}
                    fill
                    sizes="(max-width: 768px) 100vw, (max-width: 1200px) 40vw, 360px"
                    className="object-cover"
                  />
                </div>

                {/* Content */}
                <div className="flex flex-col justify-center gap-3 md:col-span-7 lg:col-span-8">
                  <h2 className="font-fraunces text-2xl font-bold text-[#192838] sm:text-3xl">
                    {card.title}
                  </h2>
                  <p
                    dangerouslySetInnerHTML={{ __html: card.description }}
                    className="max-w-2xl text-sm leading-relaxed text-slate-600 sm:text-base"
                  />
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
