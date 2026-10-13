import * as React from "react";
import Image from "next/image";
import Link from "next/link";
import { Button } from "@/components/ui/button";

export function HeroSection() {
  return (
    <section className="relative overflow-hidden pt-10 pb-16 md:pt-16 md:pb-24 lg:pt-20 lg:pb-28">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 items-center gap-10 lg:grid-cols-2 lg:gap-14">
          {/* Text and Actions */}
          <div className="flex flex-col items-start">
            <span className="mb-3 text-sm font-medium tracking-wide text-slate-500">
              A community of welcome
            </span>

            <h1 className="font-amaranth text-primary mb-6 text-4xl leading-[1.12] font-bold tracking-tight text-[#192838] sm:text-5xl lg:text-[56px]">
              Safety first. Dignity always. Family for those who have none.
            </h1>

            <p className="mb-8 max-w-xl text-base leading-relaxed text-slate-600 sm:text-lg">
              D Safe Place is a haven for children and displaced women — a place
              to rest, heal, and rebuild, started in memory of the woman who
              taught us that every stranger deserves a seat at the table.
            </p>

            <div className="mb-12 flex flex-wrap items-center gap-4 sm:mb-16">
              <Button
                asChild
                className="bg-primary h-11 rounded-lg bg-[#192838] px-6 py-2.5 text-sm font-medium text-white transition-colors hover:bg-[#192838]/90"
              >
                <Link href="#request-help" className="text-white">
                  Request Help
                </Link>
              </Button>
              <Button
                asChild
                variant="outline"
                className="h-11 rounded-lg border-[#192838] bg-transparent px-6 py-2.5 text-sm font-medium text-[#192838] transition-colors hover:bg-slate-100"
              >
                <Link href="#our-story">Our Story</Link>
              </Button>
            </div>

            {/* Metrics */}
            <div className="grid w-full max-w-md grid-cols-3 gap-6 pt-4 sm:gap-10">
              <div>
                <p className="font-fraunces text-primary text-4xl font-normal text-[#192838] sm:text-5xl">
                  3
                </p>
                <p className="mt-1 text-xs text-slate-500 sm:text-sm">
                  Core programs
                </p>
              </div>
              <div>
                <p className="font-fraunces text-primary text-4xl font-normal text-[#192838] sm:text-5xl">
                  100%
                </p>
                <p className="mt-1 text-xs text-slate-500 sm:text-sm">
                  Confidential intake
                </p>
              </div>
              <div>
                <p className="font-fraunces text-primary text-4xl font-normal text-[#192838] sm:text-5xl">
                  Open
                </p>
                <p className="mt-1 text-xs text-slate-500 sm:text-sm">
                  door policy
                </p>
              </div>
            </div>
          </div>

          {/* Right Image - Prominent & Full Size */}
          <div className="flex w-full justify-center lg:justify-end">
            <div className="relative w-full max-w-[480px] lg:max-w-[520px] xl:max-w-[560px]">
              <Image
                src="/images/hero.png"
                alt="Front desk service bell with warm hospitality"
                width={449}
                height={561}
                priority
                className="h-auto w-full object-contain drop-shadow-md select-none"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
