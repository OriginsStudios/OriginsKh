"use client";

import Image from "next/image";
import Link from "next/link";
import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";

export default function OurStudiosSection() {
  const slides = [
    {
      title: "Creatives",
      description:
        "Started creative exploration in Singapore. Collaborative Projects in Bacolod, Perth, Johor Bahru & Kuala Lumpur.",
      image: "/creative.png",
    },
    {
      title: "Productions",
      description: "Started Creative consultation in Phnom Penh.",
      image: "/production.png",
    },
    {
      title: "Concepts",
      description: "Partnering with brands to adapt their businesses throughout the Covid-19 period",
      image: "/concepts.png",
    },
  ];

  const [activeIndex, setActiveIndex] = useState(0);
  const [direction, setDirection] = useState<"right" | "reset">("right");

  useEffect(() => {
    const interval = setInterval(() => {
      setDirection(activeIndex === slides.length - 1 ? "reset" : "right");
      setTimeout(() => {
        setActiveIndex((prev) => (activeIndex === slides.length - 1 ? 0 : prev + 1));
      }, 50); // Small delay to allow exit animation
    }, 5000);

    return () => clearInterval(interval);
  }, [activeIndex, slides.length]);

  return (
    <section id="journey" className="py-16 md:py-24 bg-transparent relative overflow-hidden px-8">
      <div className="w-full">
        <div className="border-t border-gray-300 flex justify-between items-center text-sm mb-12">
          <p className="text-gray-600">OUR STUDIOS</p>
        </div>

        <div className="flex flex-col md:flex-row items-center justify-between gap-8 md:gap-12">
          {/* Text Section */}
          <div className="w-full md:w-1/2 text-left">
            <h3 className="text-2xl md:text-3xl font-bold text-black mb-4">We&rsquo;re A Creative Powerhouse.</h3>
            <p className="text-gray-600 mb-6 text-sm md:text-base">
              As a dynamic and multi-disciplinary Creative Powerhouse, ORIGINS STUDIOS operates across three distinct
              sectors: ORIGINS Creative, ORIGINS Production & ORIGINS Concept. Each sector designed to bring visionary
              projects to life through bold ideas and innovative execution.
            </p>
            <Link href="/portfolio">
              <button className="flex items-center px-6 py-3 bg-black text-white rounded-full font-bold hover:bg-orange-400 transition-colors text-sm md:text-base">
                See more 
                  <motion.div
                  className="ml-3"
                  animate={{ x: [0, 6, 0] }}
                  transition={{ repeat: Number.POSITIVE_INFINITY, duration: 1.5 }}
                >
                  →
                </motion.div>
              </button>
            </Link>
          </div>

          {/* Enhanced Slideshow Section */}
          <div className="w-full md:w-1/2 relative mt-8 md:mt-0">
            <div className="relative w-full aspect-[4/3] md:aspect-square overflow-hidden rounded-xl shadow-xl border-2 border-gray-100">
              <AnimatePresence initial={false} custom={direction}>
                <motion.div
                  key={activeIndex}
                  custom={direction}
                  initial={{
                    opacity: 0,
                    x: direction === "right" ? 100 : -100,
                  }}
                  animate={{ opacity: 1, x: 0 }}
                  exit={{
                    opacity: 0,
                    x: direction === "reset" ? -100 : 100,
                  }}
                  transition={{
                    x: { type: "tween", duration: 0.4 },
                    opacity: { duration: 0.3 },
                  }}
                  className="absolute inset-0"
                >
                  <Image
                    src={slides[activeIndex].image || "/placeholder.svg"}
                    alt={slides[activeIndex].title}
                    fill
                    className="object-cover"
                    priority
                    rel="preload"
                  />
                  <div className="absolute bottom-4 left-4 right-4 text-black">
                    <div className="text-lg md:text-xl font-bold bg-transparent/80 backdrop-blur-sm px-3 py-1 rounded-lg inline-block">
                      {slides[activeIndex].title}
                    </div>
                  </div>
                </motion.div>
              </AnimatePresence>

              {/* Slide Indicators */}
              <div className="absolute bottom-4 right-4 flex gap-1 md:gap-2 bg-white/80 backdrop-blur-sm px-2 py-1 rounded-full">
                {slides.map((_, index) => (
                  <button
                    key={index}
                    onClick={() => {
                      setDirection(index > activeIndex ? "right" : "reset");
                      setActiveIndex(index);
                    }}
                    className={`h-1.5 w-4 md:w-5 rounded-full transition-all duration-300 ${
                      index === activeIndex ? "bg-orange-400" : "bg-gray-300 hover:bg-gray-400"
                    }`}
                    aria-label={`Go to slide ${index + 1}`}
                  />
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}