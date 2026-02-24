"use client";

import { useRef, forwardRef, useState, useEffect } from "react";
import { motion } from "framer-motion";
import { cn } from "../../utils/utils";
import ButtonSection from "../button-section";
import Image from "next/image";

type TimelineItem = {
  years: string;
  title: string;
  description: string;
  image: string;
  highlight: boolean;
};

const timelineData: TimelineItem[] = [
  {
    years: "2017-2018",
    title: "Exploration Begins",
    description:
      "Our creative journey began in Singapore's vibrant ecosystem. Expanded collaborations across Southeast Asia and Australia",
    image: "/pic-2017-2018.jpeg",
    highlight: false,
  },
  {
    years: "2019",
    title: "Creative Consultation Starts",
    description:
      "Launched creative consultation services in Cambodia. Developed innovative solutions for emerging markets",
    image: "/pic2019.png",
    highlight: true,
  },
  {
    years: "2020-2021",
    title: "Adapting Through Change",
    description:
      "Helped brands adapt during the pandemic with digital transformation. Pioneered remote creative collaboration frameworks",
    image: "/pic2020.jpg",
    highlight: false,
  },
  {
    years: "2022-2024",
    title: "Expanding Horizons",
    description:
      "Expanded to full-service production and concept development. Global projects across 5 continents with diverse clients",
    image: "/pic2025.jpg",
    highlight: true,
  },
  {
    years: "2025",
    title: "A Bold New Chapter",
    description:
      "Officially launched ORIGINS STUDIOS as a creative powerhouse. Dedicated to turning bold visions into extraordinary realities",
    image: "/pic2025.jpg",
    highlight: true,
  },
];

interface TimelineItemProps {
  item: TimelineItem;
  index: number;
  isActive: boolean;
  textColor: string;
}

const TimelineItem = ({ item, index, isActive, textColor }: TimelineItemProps) => {
  const itemRef = useRef<HTMLDivElement>(null);
  const isHighlighted = item.highlight;
  const alignmentClass = index % 2 === 0 ? "md:flex-row" : "md:flex-row-reverse";
  const cardRing = isHighlighted ? "ring-amber-200/80" : "ring-stone-200/70";
  const chipClass = isHighlighted
    ? "bg-amber-100/80 text-amber-700 border-amber-200/80"
    : "bg-stone-100/80 text-stone-600 border-stone-200/80";
  const nodeClass = isHighlighted ? "bg-amber-600 ring-amber-100/80" : "bg-stone-400 ring-stone-100";
  const glowClass = isHighlighted
    ? "from-amber-200/50 via-transparent to-rose-200/20"
    : "from-stone-200/40 via-transparent to-transparent";

  return (
    <motion.div
      ref={itemRef}
      data-timeline-item
      className="relative shrink-0 snap-center px-4 md:px-8 py-10 w-[min(92vw,1100px)]"
      animate={{ opacity: isActive ? 1 : 0.55, scale: isActive ? 1 : 0.97 }}
      transition={{ duration: 0.5, ease: "easeOut" }}
    >
      <span
        className={cn(
          "absolute left-1/2 top-6 h-3 w-3 -translate-x-1/2 rounded-full ring-8",
          nodeClass
        )}
      />
      <div className={cn("mt-10 flex flex-col gap-8 md:gap-12 md:items-center", alignmentClass)}>
        <div className="md:w-1/2">
          <div className={cn("rounded-3xl bg-white/80 p-6 md:p-8 ring-1 shadow-[0_16px_40px_rgba(24,24,24,0.12)]", cardRing)}>
            <div className="flex flex-wrap items-center gap-3">
              <span
                className={cn(
                  "inline-flex items-center gap-2 rounded-full border px-4 py-2 text-xs uppercase tracking-[0.35em]",
                  chipClass
                )}
              >
                <Image src="/originsStar.svg" alt="origin icon" className="h-4 w-4 opacity-70" width={16} height={16} />
                {item.years}
              </span>
              {/* {item.highlight ? (
                <span className="text-[10px] uppercase tracking-[0.3em] text-amber-600">Featured</span>
              ) : null} */}
            </div>
            <h3
              className="mt-6 text-3xl md:text-5xl font-serif font-semibold tracking-tight"
              style={{ color: textColor }}
            >
              {item.title}
            </h3>
            <p className="mt-4 text-base md:text-lg leading-relaxed opacity-80" style={{ color: textColor }}>
              {item.description}
            </p>
            <div className="mt-6">
              <ButtonSection
                textColor="text-stone-50"
                buttonHref="/portfolio"
                buttonBgColor={isHighlighted ? "bg-amber-700" : "bg-stone-900"}
                buttonHoverColor={isHighlighted ? "hover:bg-amber-800" : "hover:bg-amber-700"}
              />
            </div>
          </div>
        </div>

        <div className="md:w-1/2">
          <div className="relative overflow-hidden rounded-[32px] bg-white/80 ring-1 ring-stone-200/70 shadow-[0_24px_60px_rgba(24,24,24,0.16)]">
            <div className={cn("absolute inset-0 bg-gradient-to-br", glowClass)} />
            <motion.img
              src={item.image}
              alt={item.title}
              loading="lazy"
              className="h-80 w-full object-cover md:h-[520px]"
              whileHover={{ scale: 1.04 }}
              transition={{ duration: 0.3 }}
            />
            <div className="absolute bottom-4 right-4 rounded-full bg-white/80 px-4 py-2 text-[10px] uppercase tracking-[0.3em] text-stone-500 shadow-sm">
              {item.years}
            </div>
          </div>
        </div>
      </div>
    </motion.div>
  );
};

