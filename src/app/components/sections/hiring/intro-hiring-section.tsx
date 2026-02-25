"use client";
import React from "react";
import Link from "next/link";
import { motion } from "framer-motion";
import FloatingShape from "../../ui/floating-shape";
interface IntroHiringSectionProps {
  textColor: string;
}

const IntroHiringSection: React.FC<IntroHiringSectionProps> = ({
  textColor,
}) => {
  return (
    <section
      id="intro"
      className="relative min-h-screen overflow-hidden bg-transparent"
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
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_top,_rgba(255,255,255,0.75),_transparent_65%)] opacity-80" />
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_20%_70%,_rgba(245,233,218,0.7),_transparent_55%)]" />
      </div>

      <div className="relative px-6 sm:px-10 pt-24 sm:pt-40 pb-14">
        {/* Hero */}
        <div className="max-w-5xl mx-auto text-center">
          <p
            className="text-xs sm:text-sm uppercase tracking-[0.5em] text-stone-600"
            style={{ fontFamily: "Inter, sans-serif" }}
          >
            Origins Studios / Hiring
          </p>
          <h2
            className="mt-6 text-3xl sm:text-5xl md:text-7xl font-semibold tracking-tight leading-tight text-stone-900"
            style={{ fontFamily: "DM Serif Text" }}
          >
            Build a life where your ideas become the everyday.
          </h2>
          <p className="mt-6 text-base sm:text-lg text-stone-600 leading-relaxed">
            We’re a studio of makers, storytellers, and dreamers. If you love
            crafting culture-forward work with people who care, you’ll fit
            right in.
          </p>
          <div className="mt-10 flex flex-wrap items-center justify-center gap-4">
            <Link href="#findUrJob">
              <button className="flex items-center px-6 py-3 bg-stone-900 text-white rounded-full font-semibold hover:bg-amber-600 transition-colors text-sm sm:text-base">
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
            <Link href="/about">
              <button className="flex items-center px-6 py-3 bg-white/80 text-stone-900 rounded-full font-semibold hover:bg-white transition-colors text-sm sm:text-base ring-1 ring-stone-200">
                Our culture
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

        {/* Lifestyle card */}
        <div className="mt-16 max-w-6xl mx-auto rounded-[32px] bg-white/70 ring-1 ring-stone-200/70 shadow-[0_18px_50px_rgba(24,24,24,0.1)] backdrop-blur px-6 py-8 sm:px-10 sm:py-12">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
            <h3 className="text-xl sm:text-3xl font-semibold text-stone-900 leading-tight">
              Dream wildly. Design fearlessly. We build brands and worlds with
              craft, care, and a lot of heart.
            </h3>
            <p className="text-base sm:text-lg text-stone-600 leading-relaxed">
              Life at Origins is fast-moving and deeply human. We collaborate in
              small teams, celebrate fresh ideas, and keep curiosity at the
              center of every project. Bring your talent, your taste, and your
              weirdest references.
            </p>
          </div>
          <div className="mt-8 flex flex-wrap gap-3">
            {[
              "Creative freedom",
              "Growth mindset",
              "Flexible rhythm",
              "Real collaboration",
            ].map((item) => (
              <span
                key={item}
                className="px-4 py-2 rounded-full bg-amber-100/70 text-stone-700 text-sm font-medium"
              >
                {item}
              </span>
            ))}
          </div>
          <div className="mt-8 flex flex-wrap gap-4">
            <Link href="/about">
              <button className="flex items-center px-6 py-3 bg-stone-900 text-white rounded-full font-semibold hover:bg-amber-600 transition-colors text-sm sm:text-base">
                About us
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
              <button className="flex items-center px-6 py-3 bg-white/80 text-stone-900 rounded-full font-semibold hover:bg-white transition-colors text-sm sm:text-base ring-1 ring-stone-200">
                Our work
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
    </section>
  );
};

// Wrap component with forwardRef while keeping internal logic clean
const ForwardedIntroHiringSection = React.forwardRef<
  HTMLElement,
  IntroHiringSectionProps
>((props) => {
  return <IntroHiringSection {...props} />;
});
ForwardedIntroHiringSection.displayName = "IntroHiringSection";

export default ForwardedIntroHiringSection;
