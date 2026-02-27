"use client";

import { useState } from "react";
import Link from "next/link";
import { blogs } from "@/data/blogs";
import BlogCard from "../../ui/BlogCard";
import BigBlogCard from "../../ui/BigBlogCard";
import FloatingShape from "../../ui/floating-shape";
import LogoOriginsSection from "../logo-origins-section";

const categories = [
  "All",
  "Portfolio",
  "Concept",
  "News",
  "Creative",
  "Client Management",
  "Ambassador",
  "Features",
  "Achievements",
];

interface BlogListSectionProps {
  textColor?: string;
}

export default function BlogListSection({ textColor }: BlogListSectionProps) {
  const [activeCategory, setActiveCategory] = useState("All");

  // Filter blogs based on active category
  const filteredBlogs =
    activeCategory === "All"
      ? blogs
      : blogs.filter((blog) => blog.category === activeCategory);
  const sortedBlogs = [...filteredBlogs].sort(
    (a, b) => new Date(b.date).getTime() - new Date(a.date).getTime()
  );

  return (
    <div className="min-h-screen relative">
      {/* Lifestyle background accents */}
      <div className="fixed inset-0 pointer-events-none overflow-hidden">
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

      {/* Header Section */}
      <div className="relative">
        <div className="w-full flex justify-center items-center pb-12 px-12">
          <LogoOriginsSection />
        </div>
        <div className="max-w-7xl mx-auto px-14">
          <p
            className="text-xs sm:text-sm uppercase tracking-[0.5em] text-stone-600"
            style={{ fontFamily: "Inter, sans-serif" }}
          >
            <Link href="/" className="hover:text-stone-900 hover:underline transition-colors underline-offset-2">
              Home
            </Link>
            {" / "}Blog
          </p>
          <h1
            className="mt-6 text-3xl sm:text-5xl md:text-7xl font-semibold tracking-tight leading-tight text-stone-900"
            style={{ fontFamily: "DM Serif Text" }}
          >
            Stories, ideas, and updates from our studio.
          </h1>
          <p className="mt-6 text-base sm:text-lg text-stone-600 leading-relaxed max-w-3xl">
            Explore our latest work, creative concepts, and behind-the-scenes
            glimpses into how we craft culture-forward brands and experiences.
          </p>
        </div>
      </div>

      {/* Filter Tabs */}
      <div className="relative">
        <div className="max-w-7xl mx-auto px-14">
          <div className="flex overflow-x-auto scrollbar-hide py-4 gap-2">
            {categories.map((category) => (
              <button
                key={category}
                onClick={() => setActiveCategory(category)}
                className={`px-4 py-2 rounded-full text-sm font-medium whitespace-nowrap transition-all duration-200 ${
                  activeCategory === category
                    ? "bg-stone-900 text-white shadow-md"
                    : "bg-stone-100 text-stone-700 hover:bg-stone-200"
                }`}
              >
                {category}
              </button>
            ))}
          </div>
        </div>
      </div>

      {/* Content Section */}
      <div className="max-w-7xl mx-auto px-14 py-12 relative">
        {/* Featured Blog Post (Latest) */}
        {sortedBlogs.length > 0 && (
          <div className="mb-16">
            <BigBlogCard blog={sortedBlogs[0]} />
          </div>
        )}

        {/* Blog Grid */}
        {sortedBlogs.length > 1 && (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {sortedBlogs.slice(1).map((blog) => (
              <BlogCard key={blog.id} blog={blog} />
            ))}
          </div>
        )}

        {/* Empty State */}
        {sortedBlogs.length === 0 && (
          <div className="text-center py-16">
            <div className="text-gray-400 mb-4">
              <svg
                className="mx-auto h-16 w-16"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={1}
                  d="M19 20H5a2 2 0 01-2-2V6a2 2 0 012-2h10a2 2 0 012 2v1m2 13a2 2 0 01-2-2V7m2 13a2 2 0 002-2V9.5a2 2 0 00-2-2h-2m-4-3H9M7 16h6M7 8h6v4H7V8z"
                />
              </svg>
            </div>
            <h3 className="text-lg font-medium text-gray-900 mb-2">
              No posts found
            </h3>
            <p className="text-gray-500">
              No blog posts found for the selected category. Try selecting a
              different category.
            </p>
          </div>
        )}
      </div>
    </div>
  );
}

