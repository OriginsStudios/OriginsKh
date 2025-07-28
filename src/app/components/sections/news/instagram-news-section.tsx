"use client";

import Image from "next/image";
import Link from "next/link";
import React, { useEffect, useState } from "react";
import { motion } from "framer-motion";
import LogoOriginsSection from "../logo-origins-section";
import FloatingShape from "../../ui/floating-shape";

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
    fetch("/api/instagram")
      .then((res) => {
        if (!res.ok) throw new Error("Network response was not ok");
        return res.json();
      })
      .then((data) => {
        const allPosts = Array.isArray(data.data) ? data.data : data;
        const sorted = allPosts.sort(
          (
            a: { timestamp: string | number | Date },
            b: { timestamp: string | number | Date }
          ) => new Date(b.timestamp).getTime() - new Date(a.timestamp).getTime()
        );
        setPosts(sorted.slice(0, 8));
      })
      .catch((error) => console.error("Error fetching Instagram data:", error));
  }, []);

  return (
    <section ref={ref} className="min-h-screen bg-transparent text-black pb-24">
      {/* Background shapes */}
      <div className="fixed inset-0 pointer-events-none overflow-hidden">
        <FloatingShape
          delay={0}
          duration={12}
          className="top-1/4 left-1/4 md:w-30 md:h-30 w-15 h-15 rounded-full bg-orange-400"
        />
        <FloatingShape
          delay={4}
          duration={18}
          className="top-3/4 right-1/4 md:w-32 md:h-32 w-12 h-12 rounded-full bg-gray-400"
        />
        <FloatingShape
          delay={8}
          duration={20}
          className="top-1/2 right-1/3 md:w-20 md:h-20 w-10 h-10 rounded-2xl bg-orange-400"
        />

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
      <div className="w-full flex justify-center items-center pb-12 px-12">
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
        <div className="w-full mx-auto px-10 py-24 pb-12 sm:pb-24">
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
            {posts.map((post) => (
              <motion.div
                key={post.id}
                whileHover={{ scale: 1.03 }}
                transition={{ type: "spring", stiffness: 300, damping: 20 }}
                className="bg-white border border-stone-200 rounded-xl shadow-sm hover:shadow-md transition-shadow duration-300 flex flex-col overflow-hidden"
              >
                <Link
                  href={post.permalink}
                  target="_blank"
                  aria-label="View on Instagram"
                >
                  <div className="relative w-full aspect-[4/5]">
                    <Image
                      src={
                        post.media_type === "VIDEO" && post.thumbnail_url
                          ? post.thumbnail_url
                          : post.media_url
                      }
                      alt={
                        post.caption || post.media_type === "VIDEO"
                          ? "Instagram video thumbnail"
                          : "Instagram image"
                      }
                      fill
                      className="object-cover"
                      unoptimized
                    />
                  </div>
                </Link>
                <div className="px-4 py-3 flex flex-col gap-2 flex-grow">
                  <div className="flex justify-between text-xs text-stone-500 font-medium">
                    <span className="bg-stone-100 px-2 py-1 rounded-full">
                      INSTAGRAM
                    </span>
                    <span>{new Date(post.timestamp).toLocaleDateString()}</span>
                  </div>
                  {post.caption && (
                    <p className="text-sm text-stone-700 line-clamp-3 font-sans">
                      {post.caption}
                    </p>
                  )}
                </div>
              </motion.div>
            ))}
          </div>
        </div>

        <div className="py-4 px-12 sm:py-4 lg:px-12">
          <div className="flex justify-start">
            <Link href={"https://instagram.com/originskh"} target="_blank">
              <button className="group flex items-center justify-center py-4 px-8 bg-orange-400 text-white rounded-full font-semibold hover:bg-black transition-all duration-300 text-sm md:text-base shadow-lg hover:shadow-xl transform hover:scale-105">
                <span className="mr-3">See more</span>
                <motion.div
                  className="transition-transform duration-300 group-hover:translate-x-1"
                  animate={{ x: [0, 4, 0] }}
                  transition={{ repeat: Number.POSITIVE_INFINITY, duration: 2 }}
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
});

InstagramNewsSection.displayName = "InstagramNewsSection";

export default InstagramNewsSection;
