"use client";
import FloatingShape from "../../ui/floating-shape";

export default function IntroHomeSection() {
  return (
    <section id="intro" className="relative min-h-screen overflow-hidden bg-black">
      {/* Video background */}
      <div className="absolute inset-0">
        <video
          className="h-full w-full object-cover"
          autoPlay
          muted
          loop
          playsInline
          preload="auto"
          poster="/origins-thumbnail.png"
        >
          <source src="/video/origins-showreel-2025.mp4" type="video/mp4" />
        </video>
        <div className="absolute inset-0 bg-gradient-to-b from-black/70 via-black/25 to-black/70" />
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_15%_20%,rgba(255,255,255,0.10),transparent_45%),radial-gradient(circle_at_85%_30%,rgba(255,170,90,0.18),transparent_50%)]" />
      </div>

      {/* Floating accents */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden">
        <FloatingShape
          delay={0}
          duration={14}
          className="top-10 left-10 md:w-48 md:h-48 w-28 h-28 rounded-full bg-orange-400/20 blur-3xl"
        />
        <FloatingShape
          delay={4}
          duration={18}
          className="bottom-20 right-12 md:w-56 md:h-56 w-32 h-32 rounded-full bg-white/10 blur-3xl"
        />
        <FloatingShape
          delay={8}
          duration={22}
          className="top-1/3 right-1/4 md:w-40 md:h-40 w-24 h-24 rounded-3xl bg-orange-300/20 blur-2xl"
        />
      </div>

      {/* Bottom fade into the lifestyle section */}
      <div className="absolute bottom-0 left-0 right-0 h-24 bg-gradient-to-t from-[#fff7f1] to-transparent" />
    </section>
  );
}
