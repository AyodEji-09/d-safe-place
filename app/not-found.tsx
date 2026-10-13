import * as React from "react";
import Link from "next/link";
import { Button } from "@/components/ui/button";

function SparkleIcon({ className }: { className?: string }) {
  return (
    <svg
      viewBox="0 0 24 24"
      fill="currentColor"
      className={className || "size-4 text-white"}
      aria-hidden="true"
    >
      <path d="M12 3C12 7.97 7.97 12 3 12C7.97 12 12 16.03 12 21C12 16.03 16.03 12 21 12C16.03 12 12 7.97 12 3Z" />
    </svg>
  );
}

export default function NotFound() {
  return (
    <div className="flex flex-1 items-center justify-center bg-[#F5F8FB] px-4 py-20 sm:px-6 sm:py-28 lg:px-8">
      <div className="flex max-w-2xl flex-col items-center text-center">
        {/* Sparkle Badge */}
        <div className="mb-6 flex size-12 items-center justify-center rounded-full bg-[#192838] shadow-xs">
          <SparkleIcon className="size-5 text-white" />
        </div>

        {/* 404 Large Display */}
        <span className="font-fraunces text-7xl font-normal tracking-tight text-[#192838] select-none sm:text-8xl lg:text-9xl">
          404
        </span>

        {/* Headline */}
        <h1 className="font-fraunces mt-4 text-2xl font-normal tracking-tight text-[#192838] sm:text-3xl lg:text-4xl">
          Even when you take a wrong turn, our doors are always open.
        </h1>

        {/* Narrative Description */}
        <p className="mt-4 max-w-lg text-base leading-relaxed text-slate-600 sm:text-lg">
          The page you are looking for might have been moved, renamed, or is
          temporarily unavailable. Let us help you find your seat at the table.
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
        <div className="mt-10 flex items-center gap-3 text-xs text-slate-500">
          <span>Looking for something else?</span>
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
