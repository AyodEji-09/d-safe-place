"use client";

import * as React from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { submitAppointmentForm } from "@/app/actions/appointment";

export function ProgramsBookingSection() {
  const [submitted, setSubmitted] = React.useState(false);
  const [isSubmitting, setIsSubmitting] = React.useState(false);
  const [errorMessage, setErrorMessage] = React.useState<string | null>(null);
  const [formData, setFormData] = React.useState({
    fullName: "",
    phoneNumber: "",
    program: "Children's Haven",
    preferredDate: "",
    notes: "",
  });

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setErrorMessage(null);
    setIsSubmitting(true);

    try {
      const result = await submitAppointmentForm(formData);
      if (result.success) {
        setSubmitted(true);
      } else {
        setErrorMessage(
          result.error || "Failed to schedule appointment. Please try again.",
        );
      }
    } catch {
      setErrorMessage("An unexpected error occurred. Please try again.");
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <section
      id="book-appointment"
      className="scroll-mt-20 bg-[#192838] py-20 text-white sm:py-24 lg:py-28"
      style={{ backgroundColor: "#192838" }}
    >
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="mb-10 sm:mb-12">
          <span className="mb-2 block text-sm font-medium tracking-wide text-slate-400">
            Book Time With Us
          </span>
          <h2 className="font-fraunces text-3xl font-normal tracking-tight text-white sm:text-4xl lg:text-[40px]">
            Schedule an Appointment
          </h2>
        </div>

        {/* Appointment Form Card */}
        <div className="w-full max-w-xl rounded-2xl bg-white p-7 text-slate-800 shadow-xl sm:p-10">
          {submitted ? (
            <div className="animate-in fade-in flex flex-col items-start gap-4 py-6 duration-300">
              <h3 className="font-fraunces text-2xl font-bold text-[#192838]">
                Appointment Request Received
              </h3>
              <p className="text-sm leading-relaxed text-slate-600">
                Thank you, {formData.fullName || "friend"}. Our intake team will
                review your request for {formData.program} and reach out to you
                shortly.
              </p>
              <Button
                type="button"
                onClick={() => {
                  setSubmitted(false);
                  setFormData({
                    fullName: "",
                    phoneNumber: "",
                    program: "Children's Haven",
                    preferredDate: "",
                    notes: "",
                  });
                }}
                className="mt-2 h-11 rounded-lg bg-[#192838] px-5 py-2.5 text-sm font-medium text-white hover:bg-[#192838]/90"
              >
                Book Another Appointment
              </Button>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="flex flex-col gap-5">
              {/* Row 1: Full name and Phone number */}
              <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
                <div className="flex flex-col gap-1.5">
                  <label
                    htmlFor="fullName"
                    className="text-xs font-medium text-slate-700"
                  >
                    Full name
                  </label>
                  <Input
                    id="fullName"
                    type="text"
                    required
                    value={formData.fullName}
                    onChange={(e) =>
                      setFormData({ ...formData, fullName: e.target.value })
                    }
                    className="border-slate-300 bg-white text-slate-900 focus-visible:ring-[#4e81bc]"
                  />
                </div>

                <div className="flex flex-col gap-1.5">
                  <label
                    htmlFor="phoneNumber"
                    className="text-xs font-medium text-slate-700"
                  >
                    Phone number
                  </label>
                  <Input
                    id="phoneNumber"
                    type="tel"
                    required
                    value={formData.phoneNumber}
                    onChange={(e) =>
                      setFormData({ ...formData, phoneNumber: e.target.value })
                    }
                    className="border-slate-300 bg-white text-slate-900 focus-visible:ring-[#4e81bc]"
                  />
                </div>
              </div>

              {/* Row 2: Program and Preferred date */}
              <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
                <div className="flex flex-col gap-1.5">
                  <label
                    htmlFor="program"
                    className="text-xs font-medium text-slate-700"
                  >
                    Program of Interest
                  </label>
                  <div className="relative">
                    <select
                      id="program"
                      value={formData.program}
                      onChange={(e) =>
                        setFormData({ ...formData, program: e.target.value })
                      }
                      className="flex h-11 w-full rounded-lg border border-slate-300 bg-white px-3.5 py-2 text-sm text-slate-900 shadow-xs transition-colors focus-visible:ring-2 focus-visible:ring-[#4e81bc] focus-visible:outline-none"
                    >
                      <option value="Children's Haven">
                        Children&apos;s Haven
                      </option>
                      <option value="Women's Refuge">
                        Women&apos;s Refuge
                      </option>
                      <option value="Hospitality House & Family Support">
                        Hospitality House & Family Support
                      </option>
                    </select>
                  </div>
                </div>

                <div className="flex flex-col gap-1.5">
                  <label
                    htmlFor="preferredDate"
                    className="text-xs font-medium text-slate-700"
                  >
                    Preferred Date
                  </label>
                  <Input
                    id="preferredDate"
                    type="date"
                    required
                    value={formData.preferredDate}
                    onChange={(e) =>
                      setFormData({
                        ...formData,
                        preferredDate: e.target.value,
                      })
                    }
                    className="border-slate-300 bg-white text-slate-900 focus-visible:ring-[#4e81bc]"
                  />
                </div>
              </div>

              {/* Row 3: Notes */}
              <div className="flex flex-col gap-1.5">
                <label
                  htmlFor="notes"
                  className="text-xs font-medium text-slate-700"
                >
                  Additional Notes (Optional)
                </label>
                <Textarea
                  id="notes"
                  placeholder="Optional — shared only with our intake team"
                  rows={3}
                  value={formData.notes}
                  onChange={(e) =>
                    setFormData({ ...formData, notes: e.target.value })
                  }
                  className="min-h-[90px] border-slate-300 bg-white text-slate-900 placeholder:text-slate-400 focus-visible:ring-[#4e81bc]"
                />
              </div>

              {/* Error Message */}
              {errorMessage && (
                <div className="rounded-lg bg-red-50 p-3 text-sm text-red-600">
                  {errorMessage}
                </div>
              )}

              {/* Submit Button */}
              <div className="pt-2">
                <Button
                  type="submit"
                  disabled={isSubmitting}
                  className="h-11 rounded-lg bg-[#192838] px-6 py-2.5 text-sm font-medium text-white transition-colors hover:bg-[#192838]/90 disabled:opacity-70"
                >
                  {isSubmitting ? "Requesting..." : "Request an Appointment"}
                </Button>
              </div>
            </form>
          )}
        </div>
      </div>
    </section>
  );
}
