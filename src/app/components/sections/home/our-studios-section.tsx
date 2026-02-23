"use client";

import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";

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

  return (
    <section id="journey" className="relative overflow-hidden px-4 sm:px-8 py-20 md:py-28">
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute -top-16 left-10 h-56 w-56 rounded-full bg-teal-200/40 blur-3xl" />
        <div className="absolute top-10 right-16 h-44 w-44 rounded-full bg-orange-200/50 blur-3xl" />
        <div className="absolute bottom-0 right-10 h-64 w-64 rounded-full bg-orange-100/60 blur-3xl" />
      </div>

      <div className="relative w-full max-w-6xl mx-auto">
        <div className="rounded-[32px] border border-white/70 bg-white/75 backdrop-blur-xl px-6 py-10 md:px-10 md:py-12 shadow-[0_20px_60px_rgba(15,23,42,0.08)]">
          <div className="flex flex-col gap-6">
            <div>
              <p className="text-xs uppercase tracking-[0.35em] text-teal-700">Our Studios</p>
              <h3
                className="mt-3 text-3xl md:text-5xl font-normal text-teal-900"
                style={{ fontFamily: "DM Serif Text" }}
              >
                A creative powerhouse with three distinct studio lanes.
              </h3>
            </div>
          </div>

          <div className="mt-12 space-y-5">
            {slides.map((slide, index) => (
              <motion.div
                key={slide.title}
                whileHover={{ y: -4 }}
                transition={{ type: "spring", stiffness: 300, damping: 24 }}
                className="group relative overflow-hidden rounded-[28px] border border-white/70 bg-gradient-to-br from-white/95 via-white/80 to-white/60 p-6 md:p-8 shadow-[0_18px_40px_rgba(15,23,42,0.08)]"
              >
                <div className="absolute -bottom-8 -right-8 h-32 w-32 rounded-full bg-orange-200/40 blur-3xl opacity-0 transition-opacity duration-300 group-hover:opacity-100" />
                <div className="absolute -top-10 -left-10 h-28 w-28 rounded-full bg-teal-200/40 blur-3xl opacity-0 transition-opacity duration-300 group-hover:opacity-100" />

                <div className="flex flex-col gap-4 md:flex-row md:items-center md:justify-between">
                  <div className="flex items-start gap-5">
                    <div className="flex flex-col items-center gap-2">
                      <span className="inline-flex h-10 w-10 items-center justify-center rounded-full bg-teal-800 text-white text-xs font-semibold">
                        0{index + 1}
                      </span>
                      <span className="text-[10px] uppercase tracking-[0.3em] text-teal-600">
                        Studio
                      </span>
                    </div>

                    <div>
                      <h4
                        className="text-2xl md:text-3xl font-normal text-teal-900"
                        style={{ fontFamily: "DM Serif Text" }}
                      >
                        {slide.title}
                      </h4>
                      <p className="mt-2 text-sm md:text-base text-teal-900/70">
                        {slide.description}
                      </p>
                    </div>
                  </div>

                  <div className="relative h-24 w-24 md:h-28 md:w-28 overflow-hidden rounded-2xl border border-white/70 shadow-sm">
                    <Image
                      src={slide.image || "/placeholder.svg"}
                      alt={slide.title}
                      fill
                      className="object-cover transition-transform duration-700 group-hover:scale-110"
                      priority={index === 0}
                      rel="preload"
                    />
                  </div>
                </div>
              </motion.div>
            ))}
            <div className="flex flex-col gap-4 md:flex-row md:items-center md:justify-between pt-2">
              <p className="max-w-3xl text-sm md:text-base text-teal-900/70">
                ORIGINS Creative, Production, and Concept work together to craft
                cinematic brand experiences across regions and industries.
              </p>
              <Link href="/portfolio" className="shrink-0">
                <button className="inline-flex items-center justify-center px-6 py-3 bg-teal-800 text-white rounded-full font-semibold hover:bg-orange-400 transition-colors text-sm md:text-base">
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
          </div>
        </div>
      </div>
    </section>
  );
}
