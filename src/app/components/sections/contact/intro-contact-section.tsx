'use client';

import React from 'react';
import Link from 'next/link';
import VideoSection from '../video-section';
import { motion } from 'framer-motion';
import FloatingShape from '../../ui/floating-shape';
import { FaTelegramPlane, FaFacebookF, FaInstagram } from 'react-icons/fa';

const IntroContactSection = React.forwardRef<HTMLElement>((props, ref) => {
  return (
    <section ref={ref} className="min-h-screen bg-white py-16 text-black">
      <div className="text-center mb-4 pt-32 pb-24">
        <h2
          className="text-6xl md:text-9xl font-serif mb-6 text-black"
          style={{ fontFamily: 'DM Serif Text' }}
        >
          Contact Us
        </h2>
      </div>

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
              backgroundSize: "50px 50px",
            }}
          />
        </div>
      </div>

      {/* Content Wrapper */}
      <div className="relative z-10 w-full mx-auto">
        {/* Breadcrumb */}
        <div className="text-sm uppercase tracking-wider text-gray-500 mb-2 px-12">
          <Link href="/" className="hover:underline">
            HOME
          </Link>
          <span className="mx-1 text-gray-500">/</span>
          <span className="text-gray-500">CONTACT</span>
          <div className="pt-6">
            <div className="border-t border-gray-300 flex flex-col md:flex-row justify-between items-center text-sm space-y-4 md:space-y-0 mb-8"></div>
          </div>
        </div>

        {/* Social Links */}
        <div className="flex justify-center space-x-4 mt-8 max-w-7xl mx-auto">
          <a
            href="https://t.me/originskh"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center px-6 py-3 bg-black text-white rounded-full font-bold hover:bg-orange-400 transition-colors text-sm md:text-base"
          >
            <span className="inline md:hidden"><FaTelegramPlane size={18} /></span>
            <span className="hidden md:inline">Telegram</span>
            <motion.div
              className="ml-3 hidden md:block"
              animate={{ x: [0, 6, 0] }}
              transition={{ repeat: Infinity, duration: 1.5 }}
            >
              →
            </motion.div>
          </a>

          <a
            href="https://facebook.com/originsstudioskh"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center px-6 py-3 bg-black text-white rounded-full font-bold hover:bg-orange-400 transition-colors text-sm md:text-base"
          >
            <span className="inline md:hidden"><FaFacebookF size={18} /></span>
            <span className="hidden md:inline">Facebook</span>
            <motion.div
              className="ml-3 hidden md:block"
              animate={{ x: [0, 6, 0] }}
              transition={{ repeat: Infinity, duration: 1.5 }}
            >
              →
            </motion.div>
          </a>

          <a
            href="https://instagram.com/originskh"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center px-6 py-3 bg-black text-white rounded-full font-bold hover:bg-orange-400 transition-colors text-sm md:text-base"
          >
            <span className="inline md:hidden"><FaInstagram size={18} /></span>
            <span className="hidden md:inline">Instagram</span>
            <motion.div
              className="ml-3 hidden md:block"
              animate={{ x: [0, 6, 0] }}
              transition={{ repeat: Infinity, duration: 1.5 }}
            >
              →
            </motion.div>
          </a>
        </div>

        {/* Video Section */}
        <VideoSection
          videoSrc="/origins-showreel-2025.mp4"
          thumbnailSrc="/origins-thumbnail.png"
          id="intro"
          showControls={true}
          autoPlay={false}
          muted={false}
          loop={false}
        />

        {/* Address */}
        <div className="flex flex-col justify-center px-12">
          <h3 className="text-2xl font-bold mb-4">
            Phnom Penh, Cambodia
          </h3>

          <div className="flex flex-col space-y-2 text-base text-gray-800 mb-4">
            <p>No. 109E0 Street 494, Sangkat Phsar Daeum Thkov, Khan Chamkar Mon, Phnom Penh 120112, Cambodia.</p>
            <p>(+855) 98 880 312</p>
          </div>

          <a
            href="https://maps.app.goo.gl/y4c7bSJRXQinG9Cd8"
            target="_blank"
            className="text-sm font-bold text-black hover:text-orange-400 transition-colors"
          >
            Get Directions →
          </a>
        </div>
      </div>
    </section>
  );
});

IntroContactSection.displayName = 'IntroContactSection';

export default IntroContactSection;
