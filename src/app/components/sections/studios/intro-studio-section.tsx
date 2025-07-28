
"use client";
import React from "react";
import SlideshowSection from "../slideshow-section";
import FloatingShape from "../../ui/floating-shape";

type IntroStudiosSectionProps = Record<string, never>;
const IntroStudiosSection = React.forwardRef<HTMLElement, IntroStudiosSectionProps>((props, ref) => {

const images = [
    {
      src: "/custin03.png",
      alt: "First image",
      width: 340,  // 85 * 4
      height: 260  // 65 * 4
    },
    {
      src: "/dog.png",
      alt: "Second image",
      width: 360,  // 90 * 4
      height: 280  // 70 * 4
    },
    {
      src: "/DSC06992.png",
      alt: "Third image",
      width: 380,  // 95 * 4
      height: 260  // 65 * 4
    },
    {
      src: "/DSC04366.jpg",
      alt: "Fourth image",
      width: 400,  // 100 * 4
      height: 280  // 70 * 4
    },
    {
      src: "/custin08.png",
      alt: "Fifth image",
      width: 340,  // 85 * 4
      height: 260  // 65 * 4
    },
    {
      src: "/exhib01.png",
      alt: "Sixth image",
      width: 356,  // 89 * 4
      height: 276  // 69 * 4
    },
    {
      src: "/custin16.png",
      alt: "Seventh image",
      width: 280,  // 70 * 4
      height: 360  // 90 * 4
    },
    {
      src: "/DSC06744.png",
      alt: "Eighth image",
      width: 260,  // 65 * 4
      height: 340  // 85 * 4
    },
    {
      src: "/custin07.png",
      alt: "Ninth image",
      width: 420,  // 105 * 4
      height: 300  // 75 * 4
    },
    {
      src: "/custin16.png",
      alt: "Tenth image",
      width: 360,  // 90 * 4
      height: 280  // 70 * 4
    }
];

  return (
    <section
      ref={ref}
      id="intro"
      className="min-h-screen bg-transparent flex flex-col justify-center items-center"
    >
      <div className="text-center mb-4 px-8 py-48">

        <h2
          className="text-3xl md:text-7xl font-serif mb-6 text-black"
          style={{ fontFamily: "DM Serif Text" }}
        >
          We revive visions and bring 
          <br />
          brands’ aspirations to life.
        </h2>
      </div>
                                      {/* Background shapes */}
              {/* Background shapes */}
      <div className="fixed inset-0 pointer-events-none overflow-hidden">
        <FloatingShape delay={0} duration={12} className="top-1/4 left-1/4 md:w-30 md:h-30 w-15 h-15 rounded-full bg-orange-400" />
        <FloatingShape delay={4} duration={18} className="top-3/4 right-1/4 md:w-32 md:h-32 w-12 h-12 rounded-full bg-gray-400" />
        <FloatingShape delay={8} duration={20} className="top-1/2 right-1/3 md:w-20 md:h-20 w-10 h-10 rounded-2xl bg-orange-400" />

        <div className="absolute inset-0 opacity-5">
          <div
            className="w-full h-full"
            style={{
              backgroundImage: `
                linear-gradient(rgba(0,0,0,0.1) 1px, transparent 1px),
                linear-gradient(90deg, rgba(0,0,0,0.1) 1px, transparent 1px)
              `,
              backgroundSize: "50px 50px",
            }}
          />
        </div>
      </div>
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
      <div className="w-full px-12 md:px-24 pt-48">
          <div className="mx-auto w-full">
              <div className="flex flex-col md:flex-row items-center justify-between gap-8 md:gap-12">
                  <div className="w-full">
                      <h3 className="text-2xl md:text-3xl text-black mb-8 text-justify">
                          We empower brands to revive their dreams by uniting creative vision, production excellence, 
                          and innovative concepts—all under one roof. Through close collaboration, we guide our clients 
                          in making bold decisions, seizing opportunities, and crafting memorable experiences that resonate. 
                          Together, we transform ideas into powerful realities that elevate brands and captivate audiences.
                      </h3>
                  </div>
              </div>
          </div>
      </div>
    </section>
  );
});
IntroStudiosSection.displayName = "IntroStudiosSection";
export default IntroStudiosSection;





