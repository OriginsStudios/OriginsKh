"use client";
import Link from "next/link";
import { ArrowRight } from "lucide-react";
import VideoSection from "../video-section";
import LogoOriginsSection from "../logo-origins-section";
import FloatingShape from "../../ui/floating-shape";

export default function IntroHomeSection() {
  
  return (
    <section id="intro" className="min-h-screen bg-transparent m-0 py-0">
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

      <LogoOriginsSection />

      <VideoSection
        videoSrc="/video/origins-showreel-2025.mp4"
        thumbnailSrc={"/origins-thumbnail.png"}
        id=""
        showControls={true}
        autoPlay={true}
        muted={true}
        loop={true}
        playsInline={true}
      />

      <div className="text-center mb-4 px-4 sm:px-8">
        <h2
          className="text-2xl md:text-4xl  font-normal mb-6 text-black"
          style={{ fontFamily: "DM Serif Text" }}
        >
          We are a creative agency
          <br />
          helping brands revive their dreams
        </h2>
      </div>

      <div className="text-center px-4 sm:px-8">
        <Link
          href="/portfolio"
          className="bg-orange-400 text-white rounded-full px-3 py-1 md:px-6 md:py-3  font-light inline-flex items-center gap-3 hover:bg-orange-400 transition-colors duration-300"
        >
          View All Work
          <ArrowRight size={18} />
        </Link>
      </div>
    </section>
  );
}
