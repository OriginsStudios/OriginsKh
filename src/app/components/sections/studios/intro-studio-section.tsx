"use client";
import React from "react";
import SlideshowSection from "../slideshow-section";

type IntroStudiosSectionProps = Record<string, never>;
const IntroStudiosSection = React.forwardRef<
  HTMLElement,
  IntroStudiosSectionProps
>((props, ref) => {
  const images = [
    {
      src: "/custin03.png",
      alt: "First image",
      width: 340, // 85 * 4
      height: 260, // 65 * 4
    },
    {
      src: "/dog.png",
      alt: "Second image",
      width: 360, // 90 * 4
      height: 280, // 70 * 4
    },
    {
      src: "/DSC06992.png",
      alt: "Third image",
      width: 380, // 95 * 4
      height: 260, // 65 * 4
    },
    {
      src: "/DSC04366.jpg",
      alt: "Fourth image",
      width: 400, // 100 * 4
      height: 280, // 70 * 4
    },
    {
      src: "/custin08.png",
      alt: "Fifth image",
      width: 340, // 85 * 4
      height: 260, // 65 * 4
    },
    {
      src: "/exhib01.png",
      alt: "Sixth image",
      width: 356, // 89 * 4
      height: 276, // 69 * 4
    },
    {
      src: "/custin16.png",
      alt: "Seventh image",
      width: 280, // 70 * 4
      height: 360, // 90 * 4
    },
    {
      src: "/DSC06744.png",
      alt: "Eighth image",
      width: 260, // 65 * 4
      height: 340, // 85 * 4
    },
    {
      src: "/custin07.png",
      alt: "Ninth image",
      width: 420, // 105 * 4
      height: 300, // 75 * 4
    },
    {
      src: "/custin16.png",
      alt: "Tenth image",
      width: 360, // 90 * 4
      height: 280, // 70 * 4
    },
  ];

  return (
    <section
      ref={ref}
      id="intro"
      className="relative overflow-hidden px-4 sm:px-8 py-20 md:py-28"
    >
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute -top-24 left-10 h-56 w-56 rounded-full bg-teal-200/40 blur-3xl" />
        <div className="absolute top-10 right-16 h-40 w-40 rounded-full bg-orange-200/50 blur-3xl" />
        <div className="absolute bottom-0 right-10 h-64 w-64 rounded-full bg-orange-100/60 blur-3xl" />
      </div>

      <div className="relative w-full max-w-6xl mx-auto">
        <div className="rounded-[32px] border border-white/70 bg-white/70 backdrop-blur-xl px-6 py-10 md:px-10 md:py-12 shadow-[0_20px_60px_rgba(15,23,42,0.08)]">
          <div>
            <p className="text-xs uppercase tracking-[0.4em] text-teal-700">
              Studios
            </p>
            <h2
              className="mt-3 text-3xl md:text-5xl font-normal text-teal-900"
              style={{ fontFamily: "DM Serif Text" }}
            >
              We revive visions and bring brands’ aspirations to life.
            </h2>
            <p className="mt-3 max-w-2xl text-sm md:text-base text-teal-900/70">
              We unite creative vision, production excellence, and innovative concepts—turning bold ideas into memorable realities.
            </p>
          </div>

          <div className="mt-8 md:mt-10 -mx-6 md:-mx-10">
            <SlideshowSection
              images={images}
              repeatCount={3}
              scrollSpeed={2}
              containerClassName="py-4"
              defaultImageWidth={300}
              defaultImageHeight={200}
              autoScrollSpeed={1.5}
              autoScrollEnabled={true}
            />
          </div>

          <p className="mt-8 text-sm md:text-base text-teal-900/70">
            We empower brands to revive their dreams by uniting creative vision, production excellence, and innovative concepts—all under one roof. Through close collaboration, we guide our clients in making bold decisions, seizing opportunities, and crafting memorable experiences that resonate. Together, we transform ideas into powerful realities that elevate brands and captivate audiences.
          </p>
        </div>
      </div>
    </section>
  );
});
IntroStudiosSection.displayName = "IntroStudiosSection";
export default IntroStudiosSection;
