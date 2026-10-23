"use client";

import * as React from "react";
import Image from "next/image";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { subscribeNewsletter } from "@/app/actions/newsletter";

export function Footer() {
  const [email, setEmail] = React.useState("");
  const [isSubmitting, setIsSubmitting] = React.useState(false);
  const [isSubscribed, setIsSubscribed] = React.useState(false);
  const [errorMessage, setErrorMessage] = React.useState<string | null>(null);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!email.trim()) return;

    setErrorMessage(null);
    setIsSubscribed(false);
    setIsSubmitting(true);

    try {
      const result = await subscribeNewsletter(email);
      if (result.success) {
        setIsSubscribed(true);
        setEmail("");
      } else {
        setErrorMessage(
          result.error || "Subscription failed. Please try again.",
        );
      }
    } catch {
      setErrorMessage("An unexpected error occurred. Please try again.");
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <footer
      className="bg-primary w-full bg-[#192838] text-slate-300"
      style={{ backgroundColor: "#192838" }}
    >
      <div className="mx-auto max-w-7xl px-4 pt-16 pb-12 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 gap-10 border-b border-slate-700/60 pb-14 md:grid-cols-2 lg:grid-cols-5 lg:gap-12">
          {/* Brand Info */}
          <div className="flex flex-col gap-4 lg:col-span-2">
            <Link href="/" className="inline-block" aria-label="D Safe Place">
              <Image
                src="/images/logo.png"
                alt="D Safe Place"
                width={111}
                height={24}
                style={{ width: "auto" }}
                className="h-7 w-auto object-contain brightness-0 invert"
              />
            </Link>
            <p className="mt-1 max-w-sm text-sm leading-relaxed text-slate-400">
              A haven for children and displaced women, and a table always set
              for family and hospitality.
            </p>
          </div>

          {/* Explore Links */}
          <div className="flex flex-col gap-3">
            <h4 className="text-sm font-semibold tracking-wide text-white">
              Explore
            </h4>
            <ul className="flex flex-col gap-2.5 text-sm text-slate-400">
              <li>
                <Link
                  href="/about"
                  className="transition-colors hover:text-white"
                >
                  About
                </Link>
              </li>
              <li>
                <Link
                  href="/in-memory"
                  className="transition-colors hover:text-white"
                >
                  In Memory
                </Link>
              </li>
              <li>
                <Link
                  href="/programs"
                  className="transition-colors hover:text-white"
                >
                  Programs
                </Link>
              </li>
              <li>
                <Link
                  href="/faq"
                  className="transition-colors hover:text-white"
                >
                  FAQ
                </Link>
              </li>
              <li>
                <Link
                  href="/contact"
                  className="transition-colors hover:text-white"
                >
                  Contact
                </Link>
              </li>
            </ul>
          </div>

          {/* Get Involved Links */}
          <div className="flex flex-col gap-3">
            <h4 className="text-sm font-semibold tracking-wide text-white">
              Get involved
            </h4>
            <ul className="flex flex-col gap-2.5 text-sm text-slate-400">
              <li>
                <Link
                  href="/contact"
                  className="transition-colors hover:text-white"
                >
                  Request Help
                </Link>
              </li>
              <li>
                <Link
                  href="/contact#contact-form"
                  className="transition-colors hover:text-white"
                >
                  Volunteer
                </Link>
              </li>
              <li>
                <Link
                  href="/contact#contact-form"
                  className="transition-colors hover:text-white"
                >
                  Donate
                </Link>
              </li>
            </ul>
          </div>

          {/* Newsletter Signup */}
          <div className="flex flex-col gap-3">
            <h4 className="text-sm font-semibold tracking-wide text-white">
              Stay in touch
            </h4>
            <p className="text-sm leading-relaxed text-slate-400">
              Monthly notes from our house — no spam.
            </p>
            <div className="flex flex-col gap-2">
              <form onSubmit={handleSubmit} className="mt-1 flex">
                <Input
                  type="email"
                  placeholder="Email address"
                  value={email}
                  onChange={(e) => {
                    setEmail(e.target.value);
                    if (isSubscribed) setIsSubscribed(false);
                    if (errorMessage) setErrorMessage(null);
                  }}
                  required
                  disabled={isSubmitting}
                  className="focus-visible:ring-secondary h-10 rounded-r-none border-0 bg-white text-sm text-slate-900 placeholder:text-slate-400 focus-visible:ring-1"
                />
                <Button
                  type="submit"
                  disabled={isSubmitting}
                  className="bg-secondary h-10 shrink-0 rounded-l-none bg-[#4e81bc] px-4 text-sm font-medium text-white hover:bg-[#4e81bc]/90 disabled:opacity-75"
                >
                  {isSubmitting ? "..." : "Join"}
                </Button>
              </form>
              {isSubscribed && (
                <p className="text-xs font-medium text-emerald-400">
                  Thank you for subscribing!
                </p>
              )}
              {errorMessage && (
                <p className="text-xs text-red-400">{errorMessage}</p>
              )}
            </div>
          </div>
        </div>

        {/* Bottom row */}
        <div className="flex flex-col items-center justify-between gap-4 pt-8 text-xs text-slate-400 sm:flex-row">
          <p>© 2026 D Safe Place. All rights reserved.</p>
          <p>Built with hospitality.</p>
        </div>
      </div>
    </footer>
  );
}
