
'use client';

import Image from 'next/image';
import Link from 'next/link';
import React, { useEffect, useState } from 'react';
import { motion } from 'framer-motion';
import LogoOriginsSection from '../logo-origins-section';
import FloatingShape from '../../ui/floating-shape';

interface InstagramPost {
  id: string;
  caption?: string;
  media_url: string;
  media_type: string;
  thumbnail_url?: string;
  permalink: string;
  timestamp: string;
}

const InstagramNewsSection = React.forwardRef<HTMLElement>((props, ref) => {
  const [posts, setPosts] = useState<InstagramPost[]>([]);

  useEffect(() => {
    fetch('/api/instagram')
      .then((res) => {
        if (!res.ok) throw new Error('Network response was not ok');
        return res.json();
      })
      .then((data) => {
        const allPosts = Array.isArray(data.data) ? data.data : data;
        const sorted = allPosts.sort(
          (a: { timestamp: string | number | Date; }, b: { timestamp: string | number | Date; }) => new Date(b.timestamp).getTime() - new Date(a.timestamp).getTime()
        );
        setPosts(sorted.slice(0, 8));
      })
      .catch((error) => console.error('Error fetching Instagram data:', error));
  }, []);

  return (
    <section ref={ref} className="min-h-screen bg-transparent text-black pb-24">
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
      <div className="w-full flex justify-center items-center pb-12">
        <LogoOriginsSection />
      </div>

      <div className="relative z-10 w-full mx-auto">
        <div className="text-sm uppercase tracking-wider text-gray-500 mb-2 pb-8 px-12">
          <Link href="/" className="hover:underline">
            HOME
          </Link>
          <span className="mx-1 text-gray-500">/</span>
          <span className="text-gray-500">NEWS</span>
          <div className="pt-6">
            <div className="border-t border-gray-300 flex flex-col md:flex-row justify-between items-center text-sm space-y-4 md:space-y-0 mb-8"></div>
          </div>
        </div>

        <h1 className="text-4xl md:text-5xl font-serif font-medium leading-tight mb-12 px-14">
          Our Instagram Feed
        </h1>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 pt-8 px-4 sm:px-6 lg:px-8">
          {posts.map((post) => (
            <div
              key={post.id}
              className="bg-transparent rounded-2xl overflow-hidden duration-300 flex flex-col px-4"
            >
              <div className="mb-3">
                <div className="flex gap-2 mb-3 pt-4">
                  <span className="bg-gray-100 hover:bg-orange-400 hover:text-white text-gray-700 text-xs font-medium px-3 py-1 rounded-full">
                    INSTAGRAM
                  </span>
                  <span className="bg-gray-100 hover:bg-black-400 hover:text-white text-gray-700 text-xs font-medium px-3 py-1 rounded-full">
                    {new Date(post.timestamp).toLocaleDateString()}
                  </span>
                </div>
                <Link href={post.permalink} aria-label="View on Instagram" target="_blank">
                  <Image
                    src={
                      post.media_type === 'VIDEO' && post.thumbnail_url
                        ? post.thumbnail_url
                        : post.media_url
                    }
                    alt={
                      post.caption || post.media_type === 'VIDEO'
                        ? 'Instagram video thumbnail'
                        : 'Instagram image'
                    }
                    width={400}
                    height={400}
                    className="w-[400px] h-[400px] sm:w-[300px] sm:h-[300px] object-cover rounded-xl mx-auto cursor-pointer hover:opacity-90 transition-opacity"
                    unoptimized
                  />
                </Link>
              </div>
              <div className="pb-6 flex-grow">
                {post.caption && (
                  <p className="text-gray-600 text-sm leading-relaxed line-clamp-3">
                    {post.caption}
                  </p>
                )}
              </div>
            </div>
          ))}
        </div>

        <div className="pt-16 px-4 sm:px-6 lg:px-12">
          <div className="flex flex-col md:flex-row items-center justify-between gap-8 md:gap-12">
            {/* <div className="w-full text-left">
              <h3 className="text-2xl md:text-4xl text-transparent bg-clip-text bg-gradient-to-r from-black to-gray-600 mb-8 font-normal">
                See more how we connect through visual storytelling on Instagram.
              </h3>
            </div> */}
          </div>
          <Link href={'https://instagram.com/originskh'} target="_blank">
            <button className="flex items-center py-3 px-6 bg-orange-400 text-white rounded-full font-bold hover:bg-black transition-colors text-sm md:text-base mt-4">
              See more
              <motion.div
                className="ml-3"
                animate={{ x: [0, 6, 0] }}
                transition={{ repeat: Number.POSITIVE_INFINITY, duration: 1.5 }}
              >
                →
              </motion.div>
            </button>
          </Link>
        </div>
      </div>
    </section>
  );
});

InstagramNewsSection.displayName = 'InstagramNewsSection';

export default InstagramNewsSection;
