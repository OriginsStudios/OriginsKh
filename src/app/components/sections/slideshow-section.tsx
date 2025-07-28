
"use client";
import { useCallback, useEffect, useRef, useState } from "react";
import Image from "next/image";

type SlideshowSectionProps = {
  images: Array<{
    src: string;
    alt?: string;
    className?: string;
    width?: number;
    height?: number;
  }>;
  repeatCount?: number; // How many times to repeat for infinite scroll effect
  scrollSpeed?: number; // Scroll speed multiplier
  containerClassName?: string;
  defaultImageWidth?: number; // Default width if individual image doesn't specify
  defaultImageHeight?: number; // Default height if individual image doesn't specify
  autoScrollSpeed?: number; // Auto scroll speed in pixels per frame
  autoScrollEnabled?: boolean; // Enable/disable auto scroll
};

const SlideshowSection = ({
  images,
  repeatCount = 3,
  scrollSpeed = 1.5,
  containerClassName = "",
  defaultImageWidth = 300,
  defaultImageHeight = 300,
  autoScrollSpeed = 1,
  autoScrollEnabled = true,
}: SlideshowSectionProps) => {
  const scrollRef = useRef<HTMLDivElement>(null);
  const animationRef = useRef<number | null>(null);
  const [isDragging, setIsDragging] = useState(false);
  const [startX, setStartX] = useState(0);
  const [scrollLeft, setScrollLeft] = useState(0);
  const [isHovered, setIsHovered] = useState(false);

  const tripledImages = [...Array(repeatCount)].flatMap(() => images);

  // Handle scroll boundaries for infinite effect
  const checkScrollBoundaries = () => {
    const container = scrollRef.current;
    if (!container) return;

    const third = container.scrollWidth / 3;

    if (container.scrollLeft <= 1) {
      container.scrollLeft = third + 1;
    } else if (container.scrollLeft >= third * 2 - 1) {
      container.scrollLeft = third - 1;
    }
  };

  // Auto scroll animation
const autoScroll = useCallback(() => {
  if (!scrollRef.current || isHovered || isDragging || !autoScrollEnabled) {
    animationRef.current = requestAnimationFrame(autoScroll);
    return;
  }

  scrollRef.current.scrollLeft += autoScrollSpeed;
  checkScrollBoundaries();
  animationRef.current = requestAnimationFrame(autoScroll);
}, [isHovered, isDragging, autoScrollEnabled, autoScrollSpeed]);


  // Drag-to-scroll logic
  const handleMouseDown = (e: React.MouseEvent<HTMLDivElement>) => {
    if (!scrollRef.current) return;

    setIsDragging(true);
    setStartX(e.pageX - scrollRef.current.offsetLeft);
    setScrollLeft(scrollRef.current.scrollLeft);
  };

  const handleMouseUp = () => {
    setIsDragging(false);
  };

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    if (!isDragging || !scrollRef.current) return;

    e.preventDefault();
    const x = e.pageX - scrollRef.current.offsetLeft;
    const walk = (x - startX) * scrollSpeed;
    scrollRef.current.scrollLeft = scrollLeft - walk;
  };

  // Wheel event handler
  const handleWheel = (e: React.WheelEvent<HTMLDivElement>) => {
    if (!scrollRef.current) return;

    e.preventDefault();
    scrollRef.current.scrollLeft += e.deltaY;
  };

  // Mouse enter/leave handlers for auto-scroll pause
  const handleMouseEnter = () => {
    setIsHovered(true);
    if (animationRef.current) {
      cancelAnimationFrame(animationRef.current);
    }
  };

  const handleMouseLeave = () => {
    setIsHovered(false);
    setIsDragging(false);
    if (autoScrollEnabled) {
      animationRef.current = requestAnimationFrame(autoScroll);
    }
  };

  useEffect(() => {
    const container = scrollRef.current;
    if (!container) return;

    // Initialize scroll at middle position
    container.scrollLeft = container.scrollWidth / 3;

    // Add scroll listener for boundary wrapping
    container.addEventListener("scroll", checkScrollBoundaries, { passive: true });

    return () => {
      container.removeEventListener("scroll", checkScrollBoundaries);
    };
  }, []);

  // Start auto scroll animation
  useEffect(() => {
    if (autoScrollEnabled) {
      animationRef.current = requestAnimationFrame(autoScroll);
    }

    return () => {
      if (animationRef.current) {
        cancelAnimationFrame(animationRef.current);
      }
    };
  }, [autoScrollEnabled, isHovered, isDragging, autoScroll]);

  return (
    <div className={`w-full ${containerClassName}`}>
      {/* Manual-infinite scrollable images */}
      <div
        ref={scrollRef}
        className="overflow-x-auto relative z-10 whitespace-nowrap space-x-6 flex items-center scrollbar-hide"
        style={{
          scrollBehavior: "auto",
          cursor: isDragging ? "grabbing" : "grab",
          WebkitOverflowScrolling: "touch",
        }}
        onScroll={checkScrollBoundaries}
        onMouseDown={handleMouseDown}
        onMouseUp={handleMouseUp}
        onMouseLeave={handleMouseLeave}
        onMouseEnter={handleMouseEnter}
        onMouseMove={handleMouseMove}
        onWheel={handleWheel}
      >
        {tripledImages.map((img, idx) => {
          const width = img.width ?? defaultImageWidth;
          const height = img.height ?? defaultImageHeight;
          
          return (
            <div
              key={idx}
              className="inline-block "
              style={{
                width,
                height,
                minWidth: `min(100vw - 2.5rem, ${width}px)`,
              }}
            >
              <Image
                src={img.src}
                alt={img.alt || `Slide ${idx}`}
                width={width}
                height={height}
                unoptimized
                priority
                rel="preload"
                className={`rounded-2xl shadow-lg w-full h-full object-cover ${img.className || ""}`}
              />
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default SlideshowSection;





