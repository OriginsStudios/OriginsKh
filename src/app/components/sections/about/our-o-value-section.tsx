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

const OurOValuesSection = forwardRef<HTMLElement>((props, ref) => {
  const [expandedValue, setExpandedValue] = useState<ValueId | null>(null);

  const valuesData: ValueData[] = [
    {
      id: "1",
      title: "O’riginality.",
      description:
        "We lead with boldness and bring fresh, inventive energy into everything we create.",
      image: "https://f004.backblazeb2.com/file/Originskh/o2v2.png",
      imageAlt: "O’riginality.",
    },
    {
      id: "2",
      title: "O’thenticity.",
      description:
        "We keep it real with our creation reflecting depth and emotional resonance.",
      image: "https://f004.backblazeb2.com/file/Originskh/o3v2.png",
      imageAlt: "O’thenticity.",
    },
    {
      id: "3",
      title: "O’wesomeness.",
      description:
        "Our standard is excellence. We aim to “wow” through wonder, quality and impact.",
      image: "https://f004.backblazeb2.com/file/Originskh/o1v2.png",
      imageAlt: "O’wesomeness.",
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
    <section ref={ref} className="min-h-screen bg-gray-50 py-24 px-8 sm:px-8">
      <div className="relative z-10 mx-auto w-full">
        {/* Header */}
        <div className="border-t border-gray-300 flex flex-col md:flex-row justify-between items-start text-sm space-y-4 md:space-y-0 mb-12">
          <p className="text-gray-600 font-medium">OUR &quot;O&quot; VALUES</p>
        </div>

        {/* Content Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start pt-12 lg:pt-24">
          {/* Left side - Values list */}
          <div className="space-y-8">
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-normal text-black leading-tight">
              Everything we create at Origins is rooted in our values.
            </h2>

            <div className="space-y-0">
              {valuesData.map((value) => (
                <div key={value.id}>
                  <button
                    onClick={() => toggleExpanded(value.id)}
                    className="w-full py-4 flex items-center justify-between text-left transition-colors duration-200 group bg-transparent focus:outline-none"
                  >
                    <span
                      className={`text-lg sm:text-xl lg:text-2xl transition-colors duration-200 ${
                        expandedValue === value.id
                          ? "text-black font-medium"
                          : "text-gray-600 group-hover:text-black"
                      }`}
                    >
                      {value.title}
                    </span>
                    <div
                      className={`w-8 h-8 rounded-full border-2 flex items-center justify-center transition-all duration-200 ${
                        expandedValue === value.id
                          ? "border-black bg-black text-white"
                          : "border-gray-400 text-gray-400 group-hover:border-black group-hover:text-black"
                      }`}
                    >
                      {expandedValue === value.id ? (
                        <Minus className="w-4 h-4" />
                      ) : (
                        <Plus className="w-4 h-4" />
                      )}
                    </div>
                  </button>

                  {/* Expanded description */}
                  <div
                    className={`overflow-hidden transition-all duration-300 ease-in-out ${
                      expandedValue === value.id ? "max-h-40 pb-6" : "max-h-0"
                    }`}
                  >
                    <p className="text-gray-600 text-base leading-relaxed">
                      {value.description}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Right side - Dynamic image with smooth transition */}
          <div className="lg:sticky lg:top-8">
            <div className="relative rounded-2xl overflow-hidden aspect-square">
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
            </div>
          </div>
        </div>
      </div>
    </section>
  );
});

OurOValuesSection.displayName = "OurOValuesSection";
export default OurOValuesSection;
