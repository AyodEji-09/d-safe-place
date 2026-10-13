"use client";

import * as React from "react";
import Image from "next/image";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";

export function Footer() {
  const [email, setEmail] = React.useState("");
  const [isSubscribed, setIsSubscribed] = React.useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (email.trim()) {
      setIsSubscribed(true);
      setEmail("");
    }
  };

  return (
    <footer className="w-full bg-[#192838] bg-primary text-slate-300" style={{ backgroundColor: "#192838" }}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-16 pb-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-10 lg:gap-12 pb-14 border-b border-slate-700/60">
          {/* Brand Info */}
          <div className="lg:col-span-2 flex flex-col gap-4">
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
            <p className="text-sm text-slate-400 leading-relaxed max-w-sm mt-1">
              A haven for children and displaced women, and a table always set for
              family and hospitality.
            </p>
          </div>

          {/* Explore Links */}
          <div className="flex flex-col gap-3">
            <h4 className="text-sm font-semibold text-white tracking-wide">
              Explore
            </h4>
            <ul className="flex flex-col gap-2.5 text-sm text-slate-400">
              <li>
                <Link href="#about" className="hover:text-white transition-colors">
                  About
                </Link>
              </li>
              <li>
                <Link href="#programs" className="hover:text-white transition-colors">
                  Programs
                </Link>
              </li>
              <li>
                <Link href="#faq" className="hover:text-white transition-colors">
                  FAQ
                </Link>
              </li>
            </ul>
          </div>

          {/* Get Involved Links */}
          <div className="flex flex-col gap-3">
            <h4 className="text-sm font-semibold text-white tracking-wide">
              Get involved
            </h4>
            <ul className="flex flex-col gap-2.5 text-sm text-slate-400">
              <li>
                <Link href="#request-help" className="hover:text-white transition-colors">
                  Request Help
                </Link>
              </li>
              <li>
                <Link href="#volunteer" className="hover:text-white transition-colors">
                  Volunteer
                </Link>
              </li>
              <li>
                <Link href="#donate" className="hover:text-white transition-colors">
                  Donate
                </Link>
              </li>
            </ul>
          </div>

          {/* Newsletter Signup */}
          <div className="flex flex-col gap-3">
            <h4 className="text-sm font-semibold text-white tracking-wide">
              Stay in touch
            </h4>
            <p className="text-sm text-slate-400 leading-relaxed">
              Monthly notes from our house — no spam.
            </p>
            {isSubscribed ? (
              <p className="text-sm text-emerald-400 font-medium">
                Thank you for subscribing!
              </p>
            ) : (
              <form onSubmit={handleSubmit} className="flex mt-1">
                <Input
                  type="email"
                  placeholder="Email address"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  required
                  className="rounded-r-none bg-white text-slate-900 border-0 h-10 text-sm focus-visible:ring-1 focus-visible:ring-secondary placeholder:text-slate-400"
                />
                <Button
                  type="submit"
                  className="rounded-l-none bg-[#4e81bc] bg-secondary hover:bg-[#4e81bc]/90 text-white font-medium px-4 h-10 shrink-0 text-sm"
                >
                  Join
                </Button>
              </form>
            )}
          </div>
        </div>

        {/* Bottom row */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-slate-400">
          <p>© 2026 D Safe Place. All rights reserved.</p>
          <p>Built with hospitality.</p>
        </div>
      </div>
    </footer>
  );
}
