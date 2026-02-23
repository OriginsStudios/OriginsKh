"use client";
import { useState, useRef } from "react";
import { motion, AnimatePresence, useInView } from "framer-motion";
import { ChevronRight, ExternalLink, Play } from "lucide-react";
import Image from "next/image";
import Link from "next/link";

export default function OurServicesSection() {
  const [activeSpace, setActiveSpace] = useState<"event" | "studio">("event");
  const [isVideoPlaying, setIsVideoPlaying] = useState(false);
  const [expandedImage, setExpandedImage] = useState<number | null>(null);
  const containerRef = useRef<HTMLDivElement>(null);
  const isInView = useInView(containerRef, { once: false, margin: "-100px" });

  const spaces = {
    event: {
      title: "Event Space.",
      subtitle: "Suitable for small seminar/meeting up to 30 pax.",
      description: [
        "½ Day or Full-day Events",
        "A minimalist space keeps the attention of your attendees on the things that matter",
      ],
      specs:
        "50m² (Main Event Space) + 20m² (For Catering/Networking), Fully-equipped with Air-conditioning, Projector, LED Lighting, PA Sound System, Parking Space for up to 10 Scooters + 1 Car",
      services: "Catering/Beverages, Photography/Videography",
      images: [
        "/eventspace1.png",
        "/eventspace2.png",
        "/eventspace3.png",
        "/eventspace4.png",
      ],
      color: "orange",
    },
    studio: {
      title: "Studio Space.",
      subtitle: "Re-surfacable Studio Backdrop with Diffuser Scrim Lighting.",
      description: [
        "Hourly, 1⁄2 Day or Full-day Rental",
        "Unlike traditional studio backdrop with a fixed curve, our studio features a flat, re-surfacable backdrop wall that opens up a world of creative flexibility",
      ],
      specs:
        "Flooring/ Scrim: 4.0m X 2.6m (10.4m2) Backdrop Wall: 4.0m X 2.9m (11.6m2) Hoist-able Diffuser Scrim Lighting Truss (Max Load 25kg)",
      services: "Equipment Rental",
      images: [
        "/studiospace1.png",
        "/studiospace2.jpg",
        "/studiospace3.jpg",
        "/studiospace4.png",
      ],
      color: "black",
    },
  };

  const currentSpace = spaces[activeSpace];

  return (
    <section
      ref={containerRef}
      className="relative overflow-hidden px-4 sm:px-8 py-20 md:py-28"
    >
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute -top-24 left-10 h-56 w-56 rounded-full bg-teal-200/40 blur-3xl" />
        <div className="absolute top-10 right-16 h-40 w-40 rounded-full bg-orange-200/50 blur-3xl" />
        <div className="absolute bottom-0 right-10 h-64 w-64 rounded-full bg-orange-100/60 blur-3xl" />
      </div>

      <div className="relative w-full max-w-6xl mx-auto">
        <div className="rounded-[32px] border border-white/70 bg-white/70 backdrop-blur-xl px-6 py-10 md:px-10 md:py-12 shadow-[0_20px_60px_rgba(15,23,42,0.08)]">
          <div className="relative z-10 w-full">
            <div className="flex flex-col gap-5 md:flex-row md:items-end md:justify-between">
              <div>
                <p className="text-xs uppercase tracking-[0.4em] text-teal-700">
                  Our Spaces
                </p>
                <h2
                  className="mt-3 text-2xl md:text-4xl font-normal text-teal-900"
                  style={{ fontFamily: "DM Serif Text" }}
                >
                  Purpose-built spaces for shoots, workshops, and gatherings.
                </h2>
                <p className="mt-3 max-w-xl text-sm md:text-base text-teal-900/70">
                  Choose the setting that fits your production needs, with flexible booking and support.
                </p>
              </div>
              <div className="flex flex-wrap items-center gap-3">
                <motion.button
                  onClick={() => setActiveSpace("event")}
                  className={`relative px-4 py-2 rounded-full text-xs font-semibold uppercase tracking-[0.2em] transition-colors ${
                    activeSpace === "event"
                      ? "text-white"
                      : "text-teal-800 hover:text-teal-900"
                  }`}
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                >
                  {activeSpace === "event" && (
                    <motion.span
                      layoutId="space-filter-pill"
                      className="absolute inset-0 rounded-full bg-orange-400 shadow-md shadow-orange-500/20"
                      transition={{ type: "spring", stiffness: 500, damping: 40 }}
                    />
                  )}
                  {activeSpace !== "event" && (
                    <span className="absolute inset-0 rounded-full border border-teal-100 bg-white" />
                  )}
                  <span className="relative z-10">Event Space</span>
                </motion.button>
                <motion.button
                  onClick={() => setActiveSpace("studio")}
                  className={`relative px-4 py-2 rounded-full text-xs font-semibold uppercase tracking-[0.2em] transition-colors ${
                    activeSpace === "studio"
                      ? "text-white"
                      : "text-teal-800 hover:text-teal-900"
                  }`}
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                >
                  {activeSpace === "studio" && (
                    <motion.span
                      layoutId="space-filter-pill"
                      className="absolute inset-0 rounded-full bg-teal-800 shadow-md shadow-teal-900/20"
                      transition={{ type: "spring", stiffness: 500, damping: 40 }}
                    />
                  )}
                  {activeSpace !== "studio" && (
                    <span className="absolute inset-0 rounded-full border border-teal-100 bg-white" />
                  )}
                  <span className="relative z-10">Studio Space</span>
                </motion.button>
              </div>
            </div>
          </div>

        <AnimatePresence mode="wait">
          <motion.div
            key={activeSpace}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.5 }}
            className="mt-8 grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-24 items-center"
          >
            {/* Left column - Content */}
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.7, delay: 0.2 }}
              className="order-2 lg:order-1"
            >
              <motion.div
                initial={{ width: 0 }}
                animate={{ width: "100%" }}
                transition={{ duration: 0.8, delay: 0.3 }}
                className={`h-1 ${
                  activeSpace === "event" ? "bg-orange-400" : "bg-teal-800"
                } mb-8`}
              />
              <motion.h2
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.4 }}
                className="uppercase tracking-wider text-sm font-medium text-teal-600 mb-4"
              >
                {activeSpace === "event"
                  ? "OUR EVENT SPACE"
                  : "OUR STUDIO SPACE"}
              </motion.h2>
              <motion.h1
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.7, delay: 0.5 }}
                className="text-4xl md:text-5xl lg:text-6xl font-serif font-light text-teal-900 leading-none mb-6"
              >
                {currentSpace.title}
              </motion.h1>
              <motion.p
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.6 }}
                className={`text-lg md:text-2xl mb-8 font-medium ${
                  activeSpace === "event" ? "text-orange-400" : "text-teal-800"
                }`}
              >
                {currentSpace.subtitle}
              </motion.p>
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.7 }}
                className="space-y-6 text-teal-900/70 text-base md:text-lg leading-relaxed"
              >
                {currentSpace.description.map((paragraph, index) => (
                  <motion.p
                    key={index}
                    initial={{ opacity: 0, y: 15 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5, delay: 0.8 + index * 0.1 }}
                  >
                    {paragraph}
                  </motion.p>
                ))}
                <div className="pt-6 space-y-6 border-t border-teal-100/70">
                  <motion.div
                    initial={{ opacity: 0, y: 15 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5, delay: 1 }}
                  >
                    <h3 className="text-teal-900 font-semibold mb-2">
                      Technical Specifications
                    </h3>
                    <p className="text-teal-900/70">{currentSpace.specs}</p>
                  </motion.div>
                  <motion.div
                    initial={{ opacity: 0, y: 15 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5, delay: 1.1 }}
                  >
                    <h3 className="text-teal-900 font-semibold mb-2">
                      Additional Services
                    </h3>
                    <p className="text-teal-900/70">{currentSpace.services}</p>
                  </motion.div>
                </div>
              </motion.div>
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 1.2 }}
                className="mt-10 flex flex-wrap gap-4"
              >
                <Link href="/contact">
                  <motion.button
                    className={`group relative overflow-hidden px-4 py-2 md:px-8 md:py-4 text-white font-semibold uppercase tracking-[0.2em] inline-flex items-center gap-2 rounded-full ${
                      activeSpace === "event" ? "bg-orange-400" : "bg-teal-800"
                    }`}
                    whileHover={{ scale: 1.03 }}
                    whileTap={{ scale: 0.97 }}
                  >
                    Book This Space
                    <motion.div
                      className="ml-3"
                      animate={{ x: [0, 6, 0] }}
                      transition={{
                        repeat: Number.POSITIVE_INFINITY,
                        duration: 1.5,
                      }}
                    >
                      →{" "}
                    </motion.div>
                  </motion.button>
                </Link>
                <motion.button
                  onClick={() => setIsVideoPlaying(true)}
                  className="group px-4 py-2 md:px-8 md:py-4 bg-transparent border border-teal-200 text-teal-800 font-semibold uppercase tracking-[0.2em] inline-flex items-center gap-2 hover:bg-orange-50 rounded-full"
                  whileHover={{ scale: 1.03 }}
                  whileTap={{ scale: 0.97 }}
                >
                  <Play className="h-4 w-4" /> Watch Tour
                </motion.button>
              </motion.div>
            </motion.div>

            {/* Right column - Images */}
            <motion.div
              initial={{ opacity: 0, x: 50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.7, delay: 0.3 }}
              className="order-1 lg:order-2"
            >
              <div className="relative">
                {/* Main image */}
                <motion.div
                  initial={{ opacity: 0, scale: 0.9 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ duration: 0.7, delay: 0.4 }}
                  className="relative z-10 overflow-hidden rounded-3xl border border-white/70 shadow-lg"
                >
                  <Image
                    src={
                      currentSpace.images[0] ||
                      `/placeholder.svg?height=600&width=800`
                    }
                    alt={`${
                      activeSpace === "event" ? "Event" : "Studio"
                    } Space Main View`}
                    width={800}
                    height={500}
                    unoptimized
                    className="w-full h-[500px] object-cover rounded-3xl"
                    priority
                    rel="preload"
                  />
                  <motion.div
                    className="absolute inset-0 border border-white/70 rounded-3xl"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ duration: 0.5, delay: 0.6 }}
                  />
                </motion.div>
                {/* Thumbnail grid */}
                <div className="grid grid-cols-3 gap-3 mt-3">
                  {currentSpace.images.slice(1).map((img, index) => (
                    <motion.div
                      key={index}
                      initial={{ opacity: 0, y: 20 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ duration: 0.5, delay: 0.7 + index * 0.1 }}
                      className="relative overflow-hidden group cursor-pointer rounded-2xl border border-white/70 shadow-sm"
                      onClick={() => setExpandedImage(index + 1)}
                    >
                      <div className="absolute inset-0 bg-black/30 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center rounded-2xl">
                        <ExternalLink className="text-white h-5 w-5" />
                      </div>
                      <Image
                        src={img || `/placeholder.svg?height=200&width=300`}
                        alt={`${
                          activeSpace === "event" ? "Event" : "Studio"
                        } Space View ${index + 2}`}
                        width={300}
                        height={200}
                        unoptimized
                        className="w-full h-48 object-cover transition-transform duration-500 group-hover:scale-110 rounded-2xl"
                        priority
                        rel="preload"
                      />
                    </motion.div>
                  ))}
                </div>
              </div>
            </motion.div>
          </motion.div>
        </AnimatePresence>

        {/* Space comparison */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
          transition={{ duration: 0.7, delay: 0.5 }}
          className="mt-12 md:mt-16 pt-10 border-t border-teal-100/70"
        >
          <h2
            className="text-3xl md:text-4xl font-normal text-center text-teal-900 mb-10"
            style={{ fontFamily: "DM Serif Text" }}
          >
            Compare Our Spaces
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-8">
            {/* Event Space Card */}
            <motion.div
              className="bg-white/80 border border-white/70 p-6 md:p-8 relative overflow-hidden group rounded-[28px] shadow-[0_18px_40px_rgba(15,23,42,0.08)]"
              whileHover={{ y: -10 }}
              transition={{ duration: 0.3 }}
            >
              <div className="absolute top-0 left-0 w-full h-1 bg-orange-400 rounded-t-2xl" />
              <h3 className="text-2xl font-semibold text-teal-900 mb-4">Event Space</h3>
              <p className="text-teal-900/70 mb-6">
                Perfect for seminars, workshops, and meetings up to 30 people.
              </p>
              <ul className="space-y-3 mb-8 text-teal-900/70">
                <li className="flex items-start gap-2">
                  <ChevronRight className="h-5 w-5 text-orange-400 flex-shrink-0 mt-0.5" />
                  <span>50m² main space + 20m² networking area</span>
                </li>
                <li className="flex items-start gap-2">
                  <ChevronRight className="h-5 w-5 text-orange-400 flex-shrink-0 mt-0.5" />
                  <span>Full A/V equipment included</span>
                </li>
                <li className="flex items-start gap-2">
                  <ChevronRight className="h-5 w-5 text-orange-400 flex-shrink-0 mt-0.5" />
                  <span>Catering options available</span>
                </li>
              </ul>
              <Link href="/contact">
                <button className="inline-flex items-center gap-2 rounded-full bg-orange-400 px-4 py-2 text-xs font-semibold uppercase tracking-[0.2em] text-white hover:bg-orange-500 transition-colors">
                  Get In Touch →
                </button>
              </Link>
            </motion.div>
            {/* Studio Space Card */}
            <motion.div
              className="bg-white/80 border border-white/70 p-6 md:p-8 relative overflow-hidden group rounded-[28px] shadow-[0_18px_40px_rgba(15,23,42,0.08)]"
              whileHover={{ y: -10 }}
              transition={{ duration: 0.3 }}
            >
              <div className="absolute top-0 left-0 w-full h-1 bg-teal-800 rounded-t-2xl" />
              <h3 className="text-2xl font-semibold text-teal-900 mb-4">Studio Space</h3>
              <p className="text-teal-900/70 mb-6">
                Professional photography studio with re-surfacable backdrop and
                lighting.
              </p>
              <ul className="space-y-3 mb-8 text-teal-900/70">
                <li className="flex items-start gap-2">
                  <ChevronRight className="h-5 w-5 text-teal-800 flex-shrink-0 mt-0.5" />
                  <span>10.4m² flooring + 11.6m² backdrop wall</span>
                </li>
                <li className="flex items-start gap-2">
                  <ChevronRight className="h-5 w-5 text-teal-800 flex-shrink-0 mt-0.5" />
                  <span>Hoist-able diffuser scrim lighting</span>
                </li>
                <li className="flex items-start gap-2">
                  <ChevronRight className="h-5 w-5 text-teal-800 flex-shrink-0 mt-0.5" />
                  <span>Equipment rental available</span>
                </li>
              </ul>
              <Link href="/contact">
                <button className="inline-flex items-center gap-2 rounded-full bg-teal-800 px-4 py-2 text-xs font-semibold uppercase tracking-[0.2em] text-white hover:bg-teal-900 transition-colors">
                  Get In Touch →
                </button>
              </Link>
            </motion.div>
          </div>
        </motion.div>
        </div>
      </div>

      {/* Video modal */}
      <AnimatePresence>
        {isVideoPlaying && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.3 }}
            className="fixed inset-0 bg-black/90 z-50 flex items-center justify-center p-8"
            onClick={() => setIsVideoPlaying(false)}
          >
            <motion.div
              initial={{ scale: 0.9, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.9, opacity: 0 }}
              transition={{ duration: 0.3 }}
              className="relative w-full max-w-4xl aspect-video bg-black rounded-2xl"
              onClick={(e) => e.stopPropagation()}
            >
              <div className="w-full h-full flex items-center justify-center text-white">
                <p>We are still cooking. Stay tuned!</p>
              </div>
              <button
                onClick={() => setIsVideoPlaying(false)}
                className="absolute top-4 right-4 w-10 h-10 rounded-full bg-transparent/20 backdrop-blur-sm flex items-center justify-center text-white hover:bg-white hover:text-black transition-colors"
              >
                ✕
              </button>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Image modal */}
      <AnimatePresence>
        {expandedImage !== null && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.3 }}
            className="fixed inset-0 bg-black/90 z-50 flex items-center justify-center p-8"
            onClick={() => setExpandedImage(null)}
          >
            <motion.div
              initial={{ scale: 0.9, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.9, opacity: 0 }}
              transition={{ duration: 0.3 }}
              className="relative max-w-5xl max-h-[80vh]"
              onClick={(e) => e.stopPropagation()}
            >
              <Image
                src={
                  currentSpace.images[expandedImage] ||
                  "/placeholder.svg?height=800&width=1200"
                }
                alt={`${
                  activeSpace === "event" ? "Event" : "Studio"
                } Space Expanded View`}
                width={1200}
                height={800}
                unoptimized
                className="max-w-full max-h-[80vh] object-contain rounded-2xl"
                priority
                rel="preload"
              />
              <button
                onClick={() => setExpandedImage(null)}
                className="absolute top-4 right-4 w-10 h-10 rounded-full bg-transparent/20 backdrop-blur-sm flex items-center justify-center text-white hover:bg-white hover:text-black transition-colors"
              >
                ✕
              </button>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
}
