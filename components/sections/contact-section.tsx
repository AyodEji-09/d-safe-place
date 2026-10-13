"use client";

import * as React from "react";
import { ChevronDown, CheckCircle2 } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";

const contactInfo = [
  {
    title: "Intake line",
    detail: "Available weekdays, 9am - 6pm",
  },
  {
    title: "Confidential email",
    detail: "Response within one business day",
  },
  {
    title: "Walk-ins",
    detail: "Hospitality House welcomes walk-ins for meals daily",
  },
];

const reasonOptions = [
  "Requesting help",
  "Volunteering",
  "Donations & Giving",
  "Family or Marriage Counseling",
  "General inquiry",
];

export function ContactSection() {
  const [formData, setFormData] = React.useState({
    name: "",
    contact: "",
    reason: "Requesting help",
    message: "",
  });
  const [isSubmitted, setIsSubmitted] = React.useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (formData.name.trim() && formData.contact.trim()) {
      setIsSubmitted(true);
    }
  };

  return (
    <section className="w-full bg-[#F5F8FB] pt-12 pb-20 md:pt-16 md:pb-28">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 items-start gap-12 lg:grid-cols-12 lg:gap-16">
          {/* Left Column: Information */}
          <div className="flex flex-col lg:col-span-6 lg:pt-4">
            <p className="text-sm font-normal text-[#5b5b52] sm:text-base">
              Reach out
            </p>
            <h1 className="font-fraunces mt-2 text-3xl font-normal tracking-tight text-[#192838] sm:text-4xl md:text-5xl md:leading-tight">
              Contact us
            </h1>

            <p className="mt-5 max-w-lg text-base leading-relaxed text-[#5b5b52] sm:text-lg">
              Whether you need help, want to volunteer, or would like to give,
              this door is always open. Every message reaches a real person on
              our team.
            </p>

            <div className="mt-10 flex flex-col gap-6 sm:mt-12 sm:gap-8">
              {contactInfo.map((info) => (
                <div key={info.title} className="flex flex-col gap-1">
                  <h3 className="text-base font-semibold text-[#192838]">
                    {info.title}
                  </h3>
                  <p className="text-sm text-[#5b5b52] sm:text-[15px]">
                    {info.detail}
                  </p>
                </div>
              ))}
            </div>
          </div>

          {/* Right Column: Contact Form Card */}
          <div className="w-full lg:col-span-6">
            <div className="rounded-2xl border border-slate-200/80 bg-white p-6 shadow-xs sm:p-8 lg:p-10">
              {isSubmitted ? (
                <div className="flex flex-col items-center justify-center py-12 text-center">
                  <div className="flex size-14 items-center justify-center rounded-full bg-emerald-50 text-emerald-600">
                    <CheckCircle2 className="size-8" />
                  </div>
                  <h3 className="font-fraunces mt-5 text-2xl font-normal text-[#192838]">
                    Message received
                  </h3>
                  <p className="mt-2 max-w-sm text-sm text-[#5b5b52]">
                    Thank you, {formData.name}. Our intake team will get back to
                    you promptly and confidentially.
                  </p>
                  <Button
                    type="button"
                    onClick={() => {
                      setIsSubmitted(false);
                      setFormData({
                        name: "",
                        contact: "",
                        reason: "Requesting help",
                        message: "",
                      });
                    }}
                    className="mt-6 h-10 rounded-lg bg-[#192838] px-5 text-sm text-white hover:bg-[#192838]/90"
                  >
                    Send another message
                  </Button>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="flex flex-col gap-5">
                  {/* Row 1: Name and Email/Phone */}
                  <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
                    <div className="flex flex-col gap-1.5">
                      <label
                        htmlFor="name"
                        className="text-xs font-medium text-slate-700"
                      >
                        Name
                      </label>
                      <Input
                        id="name"
                        type="text"
                        placeholder="Your name"
                        required
                        value={formData.name}
                        onChange={(e) =>
                          setFormData({ ...formData, name: e.target.value })
                        }
                        className="h-11 border-slate-300 bg-white text-slate-900 placeholder:text-slate-400 focus-visible:ring-[#4e81bc]"
                      />
                    </div>

                    <div className="flex flex-col gap-1.5">
                      <label
                        htmlFor="contact"
                        className="text-xs font-medium text-slate-700"
                      >
                        Email or phone
                      </label>
                      <Input
                        id="contact"
                        type="text"
                        placeholder="you@example.com or phone"
                        required
                        value={formData.contact}
                        onChange={(e) =>
                          setFormData({ ...formData, contact: e.target.value })
                        }
                        className="h-11 border-slate-300 bg-white text-slate-900 placeholder:text-slate-400 focus-visible:ring-[#4e81bc]"
                      />
                    </div>
                  </div>

                  {/* Row 2: I'm reaching out about */}
                  <div className="flex flex-col gap-1.5">
                    <label
                      htmlFor="reason"
                      className="text-xs font-medium text-slate-700"
                    >
                      I&apos;m reaching out about
                    </label>
                    <div className="relative">
                      <select
                        id="reason"
                        value={formData.reason}
                        onChange={(e) =>
                          setFormData({ ...formData, reason: e.target.value })
                        }
                        className="h-11 w-full appearance-none rounded-lg border border-slate-300 bg-white px-3.5 pr-10 text-sm text-slate-900 shadow-xs transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#4e81bc]"
                      >
                        {reasonOptions.map((opt) => (
                          <option key={opt} value={opt}>
                            {opt}
                          </option>
                        ))}
                      </select>
                      <ChevronDown className="pointer-events-none absolute top-1/2 right-3.5 size-4 -translate-y-1/2 text-slate-500" />
                    </div>
                  </div>

                  {/* Row 3: Message */}
                  <div className="flex flex-col gap-1.5">
                    <label
                      htmlFor="message"
                      className="text-xs font-medium text-slate-700"
                    >
                      Message
                    </label>
                    <Textarea
                      id="message"
                      placeholder="How can we help?"
                      rows={4}
                      value={formData.message}
                      onChange={(e) =>
                        setFormData({ ...formData, message: e.target.value })
                      }
                      className="min-h-[110px] resize-y border-slate-300 bg-white text-slate-900 placeholder:text-slate-400 focus-visible:ring-[#4e81bc]"
                    />
                  </div>

                  {/* Row 4: Submit Button */}
                  <div className="pt-2">
                    <Button
                      type="submit"
                      className="h-11 w-full rounded-lg bg-[#192838] py-2.5 text-sm font-medium text-white transition-colors hover:bg-[#192838]/90"
                    >
                      Send message
                    </Button>
                  </div>
                </form>
              )}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