interface OurOriginsSectionProps {
  id?: string;
  textColor?: string;
}

const OurOriginsSection = forwardRef<HTMLElement, OurOriginsSectionProps>(({ id, textColor }, ref) => {
  const containerRef = useRef<HTMLDivElement>(null);
  const [activeIndex, setActiveIndex] = useState(0);

  useEffect(() => {
    const container = containerRef.current;
    if (!container) return;

    const updateActiveIndex = () => {
      const center = container.scrollLeft + container.clientWidth / 2;
      const items = Array.from(container.querySelectorAll("[data-timeline-item]")) as HTMLElement[];
      let closestIndex = 0;
      let minDistance = Number.POSITIVE_INFINITY;

      items.forEach((item, index) => {
        const itemCenter = item.offsetLeft + item.offsetWidth / 2;
        const distance = Math.abs(center - itemCenter);
        if (distance < minDistance) {
          minDistance = distance;
          closestIndex = index;
        }
      });

      setActiveIndex(closestIndex);
    };

    updateActiveIndex();
    container.addEventListener("scroll", updateActiveIndex, { passive: true });
    window.addEventListener("resize", updateActiveIndex);

    return () => {
      container.removeEventListener("scroll", updateActiveIndex);
      window.removeEventListener("resize", updateActiveIndex);
    };
  }, []);

  return (
    <section
      ref={ref}
      id={id}
      className="relative overflow-hidden transition-all duration-700 ease-in-out"
      style={{ color: textColor }}
    >
      <style jsx>{`
        .timeline-scroll::-webkit-scrollbar {
          display: none;
        }
        .timeline-scroll {
          scrollbar-width: none;
          -ms-overflow-style: none;
        }
      `}</style>

      <div className="pointer-events-none absolute inset-0">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_top,_rgba(255,245,230,0.85),_transparent_60%)]" />
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_20%_70%,_rgba(245,233,218,0.8),_transparent_55%)]" />
        <div className="absolute inset-0 opacity-60 bg-[linear-gradient(120deg,_rgba(255,255,255,0.6),_transparent_55%)]" />
      </div>

      <div className="relative z-10 pt-20 pb-8 text-center">
        <motion.div initial={{ opacity: 0, y: -30 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.8 }}>
          <p className="text-xs uppercase tracking-[0.4em] text-stone-500">Origins timeline</p>
          <h2 className="mt-4 text-3xl md:text-6xl font-serif font-semibold tracking-tight">
            <span style={{ color: textColor }}>Our</span>
            <span className="ml-3 text-amber-600">Origins</span>
          </h2>
          <p className="mx-auto mt-4 max-w-3xl text-base md:text-xl opacity-80" style={{ color: textColor }}>
            Scroll left or right to explore the journey that shaped who we are today
          </p>
        </motion.div>
      </div>

      <div className="relative z-10">
        <div className="absolute left-0 right-0 top-10 h-px bg-stone-200/70" />
        <div
          ref={containerRef}
          className="timeline-scroll flex gap-4 md:gap-10 overflow-x-auto snap-x snap-mandatory scroll-smooth px-2 md:px-8 pb-14"
        >
          {timelineData.map((item, index) => (
            <TimelineItem
              key={item.years}
              item={item}
              index={index}
              isActive={index === activeIndex}
              textColor={textColor || "#2D241B"}
            />
          ))}
        </div>
      </div>

      <div className="h-10" />
    </section>
  );
});

OurOriginsSection.displayName = "OurOriginsSection";
export default OurOriginsSection;
