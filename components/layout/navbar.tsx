"use client";

import * as React from "react";
import Image from "next/image";
import Link from "next/link";
import { Menu, X } from "lucide-react";
import { Button } from "@/components/ui/button";

const navLinks = [
  { name: "Home", href: "/", active: true },
  { name: "About", href: "#about", active: false },
  { name: "Programs", href: "#programs", active: false },
  { name: "FAQ", href: "#faq", active: false },
  { name: "Contact", href: "#contact", active: false },
];

export function Navbar() {
  const [mobileMenuOpen, setMobileMenuOpen] = React.useState(false);

  return (
    <header className="relative sticky top-0 z-50 w-full border-b border-slate-200/60 bg-[#F5F8FB]/95 backdrop-blur-xs transition-all">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="flex h-20 items-center justify-between">
          {/* Logo */}
          <Link
            href="/"
            className="flex items-center gap-2"
            aria-label="D Safe Place Home"
          >
            <Image
              src="/images/logo.png"
              alt="D Safe Place"
              width={111}
              height={24}
              priority
              style={{ width: "auto" }}
              className="h-7 w-auto object-contain"
            />
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden items-center gap-8 md:flex">
            <div className="flex items-center gap-7 text-sm font-medium">
              {navLinks.map((link) => (
                <Link
                  key={link.name}
                  href={link.href}
                  className={
                    link.active
                      ? "relative py-1 font-semibold text-[#192838] after:absolute after:right-0 after:bottom-0 after:left-0 after:h-0.5 after:bg-[#192838]"
                      : "py-1 text-[#192838] transition-colors"
                  }
                >
                  {link.name}
                </Link>
              ))}
            </div>

            <Button
              asChild
              className="h-auto rounded-lg bg-[#192838] px-5 py-2.5 text-sm font-medium text-white transition-colors hover:bg-[#192838]/90"
            >
              <Link href="#get-involved" className="text-white">
                Get Involved
              </Link>
            </Button>
          </nav>

          {/* Mobile Menu Button */}
          <div className="flex md:hidden">
            <button
              type="button"
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="text-foreground hover:text-primary inline-flex items-center justify-center rounded-md p-2 hover:bg-slate-100 focus:outline-hidden"
              aria-label={mobileMenuOpen ? "Close menu" : "Open menu"}
              aria-expanded={mobileMenuOpen}
            >
              {mobileMenuOpen ? (
                <X className="text-primary size-6" />
              ) : (
                <Menu className="text-primary size-6" />
              )}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile menu dropdown floating on top of page without shifting content */}
      {mobileMenuOpen && (
        <>
          <div
            className="fixed inset-0 top-20 z-40 bg-black/30 backdrop-blur-xs transition-opacity md:hidden"
            onClick={() => setMobileMenuOpen(false)}
            aria-hidden="true"
          />
          <div className="animate-in fade-in slide-in-from-top-2 absolute top-full right-0 left-0 z-50 border-b border-slate-200/80 bg-[#F5F8FB] px-4 pt-4 pb-6 shadow-2xl duration-200 md:hidden">
            <div className="flex flex-col gap-3">
              {navLinks.map((link) => (
                <Link
                  key={link.name}
                  href={link.href}
                  onClick={() => setMobileMenuOpen(false)}
                  className={`rounded-md px-3 py-2.5 text-base font-medium transition-colors ${
                    link.active
                      ? "text-primary bg-slate-200/70 font-semibold"
                      : "text-foreground hover:text-primary hover:bg-slate-200/50"
                  }`}
                >
                  {link.name}
                </Link>
              ))}
              <div className="pt-2">
                <Button
                  asChild
                  className="h-11 w-full rounded-lg bg-[#192838] py-3 text-white hover:bg-[#192838]/90"
                  onClick={() => setMobileMenuOpen(false)}
                >
                  <Link href="#get-involved" className="text-white">
                    Get Involved
                  </Link>
                </Button>
              </div>
            </div>
          </div>
        </>
      )}
    </header>
  );
}
