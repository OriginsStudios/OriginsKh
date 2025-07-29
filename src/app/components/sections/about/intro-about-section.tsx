"use client";
import React from "react";
import VideoSection from "../video-section";
import FloatingShape from "../../ui/floating-shape";

const IntroAboutSection = React.forwardRef<HTMLElement>((props, ref) => {
  return (
    <section ref={ref} id="" className="min-h-screen bg-white">
      <div className="w-full flex justify-center items-center mb-8"></div>

      {/* Background shapes */}
      <div className="fixed inset-0 pointer-events-none overflow-hidden">
        <FloatingShape
          delay={0}
          duration={12}
          className="top-1/4 left-1/4 md:w-30 md:h-30 w-15 h-15 rounded-full bg-orange-400"
        />
        <FloatingShape
          delay={4}
          duration={18}
          className="top-3/4 right-1/4 md:w-32 md:h-32 w-12 h-12 rounded-full bg-gray-400"
        />
        <FloatingShape
          delay={8}
          duration={20}
          className="top-1/2 right-1/3 md:w-20 md:h-20 w-10 h-10 rounded-2xl bg-orange-400"
        />

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

      {/* Text section with responsive padding */}
      <div className="text-center mb-4 px-8 sm:px-8 py-20 sm:py-48">
        <h2
          className="text-3xl md:text-7xl font-serif mb-6 text-black"
          style={{ fontFamily: "DM Serif Text" }}
        >
          Every dream deserves to be told with O&apos;riginality,
          O&apos;thenticity, and O&apos;wesomeness.
        </h2>
      </div>

      {/* Video section - full width (no padding) */}
      <VideoSection
        videoSrc="/video/ORS_UNCERTAINTIMESv8.mp4"
        thumbnailSrc={"/ORS_UNCERTAINTYv1080p_thumbnail.jpg"}
        id=""
        showControls={true}
        autoPlay={false}
        muted={false}
        loop={false}
      />

      {/* Text section with responsive padding */}
      <div className="bg-white px-8 sm:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
          <h3 className="text-xl sm:text-4xl font-semi-bold text-black leading-tight text-justify">
            Meet our dream team—turning bold ideas into inspiring reality.
          </h3>
          <p className="text-base sm:text-lg text-black leading-relaxed text-justify">
            A creative house fueled by bold vision and the power of dreams. We
            believe every idea starts as a spark of imagination—a dream waiting
            to be shaped. Through collaboration, we bring these dreams to life,
            crafting stories and ideas that connect deeply and inspire
            transformation across borders and beyond expectations.{" "}
          </p>
        </div>
      </div>
    </section>
  );
});

IntroAboutSection.displayName = "IntroAboutSection";

export default IntroAboutSection;
