"use client";

import { useState } from "react";
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

export default function BlogListSection() {
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
    <div className="min-h-screen">
      {/* Header Section */}
      <div>
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
        <div className="max-w-7xl mx-auto px-14">
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-serif font-bold text-teal-800 mb-4">
            Blog
          </h1>
        </div>
      </div>

      {/* Filter Tabs */}
      <div className="">
        <div className="max-w-7xl mx-auto px-14">
          <div className="flex overflow-x-auto scrollbar-hide py-4 gap-2">
            {categories.map((category) => (
              <button
                key={category}
                onClick={() => setActiveCategory(category)}
                className={`px-4 py-2 rounded-full text-sm font-medium whitespace-nowrap transition-all duration-200 ${
                  activeCategory === category
                    ? "bg-teal-700 text-white shadow-md"
                    : "bg-gray-100 text-gray-700 hover:bg-gray-200"
                }`}
              >
                {category}
              </button>
            ))}
          </div>
        </div>
      </div>

      {/* Content Section */}
      <div className="max-w-7xl mx-auto px-14 py-12">
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
