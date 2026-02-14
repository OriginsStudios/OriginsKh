"use client";

import { useEffect, useMemo, useRef, useState } from "react";
import Image from "next/image";
import { ImageBlock, VideoBlock } from "../../../data/blogs";

type MediaSlide = ImageBlock | VideoBlock;

interface BlogMediaSlideshowProps {
  slides: MediaSlide[];
  containerClassName?: string;
}

export default function BlogMediaSlideshow({
  slides,
  containerClassName,
}: BlogMediaSlideshowProps) {
  const [activeIndex, setActiveIndex] = useState(0);
  const videoRefs = useRef<Array<HTMLVideoElement | null>>([]);

  const totalSlides = slides.length;
  if (totalSlides === 0) {
    return null;
  }
  const safeIndex = ((activeIndex % totalSlides) + totalSlides) % totalSlides;

  const activeCaption = useMemo(() => {
    if (!slides[safeIndex]) return null;
    return slides[safeIndex].caption;
  }, [slides, safeIndex]);

  useEffect(() => {
    setActiveIndex(0);
  }, [totalSlides]);

  useEffect(() => {
    videoRefs.current.forEach((video, index) => {
      if (!video || index === safeIndex) return;
      video.pause();
      video.currentTime = 0;
    });
  }, [safeIndex]);

  const goPrev = () => {
    setActiveIndex((prev) => (prev - 1 + totalSlides) % totalSlides);
  };

  const goNext = () => {
    setActiveIndex((prev) => (prev + 1) % totalSlides);
  };

  const goTo = (index: number) => {
    setActiveIndex(index);
  };

  return (
    <div className="my-8">
      <div
        className={`relative w-full ${
          containerClassName || "aspect-video"
        } rounded-lg overflow-hidden shadow-lg bg-black`}
        tabIndex={0}
        onKeyDown={(event) => {
          if (totalSlides <= 1) return;
          if (event.key === "ArrowLeft") goPrev();
          if (event.key === "ArrowRight") goNext();
        }}
      >
        {slides.map((slide, index) => {
          const isActive = index === safeIndex;

          return (
            <div
              key={`${slide.type}-${index}`}
              className={`absolute inset-0 transition-opacity duration-500 ${
                isActive ? "opacity-100" : "opacity-0 pointer-events-none"
              }`}
              aria-hidden={!isActive}
            >
              {slide.type === "image" ? (
                <Image
                  src={slide.src}
                  alt={slide.alt}
                  fill
                  sizes="(max-width: 768px) 100vw, 800px"
                  className="object-cover"
                />
              ) : (
                <video
                  ref={(el) => {
                    videoRefs.current[index] = el;
                  }}
                  controls
                  poster={slide.poster}
                  preload="metadata"
                  playsInline
                  className="w-full h-full object-cover"
                >
                  <source src={slide.src} type="video/mp4" />
                  Your browser does not support the video tag.
                </video>
              )}
            </div>
          );
        })}

        {totalSlides > 1 && (
          <>
            <button
              type="button"
              onClick={goPrev}
              aria-label="Previous slide"
              className="absolute left-3 top-1/2 -translate-y-1/2 bg-white/80 hover:bg-white text-gray-900 rounded-full w-9 h-9 flex items-center justify-center shadow-md transition"
            >
              <span className="text-lg leading-none">‹</span>
            </button>
            <button
              type="button"
              onClick={goNext}
              aria-label="Next slide"
              className="absolute right-3 top-1/2 -translate-y-1/2 bg-white/80 hover:bg-white text-gray-900 rounded-full w-9 h-9 flex items-center justify-center shadow-md transition"
            >
              <span className="text-lg leading-none">›</span>
            </button>
          </>
        )}
      </div>

      {activeCaption && (
        <p className="text-sm text-gray-600 mt-2 text-center italic">
          {activeCaption}
        </p>
      )}

      {totalSlides > 1 && (
        <div className="flex items-center justify-center gap-2 mt-4">
          {slides.map((_, index) => (
            <button
              key={`dot-${index}`}
              type="button"
              onClick={() => goTo(index)}
              aria-label={`Go to slide ${index + 1}`}
              className={`h-2.5 w-2.5 rounded-full transition ${
                index === safeIndex ? "bg-teal-600" : "bg-gray-300"
              }`}
            />
          ))}
        </div>
      )}
    </div>
  );
}
