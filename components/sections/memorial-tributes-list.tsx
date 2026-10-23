"use client";

import * as React from "react";
import Image from "next/image";
import type { MemorialTribute } from "@/lib/memorial-data";

interface MemorialTributesListProps {
  tributes: MemorialTribute[];
}

export function MemorialTributesList({ tributes }: MemorialTributesListProps) {
  const [expandedIds, setExpandedIds] = React.useState<Record<string, boolean>>({});

  const toggleExpand = (id: string) => {
    setExpandedIds((prev) => ({
      ...prev,
      [id]: !prev[id],
    }));
  };

  return (
    <div className="grid grid-cols-1 gap-6 w-full">
      {tributes.map((tribute) => {
        const isExpanded = !!expandedIds[tribute.id];
        const fullText = tribute.paragraphs.join("\n\n");
        const hasLongText = tribute.paragraphs.length > 1 || fullText.length > 280;

        return (
          <div
            key={tribute.id}
            className="w-full rounded-2xl border border-slate-200/90 bg-[#F5F8FB] p-6 sm:p-8"
          >
            <div className="flex items-start gap-4 sm:gap-6">
              {/* Botanical flower illustration */}
              <div className="shrink-0 w-12 sm:w-14 pt-1">
                <Image
                  src="/images/flower.png"
                  alt=""
                  width={56}
                  height={76}
                  className="w-12 sm:w-14 h-auto object-contain"
                />
              </div>

              {/* Tribute content */}
              <div className="flex-1 min-w-0">
                <h3 className="font-fraunces text-lg sm:text-xl font-normal text-[#192838] leading-snug mb-3">
                  {tribute.title}
                </h3>

                <div className="text-base leading-relaxed text-slate-800 whitespace-pre-line text-pretty">
                  {isExpanded || !hasLongText ? (
                    <div className="space-y-4">
                      {tribute.paragraphs.map((p, idx) => (
                        <p key={idx}>{p}</p>
                      ))}
                    </div>
                  ) : (
                    <p className="line-clamp-4">{fullText}</p>
                  )}
                </div>

                {hasLongText && (
                  <button
                    type="button"
                    onClick={() => toggleExpand(tribute.id)}
                    className="mt-3 inline-block text-sm font-semibold text-[#8a5d24] hover:underline cursor-pointer"
                  >
                    {isExpanded ? "read less" : "read more"}
                  </button>
                )}
              </div>
            </div>
          </div>
        );
      })}
    </div>
  );
}
