

'use client';
import { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import Image from 'next/image';
import Link from 'next/link';
import { slugify, imageMap } from '@/data/portfolioData';

export default function OurWorkSection() {
  const [activeCategory, setActiveCategory] = useState<string>('ALL');
  const [showAll, setShowAll] = useState<boolean>(false);
  const [isMobile, setIsMobile] = useState<boolean>(false);
  const [hoveredImage, setHoveredImage] = useState<string | null>(null);

  useEffect(() => {
    const checkMobile = () => setIsMobile(window.innerWidth < 640);
    checkMobile();
    window.addEventListener('resize', checkMobile);
    return () => window.removeEventListener('resize', checkMobile);
  }, []);

  const navItems = [
    { label: 'ALL', href: '' },
    { label: 'CREATIVE', href: '' },
    { label: 'PRODUCTION', href: '' },
    { label: 'CONCEPT', href: '' },
  ];

  const handleCategoryChange = (category: string) => {
    setActiveCategory(category);
    setHoveredImage(null);
    setShowAll(false);
  };

  const currentImages = imageMap[activeCategory] || [];
  const maxImages = activeCategory === 'ALL' ? 6 : 3;
  const imagesToShow = isMobile && !showAll ? currentImages.slice(0, 3) : currentImages.slice(0, maxImages);

  return (
    <section id="work" className="relative overflow-hidden px-4 sm:px-8 py-20 md:py-28">
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute -top-24 left-10 h-56 w-56 rounded-full bg-teal-200/40 blur-3xl" />
        <div className="absolute top-10 right-16 h-40 w-40 rounded-full bg-orange-200/50 blur-3xl" />
        <div className="absolute bottom-0 right-10 h-64 w-64 rounded-full bg-orange-100/60 blur-3xl" />
      </div>

      <div className="relative w-full max-w-6xl mx-auto">
        <div className="rounded-[32px] border border-white/70 bg-white/70 backdrop-blur-xl px-6 py-10 md:px-10 md:py-12 shadow-[0_20px_60px_rgba(15,23,42,0.08)]">
          {/* Filter Controls */}
          <div>
            <p className="text-xs uppercase tracking-[0.4em] text-teal-700">Recent Work</p>
            <h2
              className="mt-3 text-3xl md:text-5xl font-normal text-teal-900"
              style={{ fontFamily: "DM Serif Text" }}
            >
              Lifestyle stories framed for feeling.
            </h2>
            <p className="mt-3 max-w-2xl text-sm md:text-base text-teal-900/70">
              A curated selection of motion, production, and concept work shaped by color, light, and tone.
            </p>

            <div className="mt-6 flex flex-wrap items-center gap-3">
              {navItems.map((item) => {
                const active = activeCategory === item.label;
                return (
                  <motion.button
                    key={item.label}
                    onClick={() => handleCategoryChange(item.label)}
                    whileHover={{ y: -2, scale: 1.03 }}
                    whileTap={{ scale: 0.98 }}
                    className={`relative px-4 py-2 rounded-full text-xs font-semibold uppercase tracking-[0.2em] transition-colors ${
                      active
                        ? 'text-white'
                        : 'text-teal-800 hover:text-teal-900'
                    }`}
                  >
                    {active && (
                      <motion.span
                        layoutId="work-filter-pill"
                        className="absolute inset-0 rounded-full bg-teal-800 shadow-md shadow-teal-900/20"
                        transition={{ type: 'spring', stiffness: 500, damping: 40 }}
                      />
                    )}
                    {!active && (
                      <span className="absolute inset-0 rounded-full border border-teal-100 bg-white" />
                    )}
                    <span className="relative z-10">{item.label}</span>
                  </motion.button>
                );
              })}
            </div>
          </div>

        {/* Grid Layout */}
          <div className="grid md:grid-cols-3 gap-6 w-full mx-auto mt-12">
          {imagesToShow.map((image, index: number) => {
            const uniqueKey = `${activeCategory}-${index}-${image.src}`;
            const isHovered = hoveredImage === uniqueKey;

            return (
              <Link
                key={uniqueKey}
                href={`/portfolio/${slugify(image.description)}?from=work`}
                className="relative bg-transparent rounded-3xl p-2 group cursor-pointer"
                onMouseEnter={() => setHoveredImage(uniqueKey)}
                onMouseLeave={() => setHoveredImage(null)}
              >
                <div className="w-full flex justify-center">
                  <div className="w-full aspect-square relative flex items-center justify-center overflow-hidden rounded-3xl">
                    <div className="relative w-full h-full">
                      {/* Background Stack Layers */}
                      <div className={`absolute inset-0 bg-[#f3e9dd] rounded-3xl transform transition-all duration-500 ease-out ${
                        isHovered ? 'translate-x-3 translate-y-3 scale-105' : 'translate-x-2 translate-y-2'
                      }`} />
                      <div className={`absolute inset-0 bg-[#efe4da] rounded-3xl transform transition-all duration-300 ease-out ${
                        isHovered ? 'translate-x-2 translate-y-2 scale-102' : 'translate-x-1 translate-y-1'
                      }`} />
                      {/* Main Image */}
                      <div className={`relative w-full h-full transform transition-all duration-700 ease-out ${
                        isHovered ? 'scale-110 -translate-x-1 -translate-y-1' : 'scale-100'
                      }`}>
                        <Image
                          src={image.images[0].src}
                          alt={image.description}
                          width={image.images[0].width}
                          height={image.images[0].height}
                          className="w-full h-full object-cover rounded-3xl shadow-lg"
                          priority={index < 3}
                        />
                        <div className={`absolute inset-0 bg-gradient-to-t from-teal-900/80 via-teal-900/20 to-transparent rounded-3xl transition-opacity duration-500 ${
                          isHovered ? 'opacity-100' : 'opacity-0'
                        }`}>
                          <div className="absolute bottom-0 left-0 right-0 p-6 text-white">
                            <div className={`transition-all duration-500 px-4 ${
                              isHovered ? 'translate-y-0 opacity-100' : 'translate-y-4 opacity-0'
                            }`}>
                              <h3 className="font-semibold text-lg mb-2">{image.caption}</h3>
                              <p className="text-sm text-white/80 mb-2">{image.description}</p>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </Link>
            );
          })}
        </div>

          {/* Show More (Mobile) */}
          {isMobile && currentImages.length > 3 && (
            <div className="text-center mt-6">
              <button
                onClick={() => setShowAll(!showAll)}
                className="inline-flex items-center gap-2 rounded-full border border-teal-200 bg-white px-4 py-2 text-xs font-semibold uppercase tracking-[0.2em] text-teal-800 hover:bg-orange-50 transition-colors"
                aria-expanded={showAll}
                aria-controls="image-list"
              >
                {showAll ? 'Show Less' : 'Show More'}
                <svg
                  className={`w-4 h-4 transition-transform duration-300 ${showAll ? 'rotate-180' : ''}`}
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  viewBox="0 0 24 24"
                >
                  <path strokeLinecap="round" strokeLinejoin="round" d="M19 9l-7 7-7-7" />
                </svg>
              </button>
            </div>
          )}
        </div>
      </div>
    </section>
  );
}
