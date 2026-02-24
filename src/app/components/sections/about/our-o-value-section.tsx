"use client";
import React, { useState, forwardRef } from "react";
import { Plus, Minus } from "lucide-react";
import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";

type ValueId = "1" | "2" | "3";

interface ValueData {
  id: ValueId;
  title: string;
  description: string;
  image: string;
  imageAlt: string;
}

interface OurOValuesSectionProps {
  id?: string;
}

const OurOValuesSection = forwardRef<HTMLElement, OurOValuesSectionProps>(({ id }, ref) => {
  const [expandedValue, setExpandedValue] = useState<ValueId | null>(null);

  const valuesData: ValueData[] = [
    {
      id: "1",
      title: "O'riginality.",
      description:
        "We lead with boldness and bring fresh, inventive energy into everything we create.",
      image: "/o2v2.png",
      imageAlt: "O'riginality.",
    },
    {
      id: "2",
      title: "O'thenticity.",
      description:
        "We keep it real with our creation reflecting depth and emotional resonance.",
      image: "/o3v2.png",
      imageAlt: "O'thenticity.",
    },
    {
      id: "3",
      title: "O'wesomeness.",
      description:
        "Our standard is excellence. We aim to \"wow\" through wonder, quality and impact.",
      image: "/o1v2.png",
      imageAlt: "O'wesomeness.",
    },
  ];

  const defaultImage = {
    image: "/o2v2.png", // Replace this with your default image path
    imageAlt: "Default O value image",
  };

  const toggleExpanded = (valueId: ValueId) =>
    setExpandedValue(expandedValue === valueId ? null : valueId);

  const currentItem =
    expandedValue !== null
      ? valuesData.find((v) => v.id === expandedValue)!
      : defaultImage;

  return (
    <section
      ref={ref}
      id={id}
      className="relative overflow-hidden min-h-screen py-24 px-8 sm:px-10 transition-all duration-700 ease-in-out"
    >
      <div className="pointer-events-none absolute inset-0">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_20%_20%,_rgba(14,116,144,0.16),_transparent_55%)]" />
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_80%_10%,_rgba(253,186,116,0.18),_transparent_50%)]" />
        <div className="absolute inset-0 opacity-70 bg-[linear-gradient(120deg,_rgba(255,255,255,0.6),_transparent_55%)]" />
      </div>

      <div className="relative z-10 mx-auto w-full max-w-6xl">
        {/* Header */}
        <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-6 border-t border-stone-200/70 pb-8">
          <div className="mt-4 inline-flex items-center gap-3 rounded-full border border-stone-200/70 bg-white/80 px-4 py-2 text-xs uppercase tracking-[0.35em] text-stone-600 shadow-sm">
            <span className="h-2 w-2 rounded-full bg-amber-500" />
            OUR &quot;O&quot; VALUES
          </div>
          {/* <p className="text-stone-500 text-sm md:text-base max-w-md">
            A playful, grounded philosophy for how we dream, build, and deliver.
          </p> */}
        </div>

        {/* Content Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-start pt-8 lg:pt-16">
          {/* Left side - Values list */}
          <div className="space-y-8">
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-serif font-semibold text-stone-900 leading-tight">
              Everything we create at Origins is rooted in our values.
            </h2>

            <div className="space-y-4">
              {valuesData.map((value) => {
                const isActive = expandedValue === value.id;
                return (
                  <div
                    key={value.id}
                    className={`rounded-2xl border transition-colors duration-300 ${
                      isActive
                        ? "border-stone-900/10 bg-white/90 shadow-[0_16px_40px_rgba(24,24,24,0.12)]"
                        : "border-stone-200/70 bg-white/60 hover:-translate-y-0.5 hover:bg-white/80 hover:shadow-[0_14px_30px_rgba(24,24,24,0.08)]"
                    }`}
                  >
                    <button
                      type="button"
                      onClick={() => toggleExpanded(value.id)}
                      aria-expanded={isActive}
                      className="w-full px-5 py-5 flex items-start gap-4 text-left transition-colors duration-200 group focus:outline-none"
                    >
                      <div className="mt-1 text-[10px] font-semibold uppercase tracking-[0.3em] text-stone-400">
                        0{value.id}
                      </div>
                      <div className="flex-1">
                        <span
                          className={`block text-xl sm:text-2xl lg:text-4xl transition-colors duration-200 ${
                            isActive
                              ? "text-stone-900 font-medium"
                              : "text-stone-500 group-hover:text-stone-900"
                          }`}
                        >
                          {value.title}
                        </span>
                      </div>
                      <div
                        className={`mt-1 w-9 h-9 rounded-full border flex items-center justify-center transition-all duration-200 ${
                          isActive
                            ? "border-stone-900 bg-stone-900 text-white"
                            : "border-stone-300 bg-white text-stone-500 group-hover:border-stone-900 group-hover:text-stone-900"
                        }`}
                      >
                        {isActive ? <Minus className="w-4 h-4" /> : <Plus className="w-4 h-4" />}
                      </div>
                    </button>

                    <div
                      className={`grid transition-[grid-template-rows] duration-300 ease-in-out ${
                        isActive ? "grid-rows-[1fr]" : "grid-rows-[0fr]"
                      }`}
                    >
                      <div className="overflow-hidden">
                        <p className="px-5 pb-6 text-stone-600 leading-relaxed text-md sm:text-lg lg:text-xl">
                          {value.description}
                        </p>
                      </div>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>

          {/* Right side - Dynamic image with smooth transition */}
          <div className="lg:sticky lg:top-10">
            <div className="relative rounded-[32px] overflow-hidden aspect-[4/5] bg-white/70 ring-1 ring-stone-200/70 shadow-[0_22px_55px_rgba(24,24,24,0.14)] backdrop-blur">
              <div className="absolute inset-0 bg-gradient-to-br from-teal-200/30 via-transparent to-amber-100/40 z-10" />
              <AnimatePresence initial={false}>
                <motion.div
                  key={currentItem.image}
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  exit={{ opacity: 0 }}
                  transition={{ duration: 0.85, ease: "easeInOut" }}
                  className="absolute inset-0 w-full h-full"
                >
                  <Image
                    src={currentItem.image}
                    alt={currentItem.imageAlt}
                    fill
                    className="object-cover"
                    unoptimized
                    priority
                  />
                </motion.div>
              </AnimatePresence>
              <div className="absolute left-4 top-4 z-20 rounded-full bg-white/80 px-4 py-2 text-[10px] uppercase tracking-[0.35em] text-stone-600 shadow-sm">
                {currentItem.imageAlt}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
});

OurOValuesSection.displayName = "OurOValuesSection";
export default OurOValuesSection;
