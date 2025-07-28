
'use client';
import { useState, useEffect } from 'react';
import FloatingShape from '../../ui/floating-shape';
import Image from 'next/image';
import Link from 'next/link';
import { slugify } from '../../utils/slugify';
import { imageMap } from '@/data/portfolioData';

export default function PortfolioSection() {
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
  const imagesToShow = isMobile && !showAll ? currentImages.slice(0, 3) : currentImages;

  return (
    <section id="" className="min-h-screen bg-transparent flex flex-col justify-center items-center px-8">
      <div className="w-full">
        {/* Background shapes */}
        <div className="fixed inset-0 pointer-events-none overflow-hidden">
          <FloatingShape delay={0} duration={12} className="top-1/4 left-1/4 md:w-30 md:h-30 w-15 h-15 rounded-full bg-orange-400" />
          <FloatingShape delay={4} duration={18} className="top-3/4 right-1/4 md:w-32 md:h-32 w-12 h-12 rounded-full bg-gray-400" />
          <FloatingShape delay={8} duration={20} className="top-1/2 right-1/3 md:w-20 md:h-20 w-10 h-10 rounded-2xl bg-orange-400" />
          <div className="absolute inset-0 opacity-5">
            <div
              className="w-full h-full"
              style={{
                backgroundImage: `
                  linear-gradient(rgba(0,0,0,0.1) 1px, transparent 1px),
                  linear-gradient(90deg, rgba(0,0,0,0.1) 1px, transparent 1px)
                `,
                backgroundSize: '50px 50px',
              }}
            />
          </div>
        </div>

        <div className="text-center mb-4 px-8 py-48">
          <h2
            className="text-3xl md:text-7xl font-serif mb-6 text-black"
            style={{ fontFamily: 'DM Serif Text' }}
          >
            We turn bold dreams into impactful brands; 
            imaginative, authentic, and full 
            of awesomeness.
          </h2>
        </div>
        
        {/* Filter Controls */}
        <div className="border-t border-gray-300 pt-8 flex flex-col md:flex-row justify-between items-center text-sm space-y-4 md:space-y-0">
          <div className="flex flex-wrap items-center gap-2 pb-32">
            <span className="px-4 py-2 rounded-full text-sm font-medium text-black">FILTER:</span>
            {navItems.map((item) => {
              const active = activeCategory === item.label;
              return (
                <button
                  key={item.label}
                  onClick={() => handleCategoryChange(item.label)}
                  className={`px-3 py-1 rounded-full text-xs font-medium transition-colors ${
                    active
                      ? 'bg-black text-white'
                      : 'bg-gray-200 text-black hover:bg-gray-300'
                  }`}
                >
                  {item.label}
                </button>
              );
            })}
          </div>
        </div>

        {/* Grid Layout */}
        <div className="grid md:grid-cols-3 gap-4 w-full mx-auto mt-4">
          {imagesToShow.map((image, index: number) => {
            const uniqueKey = `${activeCategory}-${index}-${image.src}`;
            const isHovered = hoveredImage === uniqueKey;

            return (
              <Link
                key={uniqueKey}
                href={`/portfolio/${slugify(image.description)}`}
                className="relative bg-transparent rounded-xl p-2 group cursor-pointer"
                onMouseEnter={() => setHoveredImage(uniqueKey)}
                onMouseLeave={() => setHoveredImage(null)}
              >
                <div className="w-full flex justify-center">
                  <div className="w-full aspect-square relative flex items-center justify-center overflow-hidden rounded-xl">
                    <div className="relative w-full h-full">
                      {/* Background Stack Layers */}
                      <div className={`absolute inset-0 bg-gray-200 rounded-2xl transform transition-all duration-500 ease-out ${
                        isHovered ? 'translate-x-3 translate-y-3 scale-105' : 'translate-x-2 translate-y-2'
                      }`} />
                      <div className={`absolute inset-0 bg-gray-300 rounded-2xl transform transition-all duration-300 ease-out ${
                        isHovered ? 'translate-x-2 translate-y-2 scale-102' : 'translate-x-1 translate-y-1'
                      }`} />
                      {/* Main Image */}
                      <div className={`relative w-full h-full transform transition-all duration-700 ease-out ${
                        isHovered ? 'scale-110 -translate-x-1 -translate-y-1' : 'scale-100'
                      }`}>
                        <Image
                          src={image.images[0].src }
                          alt={image.description}
                          width={image.images[0].width}
                          height={image.images[0].height}
                          className="w-full h-full object-cover rounded-2xl shadow-lg"
                          priority={index < 3}
                        />
                        <div className={`absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent rounded-2xl transition-opacity duration-500 ${
                          isHovered ? 'opacity-100' : 'opacity-0'
                        }`}>
                          <div className="absolute bottom-0 left-0 right-0 p-6 text-white">
                            <div className={`transition-all duration-500 px-4 ${
                              isHovered ? 'translate-y-0 opacity-100' : 'translate-y-4 opacity-0'
                            }`}>
                              <h3 className="font-bold text-lg mb-2">{image.caption}</h3>
                              <p className="text-sm text-gray-200 mb-2">{image.description}</p>
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
          <div className="text-center mt-4">
            <button
              onClick={() => setShowAll(!showAll)}
              className="inline-flex items-center gap-1 text-orange-400 hover:text-orange-400 font-semibold"
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
    </section>
  );
}


