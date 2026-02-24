"use client";
import React from "react";
import VideoSection from "../video-section";
import FloatingShape from "../../ui/floating-shape";

interface IntroAboutSectionProps {
  id?: string;
}

const IntroAboutSection = React.forwardRef<HTMLElement, IntroAboutSectionProps>(
  ({ id }, ref) => {
    return (
      <section
        ref={ref}
        id={id}
        className="min-h-screen relative overflow-hidden transition-all duration-700 ease-in-out"
      >
        {/* Lifestyle background accents */}
        <div className="absolute inset-0 pointer-events-none overflow-hidden">
          <FloatingShape
            delay={0}
            duration={12}
            className="top-16 left-10 md:w-44 md:h-44 w-28 h-28 rounded-full bg-amber-200/60 blur-2xl"
          />
          <FloatingShape
            delay={4}
            duration={18}
            className="top-2/3 right-10 md:w-48 md:h-48 w-28 h-28 rounded-full bg-rose-200/50 blur-2xl"
          />
          <FloatingShape
            delay={8}
            duration={20}
            className="top-1/3 right-1/4 md:w-28 md:h-28 w-20 h-20 rounded-2xl bg-emerald-200/40 blur-2xl"
          />
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_top,_rgba(255,255,255,0.7),_transparent_65%)] opacity-80" />
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_20%_70%,_rgba(245,233,218,0.7),_transparent_55%)]" />
        </div>

        {/* Text section with responsive padding */}
        <div className="text-center mb-10 px-8 sm:px-10 pt-24 sm:pt-40 pb-16">
          <div className="max-w-6xl mx-auto">
          <h2
              className="text-3xl md:text-7xl font-serif font-semibold tracking-tight leading-tight text-stone-900"
            style={{ fontFamily: "DM Serif Text" }}
          >
            Every dream deserves to be told with{" "}
              <span className="text-amber-700 italic">O&apos;riginality</span>,{" "}
              <span className="text-amber-700 italic">O&apos;thenticity</span>,
              and <span className="text-amber-700 italic">O&apos;wesomeness</span>.
          </h2>
          </div>
        </div>

        {/* Video section */}
        <div className="px-6 sm:px-10 pb-10">
          <div className="mx-auto max-w-6xl relative">
            <div className="absolute -inset-1 rounded-[34px] bg-gradient-to-r from-amber-200/70 via-white/60 to-teal-200/60 blur-2xl opacity-70" />
            <div className="relative rounded-[28px] overflow-hidden ring-1 ring-stone-200/70 shadow-[0_24px_70px_rgba(24,24,24,0.16)] bg-white/70 backdrop-blur">
              <VideoSection
                videoSrc="/video/ORS_UNCERTAINTIMESv8.mp4"
                thumbnailSrc={"/ORS_UNCERTAINTYv1080p_thumbnail.jpg"}
                id=""
                showControls={true}
                autoPlay={false}
                muted={false}
                loop={false}
                showTopSpacer={false}
                marginBottom="mb-0"
              />
            </div>
          </div>
        </div>

        {/* Text section with responsive padding */}
        <div className="px-8 sm:px-10 pb-16">
          <div className="max-w-6xl mx-auto rounded-[32px] bg-white/70 ring-1 ring-stone-200/70 shadow-[0_18px_50px_rgba(24,24,24,0.1)] backdrop-blur px-6 py-8 sm:px-10 sm:py-12">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
              <h3 className="text-xl sm:text-4xl font-semibold text-stone-900 leading-tight">
                Meet our dream team—turning bold ideas into inspiring reality.
              </h3>
              <p className="text-base sm:text-lg text-stone-600 leading-relaxed">
                A creative house fueled by bold vision and the power of dreams. We
                believe every idea starts as a spark of imagination—a dream
                waiting to be shaped. Through collaboration, we bring these dreams
                to life, crafting stories and ideas that connect deeply and
                inspire transformation across borders and beyond expectations.
              </p>
            </div>
          </div>
        </div>
      </section>
    );
  }
);

IntroAboutSection.displayName = "IntroAboutSection";

export default IntroAboutSection;
