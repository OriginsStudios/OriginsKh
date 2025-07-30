"use client";
import VideoSection from "../video-section";
import React from "react";
import Link from "next/link";
import { motion } from "framer-motion";
import FloatingShape from "../../ui/floating-shape";

const IntroHiringSection: React.FC = () => {
  return (
    <section id="intro" className="min-h-screen bg-transparent ">
      {/* Section with px-8 */}
      <div className="px-8 w-full">
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
        <div className="text-center mb-4 px-6 md:px-12 md:pt-48 pt-24">
          <h2
            className="text-4xl md:text-8xl font-serif mb-6 text-black"
            style={{ fontFamily: "DM Serif Text" }}
          >
            Ready to turn dreams into reality?
            <br />
            Join us and be part of the team!
          </h2>
        </div>

        <div className="text-center mb-4 pb-24 w-full">
          <div className="flex items-center justify-center">
            <p
              className="text-xl md:text-3xl font-light text-black mr-4"
              style={{ fontFamily: "Inter, sans-serif" }}
            >
              Let’s get started.
            </p>
            <Link href="#findUrJob">
              <button className="flex items-center md:px-6 md:py-3 px-3 py-2 bg-orange-400 text-white rounded-full font-bold hover:bg-black transition-colors text-sm md:text-base">
                View open roles
                <motion.div
                  className="ml-3"
                  animate={{ x: [0, 6, 0] }}
                  transition={{
                    repeat: Number.POSITIVE_INFINITY,
                    duration: 1.5,
                  }}
                >
                  →
                </motion.div>
              </button>
            </Link>
          </div>
        </div>
      </div>

      {/* VideoSection — No padding here (as requested) */}
      <VideoSection
        videoSrc="/video/origins-showreel-2025.mp4"
        thumbnailSrc={"/origins-thumbnail.png"}
        id="intro"
        showControls={true}
        autoPlay={false}
        muted={false}
        loop={false}
      />

      {/* Section with px-8 */}
      <div className="bg-white py-8 pb-10 md:py-16 md:pb-12  w-full px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 w-full">
          <h3 className="text-xl sm:text-4xl font-semi-bold text-black leading-tight text-justify">
            Dream wildly. Design fearlessly. Join Origins Studios where bold
            visions ignite and magic happens.{" "}
          </h3>
          <div className="text-l md:text-lg text-black leading-relaxed md:pt-[25%]">
            <p className="text-base sm:text-xl text-black leading-relaxed text-justify">
              Ready to turn your wild ideas into reality (and maybe a little bit
              of magic)? At Origins Studios, we mix bold creativity, slick
              production, and fresh concepts all under one roof kind of like a
              creative smoothie, but way tastier. We’re hunting for curious,
              fearless folks who don’t mind getting their hands a little
              creative and love making stuff that wows. If you’re ready to roll
              up your sleeves, have some fun, and maybe save the world one idea
              at a time, come join the party. Your next big adventure (and
              plenty of coffee) awaits!
            </p>
            <div className="flex justify-start space-x-4 mt-8 w-full">
              <Link href="/about">
                <button className="flex items-center md:px-6 md:py-3 px-3 py-2 bg-black text-white rounded-full font-bold hover:bg-orange-400 transition-colors text-sm md:text-base">
                  About Us
                  <motion.div
                    className="ml-3"
                    animate={{ x: [0, 6, 0] }}
                    transition={{
                      repeat: Number.POSITIVE_INFINITY,
                      duration: 1.5,
                    }}
                  >
                    →
                  </motion.div>
                </button>
              </Link>
              <Link href="/portfolio">
                <button className="flex items-center md:px-6 md:py-3 px-3 py-2 bg-orange-400 text-white rounded-full font-bold hover:bg-black transition-colors text-sm md:text-base">
                  Our Work
                  <motion.div
                    className="ml-3"
                    animate={{ x: [0, 6, 0] }}
                    transition={{
                      repeat: Number.POSITIVE_INFINITY,
                      duration: 1.5,
                    }}
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
};

// Wrap component with forwardRef while keeping internal logic clean
const ForwardedIntroHiringSection = React.forwardRef<HTMLElement>((props) => {
  return <IntroHiringSection {...props} />;
});
ForwardedIntroHiringSection.displayName = "IntroHiringSection";

export default ForwardedIntroHiringSection;
