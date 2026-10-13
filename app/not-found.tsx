import * as React from "react";
import Link from "next/link";
import { Button } from "@/components/ui/button";

export default function NotFound() {
  return (
    <div className="flex flex-1 items-center justify-center bg-[#F5F8FB] px-4 py-20 sm:px-6 sm:py-28 lg:px-8">
      <div className="flex max-w-xl flex-col items-center text-center">
        {/* 404 Large Display */}
        <span className="font-fraunces text-7xl font-normal tracking-tight text-[#192838] select-none sm:text-8xl lg:text-9xl">
          404
        </span>

        {/* Heading */}
        <h1 className="font-fraunces mt-3 text-2xl font-normal tracking-tight text-[#192838] sm:text-3xl">
          Page not found
        </h1>

        {/* Single concise paragraph */}
        <p className="mt-3 max-w-md text-base leading-relaxed text-slate-600 sm:text-lg">
          Even when you take a wrong turn, our doors are always open. Let us help
          you find your way back.
        </p>

        {/* Action Buttons */}
        <div className="mt-8 flex flex-wrap items-center justify-center gap-4">
          <Button
            asChild
            className="h-11 rounded-lg bg-[#192838] px-6 py-2.5 text-sm font-medium text-white transition-colors hover:bg-[#192838]/90"
          >
            <Link href="/" className="text-white">
              Return Home
            </Link>
          </Button>

          <Button
            asChild
            variant="outline"
            className="h-11 rounded-lg border-[#192838] bg-transparent px-6 py-2.5 text-sm font-medium text-[#192838] transition-colors hover:bg-slate-100"
          >
            <Link href="/programs">Explore Programs</Link>
          </Button>
        </div>

        {/* Quick links */}
        <div className="mt-8 flex items-center gap-3 text-xs text-slate-500">
          <Link
            href="/about"
            className="font-medium text-[#192838] underline-offset-4 hover:underline"
          >
            Our Story
          </Link>
          <span>•</span>
          <Link
            href="/programs"
            className="font-medium text-[#192838] underline-offset-4 hover:underline"
          >
            Schedule Appointment
          </Link>
        </div>
      </div>
    </div>
  );
}
