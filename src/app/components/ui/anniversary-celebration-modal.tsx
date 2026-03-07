"use client";

import { useEffect, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { PartyPopper } from "lucide-react";

type RainPopper = {
  id: number;
  left: number;
  delay: number;
  duration: number;
  size: number;
  color: string;
  drift: number;
  rotateStart: number;
  rotateEnd: number;
};

type BoomPopper = {
  id: number;
  x: number;
  y: number;
  delay: number;
  duration: number;
  size: number;
  color: string;
  rotate: number;
};

const COLORS = [
  "#f59e0b",
  "#fb923c",
  "#fbbf24",
  "#14b8a6",
  "#0d9488",
  "#fef3c7",
];

const rainPoppers: RainPopper[] = Array.from({ length: 170 }, (_, index) => ({
  id: index,
  left: (index * 17) % 100,
  delay: (index % 48) * 0.07,
  duration: 2.3 + (index % 11) * 0.2,
  size: 18 + (index % 4) * 4,
  color: COLORS[index % COLORS.length],
  drift: ((index % 9) - 4) * 20,
  rotateStart: -45 + (index % 8) * 12,
  rotateEnd: 280 + (index % 7) * 35,
}));

const boomPoppers: BoomPopper[] = Array.from({ length: 40 }, (_, index) => ({
  id: index,
  x: -270 + (index % 20) * 28,
  y: 80 + (index % 10) * 22,
  delay: (index % 15) * 0.025,
  duration: 0.85 + (index % 6) * 0.1,
  size: 14 + (index % 4) * 4,
  color: COLORS[index % COLORS.length],
  rotate: -100 + (index % 10) * 20,
}));

export default function AnniversaryCelebrationModal() {
  const [isOpen, setIsOpen] = useState(true);
  const [showCelebration, setShowCelebration] = useState(true);

  useEffect(() => {
    // Always show on fresh load/reload.
    setIsOpen(true);
    setShowCelebration(true);
  }, []);

  useEffect(() => {
    const html = document.documentElement;
    const body = document.body;
    const previousHtmlOverflow = html.style.overflow;
    const previousBodyOverflow = body.style.overflow;
    const previousHtmlTouchAction = html.style.touchAction;
    const previousBodyTouchAction = body.style.touchAction;

    if (isOpen) {
      html.style.overflow = "hidden";
      body.style.overflow = "hidden";
      html.style.touchAction = "none";
      body.style.touchAction = "none";
    }

    return () => {
      html.style.overflow = previousHtmlOverflow;
      body.style.overflow = previousBodyOverflow;
      html.style.touchAction = previousHtmlTouchAction;
      body.style.touchAction = previousBodyTouchAction;
    };
  }, [isOpen]);

  useEffect(() => {
    if (!isOpen) return;

    const timer = window.setTimeout(() => {
      setShowCelebration(false);
    }, 4300);

    return () => {
      window.clearTimeout(timer);
    };
  }, [isOpen]);

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-[120]">
      <motion.div
        className="absolute inset-0 z-[120] bg-transparent"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.3 }}
        onClick={() => setIsOpen(false)}
      />

      <AnimatePresence>
        {showCelebration && (
          <motion.div
            className="pointer-events-none absolute inset-0 z-[123] overflow-hidden"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.25 }}
          >
            <div className="absolute left-1/2 top-0 -translate-x-1/2">
              <motion.div
                className="h-36 w-36 rounded-full bg-orange-300/30"
                initial={{ opacity: 0, scale: 0.15 }}
                animate={{ opacity: [0, 1, 0], scale: [0.15, 1.25, 1.8] }}
                transition={{ duration: 1.1, ease: "easeOut" }}
              />

              {boomPoppers.map((piece) => (
                <motion.span
                  key={piece.id}
                  className="absolute left-1/2 top-1/2"
                  style={{ color: piece.color }}
                  initial={{
                    x: 0,
                    y: 0,
                    opacity: 0,
                    rotate: piece.rotate - 30,
                    scale: 0.25,
                  }}
                  animate={{
                    x: piece.x,
                    y: piece.y,
                    opacity: [0, 1, 0],
                    rotate: piece.rotate + 120,
                    scale: [0.25, 1, 0.7],
                  }}
                  transition={{
                    delay: piece.delay,
                    duration: piece.duration,
                    ease: "easeOut",
                  }}
                >
                  <PartyPopper
                    style={{ width: piece.size, height: piece.size }}
                    className="drop-shadow-[0_8px_18px_rgba(15,23,42,0.3)]"
                  />
                </motion.span>
              ))}
            </div>

            {rainPoppers.map((piece) => (
              <motion.span
                key={piece.id}
                className="absolute top-[-18vh]"
                style={{ left: `${piece.left}%`, color: piece.color }}
                initial={{
                  y: 0,
                  x: 0,
                  opacity: 0,
                  rotate: piece.rotateStart,
                  scale: 0.7,
                }}
                animate={{
                  y: "124vh",
                  x: piece.drift,
                  opacity: [0, 1, 1, 0],
                  rotate: piece.rotateEnd,
                  scale: [0.7, 1, 1, 0.75],
                }}
                transition={{
                  delay: piece.delay,
                  duration: piece.duration,
                  ease: "easeOut",
                  repeat: 1,
                  repeatDelay: 0.15,
                }}
              >
                <PartyPopper
                  style={{ width: piece.size, height: piece.size }}
                  className="drop-shadow-[0_8px_14px_rgba(15,23,42,0.28)]"
                />
              </motion.span>
            ))}
          </motion.div>
        )}
      </AnimatePresence>

      <div className="fixed inset-0 z-[121] flex items-center justify-center px-4 py-8">
        <motion.div
          className="relative w-full max-w-4xl text-[#141414]"
          initial={{ opacity: 0, y: 34, scale: 0.95 }}
          animate={{ opacity: 1, y: 0, scale: 1 }}
          transition={{ duration: 0.45, ease: "easeOut", delay: 0.08 }}
          onClick={(event) => event.stopPropagation()}
        >
          <div className="px-5 pb-8 pt-10 md:px-12 md:pb-10 md:pt-12">
            <div className="mt-8 flex flex-col items-center gap-7">
              <div className="relative mx-auto flex w-full max-w-[360px] items-center justify-center">
                <span className="absolute -left-2 top-6 rotate-[-8deg] rounded-full bg-[#111827] px-4 py-1.5 text-xs font-semibold tracking-[0.2em] text-[#f7b32b] shadow-[0_8px_18px_rgba(15,23,42,0.25)] md:-left-10 md:text-sm">
                  03.07.26
                </span>

                <div className="relative w-[250px] pt-8 md:w-[285px]">
                  <div className="absolute left-4 top-10 h-[188px] w-[210px] -rotate-[4deg] rounded-[2rem] border-2 border-amber-300/75" />
                  <div className="absolute right-3 top-7 h-[190px] w-[192px] rotate-[5deg] rounded-[2rem] border-2 border-teal-400/45" />

                  <span className="relative z-10 block bg-gradient-to-b from-[#fde68a] via-[#f59e0b] to-[#ea580c] bg-clip-text text-center text-[200px] font-black leading-none text-transparent [text-shadow:0_14px_30px_rgba(15,23,42,0.28)] [-webkit-text-stroke:2px_rgba(17,24,39,0.14)] md:text-[230px]">
                    1
                  </span>
                  <span className="absolute left-1/2 top-8 z-10 translate-x-[58px] bg-gradient-to-b from-[#fde68a] to-[#ea580c] bg-clip-text text-4xl font-extrabold text-transparent [text-shadow:0_10px_22px_rgba(15,23,42,0.26)] [-webkit-text-stroke:1.2px_rgba(17,24,39,0.14)] md:translate-x-[68px] md:text-5xl">
                    ST
                  </span>
                  <span className="absolute left-1/2 top-[58%] z-10 -translate-x-1/2 -translate-y-1/2 -rotate-[7deg] bg-[#151515] px-4 py-1 text-xs font-bold tracking-[0.16em] text-[#f7b32b] md:text-sm">
                    ANNIVERSARY
                  </span>
                </div>
              </div>

              <div className="max-w-2xl space-y-4 rounded-2xl bg-[linear-gradient(130deg,rgba(17,24,39,0.9)_0%,rgba(15,118,110,0.8)_55%,rgba(249,115,22,0.78)_100%)] px-5 py-5 text-center text-sm leading-relaxed text-white shadow-[0_18px_34px_-20px_rgba(15,23,42,0.5)] md:px-8 md:py-6 md:text-lg md:leading-[1.45]">
                <p>One year ago, Origins Studio began with a vision to create and grow.</p>
                <p>Thank you for being part of our journey. This is only the beginning.</p>
              </div>

              <div className="flex w-full max-w-2xl items-center justify-between gap-4">
                <button
                  onClick={() => setIsOpen(false)}
                  className="rounded-full bg-[#111827] px-6 py-2.5 text-sm font-semibold tracking-[0.12em] text-white shadow-[0_14px_30px_-18px_rgba(15,23,42,0.65)] transition hover:scale-[1.02] md:text-base"
                  aria-label="Close anniversary modal"
                >
                  CLOSE
                </button>
                <a
                  href="https://t.me/originskh"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="rounded-full bg-[linear-gradient(120deg,#0f766e_0%,#14b8a6_55%,#f59e0b_100%)] px-6 py-2.5 text-sm font-semibold tracking-[0.12em] text-white shadow-[0_14px_30px_-18px_rgba(15,23,42,0.65)] transition hover:scale-[1.02] md:text-base"
                  aria-label="Send gift on Telegram"
                >
                  SEND GIFT
                </a>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </div>
  );
}
