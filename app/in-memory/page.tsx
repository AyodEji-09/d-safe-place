import type { Metadata } from "next";
import Image from "next/image";
import {
  MEMORIAL_INFO,
  MEMORIAL_PHOTOS,
  BIOGRAPHY_PARAGRAPHS,
  BIOGRAPHY_CLOSING_LINES,
  TRIBUTES,
} from "@/lib/memorial-data";
import { MemorialTributesList } from "@/components/sections/memorial-tributes-list";

export const metadata: Metadata = {
  title: "In Loving Memory | Nihinlolawa Omobolanle Agoro | D Safe Place",
  description:
    "In loving memory of Nihinlolawa Omobolanle Agoro (Now Idunuoluwa Ebenezer Delight), 28 July 1981 – 2026.",
};

export default function InMemoryPage() {
  return (
    <div className="flex flex-col">
      {/* Header Section */}
      <section className="bg-[#F5F8FB] pt-12 pb-14 sm:pt-16 sm:pb-18 lg:pt-20 lg:pb-20">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl">
            <span className="mb-3 block text-sm font-medium tracking-wide text-slate-700 uppercase">
              {MEMORIAL_INFO.label}
            </span>

            <h1 className="font-fraunces text-primary mb-3 text-4xl leading-[1.15] font-normal tracking-tight text-[#192838] sm:text-5xl lg:text-[54px] text-balance">
              {MEMORIAL_INFO.name}
            </h1>

            <p className="text-lg sm:text-xl text-slate-800 font-medium">
              {MEMORIAL_INFO.spiritualName}
            </p>

            <p className="mt-2 text-base sm:text-lg text-slate-700 font-sans">
              {MEMORIAL_INFO.dates}
            </p>
          </div>
        </div>
      </section>

      {/* Portraits / Images Section */}
      <section className="bg-white py-12 sm:py-16 border-y border-slate-200/80">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 lg:gap-8 max-w-5xl mx-auto">
            {MEMORIAL_PHOTOS.map((photo, index) => (
              <div
                key={photo.src}
                className="relative aspect-[3/4] w-full overflow-hidden rounded-2xl border border-slate-200 bg-slate-100 shadow-xs"
              >
                <Image
                  src={photo.src}
                  alt={photo.alt}
                  fill
                  sizes="(max-width: 640px) 100vw, (max-width: 1024px) 33vw, 320px"
                  className="object-cover object-top"
                  priority={index === 0}
                />
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Biography Section (Full Width) */}
      <section className="bg-[#F5F8FB] py-16 sm:py-20 lg:py-24">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="w-full">
            <h2 className="font-fraunces text-primary mb-8 text-3xl font-normal tracking-tight text-[#192838] sm:text-4xl text-balance">
              BIOGRAPHY
            </h2>

            <div className="flex flex-col gap-6 text-base sm:text-lg leading-relaxed text-slate-800 text-pretty">
              {BIOGRAPHY_PARAGRAPHS.map((paragraph, index) => (
                <p key={index}>{paragraph}</p>
              ))}
            </div>

            <div className="mt-10 pt-8 border-t border-slate-300/70 w-full text-base sm:text-lg leading-relaxed text-slate-900 font-fraunces italic space-y-1 text-pretty">
              {BIOGRAPHY_CLOSING_LINES.map((line, index) => (
                <p key={index}>{line}</p>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Tributes Section (Full Width Cards, Each on Its Own Line) */}
      <section className="bg-white py-16 sm:py-20 lg:py-24 border-t border-slate-200/80">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="w-full mb-10">
            <h2 className="font-fraunces text-primary mb-4 text-3xl font-normal tracking-tight text-[#192838] sm:text-4xl text-balance">
              TRIBUTES
            </h2>
          </div>

          <MemorialTributesList tributes={TRIBUTES} />
        </div>
      </section>
    </div>
  );
}
